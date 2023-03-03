import React from 'react';

import Carts from './Carts';
import CartEmpty from './CartEmpty';
import Form from './Form';
import { useGlobalContext } from '../context';

function Modal() {
    const { form, submitting, carts } = useGlobalContext();

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-5 lg:p-4 rounded-md w-5/6 lg:w-2/5">
                {submitting ?
                    <div className="p-5">
                        <p className="font-semibold">Sending order data...</p>
                    </div>
                    :
                    <>
                        {carts.length > 0 && <Carts />}
                        {carts.length < 1 && <CartEmpty />}
                        {(form && carts.length > 0) && <Form />}
                    </>
                }
            </div>
        </div>
    );
}

export default Modal;