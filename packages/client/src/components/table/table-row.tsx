import React from 'react'
import { formatPhoneNumber } from '../../utils'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

type Props = {
    data: Record<string, any>[]
    rowData: Record<string, any>
    deleteRow: (row: Record<string, any>) => void
    editRowItem: (row: Record<string, any>) => void
}

const TableRow = (props: Props) => {
    const { data, rowData, deleteRow, editRowItem } = props

    const keys = data?.length ? Object?.keys(data[0]) : null;

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
        <tr key={rowData.id} className='border border-color-secondary-4'>
            {keys && keys.map(key => (
                <td key={key} className="px-5 py-4 text-sm font-medium whitespace-nowrap  text-color-secondary-2 ">
                    <p
                        className="text-sm font-normal text-color-secondary-2 "
                    >
                        {handleFormatCell(key, rowData)}
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
                        className="text-color-secondary-2 transition-colors duration-200 hover:text-color-yellow-1 focus:outline-none"
                        onClick={() => handleEdit(rowData)}
                    >
                        <PencilSquareIcon className="block w-6 h-6" />
                    </button>


                    <button
                        title='delete'
                        type="button"
                        // key={`delete-${row.id}`}
                        className="text-color-secondary-2 transition-colors duration-200 hover:text-color-error focus:outline-none"
                        onClick={() => handleDeleteRow(rowData)}
                    >
                        <TrashIcon className="block w-6 h-6" />
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default TableRow
