import Button from '../button'
import { PlusIcon } from '@heroicons/react/24/outline'

type Props = {
  createNewItem: () => void
  name: string
}

const EmptyTable = (props: Props) => {

  const { createNewItem, name } = props
  return (
    <section className=" px-4 mx-auto">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center mt-6 text-center border border-color-secondary-4 rounded-lg h-96  w-full">
          <div className="flex flex-col w-full max-w-sm px-4 mx-auto">
            <div className="p-3 mx-auto text-blue-500 bg-blue-100 rounded-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <h1 className="mt-3 text-lg text-color-secondary-1 ">No Data found</h1>

            <div className="flex items-center mt-4 sm:mx-auto gap-x-3">

              <Button
                text={`Add new ${name}`}
                icon={<PlusIcon />}
                onClick={createNewItem}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmptyTable
