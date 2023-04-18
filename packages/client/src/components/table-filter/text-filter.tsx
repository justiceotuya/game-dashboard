import React, { useCallback, useEffect, useState } from 'react'
import FilterGroupHeader from './filter-group-header'
import { ChevronUpIcon } from '@heroicons/react/24/outline'
import Checkbox from '../checkbox'

const data = {
    header: "Category",
    options: ["A category", "Another category", "Yet another category"]
}
type Props = {
    getTextFilterValues: (values: string[]) => void
}
const TextFilter = ({ getTextFilterValues }: Props) => {

    const [selectedItems, setSelectedItems] = useState<string[]>([])
    const [isTextFilterOpen, setIsTextFilterOpen] = useState(false)

    useEffect(() => {
        //everytime selected item changes, pass the value via a callback to the TableComponent
        getTextFilterValues(selectedItems)
    }, [selectedItems])

    const toggleTextFilter = useCallback(() => setIsTextFilterOpen((open) => !open), [isTextFilterOpen])

    const toggleSelected = useCallback((val: string) => {
        //get index of item from selectedItems
        let itemIndex = selectedItems.findIndex(item => item === val)
        //if item not found, add to selected index else remove
        if (itemIndex === -1) {
            setSelectedItems([...selectedItems, val])
        } else {
            let newSelectedItems = [...selectedItems]
            newSelectedItems.splice(itemIndex, 1)
            setSelectedItems(newSelectedItems)
        }
    }, [selectedItems])

    const isSelected = useCallback((item: string) => {
        return selectedItems.includes(item as string)
    }, [selectedItems])

    return (
        <div className='flex flex-col justify-between w-full px-4 py-3  border-b border-b-color-secondary-4 '>

            <FilterGroupHeader
                filterLabel={data.header}
                isFilterExpanded={isTextFilterOpen}
                toggleFilter={toggleTextFilter}
            />
            <div
                className={`${isTextFilterOpen ? 'visible z- flex flex-col gap-2' : 'hidden z-0 opacity-0'}`}
            >
                {
                    data.options.map((item, _id) => {
                        return <>
                            <TextFilterRowItem
                                key={item + _id}
                                text={item}
                                selected={isSelected(item)}
                                toggleSelected={toggleSelected}
                            />
                        </>
                    })

                }

            </div>
        </div>
    )
}

type RowProps = {
    text: string,
    selected: boolean,
    toggleSelected: (val: string) => void
}

const TextFilterRowItem = ({ text, selected, toggleSelected }: RowProps) => {
    const onChange = () => {
        toggleSelected(text)
    }

    return <Checkbox
        checked={selected}
        onChange={onChange}
        name={text}
        text={text}
    />
}

export default TextFilter
