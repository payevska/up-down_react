import React from 'react'
import {Container} from 'react-bootstrap';
import '../styles/style.scss';
import fotoUpDownTable from '../images/tables/actuator/table-actuator-about.png';

function About() {
    return (
        <>
			<section-3 id="about">
				<div class="container">
					<div class="row">
						<div class="col-sm block-about">	
							<div class="block-left">
								<div class="block-left__foto-about">
									<img src={fotoUpDownTable} alt="table-foto" class="table-foto-about"/>
								</div>
							</div>

							<div class="block-right">			
								<div class="block-right__title-about">Стол Up-and-Down</div>
								<div class="block-right__subtitle-about">Для чего он предназначен?</div>
/								<div class="block-right__text-about">
									Cтол Up-and-Down предназначен для комбинированной работы как сидя, так и стоя. Представляемая модель устанавливается на основной рабочий стол. Благодаря своим компактным размерам он легко разместится на Вашем столе даже в небольшом офисе. Расположите на верхней столешнице монитор, а на нижней полке клавиатуру. При помощи кнопки Вы сможете поднять все необходимое оборудование на комфортную для вас высоту, не прилагая никаких усилий.
								</div>
								
								<div class="block-right__box-botton-about">
									<form>
									<input type="button" value="Каталог" onClick='location.href="catalog.html"'/>
									</form>
								</div>
							</div>							
						</div>			
					</div>
				</div>			
			</section-3>
        </>
    )
}

export default About
