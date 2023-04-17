import { deleteUser } from '../services'
import {
  useMutation,
} from '@tanstack/react-query'
import { queryClient } from '../../../App'

export const useDeleteUser = () => {
    return useMutation(
        (id: string) => deleteUser(id),
        {
            onMutate(variables) {
                queryClient.cancelQueries(['users'])

                    const previousUsers = queryClient.getQueryData(['users'])

                    queryClient.setQueryData(['users'], (old: any) => {
                        return old?.filter((user: any) => user.id !== variables)
                    })
                    return () => queryClient.setQueryData(['users'], previousUsers)
            },
        onSuccess: () => {
            queryClient.invalidateQueries(['users'])
        },
        }
    )
}
