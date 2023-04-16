import React from 'react'
import UserForm from './user-form'
import { useLocation, useNavigate, useParams, useRoutes } from 'react-router-dom'
import { TUserProfile } from './types'
import { useUpdateUser } from './hooks/useUpdateUser'
import { useGetOneUser } from './hooks/useGetOneUser'

type Props = {}

 const EditUser = (props: Props) => {
const {id} = useParams()
   let {state} = useLocation();
   const navigate = useNavigate()
   console.log({
   id
})
   const { isLoading, mutate: updateUser } = useUpdateUser()
   const { isLoading:isUserDataLoading,data:userData } = useGetOneUser(id!)

const userProfile = userData || state

  const handleUpdateUser = (values: TUserProfile) => {
    updateUser(values, {
      onSuccess: () => {
        navigate("/users")
      }
    })
  }

  return (
    <>
      <h1 className='text-2xl'>Edit Users</h1>
      <UserForm
        handleSubmitForm={handleUpdateUser}
        isLoading={isLoading}
        userProfileFromServer={userProfile}
      />
    </>
  )
 }

export default EditUser
