import React from 'react'
import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/style.scss';
import fotoActuator from '../images/tables/actuator/table-actuator-desktop.png'
import fotoComputer from '../images/tables/computer/table-computer-desktop.png'
import fotoLaptop from '../images/tables/laptop/Table-laptop2.png'
import Footer from '../components/Footer';


function TablesUpDown() {
	return (
		<>
			<section id="tables" class="sub-catalogue">
				<div class="container">
					<div class="row">
						<div class="col col-sm sub-catalogue-wrap">
							<div class="title-section">
									<h2 class="title-section__title-topic">Столы для работы стоя</h2>
									<div class="title-section__title-border"></div>
								</div>	
							<div class="collection-box">
								<div class="col-sm-6 collection-product">

									<Link to="tablesupdown/updownactuator" class="collection-product__unit">
										<img class="foto-unit1" src={fotoActuator} alt="block-foto"/>				
										<div class="unit-name">
											<div class="unit-name-price">
											Стол для работы стоя <span class="unit-name-special">Up-down actuator</span>
											</div>
											<div class="unit-name-price">
												<span class="price-info-spec">6000 &#8372;</span>
											</div>
										</div>	
									</Link>
								</div>
								<div class="col-sm-6 collection-product">

									<Link to="up-down-computer.html" class="collection-product__unit">
										<img class="foto-unit2" src={fotoComputer} alt="block-foto"/>				
										<div class="unit-name">
											<div class="unit-name-price">
											Стол для работы стоя <span class="unit-name-special">Up-down computer</span>
											</div>
											<div class="unit-name-price">
												<span class="price-info-spec">1800 &#8372;</span>
											</div>
										</div>	
									</Link>
								</div>
								<div class="col-sm-6 collection-product">

									<Link to="up-down-laptop.html" class="collection-product__unit">
										<img class="foto-unit3" src={fotoLaptop} alt="block-foto"/>				
										<div class="unit-name">
											<div class="unit-name-price">
											Стол для работы стоя <span class="unit-name-special">Up-down laptop</span>
											</div>
											<div class="unit-name-price">
												<span class="price-info-spec">850 &#8372;</span>
											</div>
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

export default TablesUpDown


