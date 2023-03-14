import { createContext, useContext, useEffect, useReducer } from "react";
import reducer, { initState } from "./reducer";

const AppContext = createContext();

function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState);

    const fetchMeals = async () => {
        dispatch({ type: 'LOADING' });
        try {
            const response = await fetch('https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals');
            const data = await response.json();
            dispatch({ type: 'DISPLAY_FOODS', payload: data });
        } catch (error) {
            console.log(error);
        }
    };

    const submitData = async (values) => {
        dispatch({ type: 'SUBMIT' });
        const response = await fetch('https://625a91bf0ab4013f94a2d9a8.mockapi.io/orders/101', {
            method: 'DELETE'
        });
        const data = await response.json();
        console.log(data);
        try {
            const response = await fetch('https://625a91bf0ab4013f94a2d9a8.mockapi.io/orders', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(values)
            });
            const data = await response.json();
            console.log(data);
            dispatch({ type: 'END_SUBMIT' });
        } catch (error) {
            console.log(error);
        }
    }

    const addToCart = (id, name, price, count) => {
        const cartItem = { id, name, price, count: +count };
        dispatch({ type: 'ADD_CART', payload: cartItem });
    };

    const increase = (id) => {
        dispatch({ type: 'INCREASE', payload: id });
    };

    const decrease = (id) => {
        dispatch({ type: 'DECREASE', payload: id });
    };

    const openModal = () => {
        dispatch({ type: 'OPEN_MODAL' });
    }

    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' });
    }

    const openForm = () => {
        dispatch({ type: 'OPEN_FORM' });
    }

    const closeForm = () => {
        dispatch({ type: 'CLOSE_FORM' });
    }

    useEffect(() => {
        fetchMeals();
    }, []);

    useEffect(() => {
        dispatch({ type: 'GET_TOTALS' });
    }, [state.carts]);

    return (
        <AppContext.Provider
            value={{
                ...state,
                addToCart,
                increase,
                decrease,
                fetchMeals,
                submitData,
                openModal,
                openForm,
                closeModal,
                closeForm
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

function useGlobalContext() {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext };