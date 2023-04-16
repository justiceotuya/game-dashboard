import React from 'react'
import Input from '../../components/input'
import UserForm from './user-form'
import { TUserProfile } from './types'
import { useCreateUser } from './hooks/useCreateUser'
import { useNavigate } from 'react-router-dom'
type Props = {}

const CreateUser = (props: Props) => {

  const { isLoading, mutate: createUser } = useCreateUser()
  const navigate = useNavigate()

  const handleCreateUser = (values: TUserProfile) => {
    createUser(values, {
      onSuccess: () => {
        navigate("/users")
      }
    })
  }

  return (
    <>
      <h1 className='text-2xl'>Create Users</h1>
      <UserForm
        handleSubmitForm={handleCreateUser}
        isLoading={isLoading}
      />
    </>
  )
}

export default CreateUser
