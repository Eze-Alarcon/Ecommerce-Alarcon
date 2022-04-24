import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'


function ItemDetailContainer() {
    const [error, setError] = useState(null)
    const [info, setInfo] = useState()
    const { idProduct } = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${idProduct}`)
        .then(response => response.json())
        .then(response => setInfo(response))
        
        .catch(error => setError(error))
    }, [idProduct])


    if (error !== null) return  <p>Algo salio mal</p>
    
    if (info) {
        return <ItemDetail productInfo={info} />
    } else {
        return  <p>Cargando</p>
    }

}

export default ItemDetailContainer