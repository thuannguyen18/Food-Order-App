import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { useGlobalContext } from '../context';

function Carts({ id, name, price, count }) {
    const { increase, decrease } = useGlobalContext();

    return (
        <div className="flex items-center justify-between border-b border-b-amber-800 py-4">
            <div className="relative">
                <h4 className="font-semibold text-xl">{name}</h4>
                <p className="text-amber-700 font-bold">${price}</p>
                <span className="border rounded-md w-10 absolute top-6 left-20 text-center font-semibold">x{count}</span>
            </div>
            <div className="">
                <button 
                    className="hover:bg-orange-600 hover:text-white border rounded-md px-2 border-orange-600 h-6" 
                    onClick={() => decrease(id)}
                >
                    <AiOutlineMinus />
                </button>
                <button 
                    className="hover:bg-orange-600 hover:text-white border rounded-md px-2 ml-2 border-orange-600 h-6"
                    onClick={() => increase(id)}
                >
                    <AiOutlinePlus />
                </button>
            </div>
        </div>
    );
}

export default Carts;