import { createContext, useState, useEffect } from "react";

// Esta es la variable que llamaremos para usar el contexto
export const CartContext = createContext();


// Esta es la variable que almacenara los datos que usara el contexto
const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)

    useEffect((props) => {
        setTotalProducts(cartList.reduce((acc, item) => {
            return (acc + Number(item.quantity))
        }, 0))

        console.log(props)

    }, [cartList])



    const addToCart = (item) => {

        let itemOnCart = cartList.find((product) => product.id === item.id)
        if (itemOnCart === undefined) {
            setCartList([...cartList, item])
        } else {
            let index = cartList.findIndex((product => product.id === item.id ))
            cartList[index].quantity += item.quantity
            setTotalProducts(cartList.reduce((acc, item) => {
                return (acc + Number(item.quantity))
            }, 0))
        }

        
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

