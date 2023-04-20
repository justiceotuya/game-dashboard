import { getGames } from '../services'
import { useQuery} from '@tanstack/react-query'

export const useGetGames = () => {
  return useQuery(['games'], getGames)
}
