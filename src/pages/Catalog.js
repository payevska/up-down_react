import React from 'react'
import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/style.scss';
import fotoTableForWorkUp from '../images/tables/actuator/table-actuator-desktop.png';
import fotoAccessories from '../images/accessory/pen-holder.png';

function Catalog() {
	return (
		<>
			<section id="catalog" class="catalog">
				<div class="container">
					<div class="row">
						<div class="col col-sm catalog-wrap">
							<div class="title-section">
								<h2 class="title-section__title-topic">Каталог</h2>
								<div class="title-section__title-border"></div>
							</div>	
							<div class="catalog-list">
								<div class="col-sm-6 collection">
									<Link to="/catalog/tablesupdown" class="collection__type">
										<img src={fotoTableForWorkUp} alt="table-foto"/>				
										<div class="type-name">
											Столы для работы стоя
										</div>
									</Link>
								</div>
								<div class="col-sm-6 collection">

									<Link to="/catalog/accessories" class="collection__type">
										<img src={fotoAccessories} alt="table-foto"/>				
										<div class="type-name">
											Аксессуары
										</div>
									</Link>
								</div>
								
							</div>									
						</div>
					</div>			
				</div>		
			</section>
		</>
	)
}

export default Catalog


