import { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import db from './utils/firebaseConfig';
import Banner from './Banner'
import Item  from './Item'
import ErrorPage from './ErrorPage'

function ItemList() {
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
            <Banner/>
            <div className="w-9/12 mx-auto my-16" id="content">
                <div className="flex flex-wrap -mx-1 lg:-mx-4"> 
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
                </div>
            </div>
        </>
        )

    return <p>Cargando</p>
}


export default ItemList
