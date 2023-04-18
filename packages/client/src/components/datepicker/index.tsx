import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as CalendarIcon } from '../../assets/calendar.svg';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';


import { IDatePickerProps } from './types';

export const DatePickerWithStartAndEndDate: React.FC<IDatePickerProps> = (props: IDatePickerProps) => {
    const {
        label,
        calenderDate,
        setCalenderDate,
        minDate,
        isCalenderOpen,
        handleToggleCalender,
        isRange
    } = props;

    const onCalenderInputChange = (date: Date | [Date | null, Date | null] | null) => {
        if (isRange && Array.isArray(date)) {
            const [start, end] = date;

            setCalenderDate(start, end);
            end && handleToggleCalender();
        } else {
            setCalenderDate(date as Date, null);
            handleToggleCalender();
        }
    };

    const handleClearField = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        //setter to get state value from child
        setCalenderDate(
            null,
            null,
        );
    };

    const handleDateFormatting = (chosenDate: Date | null) => {
        if (!chosenDate) {
            return;
        } else {
            const today: string[] = new Date(chosenDate).toDateString().split(' ');
            const [day, month, dateNum] = today;
            return `${day}, ${month} ${dateNum}`;
        }
    };

    const { startDate, endDate } = calenderDate;

    return (
        <div className='relative'>
            <button type="button" className="relative border border-color-secondary-3 rounded-lg  py-2.5 px-4 text-color-secondary-8 w-full  text-left pointer outline-0 bg-color-white text-sm focus:outline-2 flex justify-between items-center mb-2" id={label} name="button" onClick={handleToggleCalender}>
                <div className='flex justify-between items-center gap-1 text-sm text-color-secondary-6'>
                    {isRange ? <>
                        <p>{startDate ? <span className="text-color-accent-1">{handleDateFormatting(startDate)}</span> : "Start date"}</p>
                        <span>{'->'}</span>
                        <p>{endDate ? <span className="text-color-accent-1">{handleDateFormatting(endDate)}</span> : "End date"}</p>
                    </> :
                        <p>{startDate ? <span className="text-color-accent-1">{handleDateFormatting(startDate)}</span> : "Choose date"}</p>
                    }
                </div>
                {startDate ? <CloseIcon className='text-color-secondary-6' role='button' onClick={handleClearField} /> : <CalendarIcon />}
            </button>
            <div className={`${isCalenderOpen ? 'visible z-10' : 'hidden z-0'}`}>
                <DatePicker
                    selected={startDate}
                    onChange={onCalenderInputChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange={isRange}
                    inline
                    minDate={minDate}
                />
            </div>
        </div>
    );
};
