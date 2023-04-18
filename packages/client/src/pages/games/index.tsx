import Table from '../../components/table'
import { useGetGames } from './hooks/useGetGames'
import { useCreateGameModal } from './create-game'
import { useEditModal } from './edit-game'
import { useDeleteModal } from './delete-game'


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


  return (
    <>

      <Table
        name="games"
        tableDataQuery={tableDataQuery}
        createNewItem={createGameModal.show}
        editRowItem={handleeditRowItem}
        deleteRow={handleDeleteRow}
      />

      {createGameModal.render()}
      {editGameModal.render()}
      {deleteGameModal.render()}
    </>

  )
}

export default Games
