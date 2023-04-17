import React from 'react'
import Layout from '../../components/layout'
import { toSentenceCase } from '../../utils'
import Table from '../../components/table'
import { useGetUsers } from './hooks/useGetUsers'
import TableSkeleton from '../../components/table-skeleton'
import ErrorContainer from '../../components/error-container'
import { useDeleteUser } from './hooks/useDeleteUser'
import Modal from '../../components/modal'
import { useCreateUserModal } from './create-user'

type Props = {}



const Users = (props: Props) => {
  const { data, isLoading, error, refetch } = useGetUsers()
  const deleteQuery = useDeleteUser()

  const createUserModal = useCreateUserModal()
  // const { mutate:deleteUser, isLoading:isRowDeleting} = useDeleteUser()

  // const handleDeleteData = (id: string) => {
  //   deleteUser(id)
  // }

  return (
    <>
      {isLoading && <TableSkeleton />}
      {!isLoading && error && <ErrorContainer refetch={refetch} />}
      {data && (
        <Table
          data={data}
          name="users"
          deleteQuery={deleteQuery}
          // handleDeleteRow={handleDeleteData}
          // isRowDeleting={isRowDeleting}
          createNewItem= {createUserModal.show}
        />
      )}
      {createUserModal.render()}
    </>

  )
}

export default Users
