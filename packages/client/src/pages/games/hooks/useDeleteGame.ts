import { deleteGame } from '../services'
import {
  useMutation,
} from '@tanstack/react-query'
import { queryClient } from '../../../App'

export const useDeleteGame = () => {
    return useMutation(
        (id: string) => deleteGame(id),
        {
            onMutate(variables) {
                queryClient.cancelQueries(['games'])

                    const previousGames = queryClient.getQueryData(['games'])

                    queryClient.setQueryData(['games'], (old: any) => {
                        return old?.filter((game: any) => game.id !== variables)
                    })
                    return () => queryClient.setQueryData(['games'], previousGames)
            },
        onSuccess: () => {
            queryClient.invalidateQueries(['games'])
        },
        }
    )
}
