import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ProductCollection from "./product-collection";
import FeatureBox from './feature-box';
import Sidebar from './sidebar/sidebar';
import Carousel from '../features/carousel';
import NewsletterModal from '../features/modal/newsletter-modal';

import { demoData } from '../../mock-data/data';
import { owlSetting3, owlSetting4 } from '../../utils/settings';

function HomePage () {
    useEffect( () => {
        document.querySelector( '.menu' ) && document.querySelector( '.menu' ).firstChild.classList.add( 'active' );
        document.querySelector( '.mobile-menu' ) && document.querySelector( '.mobile-menu' ).firstChild.classList.add( 'active' );
    } )

    return (
        <>
            <Helmet>
                <title>Porto React Ecommerce - Demo 6 Page </title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - Demo 6 Page</h1>

            <div className="main">
                <div className="container mb-2">
                    <div className="info-boxes-container row row-joined mb-2 font2">
                        {
                            demoData.info.map( ( info, index ) => (
                                <div className="info-box info-box-icon-left col-lg-4" key={ "info" + index }>
                                    <i className={ info.name }></i>
                                    <div className="info-box-content">
                                        <h4>{ info.title }</h4>
                                        <p className="text-body">{ info.desc }</p>
                                    </div>
                                </div>
                            ) )
                        }
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-9">
                            <Carousel addClass="home-slider owl-carousel-lazy mb-2">
                                <div className="home-slide home-slide1 banner banner-md-vw banner-sm-vw">
                                    <img className="owl-lazy slide-bg" src={ `${process.env.PUBLIC_URL}/assets/images/demo/lazy.png` } data-src={ `${process.env.PUBLIC_URL}/assets/images/demo/slider/slide-1.png` } alt="slider" />
                                    <div className="banner-layer banner-layer-middle">
                                        <h4 className="text-white pb-4 mb-0">Find the Boundaries. Push Through!</h4>
                                        <h2 className="text-white mb-0">Summer Sale</h2>
                                        <h3 className="text-white text-uppercase m-b-3">70% Off</h3>
                                        <h5 className="text-white text-uppercase d-inline-block mb-0 ls-n-20 align-text-bottom">Starting At <b className="coupon-sale-text bg-secondary text-white d-inline-block">$<em className="align-text-top">199</em>99</b></h5>
                                        <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` } className="btn btn-dark btn-md ls-10">Shop Now!</Link>
                                    </div>
                                </div>

                                <div className="home-slide home-slide2 banner banner-md-vw banner-sm-vw">
                                    <img className="owl-lazy slide-bg" src={ `${process.env.PUBLIC_URL}/assets/images/demo/lazy.png` } data-src={ `${process.env.PUBLIC_URL}/assets/images/demo/slider/slide-2.jpg` } alt="slider" />
                                    <div className="banner-layer banner-layer-middle text-uppercase">
                                        <h4 className="m-b-2">Over 200 products with discounts</h4>
                                        <h2 className="m-b-3">Great Deals</h2>
                                        <h5 className="d-inline-block mb-0 align-top mr-5">Starting At <b>$<em>299</em>99</b></h5>
                                        <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` } className="btn btn-dark btn-md ls-10">Get Yours!</Link>
                                    </div>
                                </div>

                                <div className="home-slide home-slide3 banner banner-md-vw banner-sm-vw">
                                    <img className="owl-lazy slide-bg" src={ `${process.env.PUBLIC_URL}/assets/images/demo/lazy.png` } data-src={ `${process.env.PUBLIC_URL}/assets/images/demo/slider/slide-3.jpg` } alt="slider" />
                                    <div className="banner-layer banner-layer-middle text-uppercase">
                                        <h4 className="m-b-2">Up to 70% off</h4>
                                        <h2 className="m-b-3">New Arrivals</h2>
                                        <h5 className="d-inline-block mb-0 align-top mr-5">Starting At <b>$<em>299</em>99</b></h5>
                                        <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` } className="btn btn-dark btn-md ls-10">Get Yours!</Link>
                                    </div>
                                </div>
                            </Carousel>

                            <Carousel addClass="banners-container m-b-2" settings={ owlSetting3 }>
                                <div className="banner banner1 banner-hover-shadow mb-2">
                                    <figure>
                                        <div className="lazy-overlay bg-3"></div>
                                        <LazyLoadImage
                                            alt="banner"
                                            src={ `${process.env.PUBLIC_URL}/assets/images/demo/banners/banner-1.jpg` }
                                            threshold={ 500 }
                                            effect="blur"
                                            width={ 280 }
                                            height={ 150 }
                                        />
                                    </figure>
                                    <div className="banner-layer banner-layer-middle">
                                        <h3 className="m-b-2">Porto Watches</h3>
                                        <h4 className="m-b-4 text-primary"><sup className="text-dark"><del>20%</del></sup>30%<sup>OFF</sup></h4>
                                        <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` } className="text-dark text-uppercase ls-10">Shop Now</Link>
                                    </div>
                                </div>
                                <div className="banner banner2 text-uppercase banner-hover-shadow mb-2">
                                    <figure>
                                        <div className="lazy-overlay bg-3"></div>
                                        <LazyLoadImage
                                            alt="banner"
                                            src={ `${process.env.PUBLIC_URL}/assets/images/demo/banners/banner-2.jpg` }
                                            threshold={ 500 }
                                            effect="blur"
                                            width={ 280 }
                                            height={ 150 }
                                        />
                                    </figure>
                                    <div className="banner-layer banner-layer-middle text-center pt-2">
                                        <h3 className="m-b-1 ls-n-20">Deal Promos</h3>
                                        <h4 className="m-b-4 text-body">Starting at $99</h4>
                                        <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` } className="text-dark text-uppercase ls-10">Shop Now</Link>
                                    </div>
                                </div>
                                <div className="banner banner3 banner-hover-shadow mb-2">
                                    <figure>
                                        <div className="lazy-overlay bg-3"></div>
                                        <LazyLoadImage
                                            alt="banner"
                                            src={ `${process.env.PUBLIC_URL}/assets/images/demo/banners/banner-3.jpg` }
                                            threshold={ 500 }
                                            effect="blur"
                                            width={ 280 }
                                            height={ 150 }
                                        />
                                    </figure>
                                    <div className="banner-layer banner-layer-middle text-right">
                                        <h3 className="m-b-2">Handbags</h3>
                                        <h4 className="mb-3 pb-1 text-secondary text-uppercase">Starting at $99</h4>
                                        <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` } className="text-dark text-uppercase ls-10">Shop Now</Link>
                                    </div>
                                </div>
                            </Carousel>

                            <h2 className="section-title ls-n-10 m-b-4">Featured Products</h2>

                            <ProductCollection type="featured" isGrid={ false } />

                            <Carousel addClass="brands-slider images-center mb-3" settings={ owlSetting4 }>
                                {
                                    demoData.brands.map( ( item, index ) => (
                                        <div key={ index }>
                                            <div className="lazy-overlay bg-transparent"></div>
                                            <LazyLoadImage
                                                alt="brand"
                                                src={ `${process.env.PUBLIC_URL}/${item}` }
                                                threshold={ 500 }
                                                effect="blur"
                                                width={ 140 }
                                                height={ 60 }
                                            />
                                        </div>
                                    ) )
                                }
                            </Carousel>

                            <div className="row products-widgets">
                                <div className="col-sm-6 col-md-4 pb-4 pb-md-0">
                                    <div className="product-column">
                                        <h3 className="section-sub-title ls-n-20">Top Rated Products</h3>
                                        <ProductCollection type="rated" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4">
                                    <div className="product-column">
                                        <h3 className="section-sub-title ls-n-20">Best Selling Products</h3>
                                        <ProductCollection type="top" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4">
                                    <div className="product-column">
                                        <h3 className="section-sub-title ls-n-20">Latest Products</h3>
                                        <ProductCollection type="latest" />
                                    </div>
                                </div>
                            </div>

                            <hr className="mt-1 mb-4" />

                            <div className="feature-boxes-container">
                                <div className="row">
                                    {
                                        demoData.feature.map( ( item, index ) => (
                                            <FeatureBox feature={ item } key={ index } />
                                        ) )
                                    }
                                </div>
                            </div>
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </div>

            <NewsletterModal />
        </>
    )

}

export default HomePage;