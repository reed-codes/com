import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CartMenu from './partials/cart-menu';
import MainMenu from './partials/main-menu';
import LoginModal from '../features/modal/login-modal';
import SearchForm from './partials/search-form';

import { isIEBrowser } from '../../utils';

function Header( props ) {
    const { badgePos = 2 } = props;
    const [ isMenu, setIsMenu ] = useState( true );

    useEffect( () => {
        if ( window.location.pathname === ( process.env.PUBLIC_URL + '/' ) ) {
            setIsMenu( false )
        }
    }, [ window.location.pathname ] )

    function handleClick( e ) {
        e.preventDefault();
        document.querySelector( "body" ).classList.toggle( "mmenu-active" );
        e.currentTarget.classList.toggle( "active" );
        if ( isIEBrowser() && document.querySelector( "body" ).classList.contains( "mmenu-active" ) ) {
            document.querySelector( ".mmenu-active .mobile-menu-container" ).style.transform = "translateX(0)";
        }
    }

    return (
        <header className="header">
            <div className="header-top bg-primary text-uppercase">
                <div className="container">
                    <div className="header-left">
                        <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
                            <Link to="#" className="pl-0"><img src={ `${ process.env.PUBLIC_URL }/assets/images/flags/en.png` } alt="England flag" />ENG</Link>
                            <div className="header-menu">
                                <ul>
                                    <li><Link to="#"><img src={ `${ process.env.PUBLIC_URL }/assets/images/flags/en.png` } alt="England flag" />ENG</Link></li>
                                    <li><Link to="#"><img src={ `${ process.env.PUBLIC_URL }/assets/images/flags/fr.png` } alt="France flag" />FRA</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-dropdown ml-4">
                            <Link to="#">USD</Link>
                            <div className="header-menu">
                                <ul>
                                    <li><Link to="#">EUR</Link></li>
                                    <li><Link to="#">USD</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="header-right header-dropdowns ml-0 ml-sm-auto">
                        <p className="top-message mb-0 mr-lg-5 pr-3 d-none d-sm-block">Welcome To Porto!</p>
                        <div className="header-dropdown dropdown-expanded mr-3">
                            <Link to="#">Links</Link>
                            <div className="header-menu">
                                <ul>
                                    <li><Link to={ `${ process.env.PUBLIC_URL }/pages/dashboard/account` }>Track Order </Link></li>
                                    <li><Link to={ `${ process.env.PUBLIC_URL }/pages/about` }>About</Link></li>
                                    <li><Link to={ `${ process.env.PUBLIC_URL }/categories/full-width` }>Our Stores</Link></li>
                                    <li><Link to={ `${ process.env.PUBLIC_URL }/pages/blog` }>Blog</Link></li>
                                    <li><Link to={ `${ process.env.PUBLIC_URL }/pages/contact` }>Contact</Link></li>
                                    <li><Link to="#">Help &amp; FAQs</Link></li>
                                </ul>
                            </div>
                        </div>

                        <span className="separator"></span>

                        <div className="social-icons">
                            <Link to="#" className="social-icon social-instagram icon-instagram" target="_blank"></Link>
                            <Link to="#" className="social-icon social-twitter icon-twitter" target="_blank"></Link>
                            <Link to="#" className="social-icon social-facebook icon-facebook" target="_blank"></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-middle">
                <div className="container">
                    <div className="header-left col-lg-2 w-auto pl-0">
                        <button className="mobile-menu-toggler" type="button" onClick={ handleClick }>
                            <i className="icon-menu"></i>
                        </button>
                        <Link to={ `${ process.env.PUBLIC_URL }/` } className="logo">
                            <img src={ `${ process.env.PUBLIC_URL }/assets/images/demo/logo.png` } alt="Porto Logo" />
                        </Link>
                    </div>

                    <div className="header-right w-lg-max pl-0 pl-lg-2">
                        <SearchForm addClass="header-icon header-search-inline header-search-category w-lg-max mr-lg-4" iconClass="icon-search-3" btnAClass="p-0" />

                        <div className="header-contact d-none d-lg-flex align-items-center pr-xl-5 mr-3 ml-xl-5">
                            <i className="icon-phone-2"></i>
                            <h6 className="pt-1 line-height-1">
                                Call us now
                                    <Link to="#" className="d-block text-dark ls-10 pt-1">+123 5678 890</Link>
                            </h6>
                        </div>

                        <LoginModal addClass="header-icon" is_icon="true" />

                        <Link to={ `${ process.env.PUBLIC_URL }/pages/wishlist` } className="header-icon"><i className="icon-wishlist-2"></i></Link>

                        <CartMenu btnClass="btn-dark" />
                    </div>
                </div>
            </div>
            {
                isMenu ?
                    <div className="header-bottom sticky-header d-none d-lg-block">
                        <div className="container">
                            <MainMenu active={ 0 } badgePos={ badgePos } />
                        </div>
                    </div>
                    : ""
            }

        </header>
    )
}

export default Header;