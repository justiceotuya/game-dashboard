import React, { ReactElement } from 'react'
import { render, RenderOptions, RenderResult, } from '@testing-library/react'
import { TableProvider } from '../context/table';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
type AllTheProvidersProps = {
    children?: ReactElement;
};

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // ✅ turns retries off
            retry: false,
        },
    },
})

const AllTheProviders: React.ComponentType<AllTheProvidersProps> = ({ children }) => {
    return (

        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <TableProvider>
                    {children}
                </TableProvider>
            </QueryClientProvider>
        </BrowserRouter>
    )
}


// const customRender = (
//     ui: ReactElement,
//     options?: Omit<RenderOptions, 'wrapper'>,
// ) => render(ui, {
//     wrapper: AllTheProviders,
//     ...options
// })

// export * from '@testing-library/react'
// export { customRender as render }


const customRender = (ui: ReactElement, options?: RenderOptions): RenderResult =>
    render(ui, { wrapper: AllTheProviders, ...options });

const renderWithRouter = (ui: ReactElement, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route)

    return {
        user: userEvent.setup(),
        ...render(ui, { wrapper: AllTheProviders }),
    }
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render, renderWithRouter };
