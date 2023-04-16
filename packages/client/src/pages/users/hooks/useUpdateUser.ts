import { updateUser } from '../services'
import {
  useMutation,
} from '@tanstack/react-query'
import { TUserProfile } from '../types'
import { queryClient } from '../../../App'

export const useUpdateUser = () => {
    return useMutation(
        (user: TUserProfile) => updateUser(user),
        {
        onSuccess: () => {
            queryClient.invalidateQueries(['users'])
        },
        }
    )
}
