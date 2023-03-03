import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';

import { useGlobalContext } from '../context';

function Food({ name, price, description, image }) {
    const { addToCart } = useGlobalContext();
    const [count, setCount] = useState(0);
    
    return (
        <div className="lg:flex lg:items-center lg:justify-between py-4 first:pt-0 last:pb-0 border-b border-b-zinc-600 lg:border-b-zinc-400 last:border-none">
            <div className="lg:flex lg:items-center">
                <img src={image} className="w-full lg:w-40 lg:h-24" alt={name} />
                <div className="lg:ml-2">
                    <h4 className="text-lg font-semibold">{name}</h4>
                    <p className="italic">{description}</p>
                    <p className="text-xl text-amber-700 font-bold">${price}</p>
                </div>
            </div>
            <div className="mt-4 lg:flex lg:flex-col lg:items-center lg:m-0">
                <div className="flex justify-between">
                    <span className="font-semibold text-base">Amount</span>
                    <input 
                        type="number" 
                        className="w-14 border border-zinc-900 ml-2 pl-2 rounded" 
                        value={count}
                        onChange={e => setCount(e.target.value)}
                    />
                </div>
                <button 
                    className="flex flex-end items-center justify-center w-full h-10 rounded mt-3 bg-amber-700 text-white font-semibold border lg:rounded-md lg:mt-4 lg:pr-2 lg:hover:bg-white lg:hover:text-amber-700  lg:hover:border-amber-700 transition-all" 
                    onClick={() => addToCart(name, price, count)}
                >
                    <BsPlus className="text-2xl" />
                    Add To Cart
                </button>
            </div>
        </div>
    );
}

export default Food;