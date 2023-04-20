export interface DateProps {
    startDate: Date | null
    endDate: Date | null
}

export interface FilterGroupHeaderProps  {
    toggleFilter: () => void
    isFilterExpanded: boolean
    filterLabel: string
}

export type TFilterValues = { title: string, values: DateProps | string[] }[]

export interface TableFilterProps  {
    handleFilterTableData: () => void
    data: Record<string, any>[]
}
