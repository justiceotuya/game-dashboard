import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Button from '../button'
import { ReactComponent as FunnelIcon } from '../../assets/funnel.svg'
import { ChevronUpIcon } from '@heroicons/react/24/outline'
import { DatePickerWithStartAndEndDate } from '../datepicker'
import { StartEndDate } from '../datepicker/types'
import DateFilter, { DateProps } from './date-filter'
import Checkbox from '../checkbox'
import CategoryFilter from './category-filter'


export type TFilterValues = { title: string, values: DateProps | string[] }[]

type TableFilterProps = {
    handleFilterTableData: () => void
}

const TableFilter = ({ handleFilterTableData }: TableFilterProps) => {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    const toggleFilter = () => setIsOpen(open => !open)

    const node = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: any) => {
        if (node.current && node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        setIsOpen(false)
    };



    const handleClickDone = () => {
        handleFilterTableData()
        setIsOpen(false)
    }

    return (
        <div className='relative' ref={node}>
            <Button
                text='Filters'
                icon={<FunnelIcon />}
                variant='outline'
                onClick={toggleFilter}
            />

            <div className={`shadow-shadow-sm bg-color-white rounded-lg w-[calc(100vw-30px)] md:w-[300px] max-w-[300px] left-0 md:left-[unset] absolute z-20 md:right-0 ${isOpen ? 'block translate-y-2.5' : 'hidden'}`}>
                <div className='flex justify-between w-full px-4 py-3 border-b border-b-color-secondary-4'>
                    <button className="font-medium text-sm leading-5 text-color-secondary-1" type="button">Clear</button>
                    <h4 className='font-medium leading-6 text-color-accent-1'>Filters</h4>
                    <button className="font-medium text-sm leading-5 text-color-primary-1" type="button" onClick={handleClickDone}>Done</button>
                </div>

                <div className='flex flex-col w-full  max-h-[400px] overflow-auto'>

                    <CategoryFilter />
                    <DateFilter />
                </div>
            </div>
        </div>
    )
}

export default TableFilter
