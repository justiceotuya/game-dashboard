import React from 'react'
import Table from '../../components/table'



type Props = {}

const GamesPlay = (props: Props) => {

    const handleDeleteRow = (id:string) => {
console.log(id)
  }
    return (
          <>
       <h1 className='text-2xl  text-color-accent-1 font-semibold'>Game Play</h1>
      <Table
          data={[]}
                name="game_plays"
                handleDeleteRow={handleDeleteRow}
      /></>
  )
}

export default GamesPlay
