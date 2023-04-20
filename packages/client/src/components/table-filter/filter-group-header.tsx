import { runFunctionWhenSpaceOrEnterIsClicked } from '../../utils'
import { ChevronUpIcon } from '@heroicons/react/24/outline'
import { FilterGroupHeaderProps } from './types'


const FilterGroupHeader = ({
    toggleFilter,
    isFilterExpanded,
    filterLabel
}: FilterGroupHeaderProps) => {
    return (
        <div
            onClick={toggleFilter}
            aria-describedby='toggle'
            tabIndex={0}
            role='button'
            onKeyDown={e => runFunctionWhenSpaceOrEnterIsClicked(e, toggleFilter)}
            className='flex justify-between w-full mb-2 cursor-pointer'
        >
            <h4 className='font-medium leading-6 text-color-accent-1 text-sm '>
                {filterLabel}
            </h4>
            <button
                className={`font-medium leading-5 text-color-secondary-6  w-6 transition-transform ${isFilterExpanded ? 'rotate-180' : 'rotate-0'
                    } `}
                title='toggle'
                type='button'
            >
                <ChevronUpIcon width={20} />
            </button>
        </div>
    )
}

export default FilterGroupHeader
