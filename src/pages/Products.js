import React from 'react'
import '../styles/style.scss';
import ProductContainer from '../components/ProductContainer';

const Products = () => {
	
	return (
		<>
			<div id="catalog" className="catalog">
				<div className="container">
					<div className="row">
						<div className="catalog-wrap">
							<div className="title-section">
								<h2 className="title-section__title-topic">Каталог</h2>
								<div className="title-section__title-border"></div>
							</div>	
							<div className="catalog-list">
								<ProductContainer/>
							</div>									
						</div>
					</div>			
				</div>		
			</div>
		</>
	)
}

export default Products


