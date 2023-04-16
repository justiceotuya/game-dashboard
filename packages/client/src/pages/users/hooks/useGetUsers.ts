import { getUsers } from '../services'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export const useGetUsers = () => {
  return useQuery(['users'], getUsers)
}
