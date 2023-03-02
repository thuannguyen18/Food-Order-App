import { useGlobalContext } from "../context";

function CartEmpty() {
    const { closeModal } = useGlobalContext();

    return (
        <div>
            <h1>The Cart is empty!</h1>
            <button
                className="border rounded-xl py-px w-20 border-orange-700 text-orange-700"
                onClick={closeModal}
            >
                Close
            </button>
        </div>
    );
}

export default CartEmpty;