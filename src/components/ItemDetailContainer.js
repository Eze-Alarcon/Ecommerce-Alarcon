import Star from './Stars'


function ItemDetailContainer({productInfo}) {

    return (

      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
			<img alt="ecommerce" className="lg:w-1/3 w-full object-cover object-center" src={productInfo.image}/>
          	<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
				<h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
				<h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productInfo.title}</h1>
				<div className="flex mb-4">
					<span className="flex items-center">

						<Star stars={productInfo.rating.rate}/>

						<span className="text-gray-600 ml-3">{productInfo.rating.count} Reviews</span>
					</span>
				</div>
            <p className="leading-relaxed">{productInfo.description}</p>
            	<div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              		<div className="flex">
						<span className="mr-3">Color</span>
						<button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
						<button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
						<button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
					</div>
					<div className="flex ml-6 items-center">
						<span className="mr-3">Size</span>
						<div className="relative">
							<select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
								<option>SM</option>
								<option>M</option>
								<option>L</option>
								<option>XL</option>
							</select>
							<span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
								<i className="fas fa-chevron-down"></i>
							</span>
						</div>
					</div>
				</div>
				<div className="flex">
					<span className="title-font font-medium text-2xl text-gray-900">$ {productInfo.price}</span>
					<button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Agregar al carrito</button>
				</div>
          	</div>
        </div>
      </div>
    )
}

export default ItemDetailContainer