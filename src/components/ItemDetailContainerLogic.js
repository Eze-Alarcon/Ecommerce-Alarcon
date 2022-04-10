import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer'


function ItemDetailContainerLogic() {
    const [error, setError] = useState(null)
    const [info, setInfo] = useState()
    const { idProduct } = useParams()


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${idProduct}`)

        .then(response => response.json())
        .then(response => setInfo(response))

        .catch(error => {
                setError(error)
        })


    }, [idProduct])


    if (error) {
        return (
        <>
            <p>Algo salio mal</p>
        </>
    )} else if (info) { 
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

export default ItemDetailContainerLogic