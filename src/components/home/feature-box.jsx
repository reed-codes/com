import React from 'react';

import { removeXSSAttacks } from '../../utils';

function FeatureBox( props ) {
    const { feature } = props;

    return (
        <div className="col-md-4">
            <div className="feature-box px-sm-3 feature-box-simple text-center">
                <i className={ feature.icon }></i>

                <div className="feature-box-content" dangerouslySetInnerHTML={ removeXSSAttacks( feature.content ) }>
                </div>
            </div>
        </div>
    )
}

export default FeatureBox;