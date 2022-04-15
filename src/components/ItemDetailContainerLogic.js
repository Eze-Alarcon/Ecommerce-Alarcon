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



/*
    Bizum coca y cerveza 7
    Bizum Kebab 13
    Gastos de bebida del hotel 6.9 (cervezas)
    Gastos de bebida del hotel 2.7 (agua)
    Gastos de bebida del hotel 8.9 (agua + cervezas)
    coquitas pal viaje 7.20
    Tienda museo 7.3
    Julia perfumes 122.9
    Mango outlet 6
    Mango outlet 4
    Centro comercial de andorra 37.01 (chocolates)
    
    As la ribera-sur 5.25 ??
    Alfa electronica 3 ??
    total: 231.15


    Compartidos
    Tobotronc parque 140
    combustible 75.16
    total: 215
    por pareja: 107



    Ellos:

    combusible: 83
    hotel: 384
    parking hotel: 34
    caldea: 98
    comida cinthia ??
    total: 599
    por pareja: 300

    restante: 193


    Ahorros: 500

    gastos previstos:  407
    gastos extras: 231
    imprevistos: -138
    
    

*/
