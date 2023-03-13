import { BsFillCartFill } from 'react-icons/bs';
import { useGlobalContext } from '../context';

function Navbar() {
    const { openModal, amount } = useGlobalContext();

    return (
        <div className="bg-orange-800">
            <nav className="flex justify-between items-center h-16 px-6 fixed inset-0 lg:container lg:mx-auto lg:h-20 lg:static bg-orange-800">
                <h1 className="text-white text-3xl">ReactMeals</h1>
                <button
                    className="text-white flex justify-between items-center relative lg:bg-orange-900 lg:w-44 lg:py-2 lg:px-4 lg:rounded-md"
                    onClick={openModal}
                >
                    <BsFillCartFill className="text-3xl lg:text-2xl" />
                    <p className="font-semibold text-base hidden lg:block lg:text-md">Your Cart</p>
                    <span className="text-sm rounded-xl bg-orange-600 w-6 absolute lg:static leading-40 bottom-2/4 left-2/4 lg:text-base lg:inset-0 lg:pr-px">
                        {amount}
                    </span>
                </button>
            </nav>
        </div>
    );
}

export default Navbar;