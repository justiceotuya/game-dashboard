import { toSentenceCase } from '../../utils'
import { UseQueryResult } from '@tanstack/react-query'
import EmptyTable from './empty-table'
import TableSkeleton from '../table-skeleton'
import ErrorContainer from '../error-container'
import TableRow from './table-row'
import TableControl from './table-control'
import { useCallback, useEffect, useMemo, useState } from 'react'

type Props = {
  name: string
  createNewItem: () => void;
  editRowItem: (row: Record<string, any>) => void
  deleteRow: (row: Record<string, any>) => void
  tableDataQuery: UseQueryResult<Record<string, any>[], unknown>
  headers: {
    [key: string]: any;
    label: string;
    data_id: string | string[];
    isStacked?: boolean //if the data should be stacked on the table
  }[]
}

interface IMappedDataItem {
  [key: string]: string | number;
}

const Table = (props: Props) => {
  const { name, createNewItem, editRowItem, deleteRow, tableDataQuery, headers } = props

  const { data, isLoading, error, refetch } = tableDataQuery
  const [filteredData, setFilteredData] = useState(data)

  useEffect(() => {
    if (data) {
      setFilteredData(data)
    }
  }, [data])


  const handleFilterTableData = () => {
    setFilteredData(data)
  }


  const mappedData = useMemo(() => {
    return filteredData?.map(item => {
      const mappedItem: IMappedDataItem = {};
      headers.forEach(header => {
        if (Array.isArray(header.data_id)) {
          mappedItem[header.data_id.join("_")]
            = item[header.data_id[0]] + "_" + item[header.data_id[1]];

        } else {
          mappedItem[header.data_id] = item[header.data_id];
        }
      });
      return mappedItem;
    })
  }, [filteredData])


  return (
    <section className=" overflow-hidden mx-auto h-full">
      <TableControl
        data={filteredData}
        name={name}
        createNewItem={createNewItem}
        handleFilterTableData={handleFilterTableData}
      />

      <div className="flex flex-col mt-6 h-full">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 h-full bg-color-white">
          <div className="inline-block min-w-full  align-middle md:px-6 lg:px-8">

            {isLoading && <TableSkeleton />}

            {!isLoading && error ? <ErrorContainer refetch={refetch} /> : null}


            {filteredData && <>
              {filteredData.length === 0 && (
                <EmptyTable
                  name={name}
                  createNewItem={createNewItem}
                />
              )}


              {filteredData.length > 0 && (
                <>
                  <div className="overflow-y-auto h-full">
                    <table className="min-w-full divide divide-color-secondary-4 ">
                      <thead className="bg-color-secondary-4 sticky top-0">
                        <tr className='border border-color-secondary-4'>

                          {
                            headers.map((header) => (
                              <th
                                key={header.label}
                                scope="col"
                                className="px-5 py-3.5 text-sm font-medium text-left rtl:text-right text-color-secondary-1"
                              >
                                {header.label}
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
                        {mappedData?.map((rowData, i) => (
                          <TableRow
                            key={rowData?.id}
                            headers={headers}
                            data={filteredData}
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
