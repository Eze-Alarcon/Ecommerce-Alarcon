import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { doc, setDoc, serverTimestamp, collection, updateDoc, increment } from "firebase/firestore";
import db from './utils/firebaseConfig'
import CartModal from "./CartModal";

const Cart = () => {
    const context = useContext(CartContext)
    const [subtotal, setSubtotal] = useState(0)
    const [modal, setModal] = useState(false)
    const [data, setData] = useState({})
    const SHIPPING = 8

    useEffect(() => {
        let x = context.cartList?.reduce((acc, item) => acc + (Number(item.price) * (item.quantity)), 0)
        setSubtotal(x)
    },[context])

    const updateDB = () => {
        context.cartList.forEach(async (item) => {
            const productRef = doc(db, "products", item.id);
            item.color === "White" && await updateDoc(productRef, {"stock.White": increment(-item.quantity)})
            item.color === "Blue" && await updateDoc(productRef, {"stock.Blue": increment(-item.quantity)})
            item.color === "Red" && await updateDoc(productRef, {"stock.Red": increment(-item.quantity)})
        })
    }

    const checkout = () => {
        setModal((prevState) => !prevState)
        if (context.cartList.length === 0) return 
    }

    const payment = () => {
        let order = {
            buyer: {
                ...data
            },
            date: serverTimestamp(),
            items: context.cartList.map((item) => {
                return {
                    id: item.id,
                    title: item.title,
                    quantity: item.quantity,
                    color: item.color,
                    size: item.size,
                }
            }),
            total: subtotal
        }

        console.log(order)

        const crateOrder = async () => {
            const orderRef = doc(collection(db, "orders"))
            await setDoc(orderRef, order)
            updateDB()
            return orderRef;
        }

        crateOrder()
        .then(result => alert(`Su orden fue generada bajo el id: ${result.id}`))
            .then(context.removeAllItems())
            .then(setModal((prevState) => !prevState))
            .catch(err => console.log(err))
    }

    return (
        <main className="flex justify-evenly min-h-[80vh] relative z-0">

            
            <section className="flex flex-col justify-start items-start px-4 py-4 md:py-6 md:p-6 xl:p-8 w-8/12">
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
                                <img className="w-9/12 md:block" src={item.image} alt={item.description} />
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
            </section>

            <aside className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-3/12 space-y-6 mt-20 ml-2 border h-[375px]">
                <h3 className="text-xl font-semibold mb-6 leading-5 text-gray-800">Summary</h3>
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                    <div className="flex justify-between w-full">
                        <p className="text-base leading-4 text-gray-800">SUBTOTAL</p>
                        <p className="text-base leading-4 text-gray-600">$ {(subtotal * 1.3).toFixed(2)}</p>
                    </div>
                        {
                            context.cartList.length > 0 
                                && <div className="flex justify-between items-center w-full">
                                        <p className="text-base leading-4 text-gray-800">DISCOUNT (30%)</p>
                                        <p className="text-base leading-4 text-gray-600">- $ {(subtotal * 0.3).toFixed(2)}</p>
                                    </div>
                        }
                    <div className="flex justify-between items-center w-full">
                        <p className="text-base leading-4 text-gray-800">{context.totalProducts} ITEMS</p>
                        <p className="text-base leading-4 text-gray-600">$ {((subtotal)).toFixed(2)}</p>
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
                            : ((subtotal) + Number(SHIPPING)).toFixed(2)    
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
                        : <CartModal pay={payment} closeModal={setModal} saveInfo={setData}/>
                }

        </main>
    )
} 

export default Cart
