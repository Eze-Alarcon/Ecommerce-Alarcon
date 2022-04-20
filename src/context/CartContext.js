import { createContext, useState } from "react";

// Esta es la variable que llamaremos para usar el contexto
export const CartContext = createContext();


// Esta es la variable que almacenara los datos que usara el contexto
const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (item) => {
        setCartList([
            ...cartList,
            item
        ])
    }

    const removeItem = (item) => setCartList([]) 

    return (
        <CartContext.Provider value={{cartList, addToCart, removeItem}}>
            {children}
        </CartContext.Provider>

    )
}


export default CartContextProvider

