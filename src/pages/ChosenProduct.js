import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.scss';
import defaultBcg from '../images/tables/actuator/table-actuator-big1.png';
import {ProductContext} from '../context';
import Characteristic from '../components/Characteristic';
import Description from '../components/Description';
import CenterMode from '../components/CenterMode';


export default class ChosenProduct extends Component {
	constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
			defaultBcg,
			showDescription: false,
			showCharacteristic: false
		}
		this.onButtonDescriptionClick = this.onButtonDescriptionClick.bind(this);
		this.onButtonCharacteristicClick = this.onButtonCharacteristicClick.bind(this);
	}

	onButtonDescriptionClick() {
		this.setState(state => ({
			showDescription: true,
			showCharacteristic: false
		}));
	}

	onButtonCharacteristicClick() {
		this.setState(state => ({
			showDescription: false,
			showCharacteristic: true
		}));
	}
	
    static contextType = ProductContext;
    //componentDidMount() {}
	render() {
		const {getProduct} = this.context;
        const product = getProduct(this.state.slug);
        if(!product) {
            return (
                <div className="error">
                    <h3>no such product could be found</h3>
                    <Link to="/catalog" className="btn-primary">
                        back to products
                    </Link>
                </div>
            );
        }
        const {
			name,
			slug,
           /*  description, */
            price,
			extras,
			material,
			addition,
			available
        } = product;
		return (
			<>
				<section id="up-down-actuator" className="up-down-table">
					<div className="container">
						<div className="row">
							<div className="col col-sm up-down-table-wrap">
								<div className="block-gallery">
									<div className="title-section">
										<h2 className="title-section__title-topic">{name} {slug}</h2>
										<div className="title-section__title-border"></div>
									</div>	
									<div className="block-gallery-image">
										<div className="col-4 col-sm-4 col-md-7 slider-product">
											<CenterMode product={product}/>
										{/* <div className="col-4 col-sm-4 col-md-2 portfolio-left">
											<div id="slider-top" className="carousel-arrow">
												<i className="fas fa-caret-up caret"></i>
											</div>
											<div className="portfolio-left__carousel">
												<div id="polosa" className="portfolio-left__carousel_carousel-block">		
													<div className="carousel-foto">
														 <img src={images.map((item,index) => {
															return (
																<img key={index} src={item} alt={name}/>
															);
														})}
														alt="desk" className="carousel-foto__fotoProject"/>
													</div>
												</div>
											</div>
											<div id="slider-bottom" className="carousel-arrow">
												<i className="fas fa-caret-down caret"></i>
											</div>
										</div>
										<div className="col-md-5 portfolio-right">
											<img src={images[1] || this.state.defaultBcg} alt="desk" className="portfolio-right__project-big-foto"/>
										</div> */}
										</div>
										<div className="col-8 col-sm-8 col-md-5 portfolio-price">
											<div className="portfolio-price__price-info price-title">
												{name}:
											</div>
											<div className="portfolio-price__price-info name-product">
											{slug}
											</div>
											<div className="portfolio-price__price-info">
												от <span className="price-info-spec">{price} &#8372;</span>
											</div>
											<div className="portfolio-price__price-info">
												Наличие:  <span className="price">{available}</span>
											</div>
											<div className="portfolio-price__price-info news-info">
												{extras}
											</div>
											<div className="portfolio-price__price-info">
												Срок изготовления: <span className="price">10-14 рабочих дней.</span>
											</div>
											<div className="portfolio-price__price-info">Материал {addition}:</div>		
												<ul className="extras">
													{material.map((item, index) => {
														return <li key={index}>- {item}</li>
													})}
												</ul>
											<div className="portfolio-price__price-characteristic">
												<button onClick={this.onButtonDescriptionClick}>Описание</button>
												<button onClick={this.onButtonCharacteristicClick}>Характеристики</button>
											</div>
										</div>
									</div>
									{this.state.showDescription ? <Description product={product}/> : null}

									{this.state.showCharacteristic ? <Characteristic product={product}/> : null}
								</div>
							</div>											
						</div>			
					</div>		
				</section>
			</>
		)
	}	
}


