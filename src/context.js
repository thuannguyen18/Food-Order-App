import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isModal, setIsModal] = useState(false);

    const fetchMeals = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals');
            const data = await response.json();
            setMeals(data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchMeals();
    }, []);

    // meal's datas
    console.log(meals);

    return (
        <AppContext.Provider value={{ meals, loading, isModal, setIsModal }}>
            {children}
        </AppContext.Provider>
    );
}

function useGlobalContext() {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext };