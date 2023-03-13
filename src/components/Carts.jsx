import CartItem from './CartItem';
import { useGlobalContext } from '../context';

function Carts() {
    const { carts, total, closeModal, openForm, form } = useGlobalContext();

    return (
        <div>
            <div className="overflow-y-auto">
                {carts.map(cartItem => (
                    <CartItem key={cartItem.name} {...cartItem} />
                ))}
            </div>

            <div className="flex items-center justify-between mt-4 mb-2">
                <p className="font-bold text-xl">Total Amount</p>
                <p className="font-bold text-xl">${total}</p>
            </div>
            {!form &&
                <div className="mt-6 flex h-10 justify-end">
                    <button
                        className="border border-orange-700 rounded w-1/2 text-orange-700 lg:w-1/5 lg:h-9"
                        onClick={closeModal}
                    >
                        Close
                    </button>
                    <button
                        className="border border-orange-700 rounded w-1/2 bg-orange-700 text-white ml-4 lg:w-1/5 lg:h-9"
                        onClick={openForm}
                    >
                        Order
                    </button>
                </div>
            }
        </div>
    );
}

export default Carts;