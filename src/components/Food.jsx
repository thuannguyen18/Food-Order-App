import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';

function Food({ name, price, description, image }) {
    const [count, setCount] = useState(0);
    return (
        <div className="flex items-center justify-between py-4 border-b border-b-zinc-300 last:border-none">
            <div className="flex items-center">
                <img src={image} className="w-40 h-24" alt={name} />
                <div className="ml-2">
                    <h4 className="text-lg font-semibold">{name}</h4>
                    <p className="italic">{description}</p>
                    <p className="text-xl text-amber-700 font-bold">${price}</p>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex">
                    <span className="font-semibold text-base">Amount</span>
                    <input 
                        type="number" 
                        className="w-14 border border-zinc-900 ml-2 pl-2 rounded" 
                        value={count}
                        onChange={e => setCount(e.target.value)}
                    />
                </div>
                <button className="flex flex-end items-center justify-center bg-amber-700 text-white w-20 font-semibold rounded-xl mt-2 pr-2">
                    <BsPlus />
                    Add
                </button>
            </div>
        </div>
    );
}

export default Food;