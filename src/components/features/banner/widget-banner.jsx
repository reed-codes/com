import React from 'react';
import { Link } from 'react-router-dom';

export default function WidgetBanner() {
    return (
        <div className="widget widget-banners px-5 pb-5 text-center">
            <div className="banner d-flex flex-column align-items-center">
                <h3 className="badge-sale bg-primary d-flex flex-column align-items-center justify-content-center text-uppercase"><em className="pt-3 ls-0">Sale</em>Many Item</h3>
                <h4 className="sale-text font1 text-uppercase m-b-3">45<sup>%</sup><sub>off</sub></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link to="#" className="btn btn-dark btn-md font1">View Sale</Link>
            </div>
        </div>
    )
}