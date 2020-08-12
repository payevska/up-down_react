import React, { Component } from 'react';
import { ProductContext } from "../context";
import Loading from "../components/Loading";
import Product from "../components/Product"

export default class LegsTable extends Component {
    static contextType = ProductContext;
    render() {
        let {loading, legsProducts: products} = this.context;
        products = products.map(product => {
            return <Product key={product.id} product={product}/>
        })
		return (
			<section id="accessories" className="sub-catalogue">
				<div className="container">
					<div className="row">
						<div className="col col-sm sub-catalogue-wrap">
							<div className="title-section">
								<h2 className="title-section__title-topic">Опоры для стола</h2>
								<div className="title-section__title-border"></div>
							</div>	
							<div className="col-sm collection-box">
							{loading ? <Loading/> : products}
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}






/* import React, { Component } from 'react';
import { ProductContext } from "../context";
import Product from '../components/Product';
import {withProductConsumer} from '../context'

function TablesUpDown({context}) {
	const {loading,sortedRooms, type, products} = context;
	return (
		<section id="accessories" className="sub-catalogue">
			<div className="container">
				<div className="row">
					<div className="col col-sm sub-catalogue-wrap">
						<div className="title-section">
							<h2 className="title-section__title-topic">Столы для работы стоя</h2>
							<div className="title-section__title-border"></div>
						</div>	
						<div className="collection-box">
							
							{products.map((item,index) => {
								return <Product key={index} product={item}/>;
							})}
							
						</div>
					</div>
				</div>
			</div>
		</section>
	)
	
    
}


export default withProductConsumer(TablesUpDown);




import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/style.scss';
import fotoActuator from '../images/tables/actuator/table-actuator-desktop.png'
import fotoComputer from '../images/tables/computer/table-computer-desktop.png'
import fotoLaptop from '../images/tables/laptop/Table-laptop2.png'


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

export default TablesUpDown;
*/
