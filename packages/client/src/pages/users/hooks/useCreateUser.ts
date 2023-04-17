import { createUser } from '../services'
import {
    useMutation,
} from '@tanstack/react-query'
import { TUserProfile } from '../types'
import { queryClient } from '../../../App'

export const useCreateUser = () => {
    return useMutation(
        (user: TUserProfile) => createUser(user),
        {
            onMutate: (variables) => {
                queryClient.cancelQueries(['users'])

                const previousUsers = queryClient.getQueryData(['users'])

                queryClient.setQueryData(['users'], (old: any) => {
                    if (!old?.length) {
                        return [{...variables, id:  1, created_at: Date.now()}]
                    }
                    return [...old, {...variables, id: old.length + 1, created_at: Date.now()}]
                })
                return () => queryClient.setQueryData(['users'], previousUsers)
            },
            onSuccess: () => {
                queryClient.invalidateQueries(['users'])
            },
        }
    )
}
