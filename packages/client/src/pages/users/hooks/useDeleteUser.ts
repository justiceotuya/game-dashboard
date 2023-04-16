import { deleteUser } from '../services'
import {
  useMutation,
} from '@tanstack/react-query'
import { queryClient } from '../../../App'

export const useDeleteUser = () => {
    return useMutation(
        (id: string) => deleteUser(id),
        {
        onSuccess: () => {
            queryClient.invalidateQueries(['users'])
        },
        }
    )
}
