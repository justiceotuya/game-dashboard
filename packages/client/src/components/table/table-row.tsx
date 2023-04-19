import React from 'react'
import { formatPhoneNumber } from '../../utils'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

type Props = {
    data: Record<string, any>[]
    rowData: Record<string, any>
    deleteRow: (row: Record<string, any>) => void
    editRowItem: (row: Record<string, any>) => void
}

const categoryItems = ["poker",
    "blackjack",
    "roulette",
    "slots",
    "craps"]

const TableRow = (props: Props) => {
    const { data, rowData, deleteRow, editRowItem } = props

    const keys = data?.length ? Object?.keys(data[0]) : null;

    const assignTags = (category: string) => {
        switch (category) {
            case "poker":
                return "text-[#66460D] bg-[#FFEFD2]";
            case "blackjack":
                return "text-[#0F5156] bg-[#D3F5F7]";
            case "roulette":
                return "text-[#2952CC] bg-[#D6E0FF]";
            case "slots":
                return "text-[#101840] bg-[#D2D8E1]";
            case "craps":
                return "text-[#474D66] bg-[#F2F2F2]";
            default:
                return "";
        }
    }

    const handleFormatCell = (key: string, obj: Record<string, any>) => {
        const value = obj[key]
        if (key === "phone_number") {
            return formatPhoneNumber(value)
        }
        if (categoryItems.includes(value)) {
            return <span className={`${assignTags(value)} px-4 py-2 rounded-[4px]`}>{value}</span>
        }
        if (key.includes('created')) {
            return new Date(value).toLocaleString('en-NG', { day: "numeric", year: "numeric", month: "short", hour: 'numeric', minute: 'numeric', hour12: true })
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
