import React from 'react';
import logo from '../../images/logo.png'
import accountDetail from '../../images/account-detail.png'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div className='logo'>
                <img src={logo} alt="" /></div>
            <div className='main-menu'>
                <input type="text" name="text" id="" placeholder='Search Setting' />
                <a href="/mainsite">Main Site</a>
                <a href="/news">News</a>
                <a href="/user">User Policy</a>
                <a href="/contact">Contact Us</a>
            </div>
            <div>
                <img src={accountDetail} alt="" />
            </div>

        </nav>
    );
};

export default Header;