import React, { useRef, useState } from 'react'
import { queryClient } from '../../App'
import Modal from '../../components/modal'
import Button from '../../components/button'
import { useDeleteUser } from './hooks/useDeleteUser'
import { DeleteUserProps } from './types'

export const useDeleteModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [userDetails, setUserDetails] = useState<Record<string, any> | null>(null)

  const close = () => {
    setIsOpen(false)
  }

  const show = (row: Record<string, any>) => {
    setUserDetails(row)
    setIsOpen(true)
  }

  const render = () => {
    return <DeleteUser isOpen={isOpen} closeModal={close} userDetails={userDetails} />
  }

  return { render, show }
}


const DeleteUser = (props: DeleteUserProps) => {

  const { isOpen, closeModal, userDetails } = props;

  const { data: deleteData, mutate: deleteUser, isLoading, error } = useDeleteUser()

  const node = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: any) => {
    if (node.current && node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    closeModal();
  };



  const handleDeleteUser = () => {
    deleteUser(userDetails!.id, {
      onSuccess: () => {
        queryClient.invalidateQueries(['users'])
        closeModal()
      }
    })
  }
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className='flex items-center justify-center'>
      <div className='flex items-center justify-center h-screen w-screen' onClick={handleClickOutside}>
        <div className='bg-color-white rounded-lg p-8 max-w-[512px] w-full self-center' ref={node}>
          <h2 className='text-lg leading-6 mb-2 font-semibold text-color-accent-1'>Confirm delete</h2>
          <p className='text-sm leading-5 mb-8 text-color-secondary-1'>Are you sure you want to delete  <strong>{userDetails?.first_name} {userDetails?.last_name}`s</strong> data? This action is permanent and you’ll lose access to this information.</p>

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
              onClick={handleDeleteUser}
              isLoading={isLoading}
            />
          </div>
        </div>

      </div>
    </Modal>
  )
}
export default DeleteUser
