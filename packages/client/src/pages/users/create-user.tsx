import React, { useState } from 'react'
import Input from '../../components/input'
import UserForm from './user-form'
import { CreateUserProps, TUserProfile } from './types'
import { useCreateUser } from './hooks/useCreateUser'
import { useNavigate } from 'react-router-dom'
import Modal from '../../components/modal'

export const useCreateUserModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const close = () => {
    setIsOpen(false)
  }

  const show = () => {
    setIsOpen(true)
  }
  const render = () => {
    return <CreateUser isOpen={isOpen} closeModal={close} />
  }

  return { render, show }
}

const CreateUser = (props: CreateUserProps) => {

  const { isOpen, closeModal } = props;
  const { isLoading, mutate: createUser } = useCreateUser()
  const navigate = useNavigate()

  const handleCreateUser = (values: TUserProfile) => {
    createUser(values, {
      onSuccess: () => {
        // navigate("/users")
        closeModal()
      }
    })
  }

  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>

        <UserForm
          title="Add new user"
          handleSubmitForm={handleCreateUser}
          isLoading={isLoading}
        />
      </Modal>
    </>
  )
}



export default CreateUser
