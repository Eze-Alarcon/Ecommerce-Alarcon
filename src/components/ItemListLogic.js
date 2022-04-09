import { useEffect, useState } from 'react'
import Item  from './Item'

function ItemListLogic() {
    const [error, setError] = useState(null)
    const [isLoad, setIsLoad] = useState(false)
    const [info, setInfo] = useState()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')

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
                        key={item.id}
                        />
                    )}
                )} 
            </>
        )
    } 

    return (
        <>
            <p>Cargando</p>
        </>
    )

}


export default ItemListLogic
