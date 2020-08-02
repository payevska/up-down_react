import React from 'react'
import '../styles/style.scss';

export default function Description({ product }) {
	const{description} = product;
		
	return (
		<>
			<div id="#description" className="block-characteristics">
				<div className="title-section">
					<h2 className="title-section__title-topic">Описание</h2>
					<div className="title-section__title-border"></div>
				</div>	
				<div className="product-contain">
					<div className="product-description">
						{description}
					</div>
				</div>
			</div>
		</>
	)
}


