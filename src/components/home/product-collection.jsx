import React from 'react';
import { connect } from 'react-redux';

import ProductTypeFive from '../features/product/product-type-five';
import ProductTypeFour from '../features/product/product-type-four';
import Carousel from '../features/carousel';

import { productFilter } from '../../utils';
import { owlSetting1 } from '../../utils/settings';

function ProductCollection( props ) {
    const { isGrid = true, type } = props;
    let products = productFilter( props.products, type );

    return (
        isGrid ?
            products.slice( 0, 3 ).map( ( product, index ) => (
                <ProductTypeFour addClass="left-details product-widget mb-3" product={ product } key={ index } />
            ) )
            :
            <Carousel addClass="products-slider dots-top m-b-1 pb-1" settings={ owlSetting1 }>
                {
                    products.slice( 0, 5 ).map( ( product, index ) => (
                        <ProductTypeFive addClass="inner-quickview inner-icon" product={ product } key={ index } />
                    ) )
                }
            </Carousel>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, {} )( ProductCollection )