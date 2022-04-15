import { useEffect, useState } from 'react'
import Banner from './Banner'
import Item  from './Item'

function ItemListLogic() {
    const [error, setError] = useState(null)
    const [info, setInfo] = useState()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')

        .then(response => response.json())
        .then(result => setInfo(result))

        .catch(error => setError(error))

    }, [])

    if (error) {
        return (
        <>
            <p>Algo salio mal</p>
        </>
    )} else if (!!info) {
        return (
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
    } 

    return (
        <>
            <p>Cargando</p>
        </>
    )

}


export default ItemListLogic
