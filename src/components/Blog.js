import React from 'react'
import '../styles/style.scss';

function Blog() {
    return (
        <>
			<div id="blog" className="information">
				<div className="container">
					<div className="row">
						<div className="col-sm information-wrap">
							<div className="information-title">
								<div className="title-section">
									<h2 className="title-section__title-topic">Блог</h2>
									<div className="title-section__title-border"></div>
								</div>
								<div className="information-title__topic-article">Рекомендуем статью</div>
								<div className="information-title__topic-article">"Беречь здоровье во время работы"</div>
							</div>
							<div className="information-block blog-block">
								<div className="blog-text">
									В современном обществе сидячая работа охватывает все больше сфер деятельности. Особенно в динамично развивающейся сфере IT. Так как данная профессия охватывает в большинстве своей молодежь то именно она попадает под удар недугов, связанных с сидячей работой. Основной вред работы сидя это гиподинамия. То есть недостаток двигательной активности может привести к проблемам с кровообращением и с работой опорно-двигательного аппарата, дыхательной и сердечно-сосудистой системы. Так же могут возникнуть проблемы с пищеварением и репродуктивной функцией организма.
								</div>	
								<div className="blog-text">
									Поэтому необходимо чередовать работу сидя с работой стоя. Для людей, работающих с компьютером лучшим выходом есть столы с регулируемой высотой. Однако на данный момент стоимость таких столов довольно высока. Альтернативой таким столам является так называемый Standing Desk Convertor представленный в нашем магазине. Он характеризуется небольшими размерами, массой и приемлемой ценой. Благодаря своим компактным размерам его можно взять в офис или установить на домашний стол если вы работаете дома.
								</div>					
							</div>
						</div>
					</div>			
				</div>
			</div>
        </>
    )
}

export default Blog
