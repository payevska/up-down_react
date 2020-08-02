import React from 'react'
import '../styles/style.scss';



export default function Characteristic({product}) {
	const{images,name,characteristics} = product;

		return (
			<>
				<div id="#characteristic" className="block-characteristics">
					<div className="title-section">
						<h2 className="title-section__title-topic">Технические характеристики</h2>
						<div className="title-section__title-border"></div>
					</div>	
					<div className="product-contain">
						<div className="col-sm-4 product-images">
						
								<img src={images[9]} alt={name} className="product-images__picture"/>
								<img src={images[10]} alt={name} className="product-images__picture"/>
						</div>
						<div className="col-sm-8 characteristic-list">
							
								{characteristics.map((item,index) => {
									return <div key={index} className="characteristic-list__product-characteristic">
											<h6 key={index.id} className="col-sm-8 character">{item.information}</h6>
											<h6 key={index.id} className="offset-sm-1 col-sm-3 character character-min">{item.figures}</h6>
										</div>
									
								})}
								{/* <h6 className="col-sm-8 character">{sizeDown}</h6>
								<h6 className="offset-sm-1 col-sm-3 character character-min">860х650</h6> */}
							
							{/* <div className="characteristic-list__product-characteristic">
								<h6 className="col-sm-8 character">Высота столешницы в сложенном виде</h6>
								<h6 className="offset-sm-1 col-sm-3 character character-min">165мм</h6>
							</div>
							<div className="characteristic-list__product-characteristic">
								<h6 className="col-sm-8 character">Высота столешницы в поднятом виде</h6>
								<h6 className="offset-sm-1 col-sm-3 character character-min">475мм</h6>
							</div>
							<div className="characteristic-list__product-characteristic">
								<h6 className="col-sm-8 character">Возможность плавной подстройки удобной высоты под свой рост в этом диапазоне</h6>
								<h6 className="offset-sm-1 col-sm-3 character character-min">да</h6>
							</div>	
							<div className="characteristic-list__product-characteristic">
								<h6 className="col-sm-8 character">Размер столешницы</h6>
								<h6 className="offset-sm-1 col-sm-3 character character-min">860х550</h6>
							</div>
							<div className="characteristic-list__product-characteristic">
								<h6 className="col-sm-8 character">Размер нижней полки</h6>
								<h6 className="offset-sm-1 col-sm-3 character character-min">640х300</h6>
							</div>
							<div className="characteristic-list__product-characteristic">
								<h6 className="col-sm-8 character">Материал столешницы и полки</h6>
								<h6 className="offset-sm-1 col-sm-3 character character-min">сосна</h6>
							</div>
							<div className="characteristic-list__product-characteristic">
								<h6 className="col-sm-8 character">Блок питания 12V</h6>
								<h6 className="offset-sm-1 col-sm-3 character character-min">в комплекте</h6>
							</div>
							<div className="characteristic-list__product-characteristic">
								<h6 className="col-sm-8 character">Масса</h6>
								<h6 className="offset-sm-1 col-sm-3 character character-min">19 кг</h6>
							</div> */}				
						</div>
					</div>
				</div>
			</>
		)
	
}


