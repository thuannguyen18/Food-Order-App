import Food from './Food';
import { useGlobalContext } from '../context';

function FoodList() {
    const { meals } = useGlobalContext();

    if (!meals) {
        return (
            <div className="h-screen text-center">
                <h4 className="text-4xl font-semibold">Something went wrong!</h4>
                <p className="my-2 text-lg">We encountered an error. Please try after sometime</p>
            </div>
        );
    }

    return (
        <div className="lg:bg-white w-full p-4 mt-6 lg:rounded-lg lg:w-3/5">
            {meals.map((meal, index) => (
                <Food key={index} {...meal} />
            ))}
        </div>
    );
}

export default FoodList;