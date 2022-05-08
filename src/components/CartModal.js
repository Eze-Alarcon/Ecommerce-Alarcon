// import { useState } from "react"

const CartModal = ({props}) => {

    const handleChange = (e) => props.setData({...props.data, [e.target.id]: e.target.value})


    const handleSubmit = (e) => {
        e.preventDefault()
        props.payment()
    }

    const close = () => props.setModal(prevState => !prevState)

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="z-10 absolute w-[30vw] text-left py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <div className="w-full flex justify-start text-gray-600 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            </div>
            <h1 className="text-gray-800 text-center font-lg font-bold tracking-normal leading-tight mb-4">
                Enter Billing Details
            </h1>

            <label htmlFor="name" className="w-full text-left text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Name
            </label>
            <input 
                id="name" 
                required 
                value={props.data.name}
                onChange={handleChange}
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" 
                placeholder="James" />

            <label htmlFor="email" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Email
            </label>
            <input 
                id="email"
                value={props.data.email}
                onChange={handleChange}
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" 
                placeholder="James@gmail.com" />

            <label htmlFor="phone" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Phone Number
            </label>
            <input 
                id="phone" 
                value={props.data.phone}
                onChange={handleChange}
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" 
                placeholder="XXX-XXX-XXX" />

            <label htmlFor="cardNumber" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Card Number
            </label>
            
            <div className="relative mb-5 mt-2">
                <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                </div>
                <input 
                    id="cardNumber" 
                    required 
                    value={props.data.cardNumber}
                    onChange={handleChange}
                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border" 
                    placeholder="XXXX - XXXX - XXXX - XXXX" />
            </div>
            <label htmlFor="expiration" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Expiration Date
            </label>

            <div className="relative mb-5 mt-2">
                <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <input 
                    id="expiration" 
                    required 
                    value={props.data.expiration}
                    onChange={handleChange}
                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" 
                    placeholder="MM/YY" />
            </div>
            <label htmlFor="cvc" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">CVC</label>

            <div className="relative mb-5 mt-2">
                <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <input 
                    id="cvc" 
                    required 
                    value={props.data.cvc}
                    onChange={handleChange}
                    className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" 
                    placeholder="XXX" />
            </div>

            <div className="flex items-center justify-between w-full">
                <button type="button" onClick={close} className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm">
                    Cancel
                </button>
                <button type="submit" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                    Pay
                </button>
            </div>
        </form>
    )
}

export default CartModal