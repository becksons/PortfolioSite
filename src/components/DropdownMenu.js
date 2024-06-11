import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.css';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleClick  = () =>{
        toggleDropdown()

    };

    return (
        <div className="dropdown-menu-container">
            <button onClick={handleClick} className="dropdown-button">Menu</button>
            <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
                <li className="dropdown-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="dropdown-item">
                    <Link to="/virtualspace">Virtual Space</Link>
                </li>
                <li className="dropdown-item">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default DropdownMenu;
