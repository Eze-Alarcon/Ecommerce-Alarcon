// import  { CartWidget } from './CartWidget'

function Navbar() {
    return(
        <header className="flex justify-between items-center h-16 bg-blue-500 px-4 ">
            <h1 className="">nombre/logo</h1>
            <div className="container flex justify-evenly">
                <a href=".#" className="">electronics</a>
                <a href=".#" className="">jewelery</a>
                <a href=".#" className="">men's clothing</a>
                <a href=".#" className="">women's clothing</a>
            </div>
            {/* <CartWidget/> */}
        </header>
    )
}


export default Navbar 