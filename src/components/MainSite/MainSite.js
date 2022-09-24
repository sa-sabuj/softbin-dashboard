import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './MainSite.css';

const MainSite = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="left-side col-lg-2">
                        <ul>
                            <li>
                               
                               <a href=""><span><FontAwesomeIcon icon="fa-solid fa-border-none" /></span> Dashboard</a>
                            </li>
                            <li><a href="">Blogs</a></li>
                            <li><a href="">Pages</a></li>
                            <li><a href="">Site Setting</a></li>
                            <li><a href="">Admin Roles</a></li>
                            <li><a href="">Events</a></li>
                            <li><a href="">Media</a></li>
                        </ul>
                    </div>
                    <div className="middle-part col-lg-7"></div>
                    <div className="right-side col-lg-3    "></div>
                </div>
            </div>
        </div>
    );
};

export default MainSite;