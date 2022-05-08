import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartModal from "./CartModal";

const CartAside = ({props}) => {

    const {
        modal,
        payment,
        SHIPPING,
        setData,
        checkout,
        subTotal,
        setModal,
        data } = props


    const context = useContext(CartContext);



    return (
        <>
            <aside className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-3/12 space-y-6 mt-20 ml-2 border h-[375px]">
                <h3 className="text-xl font-semibold mb-6 leading-5 text-gray-800">Summary</h3>
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                    <div className="flex justify-between w-full">
                        <p className="text-base leading-4 text-gray-800">SUBTOTAL</p>
                        <p className="text-base leading-4 text-gray-600">$ {(subTotal * 1.3).toFixed(2)}</p>
                    </div>
                        {
                            context.cartList.length > 0 
                                && <div className="flex justify-between items-center w-full">
                                        <p className="text-base leading-4 text-gray-800">DISCOUNT (30%)</p>
                                        <p className="text-base leading-4 text-gray-600">- $ {(subTotal * 0.3).toFixed(2)}</p>
                                    </div>
                        }
                    <div className="flex justify-between items-center w-full">
                        <p className="text-base leading-4 text-gray-800">{context.totalProducts} ITEMS</p>
                        {/* <p className="text-base leading-4 text-gray-600">$ {(subTotal).toFixed(2)}</p> */}
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <p className="text-base leading-4 text-gray-800">SHIPPING</p>
                        <p className="text-base leading-4 text-gray-600">
                            $ {
                                context.cartList.length === 0
                                ? "0.00"
                                : SHIPPING.toFixed(2)
                            }
                        </p>
                    </div>
                </div>
                <div className="flex justify-between items-center w-full">
                    <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                    <p className="text-base font-semibold leading-4 text-gray-600">
                        $ {context.cartList.length === 0
                            ? "0.00"
                            : ((subTotal) + Number(SHIPPING)).toFixed(2)    
                        }
                    </p>
                </div>

                <button type="button" onClick={checkout} className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2">
                    <span className="w-full">
                        Checkout
                    </span>
                </button>

            </aside>

            {
                !modal  
                    ? <></>
                    : <CartModal 
                        props={{
                            payment,
                            setModal,
                            setData,
                            data
                        }} />
            }
    </>
    )
}

export default CartAside