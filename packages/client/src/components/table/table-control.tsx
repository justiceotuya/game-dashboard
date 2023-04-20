import { PlusIcon } from '@heroicons/react/24/outline'
import Button from '../button'
import TableFilter from '../table-filter'
import { TableControlProps } from './types'


const TableControl = (props: TableControlProps) => {
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
