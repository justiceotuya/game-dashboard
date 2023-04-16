import { ArrowPathIcon } from '@heroicons/react/24/outline'
import Button from '../button'

interface ErrorProps {
  refetch: () => void
}
const ErrorContainer = ({refetch}:ErrorProps ) => {
  return (
    <div className="flex items-center w-full mt-6 text-center border border-gray-200 rounded-lg h-96">
      <div className="flex flex-col w-full max-w-sm px-4 mx-auto">
        <p className="mb-5 text-base font-medium text-gray-500">
          Something went wrong, try reloading
        </p>
        <Button
          icon={
            <ArrowPathIcon
              className="w-5 h-5 mr-2 text-gray-disabled opacity-2 "
              aria-hidden="true"
            />
          }
          text="Try again"
          variant="primary"
          isFullWidth={false}
          type="button"
          onClick={refetch}
          // onClick={() => console.log("clicked")}
          // disabled={isShareLinkOpen}
        />
      </div>
    </div>
  )
}

// export function ErrorFallback({ error, resetErrorBoundary }) {
//   return (
//     <div className="items-center p-3 mx-auto max-w-7xl lg:p-9 md:p-6">
//       <div className="flex items-center w-full mt-6 text-center border border-gray-200 rounded-lg h-96">
//         <div className="flex flex-col w-full max-w-sm px-4 mx-auto">
//           <p className="mb-5 text-xl font-medium text-gray-500">Something went wrong:</p>
//           <pre className="mb-5 text-base text-red-500 whitespace-pre-line">{error.message}</pre>

//           <Button
//             icon={
//               <ArrowPathIcon
//                 className="w-5 h-5 mr-2 text-gray-disabled opacity-2 "
//                 aria-hidden="true"
//               />
//             }
//             text="Try again"
//             variant="primary"
//             isFullWidth={false}
//             type="button"
//             onClick={resetErrorBoundary}
//             // disabled={isShareLinkOpen}
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

export default ErrorContainer
