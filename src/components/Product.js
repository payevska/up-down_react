import React from 'react'
import {Link} from 'react-router-dom'
import fotoTableForWorkUp from '../images/tables/actuator/table-actuator-desktop.png';

function Product({product}) {
    const{name,slug,images,price} = product;
    return (
        <>
            <div className="col-sm-6 collection">
                <Link to="/catalog/tablesupdown" className="collection__type">
                    <img src={fotoTableForWorkUp} alt="table-foto"/>				
                    <div className="type-name">
                        Столы для работы стоя
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Product
