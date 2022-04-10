import { useEffect, useState } from 'react'
import ItemDetailContainer from './ProductDetail'


function ProductDetailLogic() {
    const [error, setError] = useState(null)
    const [info, setInfo] = useState()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/2')

        .then(response => response.json())
        .then(response => {
                setInfo(response)
            },
        )

        .catch(error => {
                setError(error)
        })

    }, [])

    // console.log(isLoad)


    if (error) {
        return (
        <>
            <p>Algo salio mal</p>
        </>
    )} else if (!!info) { 
        // Solo enviar la informacion, no la etiqueta de "ProductDetail"
        return (
            <ItemDetailContainer 
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