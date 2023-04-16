import React from 'react'
import Layout from '../../components/layout'
import { toSentenceCase } from '../../utils'
import Table from '../../components/table'
import { useGetUsers } from './hooks/useGetUsers'
import TableSkeleton from '../../components/table-skeleton'
import ErrorContainer from '../../components/error-container'

type Props = {}



const Users = (props: Props) => {
  const {data, isLoading, error,refetch} = useGetUsers()
  return (
      <>
      <h1 className='text-2xl'>Users</h1>
      {isLoading && <TableSkeleton />}
      {!isLoading && error && <ErrorContainer refetch={refetch} />}
     { data && <Table
        data={data}
        name="users"
      />}
      </>

  )
}

export default Users
