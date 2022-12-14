import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PageList.css';
import promo1 from '../../images/promo 1.png';
import favicon from '../../images/favicon.png';
import Logo from '../../images/logo.png'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import vector from '../../images/Vector.png'
import vector2 from '../../images/Vector2.png'

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
                            <div class="custom-card">
                                <div class="custom-card-header">
                                    <div class="heading">
                                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 0C0.897 0 0 0.897 0 2V18C0 19.103 0.897 20 2 20H8.03906C8.12806 19.357 8.41191 18.76 8.87891 18.293L9.17188 18H2V2H9V7H14V10.3496C14.627 10.1266 15.298 9.99805 16 9.99805V6L10 0H2ZM16 12C13.791 12 12 13.791 12 16C12 16.586 12.1324 17.1396 12.3594 17.6406L10.293 19.707C9.90197 20.098 9.90197 20.7311 10.293 21.1211L10.8789 21.707C11.2689 22.098 11.902 22.098 12.293 21.707L14.3594 19.6406C14.8604 19.8676 15.414 20 16 20C18.209 20 20 18.209 20 16C20 15.414 19.8676 14.8604 19.6406 14.3594L17 17L15 15L17.6406 12.3594C17.1396 12.1324 16.586 12 16 12Z" fill="#FEC601" />
                                        </svg>
                                        <h1>Page List</h1>
                                    </div>
                                    <div class="header-rigth">
                                        <form action="" class="search-bar">
                                            <div class="form-group">
                                                <input type="text" name="" id="" placeholder="Search Items" />

                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="custom-card-body">
                                    <ul class="theme-table category-table">
                                        <li class="table-header">
                                            <p>Title</p>
                                            <p>Published Date</p>
                                            <p>Status</p>
                                            <p>Category</p>
                                            <p>Actions</p>
                                        </li>
                                        <li class="table-row">
                                            <p>Homepage</p>
                                            <p>18 May 2022</p>
                                            <p>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.78323 1.37747C7.24607 1.37747 5.74344 1.83329 4.46534 2.68729C3.18724 3.54129 2.19109 4.7551 1.60284 6.17525C1.0146 7.5954 0.860687 9.15808 1.16057 10.6657C1.46045 12.1733 2.20067 13.5582 3.2876 14.6451C4.37453 15.732 5.75937 16.4722 7.26699 16.7721C8.7746 17.072 10.3373 16.9181 11.7574 16.3298C13.1776 15.7416 14.3914 14.7454 15.2454 13.4673C16.0994 12.1893 16.5552 10.6866 16.5552 9.14946C16.5528 7.08895 15.7332 5.11352 14.2762 3.65652C12.8192 2.19952 10.8437 1.3799 8.78323 1.37747ZM8.78323 15.5084C7.52555 15.5084 6.29613 15.1354 5.25041 14.4367C4.20469 13.738 3.38966 12.7448 2.90837 11.5829C2.42708 10.421 2.30115 9.14241 2.54651 7.9089C2.79187 6.6754 3.39749 5.54235 4.2868 4.65304C5.17611 3.76373 6.30916 3.15811 7.54267 2.91275C8.77617 2.66739 10.0547 2.79331 11.2167 3.2746C12.3786 3.75589 13.3717 4.57093 14.0705 5.61665C14.7692 6.66236 15.1421 7.89179 15.1421 9.14946C15.1403 10.8354 14.4697 12.4517 13.2776 13.6438C12.0855 14.8359 10.4691 15.5065 8.78323 15.5084Z" fill="#00A389" />
                                                    <path d="M11.8382 6.86236L8.09776 10.2912L6.45645 8.64991C6.39128 8.58243 6.31331 8.52861 6.22711 8.49158C6.14091 8.45455 6.0482 8.43506 5.95438 8.43424C5.86057 8.43343 5.76753 8.4513 5.6807 8.48683C5.59387 8.52235 5.51498 8.57482 5.44864 8.64116C5.3823 8.7075 5.32984 8.78638 5.29431 8.87321C5.25879 8.96005 5.24091 9.05308 5.24173 9.1469C5.24254 9.24071 5.26203 9.33343 5.29906 9.41963C5.33609 9.50583 5.38992 9.58379 5.4574 9.64897L7.57703 11.7686C7.70579 11.8974 7.87929 11.9715 8.06135 11.9754C8.24341 11.9794 8.41997 11.9129 8.55418 11.7898L12.7935 7.9038C12.9316 7.77713 13.0137 7.60078 13.0218 7.41356C13.0298 7.22633 12.9632 7.04356 12.8366 6.90546C12.7099 6.76735 12.5335 6.68522 12.3463 6.67714C12.1591 6.66906 11.9763 6.73568 11.8382 6.86236Z" fill="#00A389" />
                                                </svg>
                                                Published
                                            </p>
                                            <p>Main</p>
                                            <p>
                                                <a href="#" class="action-btn delete">
                                                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2 0C0.897 0 0 0.897 0 2V18C0 19.103 0.897 20 2 20H8.07227L10.0723 18H2V2H9V7H14V14.0723L16 12.0723V6L10 0H2ZM8 9V12H11C11 10.343 9.641 9.031 8 9ZM7 10C5.343 10 4 11.343 4 13C4 14.657 5.343 16 7 16C8.657 16 9.969 14.641 10 13H7V10ZM18.207 13C18.0792 13 17.951 13.049 17.8535 13.1465L16.8535 14.1465L18.8535 16.1465L19.8535 15.1465C20.0485 14.9515 20.0485 14.6345 19.8535 14.4395L18.5605 13.1465C18.4625 13.049 18.3349 13 18.207 13ZM16.1465 14.8535L11 20V22H13L18.1465 16.8535L16.1465 14.8535Z" fill="#F4694C" />
                                                    </svg>
                                                </a>
                                                <a href="#" class="action-btn edit">
                                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 0L5 1H0V3H1V18C1 19.0931 1.90694 20 3 20H13C14.0931 20 15 19.0931 15 18V3H16V1H14H11L10 0H6ZM3 3H13V18H3V3ZM5.70703 6.29297L4.29297 7.70703L6.58594 10L4.29297 12.293L5.70703 13.707L8 11.4141L10.293 13.707L11.707 12.293L9.41406 10L11.707 7.70703L10.293 6.29297L8 8.58594L5.70703 6.29297Z" fill="#1AD598" />
                                                    </svg>
                                                </a>
                                            </p>
                                        </li>
                                        <li class="table-row">
                                            <p>Contact</p>
                                            <p>18 May 2022</p>
                                            <p>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.78323 1.37747C7.24607 1.37747 5.74344 1.83329 4.46534 2.68729C3.18724 3.54129 2.19109 4.7551 1.60284 6.17525C1.0146 7.5954 0.860687 9.15808 1.16057 10.6657C1.46045 12.1733 2.20067 13.5582 3.2876 14.6451C4.37453 15.732 5.75937 16.4722 7.26699 16.7721C8.7746 17.072 10.3373 16.9181 11.7574 16.3298C13.1776 15.7416 14.3914 14.7454 15.2454 13.4673C16.0994 12.1893 16.5552 10.6866 16.5552 9.14946C16.5528 7.08895 15.7332 5.11352 14.2762 3.65652C12.8192 2.19952 10.8437 1.3799 8.78323 1.37747ZM8.78323 15.5084C7.52555 15.5084 6.29613 15.1354 5.25041 14.4367C4.20469 13.738 3.38966 12.7448 2.90837 11.5829C2.42708 10.421 2.30115 9.14241 2.54651 7.9089C2.79187 6.6754 3.39749 5.54235 4.2868 4.65304C5.17611 3.76373 6.30916 3.15811 7.54267 2.91275C8.77617 2.66739 10.0547 2.79331 11.2167 3.2746C12.3786 3.75589 13.3717 4.57093 14.0705 5.61665C14.7692 6.66236 15.1421 7.89179 15.1421 9.14946C15.1403 10.8354 14.4697 12.4517 13.2776 13.6438C12.0855 14.8359 10.4691 15.5065 8.78323 15.5084Z" fill="#00A389" />
                                                    <path d="M11.8382 6.86236L8.09776 10.2912L6.45645 8.64991C6.39128 8.58243 6.31331 8.52861 6.22711 8.49158C6.14091 8.45455 6.0482 8.43506 5.95438 8.43424C5.86057 8.43343 5.76753 8.4513 5.6807 8.48683C5.59387 8.52235 5.51498 8.57482 5.44864 8.64116C5.3823 8.7075 5.32984 8.78638 5.29431 8.87321C5.25879 8.96005 5.24091 9.05308 5.24173 9.1469C5.24254 9.24071 5.26203 9.33343 5.29906 9.41963C5.33609 9.50583 5.38992 9.58379 5.4574 9.64897L7.57703 11.7686C7.70579 11.8974 7.87929 11.9715 8.06135 11.9754C8.24341 11.9794 8.41997 11.9129 8.55418 11.7898L12.7935 7.9038C12.9316 7.77713 13.0137 7.60078 13.0218 7.41356C13.0298 7.22633 12.9632 7.04356 12.8366 6.90546C12.7099 6.76735 12.5335 6.68522 12.3463 6.67714C12.1591 6.66906 11.9763 6.73568 11.8382 6.86236Z" fill="#00A389" />
                                                </svg>
                                                Published
                                            </p>
                                            <p>Main</p>
                                            <p>
                                                <a href="#" class="action-btn delete">
                                                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2 0C0.897 0 0 0.897 0 2V18C0 19.103 0.897 20 2 20H8.07227L10.0723 18H2V2H9V7H14V14.0723L16 12.0723V6L10 0H2ZM8 9V12H11C11 10.343 9.641 9.031 8 9ZM7 10C5.343 10 4 11.343 4 13C4 14.657 5.343 16 7 16C8.657 16 9.969 14.641 10 13H7V10ZM18.207 13C18.0792 13 17.951 13.049 17.8535 13.1465L16.8535 14.1465L18.8535 16.1465L19.8535 15.1465C20.0485 14.9515 20.0485 14.6345 19.8535 14.4395L18.5605 13.1465C18.4625 13.049 18.3349 13 18.207 13ZM16.1465 14.8535L11 20V22H13L18.1465 16.8535L16.1465 14.8535Z" fill="#F4694C" />
                                                    </svg>
                                                </a>
                                                <a href="#" class="action-btn edit">
                                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 0L5 1H0V3H1V18C1 19.0931 1.90694 20 3 20H13C14.0931 20 15 19.0931 15 18V3H16V1H14H11L10 0H6ZM3 3H13V18H3V3ZM5.70703 6.29297L4.29297 7.70703L6.58594 10L4.29297 12.293L5.70703 13.707L8 11.4141L10.293 13.707L11.707 12.293L9.41406 10L11.707 7.70703L10.293 6.29297L8 8.58594L5.70703 6.29297Z" fill="#1AD598" />
                                                    </svg>
                                                </a>
                                            </p>
                                        </li>
                                        <li class="table-row">
                                            <p>Events for 2022 February On..</p>
                                            <p>18 May 2022</p>
                                            <p>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.78323 1.37747C7.24607 1.37747 5.74344 1.83329 4.46534 2.68729C3.18724 3.54129 2.19109 4.7551 1.60284 6.17525C1.0146 7.5954 0.860687 9.15808 1.16057 10.6657C1.46045 12.1733 2.20067 13.5582 3.2876 14.6451C4.37453 15.732 5.75937 16.4722 7.26699 16.7721C8.7746 17.072 10.3373 16.9181 11.7574 16.3298C13.1776 15.7416 14.3914 14.7454 15.2454 13.4673C16.0994 12.1893 16.5552 10.6866 16.5552 9.14946C16.5528 7.08895 15.7332 5.11352 14.2762 3.65652C12.8192 2.19952 10.8437 1.3799 8.78323 1.37747ZM8.78323 15.5084C7.52555 15.5084 6.29613 15.1354 5.25041 14.4367C4.20469 13.738 3.38966 12.7448 2.90837 11.5829C2.42708 10.421 2.30115 9.14241 2.54651 7.9089C2.79187 6.6754 3.39749 5.54235 4.2868 4.65304C5.17611 3.76373 6.30916 3.15811 7.54267 2.91275C8.77617 2.66739 10.0547 2.79331 11.2167 3.2746C12.3786 3.75589 13.3717 4.57093 14.0705 5.61665C14.7692 6.66236 15.1421 7.89179 15.1421 9.14946C15.1403 10.8354 14.4697 12.4517 13.2776 13.6438C12.0855 14.8359 10.4691 15.5065 8.78323 15.5084Z" fill="#00A389" />
                                                    <path d="M11.8382 6.86236L8.09776 10.2912L6.45645 8.64991C6.39128 8.58243 6.31331 8.52861 6.22711 8.49158C6.14091 8.45455 6.0482 8.43506 5.95438 8.43424C5.86057 8.43343 5.76753 8.4513 5.6807 8.48683C5.59387 8.52235 5.51498 8.57482 5.44864 8.64116C5.3823 8.7075 5.32984 8.78638 5.29431 8.87321C5.25879 8.96005 5.24091 9.05308 5.24173 9.1469C5.24254 9.24071 5.26203 9.33343 5.29906 9.41963C5.33609 9.50583 5.38992 9.58379 5.4574 9.64897L7.57703 11.7686C7.70579 11.8974 7.87929 11.9715 8.06135 11.9754C8.24341 11.9794 8.41997 11.9129 8.55418 11.7898L12.7935 7.9038C12.9316 7.77713 13.0137 7.60078 13.0218 7.41356C13.0298 7.22633 12.9632 7.04356 12.8366 6.90546C12.7099 6.76735 12.5335 6.68522 12.3463 6.67714C12.1591 6.66906 11.9763 6.73568 11.8382 6.86236Z" fill="#00A389" />
                                                </svg>
                                                Published
                                            </p>
                                            <p>Main</p>
                                            <p>
                                                <a href="#" class="action-btn delete">
                                                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2 0C0.897 0 0 0.897 0 2V18C0 19.103 0.897 20 2 20H8.07227L10.0723 18H2V2H9V7H14V14.0723L16 12.0723V6L10 0H2ZM8 9V12H11C11 10.343 9.641 9.031 8 9ZM7 10C5.343 10 4 11.343 4 13C4 14.657 5.343 16 7 16C8.657 16 9.969 14.641 10 13H7V10ZM18.207 13C18.0792 13 17.951 13.049 17.8535 13.1465L16.8535 14.1465L18.8535 16.1465L19.8535 15.1465C20.0485 14.9515 20.0485 14.6345 19.8535 14.4395L18.5605 13.1465C18.4625 13.049 18.3349 13 18.207 13ZM16.1465 14.8535L11 20V22H13L18.1465 16.8535L16.1465 14.8535Z" fill="#F4694C" />
                                                    </svg>
                                                </a>
                                                <a href="#" class="action-btn edit">
                                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 0L5 1H0V3H1V18C1 19.0931 1.90694 20 3 20H13C14.0931 20 15 19.0931 15 18V3H16V1H14H11L10 0H6ZM3 3H13V18H3V3ZM5.70703 6.29297L4.29297 7.70703L6.58594 10L4.29297 12.293L5.70703 13.707L8 11.4141L10.293 13.707L11.707 12.293L9.41406 10L11.707 7.70703L10.293 6.29297L8 8.58594L5.70703 6.29297Z" fill="#1AD598" />
                                                    </svg>
                                                </a>
                                            </p>
                                        </li>

                                    </ul>
                                </div>
                            </div>


                        </div>

                        {/* right sidebar */}

                        <div className="right-side col-lg-3">
                        <div className="activity-area ">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12 col-sm-12 single-card">
                                <p className='right-sidebar-activity-title'>Activity Logs</p>
                                    <div className="side-card">
                                        <div className="row">
                                            <div className="top-fav col-12">
                                                <div className="row">
                                                    
                                                    <div className="col-10 card-text">
                                                        <h5>Abu Faisal Ahmed Added  ???Contact??? Page</h5>
                                                        <p><small>18:45,  25 Jan 2022</small></p>
                                                    </div>
                                                    <div className="col-2 pt-3">
                                                        <img src={vector} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 bottom-fav mt-4">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-12 col-sm-12 single-card">
                               
                                    <div className="side-card">
                                   
                                        <div className="row">
                                            <div className="top-fav col-12">
                                                <div className="row">
                                                    <div className="col-10 card-text">
                                                    <h5>Abu Faisal Ahmed Added  ???Contact??? Page</h5>
                                                        <p><small>18:45,  25 Jan 2022</small></p>
                                                    </div>
                                                    <div className="col-2 pt-3">
                                                        <img src={vector2} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 bottom-fav mt-4">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-12 col-sm-12 single-card">
                                
                                    <div className="side-card">
                                        <div className="row">
                                            <div className="top-fav col-12">
                                                <div className="row">
                                                    
                                                <div className="col-10 card-text">
                                                    <h5>Abu Faisal Ahmed Added  ???Contact??? Page</h5>
                                                        <p><small>18:45,  25 Jan 2022</small></p>
                                                    </div>
                                                    <div className="col-2 pt-3">
                                                        <img src={vector2} alt="" />
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
            </div>
        </div>
    );
};

export default PageList;