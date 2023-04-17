import { Link, useNavigate } from 'react-router-dom'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { formatPhoneNumber, toSentenceCase } from '../../utils'
import Loader from '../Loader'
import { UseMutationResult } from '@tanstack/react-query'
import { useRef } from 'react'
import { ReactComponent as PlusIcon } from '../../assets/plus.svg'
import { ReactComponent as FunnelIcon } from '../../assets/funnel.svg'
import Button from '../button'
import { DropDown, DropDownItem } from '../dropdown'
type Props = {
  data: Record<string, any>[]
  name: string
  deleteQuery: UseMutationResult<any, unknown, string, unknown>
  createNewItem: () => void;
}

const Table = (props: Props) => {
  const { data, name, deleteQuery, createNewItem} = props
  const navigate = useNavigate()

  const { data: deleteData, mutate: deleteUser, isLoading: isRowDeleting, error } = deleteQuery

  const currentRow = useRef<null | string>(null)

  const keys = data.length ? Object?.keys(data[0]) : null;
  const headers = keys ? keys?.map(toSentenceCase) : []

  const sentenceCasedName = toSentenceCase(name)

  const handleFormatCell = (key: string, obj: Record<string, any>) => {
    const value = obj[key]
    if (key === "phone_number") {
      return formatPhoneNumber(value)
    }
    return value
  }

  const handleEdit = (obj: Record<string, any>) => {
    const { id, ...restItems } = obj
    navigate(`/users/${id}/edit`, {
      state: { ...restItems }
    })
  }

  const handleDeleteRow = (id: string) => {
    //set current row
    currentRow.current = id
    deleteUser(id, {
      onSuccess: () => {
        currentRow.current = null
      }
    })
  }

  return (
    <section className="container overflow-hidden mx-auto h-full">
      <div className="sm:flex sm:items-center sm:justify-between">
        <h1 className='text-2xl  text-color-accent-1 font-semibold capitalize'>{name}</h1>

        <div className="flex items-center gap-x-3">
          <Link
            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 "
            to={`/${name}/new`}
          >
            <PlusIcon />

            <span>Add {sentenceCasedName}</span>
          </Link>

          <div className='relative'>
            <Button
              text='Filters'
              icon={<FunnelIcon />}
              variant='outline'
            />
            <DropDown className='top-10'>
              <DropDownItem text='Edit' />
              <DropDownItem text='Delete' />
            </DropDown>
          </div>

          <Button
            text={`Add new ${name}`}
            icon={<PlusIcon />}
            onClick={createNewItem}
          />

        </div>
      </div>



      <div className="flex flex-col mt-6 h-full">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 h-full bg-color-white">
          <div className="inline-block min-w-full  align-middle md:px-6 lg:px-8">
            {data.length === 0 && (
              <div className="flex items-center mt-6 text-center border border-gray-200 rounded-lg h-96 ">
                <div className="flex flex-col w-full max-w-sm px-4 mx-auto">
                  <div className="p-3 mx-auto text-blue-500 bg-blue-100 rounded-full ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </div>
                  <h1 className="mt-3 text-lg text-color-secondary-1 ">No Data found</h1>

                  <div className="flex items-center mt-4 sm:mx-auto gap-x-3">

                    <Link
                      className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 "
                      to={`/${name}/new`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <span>Add {sentenceCasedName}</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            {data.length > 0 && (
              <>
                <div className="overflow-y-auto h-full">
                  <table className="min-w-full divide divide-gray-200 ">
                    <thead className="bg-color-secondary-4 sticky top-0">
                      <tr className='border border-color-secondary-4'>

                        {headers.map((header: any, index: any) =>
                        (
                          <th
                            key={header}
                            scope="col"
                            className="px-12 py-3.5 text-sm font-medium text-left rtl:text-right text-color-secondary-1"
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

                    <tbody className="bg-white divide divide-gray-200  overflow-y-auto">
                      {data.map((obj, i) => (
                        <tr key={i} className='border border-color-secondary-4'>
                          {keys && keys.map(key => (
                            <td key={key} className="px-12 py-4 text-sm font-medium whitespace-nowrap  text-color-secondary-2 ">
                              <p
                                className="text-sm font-normal text-color-secondary-2 "
                              >
                                {handleFormatCell(key, obj)}
                              </p>
                            </td>
                          ))}

                          <td
                            key="##"
                            className="px-4 py-4 text-sm font-medium whitespace-nowrap"
                          >
                            <div className="flex items-center gap-x-6">
                              <button
                                title='edit'
                                type="button"
                                // key={`edit-${row.id}`}
                                className="text-color-secondary-2 transition-colors duration-200 hover:text-yellow-500 focus:outline-none"
                                onClick={() => handleEdit(obj)}
                              >
                                <PencilSquareIcon className="block w-6 h-6" />
                              </button>
                              {isRowDeleting && obj.id === currentRow.current ? <Loader className="block w-6 h-6 text-color-secondary-2" /> :

                                <button
                                  title='delete'
                                  type="button"
                                  // key={`delete-${row.id}`}
                                  className="text-color-secondary-2 transition-colors duration-200 hover:text-red-500 focus:outline-none"
                                  onClick={() => handleDeleteRow(obj.id)}
                                >
                                  <TrashIcon className="block w-6 h-6" />
                                </button>}
                            </div>
                          </td>
                        </tr>
                      ))}

                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Table
