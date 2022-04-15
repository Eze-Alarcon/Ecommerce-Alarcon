import { Link } from "react-router-dom";
import Stars from "./Stars";

function Item(props) {

	return (
		<>
		<div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
				<article className="overflow-hidden h-[463px] rounded-lg shadow-lg">
					<Link to={"/products/" + String(props.id)} className="flex flex-col justify-evenly h-full">

					<div className="w-7/12 pt-5 mx-auto">
							<img alt="Placeholder" className="block my-4 mx-auto max-h-48 object-contain" src={props.image}/>
					</div>

					<div className="flex items-center justify-between leading-none p-2 md:p-4">

						<div className="px-4 py-3 bg-white">
							<h1 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">{props.title}</h1>
							<div className="flex py-2">
								<p className="mr-2 text-xs text-gray-600">$ {props.price}</p>
									<p className="mr-2 text-xs text-red-600 line-through">$ {(props.price * 1.3).toFixed(2)}</p>
							</div>
							<div className="flex">
								<div className="">
									<Stars stars={props.rate}/>
								</div>
								<div className="ml-2">
									<p className="text-gray-500 font-medium text-sm">({props.count})</p>
								</div>
							</div>
						</div>



					</div>

					</Link>
				</article>

			</div>
		</>

	);
}

export default Item





