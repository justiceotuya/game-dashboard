// import { DOTS, formatter, formatDate } from '../helpers/util'
import { EyeIcon, LinkIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { toSentenceCase } from '../../utils'
type Props = {
  data: any
  // headers:any
}

const Table = (props: Props) => {
  const {data} = props
  const headers = data.length ? Object.keys(data[0])?.map(toSentenceCase) : []

  return (
    <section className="container overflow-hidden mx-auto">
      <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center gap-x-3">
            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
              2 items
            </span>
          </div>

          <div className="flex items-center mt-4 gap-x-3">
            <button
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 "
              // onClick={handleNewForm}
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

              <span>Add / Create new</span>
            </button>
          </div>
      </div>



      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
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
                  <h1 className="mt-3 text-lg text-gray-800 ">No Data found</h1>

                  <div className="flex items-center mt-4 sm:mx-auto gap-x-3">

                    <button
                      className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 "
                      // onClick={handleNewForm}
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

                      <span> Add / Create new</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
            {data.length > 0 && (
              <>
                <div className="overflow-y-auto border border-gray-200 md:rounded-lg max-h-[80vh]">
                  <table className="min-w-full divide-y divide-gray-200 ">
                    <thead className="bg-gray-100 sticky top-0">
                      <tr>

                        {headers.map( (header:any, index:any) =>
                            (
                              <th
                                key={index}
                                scope="col"
                                className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                              >
                                {header}
                              </th>
                            )
                        )}

                        {
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                            >
                              Actions
                            </th>
                          }
                      </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200 h-96 overflow-y-auto">
                      {data.map((row:any, index:any) => (
                        <tr key={index}>
                          {
                            Object.values(row).map((item: any) => {
                               return   <td
                                key={index}
                                className="px-12 py-4 text-sm font-medium whitespace-nowrap"
                              >
                                <p
                                  className="text-sm font-normal text-gray-500 "
                                > {item}</p>
                              </td>
                            })

                            }


                            <td
                              key="##"
                              className="px-4 py-4 text-sm font-medium whitespace-nowrap"
                            >
                              <div className="flex items-center gap-x-6">
                              <button
                                title='edit'
                                    type="button"
                                    key={`edit-${row.id}`}
                                    className="text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none"
                                    // onClick={() => handleItemEditing(row.id)}
                                  >
                                    <PencilSquareIcon className="block w-6 h-6" />
                                  </button>
                              <button
                                title='delete'
                                    type="button"
                                    key={`delete-${row.id}`}
                                    className="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none"
                                    // onClick={() => handleItemDeletion(row.id)}
                                  >
                                    <TrashIcon className="block w-6 h-6" />
                                  </button>
                              {/* <button
                                title='create'
                                    type="button"
                                    key={`view-${row.id}`}
                                    className="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none"
                                    // onClick={() => handleReport(row.id)}
                                  >
                                    <EyeIcon className="block w-6 h-6" />
                                  </button> */}
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
