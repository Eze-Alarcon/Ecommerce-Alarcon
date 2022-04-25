import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"



const Cart = () => {
    const context = useContext(CartContext)

    let subtotal = context.cartList?.reduce((acc, item) => acc + Number(item.price), 0)
    let shipping = (8).toFixed(2)

    return (
        <div className="flex justify-evenly">

            
            <div className="flex flex-col justify-start items-start px-4 py-4 md:py-6 md:p-6 xl:p-8 w-8/12">
                <p className="self-center text-lg md:text-xl font-semibold mb-6 leading-6 xl:leading-5 text-gray-800">Order Summary</p>
                {
                    context.cartList?.map((item) => {

                    let productCategory

                    if (item.category === "electronics") productCategory = "Electronics"
                    if (item.category === "jewelery") productCategory = "Jewelery"
                    if (item.category === "men's clothing") productCategory = "Men's clothing"
                    if (item.category === "women's clothing") productCategory = "Women's clothing"

                    return (
                        <div key={`${item.id}-${item.size}-${item.color}`} className="mt-4 md:mb-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                            <div className="flex justify-center items-center w-5/12 mx-auto my-6 md:my-0  md:w-28">
                                <img className="w-9/12 md:block" src={item.image} alt="dress" />
                            </div>
                            <div className="border-b border-gray-300 md:flex-row flex-col flex justify-between items-start w-full pb-8 ">
                                <div className="w-full flex flex-col justify-start items-center space-y-8">
                                    <Link to={`/products/${item.id}`}><h3 className="text-xl md:text-base xl:text-xl font-semibold leading-6 text-gray-800">{item.title}</h3></Link>
                                    <div className="flex justify-center items-center flex-row gap-4">
                                        <p className="text-sm leading-none text-gray-800"><span className="font-bold pr-1">Category: </span> {productCategory}</p>
                                        <p className="text-sm leading-none text-gray-800"><span className="font-bold pr-1">Size: </span> {item.size}</p>
                                        <p className="text-sm leading-none text-gray-800"><span className="font-bold pr-1">Color: </span> {item.color}</p>
                                        
                                    </div>
                                </div>
                                <div className="flex self-center justify-evenly xl:justify-around space-x-8 items-start w-full">
                                    <p className="text-base xl:text-lg leading-6">$ {item.price} <span className="text-red-300 hidden xl:inline line-through pl-2"> $ {(item.price * 1.3).toFixed(2)}</span></p>
                                    <p className="text-base xl:text-lg leading-6 text-gray-800">{item.quantity}</p>
                                    <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">$ {Number(item.price) * Number(item.quantity)}</p>
                                </div>
                                <form onSubmit={(e) => context.removeItem(e)} data-id={item.id} data-color={item.color} data-size={item.size} data-identificator={item.identificator} className="self-center">
                                    <button type="submit" className="text-gray-700 hover:text-red-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    )})
                }
            </div>

            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-3/12 space-y-6 mt-20 ml-2 border">
                <h3 className="text-xl font-semibold mb-6 leading-5 text-gray-800">Summary</h3>
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                    <div className="flex justify-between w-full">
                        <p className="text-base leading-4 text-gray-800">SUBTOTAL</p>
                        <p className="text-base leading-4 text-gray-600">$ {(subtotal * 1.3).toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <p className="text-base leading-4 text-gray-800">DISCOUNT (30%)</p>
                        <p className="text-base leading-4 text-gray-600">- $ {(subtotal * 0.3).toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <p className="text-base leading-4 text-gray-800">{context.totalProducts} ITEMS</p>
                        <p className="text-base leading-4 text-gray-600">$ {(subtotal).toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <p className="text-base leading-4 text-gray-800">SHIPPING</p>
                        <p className="text-base leading-4 text-gray-600">$ {shipping}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center w-full">
                    <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                    <p className="text-base font-semibold leading-4 text-gray-600">$ {(subtotal + Number(shipping)).toFixed(2)}</p>
                </div>
            </div>


        </div>
    )
} 

export default Cart





/* 
    <div class="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
        <p class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>
        <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
            <div class="pb-4 md:pb-8 w-full md:w-40">
            <img class="w-full hidden md:block" src="https://i.ibb.co/84qQR4p/Rectangle-10.png" alt="dress" />
            <img class="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" />
            </div>
            <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
            <div class="w-full flex flex-col justify-start items-start space-y-8">
                <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">Premium Quaility Dress</h3>
                <div class="flex justify-start items-start flex-col space-y-2">
                <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Style: </span> Italic Minimal Design</p>
                <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Size: </span> Small</p>
                <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Color: </span> Light Blue</p>
                </div>
            </div>
            <div class="flex justify-between space-x-8 items-start w-full">
                <p class="text-base dark:text-white xl:text-lg leading-6">$36.00 <span class="text-red-300 line-through"> $45.00</span></p>
                <p class="text-base dark:text-white xl:text-lg leading-6 text-gray-800">01</p>
                <p class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">$36.00</p>
            </div>
            </div>
        </div>
        <div class="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
            <div class="w-full md:w-40">
            <img class="w-full hidden md:block" src="https://i.ibb.co/s6snNx0/Rectangle-17.png" alt="dress" />
            <img class="w-full md:hidden" src="https://i.ibb.co/BwYWJbJ/Rectangle-10.png" alt="dress" />
            </div>
            <div class="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
            <div class="w-full flex flex-col justify-start items-start space-y-8">
                <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">High Quaility Italic Dress</h3>
                <div class="flex justify-start items-start flex-col space-y-2">
                <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Style: </span> Italic Minimal Design</p>
                <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Size: </span> Small</p>
                <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Color: </span> Light Blue</p>
                </div>
            </div>
            <div class="flex justify-between space-x-8 items-start w-full">
                <p class="text-base dark:text-white xl:text-lg leading-6">$20.00 <span class="text-red-300 line-through"> $30.00</span></p>
                <p class="text-base dark:text-white xl:text-lg leading-6 text-gray-800">01</p>
                <p class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">$20.00</p>
            </div>
            </div>
        </div>
    </div>



*/





/* const Cart = () => {
    const context = useContext(CartContext)

    return (
         <>
            <div className="container mx-auto mt-5">
            <table className="w-full text-sm lg:text-base">
                <thead>
                    <tr className="h-12 uppercase">
                        <th className="hidden md:table-cell pl-4 text-left">Image</th>
                        <th className="text-center">Product</th>
                        <th className="lg:text-right text-left">
                            <span className="lg:hidden" title="Quantity">Qtd</span>
                            <span className="hidden lg:inline">Quantity</span>
                        </th>
                        <th className="hidden text-right md:table-cell">Unit price</th>
                        <th className="text-right">Total price</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        context.cartList?.map((item) => {
                            return (
                            <tr className="h-32" key={`${item.id}-${item.size}-${item.color}`}>
                                <td className="hidden pb-4 md:table-cell">
                                    <img src={item.image} className="w-20 rounded" alt="Thumbnail"/>
                                </td>
                                <td className="w-1/3">
                                    <Link to={`/products/${item.id}`}><p className="hover:text-blue-800">{item.title}</p></Link> Nombre del producto



                                    <form onSubmit={(e) => context.removeItem(e)} data-id={item.id} data-color={item.color} data-size={item.size} data-identificator={item.identificator}>
                                        <button type="submit" className="text-gray-700 hover:text-red-500">
                                            <small className="block">(Remove item)</small>
                                        </button>
                                    </form>



                                </td>
                                <td className="justify-center md:justify-end md:flex mt-6">
                                <div className="w-20 h-10">
                                    <span className="text-sm lg:text-base font-medium"> Cantidad
                                        {item.quantity}
                                    </span>
                                    
                                    
                                    <div className="relative flex flex-row w-full h-8">
                                        <input type="number" value="2" 
                                        className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                                    </div> 
                                    
                                
                                </div>
                                </td>
                                <td className="hidden text-right md:table-cell">
                                    <span className="text-sm lg:text-base font-medium">  Precio unitario 
                                        $ {item.price}
                                    </span>
                                </td>
                                <td className="text-right">
                                    <span className="text-sm lg:text-base font-medium"> Precio total 
                                        $ {Number(item.price) * Number(item.quantity)}
                                    </span>
                                </td>
                            </tr>)
                        })
                    }


                </tbody>
            </table>
            </div>
        </>
    )
} 
*/