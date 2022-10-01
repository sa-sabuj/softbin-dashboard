import React from 'react';
import logo from '../../images/logo.png'
import accountDetail from '../../images/account-detail.png'
import './Header.css';
import userImg from '../../images/logo.png'

const Header = () => {
    return (
        <nav className='header '>
            <div className="col-lg-2">
                <div className='logo m-5'>
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="col-lg-7">
                <div className='main-menu '>
                    <input type="text" name="text" id="" placeholder='Search Setting' />
                    <a href="/mainsite">Main Site</a>
                    <a href="/news">News</a>
                    <a href="/user">User Policy</a>
                    <a href="/contact">Contact Us</a>
                    <a href="/pages">Pages</a>
                </div>
            </div>
            <div className="col-lg-3">
            <div className='nav-right row'>
                <span className='col-lg-2'><i class="fa-solid fa-bell notification"></i></span>
                <div className="user-ing col-lg-2">
                    <img src={userImg} alt="" />
                </div>
                <div className="mail-area col-lg-8">
                    <p>sasabuj321@gmail.com</p>
                    <small>Shamsul Alam Sabuj</small>
                </div>
            </div>
            </div>

        </nav>
    );
};

export default Header;