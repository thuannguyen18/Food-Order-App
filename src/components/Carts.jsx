import React from 'react';

import CartItem from './CartItem';
import { useGlobalContext } from '../context';

function Carts() {
    const { carts, total, closeModal, openForm } = useGlobalContext();

    return (
        <div>
            {carts.map(cartItem => (
                <CartItem key={cartItem.name} {...cartItem} />
            ))}
            <div className="flex items-center justify-between mt-4">
                <p className="font-bold text-xl">Total Amount</p>
                <p className="font-bold text-xl">${total}</p>
            </div>
            <div className="mt-4">
                <button
                    className="border rounded-xl py-px w-20 border-orange-700 text-orange-700"
                    onClick={closeModal}
                >
                    Close
                </button>
                <button
                    className="border rounded-xl py-px w-20 bg-orange-900 text-white ml-4"
                    onClick={openForm}
                >
                    Order
                </button>
            </div>
        </div>
    );
}

export default Carts;