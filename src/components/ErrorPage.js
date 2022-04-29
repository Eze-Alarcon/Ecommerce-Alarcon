import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <main className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="text-9xl font-extrabold text-black tracking-widest">404</h1>
            <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button className="mt-5">
            <Link to="/" className="font-medium text-[#FF6A3D] hover:font-bold focus:outline-none focus:ring">
                <span className="block px-8 py-3 border border-current">
                    Go Home
                </span>
            </Link>
            </button>
        </main>
    )
}

export default ErrorPage