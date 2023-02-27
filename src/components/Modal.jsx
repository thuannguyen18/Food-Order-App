import React from 'react';

import Carts from './Carts';
import { useGlobalContext } from '../context';

function Modal() {
    const { setIsModal } = useGlobalContext();

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-4 rounded-md w-2/5">
                <Carts />
                <Carts />
                <Carts />
                <div className="flex items-center justify-between mt-4">
                    <p className="font-bold text-xl">Total Amount</p>
                    <p className="font-bold text-xl">$1324.54</p>
                </div>
                <div className="mt-4">
                    <button 
                        className="border rounded-xl py-px w-20 border-orange-700 text-orange-700"
                        onClick={() => setIsModal(false)}
                    >
                        Close
                    </button>
                    <button className="border rounded-xl py-px w-20 bg-orange-900 text-white ml-4">Order</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;