function CartWidget() {
    return (
        <>
            <a href='.#' className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </a>
            <div className="absolute flex ml-4 -mt-5">
                <span className="relative inline-flex px-1 leading-none text-center whitespace-nowrap align-baseline bg-red-400 text-white rounded ml-2">
                    17
                </span>
            </div>
        </>
    )
}

export { CartWidget }


/* 
    <span className="absolute flex ml-4 -mt-5">
        <span className="h-3 w-3 animate-ping absolute inline-flex rounded-full bg-pink-500 opacity-75"></span>
        <span className="h-3 w-3 relative inline-flex rounded-full bg-pink-600"></span>
    </span>
*/