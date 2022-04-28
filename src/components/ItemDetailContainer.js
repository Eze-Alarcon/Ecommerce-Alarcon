import { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import db from './utils/firebaseConfig';
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import ErrorPage from './ErrorPage'


function ItemDetailContainer() {
    const [error, setError] = useState(null)
    const [info, setInfo] = useState()
    const { idProduct } = useParams()

    useEffect(() => {
        const fetchFirestone = async () => {   
            const specificQuery = await getDoc(doc(db, "products", `${idProduct}`))
            return {
                ...specificQuery.data(),
                id: idProduct
            }
        }

        fetchFirestone()
            .then(result => setInfo(result))
            .catch(err => setError(err))

    }, [idProduct])

    if (error !== null) return  <ErrorPage/>
    
    if (info) {
        return <ItemDetail productInfo={info} />
    } else {
        return  <p>Cargando</p>
    }

}

export default ItemDetailContainer