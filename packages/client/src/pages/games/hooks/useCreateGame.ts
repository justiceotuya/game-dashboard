import { createGame } from '../services'
import {
    useMutation,
} from '@tanstack/react-query'
import { TGameProfile } from '../types'
import { queryClient } from '../../../App'

export const useCreateGame = () => {
    return useMutation(
        (game: TGameProfile) => createGame(game),
        {
            onMutate: (variables) => {
                queryClient.cancelQueries(['games'])

                const previousGames = queryClient.getQueryData(['games'])

                queryClient.setQueryData(['games'], (old: any) => {
                    if (!old?.length) {
                        return [{...variables, id:  1, created_at: Date.now()}]
                    }
                    return [...old, {...variables, id: old.length + 1, created_at: Date.now()}]
                })
                return () => queryClient.setQueryData(['games'], previousGames)
            },
            onSuccess: () => {
                queryClient.invalidateQueries(['games'])
            },
        }
    )
}
