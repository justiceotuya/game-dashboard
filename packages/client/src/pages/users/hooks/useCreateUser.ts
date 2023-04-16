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
        onSuccess: () => {
            queryClient.invalidateQueries(['users'])
        },
        }
    )
}
