import { useCallback, useEffect, useRef, useState } from 'react'
import Button from '../button'
import { ReactComponent as FunnelIcon } from '../../assets/funnel.svg'
import DateFilter from './date-filter'
import CategoryFilter from './category-filter'
import { useTable } from '../../context/table'
import { TableFilterProps } from './types'


const TableFilter = ({ handleFilterTableData, data }: TableFilterProps) => {

    const { clearFilterConfig } = useTable()

    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [isFilterClear, setIsFilterClear] = useState(true)
    const filterNode = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener('click', handleClickOutsideFilterBox)
        return () => {
            document.removeEventListener('click', handleClickOutsideFilterBox)
        }
    }, [])

    const toggleFilter = () => setIsFilterOpen(open => !open)


    const handleClickOutsideFilterBox = (e: any) => {
        if (filterNode.current && filterNode.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        setIsFilterOpen(false)
    };



    const handleClickDone = () => {
        handleFilterTableData()
        setIsFilterOpen(false)
        setIsFilterClear(false)
    }

    const handleClearFilter = useCallback(() => {
        clearFilterConfig()
        setIsFilterOpen(false)
        handleFilterTableData()
        setIsFilterClear(true)
    }, [])

    const dataRow = data[0]
    const doesTableHaveCategory = !!dataRow?.['category']
    const doesTableHaveDate = !!dataRow?.['created_at']

    return (
        <div className='relative' ref={filterNode}>
            <Button
                text='Filters'
                icon={<FunnelIcon />}
                variant='outline'
                onClick={toggleFilter}
            />

            <div className={`shadow-shadow-sm bg-color-white rounded-lg w-[calc(100vw-30px)] md:w-[300px] max-w-[300px] left-0 md:left-[unset] absolute z-20 md:right-0 ${isFilterOpen ? 'block translate-y-2.5' : 'hidden'}`}>

                <div className='flex justify-between w-full px-4 py-3 border-b border-b-color-secondary-4'>
                    <button className="font-medium text-sm leading-5 text-color-secondary-1" type="button" onClick={handleClearFilter}>Clear</button>

                    <h4 className='font-medium leading-6 text-color-accent-1'>Filters</h4>
                    <button className="font-medium text-sm leading-5 text-color-primary-1" type="button" onClick={handleClickDone}>Done</button>
                </div>

                <div className='flex flex-col w-full  max-h-[400px] overflow-auto'>

                    {doesTableHaveCategory && <CategoryFilter isFilterClear={isFilterClear} />}

                    {doesTableHaveDate && <DateFilter isFilterClear={isFilterClear} />}
                </div>
            </div>
        </div>
    )
}

export default TableFilter
