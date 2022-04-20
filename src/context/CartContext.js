import { createContext, useState } from "react";

// Esta es la variable que llamaremos para usar el contexto
export const CartContext = createContext();


// Esta es la variable que almacenara los datos que usara el contexto
const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    return (
        <CartContext.Provider value={{cartList, setCartList}}>
            {children}
        </CartContext.Provider>

    )
}


export default CartContextProvider

