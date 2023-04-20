import { createContext, useContext, useRef } from 'react';
import { DateProps } from '../components/table-filter/types';


interface TableContextValue {
    setFilterConfig: (title: string, value: DateProps | string[]) => void
    clearFilterConfig: () => void
    filterConfig: Record<string, any>
}

export const TableContext = createContext<TableContextValue | null>(null);

export function TableProvider({ children }: { children: React.ReactNode }) {

    const filterConfig = useRef<Record<string, any>>({})

    const setFilterConfig = (title: string, value: DateProps | string[]) => {
        filterConfig.current[title] = value
    }

    const clearFilterConfig = () => {
        filterConfig.current = {}
    }


    return <TableContext.Provider value={{
        setFilterConfig,
        filterConfig,
        clearFilterConfig
    }}>{children}</TableContext.Provider>;
}


export const useTable = () => {
    const context = useContext(TableContext);
    if (!context)
        throw new Error(
            'useTable must be a child of <TableContextProvider>',
        );

    return context;
};
