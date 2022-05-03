import { createContext, useEffect, useState } from "react";

// Esta es la variable que llamaremos para usar el contexto
export const CartContext = createContext();


// Esta es la variable que almacenara los datos que usara el contexto
const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)
    const [update, setUpdate] = useState(false)

    /* 
        Update cumple la siguiente funcion:
            Al cambiar la cantidad de items en el carrito, se vuelve true y ejecuta el useEfect.
            El use efect (el primero de abajo) actualiza la cantidad de productos en el carrito (en el navbar)

            Esto fue realizado asi ya que, el useEfect no detectaba los cambios en la cantidad de productos iguales,
            de esta manera, el useEfect se ejecuta y al finalizar vuelve a setear en "false" el "update"
    
    */
    
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

    // Remover Item especifico del carrito
    const removeItem = (e) => {
        e.preventDefault()
        let identificator = e.target.dataset.identificator
        setCartList(cartList.filter(product => product.identificator !== identificator))
    } 

    const removeAllItems = () => setCartList([])



    return (
        <CartContext.Provider value={{
            cartList, 
            addToCart, 
            removeItem,
            totalProducts,
            removeAllItems
        }}>
            {children}
        </CartContext.Provider>

    )
}


export default CartContextProvider

