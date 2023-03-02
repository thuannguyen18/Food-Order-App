import React from 'react';

import { useGlobalContext } from '../context';

function Alert() {
    const { closeModal } = useGlobalContext();

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-4 rounded-md w-2/5">
                <p>Successfully sent the order!</p>
                <button
                    className="border rounded-xl py-px w-20 border-orange-700 text-orange-700"
                    onClick={closeModal}
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default Alert;