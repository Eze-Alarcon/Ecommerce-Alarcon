import { useContext, useState } from 'react'
import { ItemCount } from './ItemCount'
import Star from './Stars'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


function ItemDetailContainer({productInfo}) {
	const [color, setColor] = useState("White")
	const [size, setSize] = useState("SM")
	const [quantity, setQuantity] = useState(1)
	const [onCart, setOnCart] = useState(false)
	const context = useContext(CartContext)

	
	const saveForm = (e) => {
		e.preventDefault()
		setOnCart(true)
		context.addToCart({
			...productInfo,
			color,
			size,
			quantity,
			identificator: `${productInfo.id}-${color}-${size}`
		})
	}


	const tamanio = (e) => setSize(e.target.value)

	const colorbutton = (e) => setColor(e.target.value)

    return (

      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
			<img alt="ecommerce" className="lg:w-1/3 w-full object-contain object-center" src={productInfo.image}/>
			<form onSubmit={saveForm} className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"> 
					<h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
					<h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productInfo.title}</h1>
					<div className="flex mb-4">
						<span className="flex items-center">
							<Star stars={productInfo.rating.rate}/>
							<span className="text-gray-600 ml-3">{productInfo.rating.count} Reviews</span>
						</span>
					</div>
				<p className="leading-relaxed">{productInfo.description}</p>
				<div className="flex mt-6 justify-between items-center pb-5 border-b-2 border-gray-200 mb-5">
					
					<div className="flex">
						<span className="mr-2">Color</span>
						<button onClick={colorbutton} type="button" value="White" className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none focus:ring focus:ring-gray-300"></button>
						<button onClick={colorbutton} type="button" value="Blue" className="border-2 border-gray-300 ml-2 bg-gray-700 rounded-full w-6 h-6 focus:outline-none focus:ring focus:ring-blue-700/25"></button>
						<button onClick={colorbutton} type="button" value="Red" className="border-2 border-gray-300 ml-2 bg-red-500 rounded-full w-6 h-6 focus:outline-none focus:ring focus:ring-red-700/25"></button>
					</div>
					<div className="flex ml-3 items-center">

						{
							(productInfo.category !== "electronics")
							?	<>
								<span className="mr-2">Size</span>
								<div className="relative">
								<select value={size} onChange={tamanio} className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-8">
									<option value="SM">SM</option>
									<option value="M">M</option>
									<option value="L">L</option>
									<option value="XL">XL</option>
								</select>
								<span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
										<i className="fas fa-chevron-down"></i>
									</span>
								</div>
								</>
							: 	<></>
						}
					</div>
					<ItemCount num={quantity} action={setQuantity} ></ItemCount>
				</div>
				<div className="flex">
					<span className="title-font font-medium text-2xl text-gray-900">$ {productInfo.price}</span>
					{
						!onCart
						? <button type="submit" className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Agregar al carrito</button>
						: <Link to="/Cart" className="flex ml-auto"><button type="button" className=" text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Item en carrito</button></Link>
					}
				</div>
			</form>
        </div>
      </div>
    )
}

export default ItemDetailContainer