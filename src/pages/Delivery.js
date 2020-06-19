import React from 'react'
import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/style.scss';


function Delivery() {
	return (
		<>
			<section id="delivery" class="information">
				<div class="container">
					<div class="row">
						<div class="col-sm information-wrap">
							<div class="information-title">
								<div class="title-section">
									<h2 class="title-section__title-topic">Доставка и оплата</h2>
									<div class="title-section__title-border"></div>
								</div>
							</div>
							<div class="information-block information-block-delivery">
								<div class="information-block-delivery__para">
									<div class="information-topic">Способы доставки:</div>
									<div class="information-text">
										Доставка по Украине в Ваш город компанией-перевозчиком:
									</div>
									<ul>
										<li>"Нова пошта" (срок доставки до 3 дней)</li>
									</ul>
									<div class="information-text">
										Доставка курьером по Харькову осуществляется пн-пт с 10.00 до 17.00, сб-вс выходные.  
									</div>
								</div>						
								<div class="information-block-delivery__para">
									<div class="information-topic">Стоимость доставки:</div>
									<div class="information-text">
										По Харькову стоимость доставки курьером до 70 грн. (зависит от района). Бесплатная доставка курьером возможна по г. Харькову при заказе на сумму от 500 грн.
									</div>
									<div class="information-text">
										Стоимость доставки компанией-перевозчиком "Нова пошта" рассчитывает "Нова пошта".
									</div>
									<div class="information-text">
										Оплатить стоимость товара вы можете при получении в отделении "Нова пошта", когда просмотрите его и будете уверены, что вас все устраивает.
									</div>
									<div class="information-text">
										При получении товара в отделении "Нова пошта", берётся дополнительная оплата за услугу наложенного платежа (комиссия за перевод денег продавцу). Стоимость наложенного платежа составляет 25 грн. + 2% от стоимости товара. Вы можете внести 100% предоплату за товар на карту ПриватБанка нашего магазина.
									</div>
									<div class="information-text">
										Посмотрите, где находится ближайшее к Вам отделение "Нова пошта" в вашем городе: <Link to="https://novaposhta.ua/timetable">Адреса отделений "Нова пошта"</Link>
									</div>
									<div class="information-text">
										Отследить свою посылку по номеру товарно-накладного чека вы можете здесь: <Link to="https://novaposhta.ua/tracking">Отследить посылку.</Link>
									</div>
								</div>
								<div class="information-block-delivery__para">
									<div class="information-topic">Способы оплаты:</div>
									<ul>
										<li>Оплата наличными курьеру при получении товара(г. Харькова).</li>
										<li>наложенным платежом (при получении товара)</li>
										<li>предоплата на наш счет в Приватбанке (в таком случае, Вы не платите за перевод денег обратно, и таким образом экономите в среднем 50 грн.)</li>
									</ul>
								</div>
								<div class="information-block-delivery__para">
									<div class="information-topic">
									Для консультации и заказа звоните или пишите:
									</div>
									<ul>
										<li>тел.: <span>050-922-33-76</span></li>
										<li>e-mail: <span class="letter">sales@und.com.ua
										</span></li>
									</ul>
								</div>
							</div>
						</div>
					</div>			
				</div>
			</section>
		</>
	)
}

export default Delivery


