import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

const Header = () => {
    return (
        <div className="holder">
            <header className="header">
                <Navbar/>
                <div className="header-content">
                    <h2 className="header-title">
                        Search for your book
                    </h2>
                    <br/>
                    <p className="header-text">
                        lorem ipsum dolor sit amet, consectetur adip
                    </p>
                    <SearchBar/>
                </div>
            </header>
        </div>
    )
}

export default Header