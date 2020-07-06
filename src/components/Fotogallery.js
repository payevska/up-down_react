import React from 'react'
import {Container} from 'react-bootstrap';
import '../styles/style.scss';
import GallaryFancyBox from './GallaryFancyBox';

function Fotogallery() {
    return (
        <>
			<section-5 id="fotogallery">
				<div className="container">
					<div className="row">
						<div className="col col-sm col-md col-lg fotogallery-wrap">		
							<div className="fotogallery-title">
								<div className="title-section">
									<h2 className="title-section__title-topic">Фотогаллерея</h2>
									<div className="title-section__title-border"></div>
								</div>
								<div className="fotogallery-title__topic-text">Наша продукция</div>
							</div>
							<GallaryFancyBox/>					
						</div>
					</div>			
				</div>
			</section-5>
        </>
    )
}

export default Fotogallery
