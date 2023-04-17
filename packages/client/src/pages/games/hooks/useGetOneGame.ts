import { getOneGame } from '../services'
import {
  useQuery
} from '@tanstack/react-query'

export const useGetOneGame = (id:string) => {
  return useQuery(['games', id], ()=>getOneGame(id), {
    enabled: !!id,
  })
}
