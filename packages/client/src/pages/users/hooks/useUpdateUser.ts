import { updateUser } from '../services'
import {
  useMutation,
} from '@tanstack/react-query'
import { TUserProfile } from '../types'
import { queryClient } from '../../../App'
import { useNavigate } from 'react-router-dom'

export const useUpdateUser = () => {
  const navigate = useNavigate()

  return useMutation(
    (user: TUserProfile) => updateUser(user),
    {
      onMutate: (variables) =>  {
        queryClient.cancelQueries(['users'])

        const previousUsers = queryClient.getQueryData(['users'])

        queryClient.setQueryData(['users'], (old: any) => {
          return old?.map((user: TUserProfile) => {
            if (user.id === variables.id) {
              return variables
            }
            return user
          })
        })
        return () => queryClient.setQueryData(['users'], previousUsers)
      },

    }
  )
}
