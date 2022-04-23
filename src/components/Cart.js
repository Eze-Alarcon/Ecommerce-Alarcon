import { useContext } from "react"
import { CartContext } from "../context/CartContext"



const Cart = () => {
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
                                    <p className="">{item.title}</p> {/* Nombre del producto */}
                                    <form onSubmit={(e) => context.removeItem(e)} data-id={item.id} data-color={item.color} data-size={item.size}>
                                        <button type="submit" className="text-gray-700 hover:text-red-500">
                                            <small className="block">(Remove item)</small>
                                        </button>
                                    </form>
                                </td>
                                <td className="justify-center md:justify-end md:flex mt-6">
                                <div className="w-20 h-10">
                                    <span className="text-sm lg:text-base font-medium"> {/* Cantidad */}
                                        {item.quantity}
                                    </span>
                                    {/* 
                                    
                                    <div className="relative flex flex-row w-full h-8">
                                        <input type="number" value="2" 
                                        className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                                    </div> 
                                    
                                    */}
                                </div>
                                </td>
                                <td className="hidden text-right md:table-cell">
                                    <span className="text-sm lg:text-base font-medium"> {/* Precio unitario */}
                                        $ {item.price}
                                    </span>
                                </td>
                                <td className="text-right">
                                    <span className="text-sm lg:text-base font-medium"> {/* Precio total */}
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

export default Cart