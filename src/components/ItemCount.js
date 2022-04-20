function ItemCount({num, action}) {
    
    const increase = () => (num < 5) && action(num + 1)

    const decrease = () => (num > 1) && action(num - 1)

    return (
        <div className="flex justify-between items-center rounded border appearance-none border-gray-400 py-2 focus:outline-none bg-[#dddddd] focus:border-red-500 text-base pl-3 ml-6">
            <button className="mr-3" type="button" onClick={decrease}><i className="fas fa-minus"></i></button>
            <p className="mr-3 text-gray-900">{num}</p>
            <button className="mr-2" type="button" onClick={increase}><i className="fas fa-plus"></i></button>
        </div>
    )
}

export { ItemCount }