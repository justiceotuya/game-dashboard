import { createContext, useCallback, useContext, useState } from 'react';
import { TFilterValues } from '../components/table-filter';
import { DateProps } from '../components/table-filter/date-filter';

interface TableContextValue {
    getFilterValues: (title: string, values: DateProps | string[]) => void
    filterValues: TFilterValues

}

export const TableContext = createContext<TableContextValue | null>(null);

export function TableProvider({ children }: { children: React.ReactNode }) {
    const [filterValues, setFilterValues] = useState<TFilterValues>([])

    const getFilterValues = useCallback((title: string, values: DateProps | string[]) => {
        //get index of item
        const itemIndex = filterValues.findIndex(item => item.title === title)
        if (itemIndex === -1) {
            setFilterValues([...filterValues, { title, values }])
        } else {
            let newFilterValues = [...filterValues]
            newFilterValues[itemIndex] = { title, values }
            setFilterValues(newFilterValues)
        }
    }, [filterValues])

    return <TableContext.Provider value={{
        getFilterValues,
        filterValues
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
