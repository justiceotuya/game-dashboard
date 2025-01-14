import React, { useState } from 'react'
import UserForm from './user-form'
import { useNavigate } from 'react-router-dom'
import { EditUserProps, TUserProfile } from './types'
import { useUpdateUser } from './hooks/useUpdateUser'
import { useGetOneUser } from './hooks/useGetOneUser'
import { queryClient } from '../../App'
import Modal from '../../components/modal'



export const useEditModal = () => {
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
    return <EditUser isOpen={isOpen} closeModal={close} userDetails={userDetails} />
  }

  return { render, show }
}


const EditUser = (props: EditUserProps) => {

  const { isOpen, closeModal, userDetails: userDetailsFromParam } = props;
  const navigate = useNavigate()

  const { isLoading, mutate: updateUser } = useUpdateUser()
  const { isLoading: isUserDataLoading, data: userData, status } = useGetOneUser(userDetailsFromParam?.id)

  const userProfile = userData || userDetailsFromParam
  const userLoadError = !userProfile && status === "error"

  const handleUpdateUser = (values: TUserProfile) => {
    updateUser(values, {
      onSuccess: () => {
        queryClient.invalidateQueries(['users'])
        closeModal()
      },
    })
  }


  if (userLoadError) {
    closeModal()
    return null
  }
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <UserForm
        title='Edit User'
        handleSubmitForm={handleUpdateUser}
        isLoading={isLoading}
        userProfileFromServer={userProfile}
      />
    </Modal>
  )
}

export default EditUser
