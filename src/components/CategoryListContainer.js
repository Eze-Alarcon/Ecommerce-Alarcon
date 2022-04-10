import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'

function CategoryListContainer() {
    const [error, setError] = useState(null)
    const [info, setInfo] = useState()
    const { idCategory } = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${idCategory}`)

        .then(response => response.json())
        .then(result => setInfo(result))

        .catch(error => setError(error))

        console.log(idCategory)
    }, [idCategory])

    if (error) {
        return (
        <>
            <p>Algo salio mal</p>
        </>
    )} else if (!!info) {
        return (
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
                    key={item.id} 
                    />
                        
            )}
        )} 
            </div>
        </div>
        )
    } 

    return (
        <>
            <p>Cargando</p>
        </>
    )


}

export default CategoryListContainer