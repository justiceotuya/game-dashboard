import { getOneUser } from '../services'
import {
  useQuery
} from '@tanstack/react-query'

export const useGetOneUser = (id:string) => {
  return useQuery(['users', id], ()=>getOneUser(id), {
    enabled: !!id,
  })
}
