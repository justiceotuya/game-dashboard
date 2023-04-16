import React from 'react'
import Layout from '../../components/layout'
import { toSentenceCase } from '../../utils'
import Table from '../../components/table'
import { useGetUsers } from './hooks/useGetUsers'
import TableSkeleton from '../../components/table-skeleton'
import ErrorContainer from '../../components/error-container'
import { useDeleteUser } from './hooks/useDeleteUser'

type Props = {}



const Users = (props: Props) => {
  const { data, isLoading, error, refetch } = useGetUsers()
  const { mutate:deleteUser} = useDeleteUser()

  const handleDeleteData = (id: string) => {
    deleteUser(id)
  }

  return (
    <>
      <h1 className='text-2xl'>Users</h1>
      {isLoading && <TableSkeleton />}
      {!isLoading && error && <ErrorContainer refetch={refetch} />}
      {data && (
        <Table
          data={data}
          name="users"
          handleDeleteRow={handleDeleteData}
        />
      )}
    </>

  )
}

export default Users
