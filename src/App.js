import React from 'react';

import Alert from './components/Alert';
import Banner from './components/Banner';
import FoodList from './components/FoodList';
import Loading from './components/Loading';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import { useGlobalContext } from './context';

function App() {
    const { loading, modal, alert } = useGlobalContext();

    return (
        <div className="bg-neutral-700 bg-contain" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/top-view-delicious-food-arrangement_23-2149235811.jpg?w=740&t=st=1677861489~exp=1677862089~hmac=43d05403df084474fc52273e1f4a218a6ef287431753db00879f2d1ace122de9)'}}>
            <Navbar />
            <div className="flex justify-center items-center">
                <Banner />
            </div>
            <div className="flex justify-center items-center">
                {loading ? <Loading /> : <FoodList />}
            </div> 
            {modal && <Modal />}
            {alert && <Alert />}
        </div>
    );
}

export default App;
