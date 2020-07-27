import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/style.scss';
import defaultBcg from '../images/tables/actuator/table-actuator-big1.png';
import {ProductContext} from '../context';


export default class ChosenProduct extends Component {
	constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
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
            description,
            price,
			extras,
			material,
            images
        } = product;
        const [mainImg,...defaultImg] = images;
		return (
			<>
				<section id="up-down-actuator" className="up-down-table">
					<div className="container">
						<div className="row">
							<div className="col col-sm up-down-table-wrap">
								<div className="block-gallery">
									<div className="title-section">
										<h2 className="title-section__title-topic">{name}</h2>
										<div className="title-section__title-border"></div>
									</div>	
									<div className="block-gallery-image">
										<div className="col-4 col-sm-4 col-md-2 portfolio-left">
											<div id="slider-top" className="carousel-arrow">
												<i className="fas fa-caret-up caret"></i>
											</div>
											<div className="portfolio-left__carousel">
												<div id="polosa" className="portfolio-left__carousel_carousel-block">		
													<div className="carousel-foto">
														<img src={defaultImg.map((item,index) => {
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
											<img src={mainImg || this.state.defaultBcg} alt="desk" className="portfolio-right__project-big-foto"/>
										</div>
										<div className="col-8 col-sm-8 col-md-5 portfolio-price">
											<div className="portfolio-price__price-title">
												Стол для работы стоя:
											</div>
											<div className="portfolio-price__price-name">
											{slug}
											</div>
											<div className="portfolio-price__price-info">
												от <span className="price-info-spec">{price} &#8372;</span>
											</div>
											<div className="portfolio-price__news-info">
												{extras}
											</div>
											<div className="portfolio-price__price-review">
												<span class="price">Срок изготовления:</span> 10-14 рабочих дней.
											</div>
											<div className="portfolio-price__name-select">Материал столешницы:</div>		
											<ul className="extras">
												{material.map((item, index) => {
													return <li key={index}>- {item}</li>
												})}
											</ul>
											
											<div className="portfolio-price__price-characteristic">
												<Link to="#characteristics-actuator">Характеристики</Link>
											</div>			
										</div>
									</div>
								</div>
							</div>											
						</div>			
					</div>		
				</section>
			</>
		)
	}	
}


