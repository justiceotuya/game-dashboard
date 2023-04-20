import React, { useState } from 'react'
import GameForm from './game-form'
import { useNavigate } from 'react-router-dom'
import { EditGameProps, TGameProfile } from './types'
import { useUpdateGame } from './hooks/useUpdateGame'
import { useGetOneGame } from './hooks/useGetOneGame'
import { queryClient } from '../../App'
import Modal from '../../components/modal'


export const useEditModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [gameDetails, setGameDetails] = useState<Record<string, any> | null>(null)

  const close = () => {
    setIsOpen(false)
  }

  const show = (row: Record<string, any>) => {
    setGameDetails(row)
    setIsOpen(true)
  }

  const render = () => {
    return <EditGame isOpen={isOpen} closeModal={close} gameDetails={gameDetails} />
  }

  return { render, show }
}


const EditGame = (props: EditGameProps) => {

  const { isOpen, closeModal, gameDetails: gameDetailsFromParam } = props;
  const navigate = useNavigate()

  const { isLoading, mutate: updateGame } = useUpdateGame()
  const { isLoading: isGameDataLoading, data: gameData, status } = useGetOneGame(gameDetailsFromParam?.id)

  const gameProfile = gameData || gameDetailsFromParam
  const gameLoadError = !gameProfile && status === "error"

  const handleUpdateGame = (values: TGameProfile) => {
    updateGame(values, {
      onSuccess: () => {
        queryClient.invalidateQueries(['games'])
        closeModal()
      },
    })
  }


  if (gameLoadError) {
    closeModal()
    return null
  }
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <GameForm
        title='Edit Game'
        handleSubmitForm={handleUpdateGame}
        isLoading={isLoading}
        gameProfileFromServer={gameProfile}
      />
    </Modal>
  )
}

export default EditGame
