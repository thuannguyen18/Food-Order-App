import React from 'react';

import { useGlobalContext } from '../context';

function Alert() {
    const { closeModal } = useGlobalContext();

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="w-5/6 bg-white p-6 rounded-md lg:w-2/5">
                <p className="text-lg font-semibold">Successfully sent the order!</p>
                <button
                    className="border rounded w-full mt-4 h-10 border-orange-700 text-orange-700 lg:w-20"
                    onClick={closeModal}
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default Alert;