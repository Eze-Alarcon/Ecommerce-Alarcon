import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from "firebase/firestore";
import db from './utils/firebaseConfig';
import { useParams } from 'react-router-dom'
import Item from './Item'

function CategoryListContainer() {
    const [error, setError] = useState(null)
    const [info, setInfo] = useState()
    const { idCategory } = useParams()

    useEffect(() => {

        const fetchFirestone = async () => {            
            const queryCategory = query(collection(db, "products"), where("category", "==", `${idCategory}`));
            const queryToDatabase = await getDocs(queryCategory)

            const dataFirestone = queryToDatabase.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            return dataFirestone
        }

        fetchFirestone()
            .then(result => setInfo(result))
            .catch(err => setError(err))

    }, [idCategory])


    if (error) return <p>Algo salio mal</p>
    
    if (!!info)  return (
        <div className="w-9/12 mx-auto my-16">
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
        )
    else return <p>Cargando</p>
}

export default CategoryListContainer