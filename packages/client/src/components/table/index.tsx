import { PencilSquareIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline'
import { formatPhoneNumber, toSentenceCase } from '../../utils'
import { UseQueryResult } from '@tanstack/react-query'
import { ReactComponent as FunnelIcon } from '../../assets/funnel.svg'
import Button from '../button'
import EmptyTable from './empty-table'
import TableSkeleton from '../table-skeleton'
import ErrorContainer from '../error-container'
import TableRow from './table-row'
type Props = {
  name: string
  createNewItem: () => void;
  editRowItem: (row: Record<string, any>) => void
  deleteRow: (row: Record<string, any>) => void
  tableDataQuery: UseQueryResult<Record<string, any>[], unknown>
}

const Table = (props: Props) => {
  const { name, createNewItem, editRowItem, deleteRow, tableDataQuery } = props

  const { data, isLoading, error, refetch } = tableDataQuery

  const keys = data?.length ? Object?.keys(data[0]) : null;
  const headers = keys ? keys?.map(toSentenceCase) : []


  const handleFormatCell = (key: string, obj: Record<string, any>) => {
    const value = obj[key]
    if (key === "phone_number") {
      return formatPhoneNumber(value)
    }
    return value
  }

  const handleEdit = (row: Record<string, any>) => {
    editRowItem(row)
  }

  const handleDeleteRow = (row: Record<string, any>) => {
    deleteRow(row)
  }

  return (
    <section className="container overflow-hidden mx-auto h-full">
      <div className="sm:flex sm:items-center sm:justify-between">
        <h1 className='text-2xl  text-color-accent-1 font-semibold capitalize'>{name}</h1>

        {data && <div className="flex items-center gap-x-3">

          <div className='relative'>
            <Button
              text='Filters'
              icon={<FunnelIcon />}
              variant='outline'
            />
          </div>

          <Button
            text={`Add new ${name}`}
            icon={<PlusIcon />}
            onClick={createNewItem}
          />

        </div>}
      </div>



      <div className="flex flex-col mt-6 h-full">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 h-full bg-color-white">
          <div className="inline-block min-w-full  align-middle md:px-6 lg:px-8">

            {isLoading && <TableSkeleton />}

            {!isLoading && error ? <ErrorContainer refetch={refetch} /> : null}


            {data && <>
              {data.length === 0 && (
                <EmptyTable
                  name={name}
                  createNewItem={createNewItem}
                />
              )}


              {data.length > 0 && (
                <>
                  <div className="overflow-y-auto h-full">
                    <table className="min-w-full divide divide-color-secondary-4 ">
                      <thead className="bg-color-secondary-4 sticky top-0">
                        <tr className='border border-color-secondary-4'>

                          {headers.map((header: any, index: any) =>
                          (
                            <th
                              key={header}
                              scope="col"
                              className="px-5 py-3.5 text-sm font-medium text-left rtl:text-right text-color-secondary-1"
                            >
                              {header}
                            </th>
                          )
                          )}

                          {
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-color-secondary-2 "
                            >
                              Actions
                            </th>
                          }
                        </tr>
                      </thead>

                      <tbody className="bg-white divide divide-color-secondary-4  overflow-y-auto">
                        {data.map((rowData, i) => (
                          <TableRow
                            data={data}
                            rowData={rowData}
                            deleteRow={deleteRow}
                            editRowItem={editRowItem}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Table
