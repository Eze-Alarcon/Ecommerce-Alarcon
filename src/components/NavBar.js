import { useState } from 'react'
import { Link } from 'react-router-dom'
import  { NavBarWidget } from './NavBarWidget'

function Navbar() {
    const [open, setOpen] = useState(false)

    const hanldeModal = () => setOpen((prevState) => !prevState)

    return(
        <header className="w-full text-gray-700 bg-gray-100">
            <div x-data="{ open: true }" className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="flex flex-row items-center justify-between p-4">
                
                    <Link to="/" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg  focus:outline-none focus:shadow-outline">BRAND NAME</Link>
                
                    <button className="flex justify-between items-center gap-10 rounded-lg md:hidden focus:outline-none focus:shadow-outline" onClick={hanldeModal}>
                        <div className={(!open) ? "hidden" : "flex items-center"}>
                            <Link to="/cart" className="flex items-center hover:text-gray-900"><NavBarWidget/></Link>
                        </div>
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                            {/* open menu svg */}
                            <path x-show="!open" className={(!open) ? "hidden" : ""} fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            {/* close menu svg */}
                            <path x-show="open" className={(!open) ? "" : "hidden"} fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                
                </div>
                
                <nav className={(!open) 
                        ? "flex flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row"
                        : "md:flex flex-col flex-grow hidden pb-4 md:pb-0 md:justify-end md:flex-row"
                }>
                    <Link to="/electronics" className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Electronics</Link>
                    <Link to="/jewelery" className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Jewelery</Link>
                    <Link to="/men's clothing" className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Men's clothing</Link>
                    <Link to="/women's clothing" className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Women's clothing</Link>
                    <Link to="/about" className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">About us</Link>
                
                </nav>
                    <Link to="/cart" className="hidden md:flex items-center hover:text-gray-900">
                        <NavBarWidget/>
                    </Link>
            </div>
        </header>
    )
}


export default Navbar 
