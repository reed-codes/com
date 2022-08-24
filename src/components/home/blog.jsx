import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { monthTypeOne } from '../../mock-data/data';

function Blog( props ) {
    const { blog } = props;
    const date = new Date( blog.date );

    return (
        <article className="post post-home">
            <div className="post-media">
                <Link to={ `${ process.env.PUBLIC_URL }/pages/single/${ blog.id }` }>
                    <div className="lazy-overlay bg-3"></div>
                    <LazyLoadImage
                        alt="Post"
                        src={ `${ process.env.PUBLIC_URL }/${ blog.pictures[ 0 ] }` }
                        threshold={ 500 }
                        effect="blur"
                    />
                </Link>
                <div className="post-date">
                    <span className="day">{ date.getUTCDate() }</span>
                    <span className="month">{ monthTypeOne[ date.getMonth() - 1 ] }</span>
                </div>
            </div>

            <div className="post-body">
                <h2 className="post-title">
                    <Link to={ `${ process.env.PUBLIC_URL }/pages/single/${ blog.id }` }>{ blog.title }</Link>
                </h2>
                <div className="post-content">
                    <p>{ blog.shortDetails }</p>

                    <Link to={ `${ process.env.PUBLIC_URL }/pages/single/${ blog.id }` } className="read-more">read more <i className="icon-right-open"></i></Link>
                </div>
            </div>
        </article>
    )
}

export default Blog;