import React, { useCallback, useEffect, useState } from 'react'
import { DatePickerWithStartAndEndDate } from '../datepicker'
import { ChevronUpIcon } from '@heroicons/react/24/outline'
import { runFunctionWhenSpaceOrEnterIsClicked } from '../../utils'
import FilterGroupHeader from './filter-group-header'
import Checkbox from '../checkbox'
import { useTable } from '../../context/table'

export type DateProps = {
    startDate: Date | null
    endDate: Date | null
}

const DateFilter = ({ isFilterClear }: { isFilterClear: boolean }) => {

    const { setFilterConfig } = useTable()

    const [isRange, setIsRange] = useState(false)
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)
    const [isDateFilterOpen, setIsDateFilterOpen] = useState(false)

    const [date, setDate] = useState<{
        startDate: Date | null,
        endDate: Date | null
    }>({
        startDate: null,
        endDate: null
    })

    useEffect(() => {
        if (isFilterClear) {
            setDate({
                startDate: null,
                endDate: null
            })
        }
    }, [isFilterClear])

    const toggleDateRange = () => setIsRange((range) => {
        setDate({
            startDate: null, endDate: null
        })
        return !range
    })
    const toggleCalendar = () => setIsCalendarOpen((open) => !open)
    const toggleDateFilter = () => setIsDateFilterOpen((open) => !open)


    const setCalenderDate = useCallback((startDate: any, endDate: any) => {
        setDate({ startDate, endDate })
        if (startDate === null && endDate === null) {
            setFilterConfig("created_at", { startDate, endDate })
        } else {
            setFilterConfig("created_at", { startDate, endDate })
        }
    }, [date.startDate, date.endDate])

    return (
        <div className='flex flex-col justify-between w-full px-4 py-3  border-b border-b-color-secondary-4 '>
            <FilterGroupHeader
                filterLabel='Date created'
                isFilterExpanded={isDateFilterOpen}
                toggleFilter={toggleDateFilter}
            />
            <div
                className={`${isDateFilterOpen ? 'visible z-10' : 'hidden z-0'}`}
            >
                <DatePickerWithStartAndEndDate
                    calenderDate={date}
                    setCalenderDate={setCalenderDate}
                    isCalenderOpen={isCalendarOpen}
                    handleToggleCalender={toggleCalendar}
                    isRange={isRange}
                />
                <Checkbox
                    checked={isRange}
                    onChange={toggleDateRange}
                    name='date-range'
                    text='Use date range'
                />
            </div>
        </div>
    )
}

export default DateFilter
