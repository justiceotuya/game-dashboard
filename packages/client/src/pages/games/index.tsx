import React from 'react'
import Layout from '../../components/layout'
import Table from '../../components/table'

type Props = {}

const Games = (props: Props) => {
  return (
      <>
      <h1 className='text-2xl'>Games</h1>
      <Table
        data={[]}
        name="games"
      /></>
  )
}

export default Games
