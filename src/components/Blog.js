import React from 'react'
import {Container} from 'react-bootstrap';
import '../styles/style.scss';

function Blog() {
    return (
        <>
			<section-4 id="blog" class="information">
				<div class="container">
					<div class="row">
						<div class="col-sm information-wrap">
							<div class="information-title">
								<div class="title-section">
									<h2 class="title-section__title-topic">Блог</h2>
									<div class="title-section__title-border"></div>
								</div>
								<div class="information-title__topic-article">Рекомендуем статью</div>
								<div class="information-title__topic-article">"Беречь здоровье во время работы"</div>
							</div>
							<div class="information-block blog-block">
								<div class="blog-text">
									В современном обществе сидячая работа охватывает все больше сфер деятельности. Особенно в динамично развивающейся сфере IT. Так как данная профессия охватывает в большинстве своей молодежь то именно она попадает под удар недугов, связанных с сидячей работой. Основной вред работы сидя это гиподинамия. То есть недостаток двигательной активности может привести к проблемам с кровообращением и с работой опорно-двигательного аппарата, дыхательной и сердечно-сосудистой системы. Так же могут возникнуть проблемы с пищеварением и репродуктивной функцией организма.
								</div>	
								<div class="blog-text">
									Поэтому необходимо чередовать работу сидя с работой стоя. Для людей, работающих с компьютером лучшим выходом есть столы с регулируемой высотой. Однако на данный момент стоимость таких столов довольно высока. Альтернативой таким столам является так называемый Standing Desk Convertor представленный в нашем магазине. Он характеризуется небольшими размерами, массой и приемлемой ценой. Благодаря своим компактным размерам его можно взять в офис или установить на домашний стол если вы работаете дома.
								</div>					
							</div>
						</div>
					</div>			
				</div>
			</section-4>
        </>
    )
}

export default Blog
