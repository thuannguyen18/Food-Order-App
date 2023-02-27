import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';

import { useGlobalContext } from '../context';

function Navbar() {
    const { setIsModal } = useGlobalContext();

    return (
        <div className="bg-orange-800">
            <nav className="flex flex-wrap justify-between items-center h-20 mx-auto container px-8">
                <h1 className="text-white text-4xl">ReactMeals</h1>
                <button 
                    className="flex flex-wrap justify-around items-center bg-orange-900 w-40 text-white py-2 px-4 rounded-xl"
                    onClick={() => setIsModal(true)}
                >
                    <BsFillCartFill />
                    <p className="font-semibold text-base">Your Cart</p>
                    <span className="rounded-2xl bg-orange-600 w-8 text-center">0</span>
                </button>
            </nav>
        </div>
    );
}

export default Navbar;