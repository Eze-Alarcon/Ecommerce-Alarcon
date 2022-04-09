import Stars from "./Stars";

function Item(props) {

	return (
		<>
		<div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
				<article className="overflow-hidden rounded-lg shadow-lg">

					<div className="w-10/12 mx-auto">
						<a href=".#">
							<img alt="Placeholder" className="block my-4 mx-auto max-h-48 object-cover" src={props.image}/>
						</a>
					</div>

					<header className="flex items-center justify-between leading-tight p-2 md:p-4">
						<p className="text-grey-darker text-sm">
							
						</p>
					</header>

					<footer className="flex items-center justify-between leading-none p-2 md:p-4">

						<div className="px-4 py-3 bg-white">
							<a href=".#" className=""><h1 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">{props.title}</h1></a>
							<div className="flex py-2">
								<p className="mr-2 text-xs text-gray-600">$ {props.price}</p>
									<p className="mr-2 text-xs text-red-600 line-through">$ {(props.price * 1.3).toFixed(2)}</p>
							</div>
							<div className="flex">
								<div className="">
									{/* <i className="fas fa-star text-yellow-400 text-xs"></i>
									<i className="fas fa-star text-yellow-400 text-xs"></i>
									<i className="fas fa-star text-yellow-400 text-xs"></i>
									<i class="fas fa-star-half-alt text-yellow-400 text-xs"></i>
									<i className="far fa-star text-gray-400 text-xs"></i> */}
									<Stars stars={props.rate}/>
								</div>
								<div className="ml-2">
									<p className="text-gray-500 font-medium text-sm">({props.count})</p>
								</div>
							</div>
						</div>



					</footer>

				</article>

			</div>
		</>

	);
}

export default Item





