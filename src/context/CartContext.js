import { createContext, useEffect, useState } from "react";

// Esta es la variable que llamaremos para usar el contexto
export const CartContext = createContext();


// Esta es la variable que almacenara los datos que usara el contexto
const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)
    const [update, setUpdate] = useState(false)
    
    useEffect(() => {
        let val = cartList.reduce((acc, item) => acc + Number(item.quantity), 0)
        setTotalProducts(val)
        return setUpdate(false)
    },[cartList, totalProducts, update])




    const addToCart = (item) => {
        let itemOnCart = cartList.find((product) => product.id === item.id)

        let sameSize = false, sameColor = false
        let index = undefined

        if (itemOnCart !== undefined) {
            sameSize =  itemOnCart.size === item.size
            sameColor = itemOnCart.color === item.color
            index = cartList.findIndex((product => product.id === item.id ))
        }

        if (sameColor && sameSize) {
            cartList[index].quantity += item.quantity
            setUpdate(true)
        } else {
            setCartList([...cartList, item])
        }
    }




    const removeItem = (e) => {
        e.preventDefault()
        let dataSets = {
            idProduct: e.target.dataset.id,
            colorProduct: e.target.dataset.color,
            sizeProduct: e.target.dataset.size,
        }
        console.log(dataSets)

        let indexOfItem = cartList.findIndex((product) => 
            product.id === dataSets.idProduct 
            && product.size === dataSets.colorProduct
            && product.color === dataSets.sizeProduct )

        console.log(indexOfItem)
        // setCartList([])
        // setTotalProducts(0)
    } 

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

