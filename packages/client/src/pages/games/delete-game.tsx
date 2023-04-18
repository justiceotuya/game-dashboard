import { useRef, useState } from 'react'
import { queryClient } from '../../App'
import Modal from '../../components/modal'
import Button from '../../components/button'
import { useDeleteGame } from './hooks/useDeleteGame'

type Props = {
  isOpen: boolean
  closeModal: () => void
  gameDetails: Record<string, any> | null
}

export const useDeleteModal = () => {
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
    return <DeleteGame isOpen={isOpen} closeModal={close} gameDetails={gameDetails} />
  }

  return { render, show }
}


const DeleteGame = (props: Props) => {

  const { isOpen, closeModal, gameDetails } = props;

  const { data: deleteData, mutate: deleteGame, isLoading, error } = useDeleteGame()

  const node = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: any) => {
    if (node.current && node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    closeModal();
  };



  const handleDeleteGame = () => {
    deleteGame(gameDetails!.id, {
      onSuccess: () => {
        queryClient.invalidateQueries(['games'])
        closeModal()
      }
    })
  }
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className='flex items-center justify-center'>
      <div className='flex items-center justify-center h-screen w-screen' onClick={handleClickOutside}>
        <div className='bg-color-white rounded-lg p-8 max-w-[512px] w-full self-center' ref={node}>
          <h2 className='text-lg leading-6 mb-2 font-semibold text-color-accent-1'>Confirm delete</h2>
          <p className='text-sm leading-5 mb-8 text-color-secondary-1'>Are you sure you want to delete  <strong>{gameDetails?.first_name} {gameDetails?.last_name}`s</strong> data? This action is permanent and you’ll lose access to this information.</p>

          <div className='flex gap-2 justify-end'>
            <Button
              variant="outline"
              text='No, cancel'
              onClick={closeModal}
              disabled={isLoading}
            />
            <Button
              variant="danger"
              text='Yes, delete'
              onClick={handleDeleteGame}
              isLoading={isLoading}
            />
          </div>
        </div>

      </div>
    </Modal>
  )
}
export default DeleteGame
