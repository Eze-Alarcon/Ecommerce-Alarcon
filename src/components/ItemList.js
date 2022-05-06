import { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import db from './utils/firebaseConfig';
import Item  from './Item'
import ErrorPage from './ErrorPage'

function ItemListContainer() {
    const [error, setError] = useState(null)
    const [info, setInfo] = useState()

    useEffect(() => {

        const fetchFirestone = async () => {
            const queryToDatabase = await getDocs(collection(db, "products"));
            const dataFirestone = queryToDatabase.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            return dataFirestone
        }

        fetchFirestone()
        .then(result => setInfo(result))
        .catch(err => setError(err))

    }, [])
    

    if (error) return <ErrorPage/>
    
    if (!!info) return (
        <>
        { info.map((item) => {
            return (
                <Item
                    title={item.title} 
                    description={item.description} 
                    image={item.image} 
                    price={item.price}
                    category={item.category}
                    rate={item.rating.rate}
                    count={item.rating.count}
                    id={item.id}
                    key={item.id} 
                    />
                            
                )}
            )} 
        </>
        )

    return <p>Cargando</p>
}


export default ItemListContainer
