import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import {HiOutlineMenuAlt3} from 'react-icons/hi';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);const handleNavbar = () => setToggleMenu(!toggleMenu);

    return (
        <nav className = 'navbar' id = 'navbar'>
            <div className = 'container navbar-content flex'>
                <div className = 'brand-and-toggler flex flex-sb'>
                    <Link to ='/' className = 'navbar-brand flex'>
                        <span className = 'text-uppercase fw-7 fs-24 ls-1'>
                            BookFinder
                        </span>
                    </Link>
                    <button type = 'button' className = 'navbar-toggler-btn' onClick={handleNavbar}>
                        <HiOutlineMenuAlt3 size = {35} style = {{color: `${toggleMenu ? "#fff" : "#010101"}`}}/>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar