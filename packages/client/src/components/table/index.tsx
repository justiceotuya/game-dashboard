import { UseQueryResult } from '@tanstack/react-query'
import EmptyTable from './empty-table'
import TableSkeleton from '../table-skeleton'
import ErrorContainer from '../error-container'
import TableRow from './table-row'
import TableControl from './table-control'
import { useEffect, useMemo, useState } from 'react'
import { useTable } from '../../context/table'
import dayjs from 'dayjs'
import IsBetween from 'dayjs/plugin/isBetween'
import { IMappedDataItem, TableProps } from './types'
dayjs.extend(IsBetween)


const Table = (props: TableProps) => {
  const { name, createNewItem, editRowItem, deleteRow, tableDataQuery, headers } = props

  const { data, isLoading, error, refetch } = tableDataQuery

  const { filterConfig } = useTable()

  const [filteredData, setFilteredData] = useState(data)

  useEffect(() => {
    if (data) {
      setFilteredData(data)
    }
  }, [data])


  const handleFilterTableData = () => {
    let Fdata = filterData(data!, filterConfig.current)
    setFilteredData(Fdata)
  }

  const mappedData = useMemo(() => {
    return filteredData?.length && filteredData?.map(item => {
      const mappedItem: IMappedDataItem = {};
      // filter through the headers and join header for a table row thatwill display two data items
      headers.forEach(header => {
        if (Array.isArray(header.data_id)) {
          mappedItem[header.data_id.join("_")]
            = item[header.data_id[0]] + "_" + item[header.data_id[1]];

        } else {
          mappedItem[header.data_id] = item[header.data_id];
        }
      });
      return mappedItem;
    }) || []
  }, [filteredData])


  const filterData = (tableData: Record<string, any>[], filterConfig: Record<string, any>) => {

    const selectedCategories = filterConfig?.['category']
    const dateFilter = filterConfig?.['created_at'];


    // Get the start and end dates if they exist
    const startDate = dateFilter?.startDate && new Date(dateFilter.startDate).getTime();
    const endDate = dateFilter?.endDate && new Date(dateFilter.endDate).getTime();
    const isDateEmpty = !startDate && !endDate

    // Filter the data based on the selected categories and date range
    const filteredData = tableData.filter(item => {

      if (selectedCategories?.length > 0 && !selectedCategories?.includes(item.category)) {
        return false; // skip if the item's category is not in the selected categories
      }

      // /only go into this filter if date is set
      if (!isDateEmpty) {
        if (!endDate) {
          //skip if item is not created on the same day, if the select is day only
          return dayjs(item.created_at).isSame(startDate, 'day')
        }

        return dayjs(item.created_at).isBetween(startDate, endDate, 'day', '[]')
      }
      return true; // include the item in the filtered array
    });
    return filteredData;
  };


  return (
    <section className=" overflow-hidden mx-auto h-full">
      <TableControl
        data={data}
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
                  <div className="overflow-y-auto h-[75vh] md:h-[86vh]">
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
                        {mappedData?.length && mappedData?.map((rowData, i) => (
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
