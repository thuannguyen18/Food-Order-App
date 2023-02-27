import React from 'react';

import Food from './Food';
import { useGlobalContext } from '../context';

function FoodList() {
    const { meals } = useGlobalContext();

    return (
        <div className="bg-white w-3/5 rounded-lg p-4 mt-6">
            {meals.map((meal, index) => (
                <Food key={index} {...meal} />
            ))}
        </div>
    );
}

export default FoodList;