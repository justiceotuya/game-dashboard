export interface StartEndDate {
    startDate: Date | null;
    endDate: Date | null;
}
type TDate = Date | null;
export interface IDatePickerProps {
    label?: string;
    calenderDate: StartEndDate;
    setCalenderDate: (startDate:TDate, endDate:TDate) => void;

    minDate?: Date | null;

    isCalenderOpen: boolean;

    handleToggleCalender: () => void;

    labelColor?: string;
    placeholder?: string;
    isRange?: boolean;
}

export interface IDateInterface {
    isCalenderOpen: boolean;
    labelColor?: string;
}
