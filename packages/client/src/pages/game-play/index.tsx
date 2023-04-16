import React from 'react'
import Table from '../../components/table'

type Props = {}

const GamesPlay = (props: Props) => {
    return (
          <>
       <h1 className='text-2xl'>Game Play</h1>
      <Table
          data={[]}
          name="game_plays"
      /></>
  )
}

export default GamesPlay
