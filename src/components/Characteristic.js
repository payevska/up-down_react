import React from 'react'
import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/style.scss';


function UpDownActuator() {
	return (
		<>
			<section id="up-down-actuator" class="up-down-table">
				<div class="container">
					<div class="row">
						<div class="col col-sm up-down-table-wrap">
							<div class="block-gallery">
								<div class="title-section">
									<h2 class="title-section__title-topic">Стол для работы стоя Up-Down actuator</h2>
									<div class="title-section__title-border"></div>
								</div>	
								<div class="block-gallery-image">
									<div class="col-4 col-sm-4 col-md-2 portfolio-left">
										<div id="slider-top" class="carousel-arrow">
											<i class="fas fa-caret-up caret"></i>
										</div>
										<div class="portfolio-left__carousel">
											<div id="polosa" class="portfolio-left__carousel_carousel-block">		
												<div class="carousel-foto">
													<img src="images/tables/actuator/table-actuator-big1.png" alt="desk" class="carousel-foto__fotoProject"/>
												</div>
												<div class="carousel-foto">
													<img src="images/tables/actuator/table-actuator-big2.png" alt="desk" class="carousel-foto__fotoProject"/>
												</div>
												<div class="carousel-foto">
													<img src="images/tables/actuator/table-actuator-big3.png" alt="desk" class="carousel-foto__fotoProject"/>
												</div>
												<div class="carousel-foto">
													<img src="images/tables/actuator/table-actuator-big4.png" alt="desk" class="carousel-foto__fotoProject"/>
												</div>
												<div class="carousel-foto">
													<img src="images/tables/actuator/table-actuator-big5.png" alt="desk" class="carousel-foto__fotoProject"/>
												</div>
												<div class="carousel-foto">
													<img src="images/tables/actuator/table-actuator-big6.png" alt="desk" class="carousel-foto__fotoProject"/>
												</div>
												<div class="carousel-foto">
													<img src="images/tables/actuator/table-actuator-big7.png" alt="desk" class="carousel-foto__fotoProject"/>
												</div>
												<div class="carousel-foto">
													<img src="images/tables/actuator/table-actuator-big8.png" alt="desk" class="carousel-foto__fotoProject"/>
												</div>
											</div>
										</div>
										<div id="slider-bottom" class="carousel-arrow">
											<i class="fas fa-caret-down caret"></i>
										</div>
									</div>
									<div class="col-md-5 portfolio-right">
										<img src="images/tables/actuator/table-actuator-big1.png" alt="desk" class="portfolio-right__project-big-foto"/>
									</div>
									<div class="col-8 col-sm-8 col-md-5 portfolio-price">
										<div class="portfolio-price__price-title">
											Стол для работы стоя:
										</div>
										<div class="portfolio-price__price-name">
											Up-Down actuator
										</div>
										<div class="portfolio-price__price-info">
											от <span class="price-info-spec">6000 &#8372;</span>
										</div>
										<div class="portfolio-price__news-info">
											Бесплатное тестирование для Харькова
										</div>
										<div class="portfolio-price__price-review">
											<span class="price">Срок изготовления:</span> 10-14 рабочих дней.
										</div>
										<div class="portfolio-price__name-select">Материал столешницы:</div>		
											<div class="portfolio-price__price-select">
											<select>
												<option value="0">Сосна</option>
												<option value="1">Бук</option>
												<option value="2">Дуб</option>		    
											</select>
											</div>
										
										<div class="portfolio-price__price-characteristic">
											<Link to="#characteristics-actuator">Характеристики</Link>
										</div>			
									</div>
								</div>
							</div>
						</div>											
					</div>			
				</div>		
			</section>

			<section id="characteristics-actuator" class="characteristics">
				<div class="container">
					<div class="row">
						<div class="col col-sm characteristics-wrap">
							<div class="block-characteristics">
								<div class="title-section">
									<h2 class="title-section__title-topic">Технические характеристики</h2>
									<div class="title-section__title-border"></div>
								</div>	
								<div class="product-contain">
									<div class="col-sm-4 product-images">
											<img src="images/tables/actuator/table-actuator-charaktaristic.png" alt="desk" class="product-images__picture"/>
											<img src="images/tables/actuator/table-actuator-charaktaristic2.png" alt="desk" class="product-images__picture"/>
									</div>
									<div class="col-sm-8 characteristic-list">
										<div class="characteristic-list__product-characteristic">
											<h6 class="col-sm-8 character">Габариты в сложенном
											состоянии</h6>
											<h6 class="offset-sm-1 col-sm-3 character character-min">860х650</h6>
										</div>
										<div class="characteristic-list__product-characteristic">
											<h6 class="col-sm-8 character">Высота столешницы в сложенном виде</h6>
											<h6 class="offset-sm-1 col-sm-3 character character-min">165мм</h6>
										</div>
										<div class="characteristic-list__product-characteristic">
											<h6 class="col-sm-8 character">Высота столешницы в поднятом виде</h6>
											<h6 class="offset-sm-1 col-sm-3 character character-min">475мм</h6>
										</div>
										<div class="characteristic-list__product-characteristic">
											<h6 class="col-sm-8 character">Возможность плавной подстройки удобной высоты под свой рост в этом диапазоне</h6>
											<h6 class="offset-sm-1 col-sm-3 character character-min">да</h6>
										</div>	
										<div class="characteristic-list__product-characteristic">
											<h6 class="col-sm-8 character">Размер столешницы</h6>
											<h6 class="offset-sm-1 col-sm-3 character character-min">860х550</h6>
										</div>
										<div class="characteristic-list__product-characteristic">
											<h6 class="col-sm-8 character">Размер нижней полки</h6>
											<h6 class="offset-sm-1 col-sm-3 character character-min">640х300</h6>
										</div>
										<div class="characteristic-list__product-characteristic">
											<h6 class="col-sm-8 character">Материал столешницы и полки</h6>
											<h6 class="offset-sm-1 col-sm-3 character character-min">сосна</h6>
										</div>
										<div class="characteristic-list__product-characteristic">
											<h6 class="col-sm-8 character">Блок питания 12V</h6>
											<h6 class="offset-sm-1 col-sm-3 character character-min">в комплекте</h6>
										</div>
										<div class="characteristic-list__product-characteristic">
											<h6 class="col-sm-8 character">Масса</h6>
											<h6 class="offset-sm-1 col-sm-3 character character-min">19 кг</h6>
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

export default UpDownActuator

