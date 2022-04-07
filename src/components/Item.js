function Item(props) {

	return (
		<>
		<div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
				<article className="overflow-hidden rounded-lg shadow-lg">

					<a href=".#">
						<img alt="Placeholder" className="block h-auto w-full" src={props.image}/>
					</a>

					<header className="flex items-center justify-between leading-tight p-2 md:p-4">
						<h1 className="text-lg">
							<a className="no-underline hover:underline text-black" href=".#">
								{props.title}
							</a>
						</h1>
						<p className="text-grey-darker text-sm">
							{props.rate}
						</p>
					</header>

					<footer className="flex items-center justify-between leading-none p-2 md:p-4">
						<p className="ml-2 text-sm">
							{props.description}
						</p>
						<a className="no-underline text-grey-darker hover:text-red-dark" href=".#">
							<span className="hidden">Like</span>
							<i className="fa fa-heart"></i>
						</a>
					</footer>

				</article>

			</div>
		</>

	);
}

export default Item





