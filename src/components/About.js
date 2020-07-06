import React from 'react'
import {Container} from 'react-bootstrap';
import '../styles/style.scss';
import fotoUpDownTable from '../images/tables/actuator/table-actuator-about.png';

function About() {
    return (
        <>
			<div id="about" className="about">
				<div className="container">
					<div className="row">
						<div className="col-sm block-about">	
							<div className="block-left">
								<div className="block-left__foto-about">
									<img src={fotoUpDownTable} alt="table-foto" className="table-foto-about"/>
								</div>
							</div>

							<div className="block-right">			
								<div className="block-right__title-about">Стол Up-and-Down</div>
								<div className="block-right__subtitle-about">Для чего он предназначен?</div>
								<div className="block-right__text-about">
									Cтол Up-and-Down предназначен для комбинированной работы как сидя, так и стоя. Представляемая модель устанавливается на основной рабочий стол. Благодаря своим компактным размерам он легко разместится на Вашем столе даже в небольшом офисе. Расположите на верхней столешнице монитор, а на нижней полке клавиатуру. При помощи кнопки Вы сможете поднять все необходимое оборудование на комфортную для вас высоту, не прилагая никаких усилий.
								</div>
								
								<div className="block-right__box-botton-about">
									<form>
									<input type="button" value="Каталог" onClick='location.href="catalog.html"'/>
									</form>
								</div>
							</div>							
						</div>			
					</div>
				</div>			
			</div>
        </>
    )
}

export default About
