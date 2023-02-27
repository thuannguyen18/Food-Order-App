import React from 'react';

import Banner from './components/Banner';
import FoodList from './components/FoodList';
import Loading from './components/Loading';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import { useGlobalContext } from './context';

function App() {
    const { loading, isModal } = useGlobalContext();

    return (
        <div className="bg-neutral-700">
            <Navbar />
            <div className="flex justify-center items-center">
                <Banner />
            </div>
            <div className="flex justify-center items-center">
                {loading ? <Loading /> : <FoodList />}
            </div>
            {isModal && <Modal />}
        </div>
    );
}

export default App;
