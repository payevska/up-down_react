import React from 'react'
import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/style.scss';
import fotoTableForWorkUp from '../images/tables/actuator/table-actuator-desktop.png';
import fotoAccessories from '../images/accessory/pen-holder.png';
import ProductList from '../components/ProductList';

function Catalog() {
	return (
		<>
			<div id="catalog" className="catalog">
				<div className="container">
					<div className="row">
						<div className="col col-sm catalog-wrap">
							<div className="title-section">
								<h2 className="title-section__title-topic">Каталог</h2>
								<div className="title-section__title-border"></div>
							</div>	
							<div className="catalog-list">
								<ProductList/>
								{/* <div className="col-sm-6 collection">

									<Link to="/catalog/accessories" className="collection__type">
										<img src={fotoAccessories} alt="table-foto"/>				
										<div className="type-name">
											Аксессуары
										</div>
									</Link>
								</div> */}
							</div>									
						</div>
					</div>			
				</div>		
			</div>
		</>
	)
}

export default Catalog


