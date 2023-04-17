import React, { useState } from 'react'
import Layout from '../../components/layout'
import { toSentenceCase } from '../../utils'
import Table from '../../components/table'
import { useGetUsers } from './hooks/useGetUsers'
import TableSkeleton from '../../components/table-skeleton'
import ErrorContainer from '../../components/error-container'
import { useDeleteUser } from './hooks/useDeleteUser'
import Modal from '../../components/modal'
import { useCreateUserModal } from './create-user'
import { useEditModal } from './edit-user'
import { useDeleteModal } from './delete-user'

type Props = {}



const Users = (props: Props) => {
  const { data, isLoading, error, refetch } = useGetUsers()
  const tableDataQuery = useGetUsers()

  const createUserModal = useCreateUserModal()
  const editUserModal = useEditModal()
  const deleteUserModal = useDeleteModal()

  // const { mutate:deleteUser, isLoading:isRowDeleting} = useDeleteUser()

  const handleeditRowItem = (row: Record<string, any>) => {
    editUserModal.show(row)
  }

  const handleDeleteRow = (row: Record<string, any>) => {
    deleteUserModal.show(row)
  }



  return (
    <>

      <Table
        name="users"
        tableDataQuery={tableDataQuery}
        createNewItem={createUserModal.show}
        editRowItem={handleeditRowItem}
        deleteRow={handleDeleteRow}
      />

      {createUserModal.render()}
      {editUserModal.render()}
      {deleteUserModal.render()}
    </>

  )
}

export default Users
