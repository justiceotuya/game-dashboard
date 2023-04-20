import Table from '../../components/table'
import { useGetGames } from './hooks/useGetGames'
import { useCreateGameModal } from './create-game'
import { useEditModal } from './edit-game'
import { useDeleteModal } from './delete-game'
import { useMemo } from 'react'


const Games = () => {
  const tableDataQuery = useGetGames()

  const createGameModal = useCreateGameModal()
  const editGameModal = useEditModal()
  const deleteGameModal = useDeleteModal()

  const handleeditRowItem = (row: Record<string, any>) => {
    editGameModal.show(row)
  }

  const handleDeleteRow = (row: Record<string, any>) => {
    deleteGameModal.show(row)
  }

  const headers = useMemo(() => [
    { label: "Title", data_id: ["name", "description"], isStacked: true },
    { label: "Game ID", data_id: "id" },
    { label: "Category", data_id: "category" },
    { label: "Creation date", data_id: "created_at" },
  ], [])



  return (
    <>

      <Table
        name="games"
        tableDataQuery={tableDataQuery}
        createNewItem={createGameModal.show}
        editRowItem={handleeditRowItem}
        deleteRow={handleDeleteRow}
        headers={headers}
      />

      {createGameModal.render()}
      {editGameModal.render()}
      {deleteGameModal.render()}
    </>

  )
}

export default Games
