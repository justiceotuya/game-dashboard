import { useState } from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster, toast } from 'react-hot-toast';
import AppRoutes from './routes';
import { TableProvider } from './context/table';
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './components/error-container';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
      retry: false,
      networkMode: 'always',
      onError(error: any) {
        toast.error(error.message)
      },
    },
  },
})
function App() {

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.href = '/'
      }}
    >
      <QueryClientProvider client={queryClient}>
        <TableProvider>
          <AppRoutes />
        </TableProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster position="top-right" />
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

export default App
