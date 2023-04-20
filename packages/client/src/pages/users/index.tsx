import Table from '../../components/table'
import { useGetUsers } from './hooks/useGetUsers'
import { useCreateUserModal } from './create-user'
import { useEditModal } from './edit-user'
import { useDeleteModal } from './delete-user'
import { useMemo } from 'react'



const Users = () => {
  const tableDataQuery = useGetUsers()

  const createUserModal = useCreateUserModal()
  const editUserModal = useEditModal()
  const deleteUserModal = useDeleteModal()

  const handleeditRowItem = (row: Record<string, any>) => {
    editUserModal.show(row)
  }

  const handleDeleteRow = (row: Record<string, any>) => {
    deleteUserModal.show(row)
  }

  const headers = useMemo(() => [
    { label: "User ID", data_id: "id" },
    { label: "Name", data_id: ["first_name", "last_name"] },
    { label: "Email address", data_id: "email" },
    { label: "Phone number", data_id: "phone_number" },
    { label: "Addresst", data_id: "address" },
  ], [])


  return (
    <>
      <Table
        name="users"
        tableDataQuery={tableDataQuery}
        createNewItem={createUserModal.show}
        editRowItem={handleeditRowItem}
        deleteRow={handleDeleteRow}
        headers={headers}
      />

      {createUserModal.render()}
      {editUserModal.render()}
      {deleteUserModal.render()}
    </>

  )
}

export default Users
