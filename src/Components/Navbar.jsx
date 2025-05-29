import React from 'react';
import TextLogo from '../assets/Text.png';

const Navbar = (props) => {
    return (
        <nav className={`navbar ${props.mode === 'dark' ? 'dark-nav' : 'light-nav'}`}>
            <div className="navbar-container">
                <a href="#" className="navbar-title">
                    <span><img src={TextLogo} alt="icon" className='nav-logo' /></span>
                    <span className='nav-logo-title'>{props.title || 'Set Title Here'}</span>
                </a>

                <button
                    className="theme-toggle"
                    onClick={props.toggleMode}
                >
                    {props.mode === 'dark' ? '☀︎ Light Mode' : '☾ Dark Mode'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;