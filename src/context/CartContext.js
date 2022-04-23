import { createContext, useState } from "react";

// Esta es la variable que llamaremos para usar el contexto
export const CartContext = createContext();


// Esta es la variable que almacenara los datos que usara el contexto
const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)
    


    const addToCart = (item) => {
        let itemOnCart = cartList.find((product) => product.id === item.id)
        let sameSize = false
        let sameColor = false
        let index = undefined
        let val

        if (itemOnCart !== undefined) {
            sameSize =  itemOnCart.size === item.size
            sameColor = itemOnCart.color === item.color
            index = cartList.findIndex((product => product.id === item.id ))
        }

        (sameColor && sameSize)
            ? cartList[index].quantity += item.quantity
            : setCartList([...cartList, item])


        if (totalProducts === 0) {
            val = item.quantity
        } else {
            val = cartList.reduce((acc, item) => acc + Number(item.quantity), 0)
        }

        console.log(val)

        setTotalProducts(val)
        
        
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

