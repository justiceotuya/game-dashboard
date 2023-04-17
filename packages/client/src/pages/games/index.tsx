import React from 'react'
import Layout from '../../components/layout'
import Table from '../../components/table'

type Props = {}

const Games = (props: Props) => {

  const handleDeleteRow = (id:string) => {
console.log(id)
  }
  return (
      <>
      <h1 className='text-2xl  text-color-accent-1 font-semibold'>Games</h1>
      <Table
        data={[]}
        name="games"
        handleDeleteRow={handleDeleteRow}
      /></>
  )
}

export default Games
