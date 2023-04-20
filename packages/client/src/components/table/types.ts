import { UseQueryResult } from '@tanstack/react-query';

export interface EmptyTableProps  {
  createNewItem: () => void
  name: string
}

export interface TableProps  {
  name: string
  createNewItem: () => void;
  editRowItem: (row: Record<string, any>) => void
  deleteRow: (row: Record<string, any>) => void
  tableDataQuery: UseQueryResult<Record<string, any>[], unknown>
  headers: {
    [key: string]: any;
    label: string;
    data_id: string | string[];
    isStacked?: boolean //if the data should be stacked on the table
  }[]
}

export interface IMappedDataItem {
  [key: string]: string | number;
}


export interface TableControlProps  {
    data: Record<string, any>[] | undefined
    name: string
    createNewItem: () => void
    handleFilterTableData: () => void
}

export interface TableRowProps  {
    data: Record<string, any>[]
    rowData: Record<string, any>
    deleteRow: (row: Record<string, any>) => void
    editRowItem: (row: Record<string, any>) => void
    headers: {
        label: string;
        data_id: string | string[];
        isStacked?: boolean
    }[]
}
