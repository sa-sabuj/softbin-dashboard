import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './MainSite.css';
import promo1 from '../../images/promo 1.png';
import favicon from '../../images/favicon.png'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

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
                    <div className="middle-part col-lg-6">
                        <h3 className='m-4'><span><i class="fa-sharp fa-solid fa-gear"></i></span> Site Settings</h3>
                        <Form className='m-4'>

                            <Row className="mb-4">

                                <Form.Group as={Col} controlId="formGridSiteName">
                                    <Form.Label>Site Name </Form.Label>
                                    <Form.Control type="Name" placeholder="Softbin Ltd  " />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridTagline">
                                    <Form.Label>Tagline</Form.Label>
                                    <Form.Control type="password" placeholder="Think out of the circle." />
                                </Form.Group>
                            </Row>
                            <Row className="mb-4">

                                <Form.Group as={Col} controlId="formGridTelephone">
                                    <Form.Label>Telephone</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your official Number" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridMobileNumber">
                                    <Form.Label>Mobile Number</Form.Label>
                                    <Form.Control type="text " placeholder="01720583469" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-4">

                                <Form.Group as={Col} controlId="formGridSlider">
                                    <Form.Label>Slider</Form.Label>
                                    <Form.Control type="text" placeholder="Homepage Slider" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="text " placeholder="softbinbd@gmail.com" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-4" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your Address" />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formGridAddress2">
                                <Form.Label>Site Description</Form.Label>
                                <Form.Control type="text " placeholder="Softbin was born as a web-based organization in 2004 in order to provide a forum for networking of Biotechnologists with origins from Bangladesh. " />
                            </Form.Group>
                            <Row className="mb-4">

                                <Form.Group as={Col} controlId="formGridSiteName">
                                    <Form.Label>Copyright</Form.Label>
                                    <Form.Control type="text" placeholder="Softbin © 2021 All Right Reserved " />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridTagline">
                                    <Form.Label>Terms</Form.Label>
                                    <Form.Control type="password" placeholder="www.softbin.com/terms.html" />
                                </Form.Group>
                            </Row>

                            <Row className="mb-4">
                                <p>Social Media</p>
                                <Form.Group as={Col} controlId="formGridCity">

                                    <Form.Control placeholder='facebook.com/softbinbd' />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">

                                    <Form.Control placeholder='twittercom/softbinbd ' />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">

                                    <Form.Control placeholder='youtube.com/softbinbd' />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">

                                    <Form.Control placeholder='youtube.com/softbinbd' />
                                </Form.Group>
                            </Row>
                            <div class="d-grid  d-flex justify-content-md-end">
                                <Button className='form-btn' type="submit">
                                    <span><i class="fa-solid fa-circle-check m-2"></i></span> Update Settings
                                </Button>
                            </div>
                        </Form>
                    </div>
                    <div className="right-side col-lg-3">
                        <div className="logo-fav-area">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12 col-sm-12">
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
                                <div className="col-lg-12 col-md-12 col-12 col-sm-12">

                                </div>
                                <div className="col-lg-12 col-md-12 col-12 col-sm-12">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSite;