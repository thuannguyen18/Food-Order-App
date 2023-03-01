import React from 'react';

import CartItem from './CartItem';
import { useGlobalContext } from '../context';

function Carts() {
    const { carts } = useGlobalContext();

    if (carts.length < 1) {
        return (
            <div>
                <h1>The Cart is empty!</h1>
            </div>
        );
    }

    return (
        <div>
            {carts.map(cartItem => (
                <CartItem key={cartItem.name} {...cartItem} />
            ))}
        </div>
    );
}

export default Carts;