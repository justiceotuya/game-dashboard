import { useState } from 'react'
import GameForm from './game-form'
import { CreateGameProps, TGameProfile } from './types'
import { useCreateGame } from './hooks/useCreateGame'
import { useNavigate } from 'react-router-dom'
import Modal from '../../components/modal'


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


const CreateGame = (props: CreateGameProps) => {

  const { isOpen, closeModal } = props;
  const { isLoading, mutate: createGame } = useCreateGame()

  const handleCreateGame = (values: TGameProfile) => {
    createGame(values, {
      onSuccess: () => {
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
