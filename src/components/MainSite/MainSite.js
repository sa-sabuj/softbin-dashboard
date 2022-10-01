import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './MainSite.css';
import promo1 from '../../images/promo 1.png';
import favicon from '../../images/favicon.png';
import Logo from '../../images/logo.png'
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
                    {/* Middle part */}
                    <div className="middle-part col-lg-6">
                        <div className="row d-flex">
                            <div className="col-6">
                                <h3 className='m-5'><span><i class="fa-sharp fa-solid fa-gear"></i></span> Site Settings</h3>

                            </div>
                            <div className="col-6">
                                <p className='mt-5 '>Fields marked with *  must be filled</p>
                            </div>
                        </div>

                        <Form className='m-4'>

                            <Row className="mb-5">

                                <Form.Group as={Col} controlId="formGridSiteName">
                                    <Form.Label>Site Name </Form.Label>
                                    <Form.Control type="Name" placeholder="Softbin Ltd  " className='bg-light' />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridTagline">
                                    <Form.Label>Tagline</Form.Label>
                                    <Form.Control type="password" placeholder="Think out of the circle." className='bg-light'/>
                                </Form.Group>
                            </Row>
                            <Row className="mb-5">

                                <Form.Group as={Col} controlId="formGridTelephone">
                                    <Form.Label>Telephone</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your official Number" className='bg-light' />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridMobileNumber">
                                    <Form.Label>Mobile Number</Form.Label>
                                    <Form.Control type="text " placeholder="01720583469"className='bg-light' />
                                </Form.Group>
                            </Row>
                            <Row className="mb-5">

                                <Form.Group as={Col} controlId="formGridSlider">
                                    <Form.Label>Slider</Form.Label>
                                    <Form.Control type="text" placeholder="Homepage Slider" className='bg-light'/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="text " placeholder="softbinbd@gmail.com" className='bg-light'/>
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-5" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your Address" className='bg-light'/>
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formGridAddress2">
                                <Form.Label>Site Description</Form.Label>
                                <Form.Control type="text " className='bg-light' placeholder="Softbin was born as a web-based organization in 2004 in order to provide a forum for networking of Biotechnologists with origins from Bangladesh. " />
                            </Form.Group>
                            <Row className="mb-5">

                                <Form.Group as={Col} controlId="formGridSiteName">
                                    <Form.Label>Copyright</Form.Label>
                                    <Form.Control type="text" placeholder="Softbin © 2021 All Right Reserved " className='bg-light'/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridTagline">
                                    <Form.Label>Terms</Form.Label>
                                    <Form.Control type="password" placeholder="www.softbin.com/terms.html" className='bg-light'/>
                                </Form.Group>
                            </Row>

                            <Row className="mb-5">
                                <p>Social Media</p>
                                <Form.Group as={Col} controlId="formGridCity">

                                    <Form.Control placeholder='facebook.com/softbinbd' className='bg-light'/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">

                                    <Form.Control placeholder='twittercom/softbinbd ' className='bg-light'/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">

                                    <Form.Control placeholder='youtube.com/softbinbd' className='bg-light'/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">

                                    <Form.Control placeholder='youtube.com/softbinbd' className='bg-light'/>
                                </Form.Group>
                            </Row>
                            <div class="d-grid  d-flex justify-content-md-end ">
                                <Button className='form-btn' type="submit">
                                    <span><i class="fa-solid fa-circle-check m-2"></i></span> Update Settings
                                </Button>
                            </div>
                        </Form>
                    </div>
                    {/* right side */}
                    <div className="right-side col-lg-3">
                        <div className="logo-fav-area">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12 col-sm-12 single-card">
                                    <div className="row ">
                                        <div className="col-6">
                                            <h6 className='right-sidebar-title'>Favicon</h6>

                                        </div>
                                        <div className="col-6">
                                            <p className='right-sidebar-image-size'>Size should be <span>512 X 512px</span></p>
                                        </div>
                                    </div>
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
                                                    <InputGroup.Text className='bg-success ' id="basic-addon2"><span className='input-group-text text-white bg-success '>Browse</span> </InputGroup.Text>
                                                </InputGroup>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-12 col-sm-12 single-card">
                                <div className="row mt-5">
                                        <div className="col-6">
                                            <h6 className='right-sidebar-title'>Logo</h6>

                                        </div>
                                        <div className="col-6">
                                            <p className='right-sidebar-image-size'>Size should be <span>512 X 512px</span></p>
                                        </div>
                                    </div>
                                    <div className="favicon box">

                                        <div className="row">
                                            <div className="top-fav col-12">
                                                <div className="row ">
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
                                                    <InputGroup.Text className='bg-success ' id="basic-addon2"><span className='input-group-text text-white bg-success '>Browse</span></InputGroup.Text>
                                                </InputGroup>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-12 col-sm-12 single-card">
                                <div className="row mt-5">
                                        <div className="col-6">
                                            <h6 className='right-sidebar-title'>Footer Logo</h6>

                                        </div>
                                        <div className="col-6">
                                            <p className='right-sidebar-image-size'>Size should be <span>512 X 512px</span></p>
                                        </div>
                                    </div>
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
                                                    <InputGroup.Text className='bg-success ' id="basic-addon2"><span className='input-group-text text-white bg-success '>Browse</span></InputGroup.Text>
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
    );
};

export default MainSite;