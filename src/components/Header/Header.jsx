import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

const Header = () => {
    return (
        <div className="holder">
            <header className="header">
                <Navbar/>
                <div className="header-content flex flex-c text-center text-white">
                    <h2 className="header-title text-capitalize">
                        Search for your book
                    </h2>
                    <br/>
                    <p className="header-text fs-18 fw-3">
                        lorem ipsum dolor sit amet, consectetur adip
                    </p>
                    <SearchBar/>
                </div>
            </header>
        </div>
    )
}

export default Header