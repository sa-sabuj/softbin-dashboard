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
                    <div className="left-side col-lg-3">
                        <ul>
                            <li>
                                <a href="">Dashboard</a>
                            </li>
                            <li><a href="">Blogs</a></li>
                            <li><a href="">Pages</a></li>
                            <li><a href="">Site Setting</a></li>
                            <li><a href="">Admin Roles</a></li>
                            <li><a href="">Events</a></li>
                            <li><a href="">Media</a></li>
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