import { useContext, useState, useEffect } from 'react'
import { ItemCount } from './ItemCount'
import Star from './Stars'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


function ItemDetail({productInfo}) {
	const [color, setColor] = useState("White")
	const [size, setSize] = useState("SM")
	const [quantity, setQuantity] = useState(1)
	const [onCart, setOnCart] = useState(false)
	const [colorStock, setColorStock] = useState(productInfo.stock.White)
	const [disabled, setDisabled] = useState(false)
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

	useEffect(() => {
		setColorStock(() => productInfo.stock[color])
		setQuantity(() => 1)
		if (productInfo.stock[color] === 0) setDisabled(() => true)
		else setDisabled(() => false)
	}, [productInfo, color, disabled])

	useEffect(() => {
		const checkItem = context.cartList.some(item => item.id === productInfo.id)
		setOnCart(checkItem)
	}, [context.cartList, productInfo])


    return (

      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
			<img alt="ecommerce" className="lg:w-1/3 w-full object-contain object-center" src={productInfo.image}/>
			<form onSubmit={saveForm} className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"> 
					<h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
					<h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productInfo.title}</h1>
					<div className="flex justify-between mb-4 w-full">
						<span className="flex items-center">
							<div>
								<Star stars={productInfo.rating.rate}/>
								<span className="text-gray-600 ml-3">{productInfo.rating.count} Reviews</span>
							</div>
						</span>
						<span className="text-gray-600 ml-3">{colorStock} {color} units </span>
					</div>
				<p className="leading-relaxed">{productInfo.description}</p>
				<div className="flex mt-6 justify-between items-center pb-5 border-b-2 border-gray-200 mb-5">
					

					{
						(productInfo.category !== "jewelery")
						?	<div className="flex">
								<span className="flex">Color</span>
								<fieldset id="colors" onChange={colorbutton}>
						
									<input type="radio" value="White" name="colors" defaultChecked={true} disabled={productInfo.stock.White < 1}
										className="w-5 h-5 ml-2 text-gray-500  bg-gray-300 hover:bg-gray-400 checked:bg-gray-500 focus:ring-transparent disabled:hidden"/>

									<input type="radio" value="Blue" name="colors" disabled={productInfo.stock.Blue < 1}
										className=" w-5 h-5 ml-2 text-blue-600 hover:bg-blue-900 bg-blue-600 checked:bg-blue-400 focus:ring-transparent disabled:hidden"/>

									<input type="radio" value="Red" name="colors" disabled={productInfo.stock.Red < 1}
										className="w-5 h-5 ml-2 text-red-600 hover:bg-red-400 bg-red-600 checked:bg-red-500 focus:ring-transparent disabled:hidden"/>

								</fieldset>
							</div>
						: 	<></>
					}


					
					<div className="flex ml-3 items-center">

					{
						(productInfo.category !== "electronics")
						?	<>
								<span className="mr-2">Size</span>
								<div className="relative">
								<select value={size} onChange={tamanio} className="rounded border appearance-none border-gray-400 py-2 focus:outline-none text-base pl-3 pr-8">
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
					<ItemCount 
						num={quantity} 
						action={setQuantity}
						stock={colorStock}	
					/>
				</div>
				<div className="flex">
					<span className="title-font font-medium text-2xl text-gray-900">$ {productInfo.price}</span>
					{
						!onCart
						? <button type="submit" disabled={disabled} 
							className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded disabled:bg-gray-400 disabled:text-black disabled:font-bold">
							{
								!disabled
									? "Agregar al carrito"
									: "Producto sin stock"
							}
						</button>
						: 	<>
								<Link to="/Cart" className="flex ml-auto"><button type="button" className=" text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Item en carrito</button></Link>
								<button type="submit" disabled={disabled}
									className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Agregar al carrito</button>
							</>
					}
				</div>
			</form>
        </div>
      </div>
    )
}

export default ItemDetail