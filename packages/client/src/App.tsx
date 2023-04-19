import { useState } from 'react'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast';
import AppRoutes from './routes';
import { TableProvider } from './context/table';

export const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <TableProvider>
        <AppRoutes />
      </TableProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster position="top-right" />
    </QueryClientProvider>
  )
}

export default App
