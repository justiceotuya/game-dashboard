import { getGames } from '../services'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export const useGetGames = () => {
  return useQuery(['games'], getGames)
}
