import React, { useCallback, useState } from 'react'
import { DatePickerWithStartAndEndDate } from '../datepicker'
import { ChevronUpIcon } from '@heroicons/react/24/outline'
import { runFunctionWhenSpaceOrEnterIsClicked } from '../../utils'
import FilterGroupHeader from './filter-group-header'
import Checkbox from '../checkbox'

type Props = {
    getDateFilterValue: (startDate: any, endDate: any) => void
}

const DateFilter = ({ getDateFilterValue }: Props) => {

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

    const toggleDateRange = () => setIsRange((range) => !range)
    const toggleCalendar = () => setIsCalendarOpen((open) => !open)
    const toggleDateFilter = () => setIsDateFilterOpen((open) => !open)


    const setCalenderDate = useCallback((startDate: any, endDate: any) => {
        setDate({ startDate, endDate })
        getDateFilterValue(startDate, endDate)
    }, [])

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
