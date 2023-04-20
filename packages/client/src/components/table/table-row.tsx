import { useCallback } from 'react'
import { formatPhoneNumber } from '../../utils'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { TableRowProps } from './types'


const categoryItems = ["poker",
    "blackjack",
    "roulette",
    "slots",
    "craps"]

const TableRow = (props: TableRowProps) => {
    const { headers, rowData, deleteRow, editRowItem } = props


    const assignTags = useCallback((category: string) => {
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
    }, [])

    const handleFormatCell = useCallback((key: string, value: string) => {
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
    }, [])

    const handleEdit = (row: Record<string, any>) => {
        editRowItem(row)
    }

    const handleDeleteRow = (row: Record<string, any>) => {
        deleteRow(row)
    }

    return (
        <tr key={rowData.id} className='border border-color-secondary-4'>
            {headers.map(header => {
                if (Array.isArray(header.data_id)) {

                    const key = header.data_id.join("_")
                    const [firstValue, secondValue] = rowData[key].split("_")

                    return <td
                        key={key}
                        className={`px-5 py-4 text-sm font-medium whitespace-break-spaces flex gap-2   text-color-accent-1 align-baseline ${header?.isStacked && 'flex-col gap-[1px] '}`
                        }
                    >
                        <p>
                            {handleFormatCell(key, firstValue)}
                        </p>
                        <p className={header?.isStacked ? 'text-xs text-color-secondary-2 font-normal' : undefined}>
                            {handleFormatCell(key, secondValue)}
                        </p>
                    </td>
                } else {
                    return <td key={header.data_id} className="px-5 py-4 text-sm font-medium whitespace-break-spaces  text-color-secondary-2 align-baseline">
                        <p className="text-sm font-normal text-color-secondary-2 max-w-[200px] ">
                            {handleFormatCell(header.data_id, rowData[header.data_id])}
                        </p>
                    </td>
                }
            }
            )}


            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap align-baseline" >
                <div className="flex items-center gap-x-6">
                    <button
                        title='edit'
                        type="button"
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
