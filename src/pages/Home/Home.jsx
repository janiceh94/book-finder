import React from 'react';
import Header from '../../components/Header/Header';
/* outlet used in parent route element to render 
    their child route elements
*/
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <main>
            <Header />
            <Outlet />
        </main>
    )
}

export default Home