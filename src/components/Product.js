import React from 'react'
import {Link} from 'react-router-dom'
import defaultImg from '../images/tables/actuator/table-actuator-desktop.png';
import PropTypes from 'prop-types';


export default function Product({ product }) {
    
    const{name,slug,images,price} = product;
    
    return (
        <>
            <Link to={`/catalog/${slug}`} className="col-sm-4 collection-product__unit">
                <img src={images[0] || defaultImg} alt="product"/>				
                <div className="unit-name">
                    <div className="unit-name-price">
                        {name}
                    </div>
                    <div className="unit-name-price">
                        <span className="price-info-spec">{price} &#8372;</span>
                    </div>
                </div>	
            </Link>
        </>
    );
}

Product.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
}; 


