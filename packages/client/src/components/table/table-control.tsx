import { PlusIcon } from '@heroicons/react/24/outline'
import { ReactComponent as FunnelIcon } from '../../assets/funnel.svg'
import Button from '../button'
import TableFilter, { TFilterValues } from '../table-filter'
import { useCallback } from 'react'

type Props = {
    data: Record<string, any>[] | undefined
    name: string
    createNewItem: () => void
    handleFilterTableData: () => void
}

const TableControl = (props: Props) => {
    const { data, name, createNewItem, handleFilterTableData } = props



    return (
        <div className='sm:flex sm:items-center sm:justify-between'>
            <h1 className='text-2xl  text-color-accent-1 font-semibold capitalize'>
                {name}
            </h1>

            {data && (
                <div className='flex items-center gap-x-3'>
                    <TableFilter handleFilterTableData={handleFilterTableData} data={data} />

                    <Button
                        text={`Add new ${name}`}
                        icon={<PlusIcon />}
                        onClick={createNewItem}
                    />
                </div>
            )}
        </div>
    )
}

export default TableControl
