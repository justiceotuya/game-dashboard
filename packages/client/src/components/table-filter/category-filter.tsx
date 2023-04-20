import { useCallback, useEffect, useMemo, useState } from 'react'
import FilterGroupHeader from './filter-group-header'
import Checkbox from '../checkbox'
import { useTable } from '../../context/table'
import { useGetCategories } from '../../hooks/useGetCategories'


const CategoryFilter = ({ isFilterClear }: { isFilterClear: boolean }) => {

    const { isLoading, data } = useGetCategories()

    const categories = useMemo(() => {
        return data?.map((item: { name: string }) => item.name)
    }, [data])

    const { setFilterConfig } = useTable()

    const [selectedItems, setSelectedItems] = useState<string[]>([])
    const [isCategoryFilterOpen, setIsCategoryFilterOpen] = useState(false)

    useEffect(() => {
        //everytime selected item changes, pass the value via a callback to the TableComponent
        setFilterConfig("category", selectedItems)
    }, [selectedItems])

    useEffect(() => {
        if (isFilterClear) {
            setSelectedItems([])
        }
    }, [isFilterClear])

    const toggleCategoryFilter = useCallback(() => setIsCategoryFilterOpen((open) => !open), [isCategoryFilterOpen])

    const toggleSelected = useCallback((val: string) => {
        //get index of item from selectedItems
        let itemIndex = selectedItems.findIndex(item => item === val)
        //if item not found, add to selected index else remove
        if (itemIndex === -1) {
            let newSelectedItem = [...selectedItems, val]
            setSelectedItems(newSelectedItem)

        } else {
            let newSelectedItems = [...selectedItems]
            newSelectedItems.splice(itemIndex, 1)[0]
            setSelectedItems(newSelectedItems)

        }
    }, [selectedItems])

    const isSelected = useCallback((item: string) => {
        return selectedItems.includes(item as string)
    }, [selectedItems])






    if (!categories) {
        return null
    }
    return (
        <div className='flex flex-col justify-between w-full px-4 py-3  border-b border-b-color-secondary-4 '>

            <FilterGroupHeader
                filterLabel="Category"
                isFilterExpanded={isCategoryFilterOpen}
                toggleFilter={toggleCategoryFilter}
            />
            <div
                className={`${isCategoryFilterOpen ? 'visible z- flex flex-col gap-2' : 'hidden z-0 opacity-0'}`}
            >
                {
                    categories.map((item: string, _id: number) => {
                        return (
                            <CategoryFilterRowItem
                                key={item + _id}
                                text={item}
                                selected={isSelected(item)}
                                toggleSelected={toggleSelected}
                            />
                        )
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

const CategoryFilterRowItem = ({ text, selected, toggleSelected }: RowProps) => {
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

export default CategoryFilter
