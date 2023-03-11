import { useGlobalContext } from "../context";

function CartEmpty() {
    const { closeModal } = useGlobalContext();

    return (
        <div className="text-center">
            <h4 className="text-2xl font-semibold">Your cart is empty!</h4>
            <p className="my-2">Looks like you haven't added anything to your cart yet</p>
            <button
                className="border rounded p-2 w-full bg-orange-700 text-white lg:rounded-md lg:w-32 mt-4"
                onClick={closeModal}
            >
                Back To List
            </button>
        </div>
    );
}

export default CartEmpty;