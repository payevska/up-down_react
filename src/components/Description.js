import React, { Component } from 'react'
import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/style.scss';


export default class Description extends Component {
	render() {
		return (
			<>
				<div id="#description" className="block-characteristics">
					<div className="title-section">
						<h2 className="title-section__title-topic">Описание</h2>
						<div className="title-section__title-border"></div>
					</div>	
					<div className="product-contain">
						<div className="product-description">
							Данный стол предназначен для комбинированной работы как сидя, так и стоя. Представляемая модель устанавливается на основной рабочий стол.  Благодаря своим компактным размерам он легко разместится на Вашем столе даже в небольшом офисе. Расположив на верхней столешнице монитор, а на полке клавиатуру  при помощи кнопки Вы можете поднять все необходимое оборудование на комфортную для вас высоту, не прилагая никаких усилий.
						</div>
					</div>
				</div>
			</>
		)
	}
}


