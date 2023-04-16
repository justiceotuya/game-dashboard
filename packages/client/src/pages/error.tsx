import { Link } from "react-router-dom";

export function ErrorPage() {



    return (
      <div className='h-screen w-screen flex items-center justify-center'>
      <div className='flex flex-col items-center gap-5 justify-center'>
        <h1 className='text-3xl'>Oops! 404</h1>
                <p>This route does not exist</p>
                <Link to="/" className='text-blue-500 hover:underline'>Home</Link>
      </div>
      </div>
    );
}
