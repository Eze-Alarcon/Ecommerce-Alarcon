import { Link } from 'react-router-dom'
import  { CartWidget } from './CartWidget'

function Navbar() {
    return(
        <>
        <header className="flex flex-wrap">
            <nav className="flex w-screen justify-between bg-gray-50 text-gray-600">
                <div className="w-full px-12 py-6 flex space-x-12 items-center ">
                    <Link to="/" className="text-2xl font-bold">
                        BRAND NAME
                    </Link>
                    <ul className="md:flex mx-auto px-5 font-semibold space-x-12">
                        <li><Link to="/electronics" className="hover:text-gray-900">Electronics</Link></li>
                        <li><Link to="/jewelery" className="hover:text-gray-900">Jewelery</Link></li>
                        <li><Link to="/men's clothing" className="hover:text-gray-900">Men's clothing</Link></li>
                        <li><Link to="/women's clothing" className="hover:text-gray-900">Women's clothing</Link></li>
                    </ul>
                    
                </div>
                <div className="flex items-center text-gray-600 mr-24">
                    <Link to="/cart" className="flex items-center hover:text-gray-900" href=".#">
                        <CartWidget/>
                    </Link>
                </div>
            </nav>
        </header>
        </>
    )
}


export default Navbar 
