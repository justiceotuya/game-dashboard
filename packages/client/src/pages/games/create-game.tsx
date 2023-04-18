import React, { useState } from 'react'
import Input from '../../components/input'
import GameForm from './game-form'
import { TGameProfile } from './types'
import { useCreateGame } from './hooks/useCreateGame'
import { useNavigate } from 'react-router-dom'
import Modal from '../../components/modal'
type Props = {
  isOpen: boolean
  closeModal: () => void
}

export const useCreateGameModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const close = () => {
    setIsOpen(false)
  }

  const show = () => {
    setIsOpen(true)
  }
  const render = () => {
    return <CreateGame isOpen={isOpen} closeModal={close} />
  }

  return { render, show }
}

const CreateGame = (props: Props) => {

  const { isOpen, closeModal } = props;
  const { isLoading, mutate: createGame } = useCreateGame()
  const navigate = useNavigate()

  const handleCreateGame = (values: TGameProfile) => {
    createGame(values, {
      onSuccess: () => {
        // navigate("/games")
        closeModal()
      }
    })
  }

  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>

        <GameForm
          title="Add new game"
          handleSubmitForm={handleCreateGame}
          isLoading={isLoading}
        />
      </Modal>
    </>
  )
}



export default CreateGame
