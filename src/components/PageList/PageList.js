import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PageList.css';
import promo1 from '../../images/promo 1.png';
import favicon from '../../images/favicon.png';
import Logo from '../../images/logo.png'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

const PageList = () => {
    return (
        <div>
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

                    {/* middle part */}

                    <div className="middle-part col-lg-6">
                        <h3 className='m-4'><span><i class="fa-regular fa-file"></i></span> Page List</h3>
                        
                    </div>
                    
                    {/* right sidebar */}

                    <div className="right-side col-lg-3">
                        <div className="logo-fav-area">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12 col-sm-12 single-card">
                                <p className='right-sidebar-title'>Favicon</p>
                                    <div className="favicon box">
                                   
                                        <div className="row">
                                            <div className="top-fav col-12">
                                                <div className="row">
                                                    <div className="col-5">
                                                        <img src={favicon} alt="" />
                                                    </div>
                                                    <div className="col-7"></div>
                                                </div>
                                            </div>
                                            <div className="col-12 bottom-fav mt-4">
                                                <InputGroup className="mb-3">
                                                    <Form.Control
                                                        placeholder="SoftbinFav512.jpg"
                                                        aria-label="Recipient's username"
                                                        aria-describedby="basic-addon2"
                                                    />
                                                    <InputGroup.Text id="basic-addon2"><span></span> Browse</InputGroup.Text>
                                                </InputGroup>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-12 col-sm-12 single-card">
                                <h3 className='right-sidebar-title'>Logo</h3>
                                    <div className="favicon box">
                                   
                                        <div className="row">
                                            <div className="top-fav col-12">
                                                <div className="row">
                                                    <div className="col-5">
                                                        <img src={favicon} alt="" />
                                                    </div>
                                                    <div className="col-7"></div>
                                                </div>
                                            </div>
                                            <div className="col-12 bottom-fav mt-4">
                                                <InputGroup className="mb-3">
                                                    <Form.Control
                                                        placeholder="SoftbinFav512.jpg"
                                                        aria-label="Recipient's username"
                                                        aria-describedby="basic-addon2"
                                                    />
                                                    <InputGroup.Text id="basic-addon2"><span></span> Browse</InputGroup.Text>
                                                </InputGroup>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-12 col-sm-12 single-card">
                                <h3 className='right-sidebar-title'>Footer Logo</h3>
                                    <div className="favicon box">
                                        <div className="row">
                                            <div className="top-fav col-12">
                                                <div className="row">
                                                    <div className="col-5">
                                                        <img src={Logo} alt="" />
                                                    </div>
                                                    <div className="col-7"></div>
                                                </div>
                                            </div>
                                            <div className="col-12 bottom-fav ">
                                                <InputGroup className="last-input-group">
                                                    <Form.Control
                                                        placeholder="SoftbinFav512.jpg"
                                                        aria-label="Recipient's username"
                                                        aria-describedby="basic-addon2"
                                                    />
                                                    <InputGroup.Text id="basic-addon2"><span></span> Browse</InputGroup.Text>
                                                </InputGroup>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PageList;