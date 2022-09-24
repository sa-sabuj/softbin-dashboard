import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './MainSite.css';
import promo1 from '../../images/promo 1.png'
import { Button } from 'react-bootstrap';

const MainSite = () => {
    return (
        <div>
            <div className='main-body '>
                <div className="row">
                    <div className=" left-side col-lg-3">
                        <ul>
                            <li>
                                <span>
                                    <i className="fa-sharp fa-solid fa-grip table-calls"></i>
                                </span>
                                <a href="">Dashboard</a>
                            </li>
                            <li>
                                <span><i className="fa-sharp fa-solid fa-message table-calls"></i></span><a href="">Blogs</a></li>
                            <li><span><i className="fa-solid fa-file table-calls"></i></span><a href="">Pages</a></li>
                            <li><span><i className="fa-solid fa-laptop table-calls"></i></span><a href="">Site Setting</a></li>
                            <li><span><i className="fa-sharp fa-solid fa-person-shelter table-calls"></i></span><a href="">Admin Roles</a></li>
                            <li><span><i className="fa-solid fa-bell table-calls"></i></span><a href="">Events</a></li>
                            <li><span><i className="fa-solid fa-film table-calls"></i></span><a href="">Media</a></li>
                        </ul>
                        <div className="promo">
                            <img src={promo1} alt="" />
                        </div>

                        <div className="log-out">
                            <button className='btn btn-center'>Sign Out</button>
                        </div>
                    </div>
                    <div className="middle-part col-lg-6"></div>
                    <div className="right-side col-lg-3    "></div>
                </div>
            </div>
        </div>
    );
};

export default MainSite;