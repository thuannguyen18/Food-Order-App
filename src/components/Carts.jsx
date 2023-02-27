import Recat from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function Carts() {
    return (
        <div className="flex items-center justify-between border-b border-b-amber-800 py-4">
            <div className="relative">
                <h4 className="font-semibold text-xl">Sushi</h4>
                <p className="text-amber-700 font-bold">$22.9</p>
                <span className="border rounded-md w-10 absolute top-6 left-20 text-center font-semibold">x4</span>
            </div>
            <div className="">
                <button className="hover:bg-orange-600 hover:text-white border rounded-md px-2 border-orange-600 h-6">
                    <AiOutlineMinus />
                </button>
                <button className="hover:bg-orange-600 hover:text-white border rounded-md px-2 ml-2 border-orange-600 h-6">
                    <AiOutlinePlus />
                </button>
            </div>
        </div>
    );
}

export default Carts;