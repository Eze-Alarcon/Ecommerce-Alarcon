import { useContext } from "react"
import {CartContext} from "../context/CartContext"



const Cart = () => {
    const pepe = useContext(CartContext)

    console.log(pepe)


    return (
        <>
            <h1>carrito del proyecto</h1>
        </>
    )
} 

export default Cart