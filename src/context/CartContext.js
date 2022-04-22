import { createContext, useState, useEffect } from "react";

// Esta es la variable que llamaremos para usar el contexto
export const CartContext = createContext();


// Esta es la variable que almacenara los datos que usara el contexto
const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)

    useEffect(() => {
        setTotalProducts(cartList.reduce((acc, item) => {
            return (acc + Number(item.quantity))
        }, 0))
    }, [cartList])






    const addToCart = (item) => {
        setCartList([...cartList, item].flat(1))
    }

    const removeItem = (item) => setCartList([]) 

    return (
        <CartContext.Provider value={{cartList, 
            addToCart, 
            removeItem,
            totalProducts,
        }}>
            {children}
        </CartContext.Provider>

    )
}


export default CartContextProvider

