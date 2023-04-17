import React from 'react'
import UserForm from './user-form'
import { useLocation, useNavigate, useParams, useRoutes } from 'react-router-dom'
import { TUserProfile } from './types'
import { useUpdateUser } from './hooks/useUpdateUser'
import { useGetOneUser } from './hooks/useGetOneUser'
import TableSkeleton from '../../components/table-skeleton'
import { queryClient } from '../../App'

type Props = {}

 const EditUser = (props: Props) => {
const {id} = useParams()
   let {state} = useLocation();
   const navigate = useNavigate()

   const { isLoading, mutate: updateUser } = useUpdateUser()
   const { isLoading:isUserDataLoading,data:userData, status } = useGetOneUser(id!)

   const userProfile = userData || state
   const isUserProfileLoading = !userProfile && isUserDataLoading
  const userLoadError = !userProfile && status === "error"

  const handleUpdateUser = (values: TUserProfile) => {
    updateUser(values)
  }

   if (isUserProfileLoading) {
     return <TableSkeleton/>
   }
   if (userLoadError) {
     navigate("/users")
     return null
   }
  return (
    <>
      <h1 className='text-2xl  text-color-accent-1 font-semibold'>Edit Users</h1>
      <UserForm
        handleSubmitForm={handleUpdateUser}
        isLoading={isLoading}
        userProfileFromServer={userProfile}
      />
    </>
  )
 }

export default EditUser
