import { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import db from './utils/firebaseConfig';
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'


function ItemDetailContainer() {
    const [error, setError] = useState(null)
    const [info, setInfo] = useState()
    const { idProduct } = useParams()

    useEffect(() => {
        // fetch(`https://fakestoreapi.com/products/${idProduct}`)
        // .then(response => response.json())
        // .then(response => setInfo(response))
        
        // .catch(error => setError(error))

        console.log(idProduct)

        /* const fetchFirestone = async () => {            
            const queryCategory = query(collection(db, "products"), where("id", "==", `${idProduct}`));
            const queryToDatabase = await getDocs(queryCategory)

            const dataFirestone = queryToDatabase.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            return dataFirestone
        } */



        const fetchFirestone = async () => {   
            const specificQuery = await getDoc(doc(db, "products", `${idProduct}`))
            return specificQuery.data()
            }

        fetchFirestone()
            .then(result => setInfo(result))
            .catch(err => setError(err))


    }, [idProduct])


    /* 
    
        const fetchFirestone = async () => {            
            const queryCategory = query(collection(db, "products"), where("category", "==", `${idCategory}`));
            const queryToDatabase = await getDocs(queryCategory)

            const dataFirestone = queryToDatabase.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            return dataFirestone
        }
    */


    if (error !== null) return  <p>Algo salio mal</p>
    
    if (info) {
        return <ItemDetail productInfo={info} />
    } else {
        return  <p>Cargando</p>
    }

}

export default ItemDetailContainer