import { updateGame } from '../services'
import {
  useMutation,
} from '@tanstack/react-query'
import { TGameProfile } from '../types'
import { queryClient } from '../../../App'
import { useNavigate } from 'react-router-dom'

export const useUpdateGame = () => {
  const navigate = useNavigate()

  return useMutation(
    (game: TGameProfile) => updateGame(game),
    {
      onMutate: (variables) =>  {
        queryClient.cancelQueries(['games'])

        const previousGames = queryClient.getQueryData(['games'])

        queryClient.setQueryData(['games'], (old: any) => {
          return old?.map((game: TGameProfile) => {
            if (game.id === variables.id) {
              return variables
            }
            return game
          })
        })
        return () => queryClient.setQueryData(['games'], previousGames)
      },

    }
  )
}
