import {
  useQuery,
} from '@tanstack/react-query'
import { getCategories } from '../services'

export const useGetCategories = () => {
  return useQuery(['categories'], getCategories)
}
