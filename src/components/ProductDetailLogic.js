import { useEffect, useState } from 'react'
import ProductDetail from './ProductDetail'


function ProductDetailLogic() {
    const [error, setError] = useState(null)
    const [isLoad, setIsLoad] = useState(false)
    const [info, setInfo] = useState()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1')

        .then(response => response.json())
        .then(result => {
                setIsLoad(true)
                setInfo(result)
            },
        
            (error) => {
                setIsLoad(true)
                setError(error)
            }
        )
    }, [])


    if (error) {
        return (
        <>
            <p>Algo salio mal</p>
        </>
    )} else if (isLoad && !!info) {
        return (
            <ProductDetail 
                productInfo={info}
            />
        )
    } 

    return (
        <>
            <p>Cargando</p>
        </>
    )

}

export default ProductDetailLogic