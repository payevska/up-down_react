import React, { Component } from 'react';
import { ProductContext } from "../context";
import Loading from "../components/Loading";
import Product from "../components/Product"

export default class Accessories extends Component {
    static contextType = ProductContext;
    render() {
        let {loading, accessoriesProducts: products} = this.context;
        products = products.map(product => {
            return <Product key={product.id} product={product}/>
        })
        return (
            <section id="accessories" className="sub-catalogue">
				<div className="container">
					<div className="row">
						<div className="col col-sm sub-catalogue-wrap">
							<div className="title-section">
								<h2 className="title-section__title-topic">Aксессуары</h2>
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





/* import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/style.scss';

function Accessories() {
	return (
		<div>
			<section id="accessories" class="sub-catalogue">
				<div class="container">
					<div class="row">
						<div class="col col-sm sub-catalogue-wrap">
							<div class="title-section">
									<h2 class="title-section__title-topic">Aксессуары</h2>
									<div class="title-section__title-border"></div>
								</div>	
							<div class="collection-box">
								<div class="col-sm-6 collection-product">
									<Link to="#" class="collection-product__unit">
										<img class="foto-unit1" src="images/accessory/pen-holder.png" alt="block-foto"/>				
										<div class="unit-name">
											<div class="unit-name-price">
												Подставка для ручек <span class="unit-name-special">Square</span>
											</div>
											<div class="unit-name-price">
												<span class="price-info-spec">150 &#8372;</span>
											</div>
										</div>
									</Link>
								</div>
								<div class="col-sm-6 collection-product">
									<Link to="#" class="collection-product__unit">
										<img class="foto-unit2" src="images/accessory/pen-holder-prism1.png" alt="block-foto"/>				
										<div class="unit-name">
											<div class="unit-name-price">
												Подставка для ручек <span class="unit-name-special">Prism</span>
											</div>
											<div class="unit-name-price">		
												<span class="price-info-spec">150 &#8372;</span>
											</div>
										</div>
									</Link>
								</div>
								<div class="col-sm-6 collection-product">
									<Link to="#" class="collection-product__unit">
										<img class="foto-unit2" src="images/accessory/pen-holder-circle1.png" alt="block-foto"/>				
										<div class="unit-name">
											<div class="unit-name-price">
												Подставка для ручек <span class="unit-name-special">Circul</span>
											</div>
											<div class="unit-name-price">		
												<span class="price-info-spec">150 &#8372;</span>
											</div>
										</div>
									</Link>
								</div>
								<div class="col-sm-6 collection-product">
									<Link to="#" class="collection-product__unit">
										<img class="foto-unit3" src="images/accessory/mobile-holder-wood2.png" alt="block-foto"/>				
										<div class="unit-name">
											<div class="unit-name-price">
												Подставкa под мобильный телефон <span class="unit-name-special">Cubic</span>
											</div>
											<div class="unit-name-price">
												<span class="price-info-spec">70 &#8372;</span>
											</div>
										</div>
									</Link>
								</div>
								<div class="col-sm-6 collection-product">
									<Link to="#" class="collection-product__unit">
										<img class="foto-unit3" src="images/accessory/mobile-holder-wood3.png" alt="block-foto"/>				
										<div class="unit-name">
											<div class="unit-name-price">
												Подставкa под мобильный телефон <span class="unit-name-special">Cubic-slot</span>
											</div>
											<div class="unit-name-price">
												<span class="price-info-spec">70 &#8372;</span>
											</div>
										</div>
									</Link>
								</div>
								<div class="col-sm-6 collection-product">
									<Link to="#" class="collection-product__unit">
										<img class="foto-unit3" src="images/accessory/mobile-holder-metal1.png" alt="block-foto"/>				
										<div class="unit-name">
											<div class="unit-name-price">
												Подставкa под мобильный телефон <span class="unit-name-special">Tron</span>
											</div>
											<div class="unit-name-price">
												<span class="price-info-spec">140 &#8372;</span>
											</div>
										</div>
									</Link>
								</div>
							</div>									
						</div>
					</div>			
				</div>		
			</section>
		</div>
	)
}

export default Accessories

 */
