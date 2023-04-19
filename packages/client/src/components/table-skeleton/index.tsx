const TableSkeleton = () => {
  return (
    <section className=" px-4 mx-auto">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center mt-6 text-center border border-color-secondary-4 rounded-lg h-96  w-full">
          <div className="flex flex-col w-full max-w-sm px-4 mx-auto">
            <div role="status" className="max-w-sm animate-pulse">
              <div className="h-2.5 bg-color-secondary-4 rounded-full  w-48 mb-4"></div>
              <div className="h-2 bg-color-secondary-4 rounded-full  max-w-[360px] mb-2.5"></div>
              <div className="h-2 bg-color-secondary-4 rounded-full  mb-2.5"></div>
              <div className="h-2 bg-color-secondary-4 rounded-full  max-w-[330px] mb-2.5"></div>
              <div className="h-2 bg-color-secondary-4 rounded-full  max-w-[300px] mb-2.5"></div>
              <div className="h-2 bg-color-secondary-4 rounded-full  max-w-[360px]"></div>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TableSkeleton
