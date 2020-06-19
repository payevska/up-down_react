import React from 'react'
import {Container} from 'react-bootstrap';
import '../styles/style.scss';
import { Link } from 'react-router-dom';

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
							<div className="fotogallery-gallery">
								<div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
									<Link to="images/gallery/picture1-desktop.png" data-fancybox="gallery">
										<img class="img-fluid" src="images/gallery/picture1-desktop.png" alt="table-foto"/>
									</Link>	
								</div>
								<div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
									<a data-fancybox="gallery" href="images/gallery/picture2-desktop.png">
										<img class="img-fluid" src="images/gallery/picture2-desktop.png" alt="table-foto"/>
									</a>
								</div>
								<div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
									<a data-fancybox="gallery" href="images/gallery/picture3-desktop.png">
										<img className="img-fluid" src="images/gallery/picture3-desktop.png" alt="table-foto"/>
									</a>
								</div>
								<div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
									<a data-fancybox="gallery" href="images/gallery/picture5-desktop.png">
										<img className="img-fluid" src="images/gallery/picture5-desktop.png" alt="table-foto"/>
									</a>
								</div>
								<div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
									<a data-fancybox="gallery" href="images/gallery/picture6-desktop.png">
										<img className="img-fluid" src="images/gallery/picture6-desktop.png" alt="table-foto"/>
									</a>
								</div>
								<div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
									<a data-fancybox="gallery" href="images/gallery/picture9-desktop.png">
										<img className="img-fluid" src="images/gallery/picture9-desktop.png" alt="table-foto"/>
									</a>
								</div>
								<div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
									<a data-fancybox="gallery" href="images/gallery/picture1-laptop.png">
										<img className="img-fluid" src="images/gallery/picture1-laptop.png" alt="table-foto"/>
									</a>
								</div>
								<div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
									<a data-fancybox="gallery" href="images/gallery/picture2-laptop.png">
										<img className="img-fluid" src="images/gallery/picture2-laptop.png" alt="table-foto"/>
									</a>
								</div>
								<div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
									<a data-fancybox="gallery" href="images/gallery/picture3-laptop.png">
										<img className="img-fluid" src="images/gallery/picture3-laptop.png" alt="table-foto"/>
									</a>
								</div>
								<div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
									<a data-fancybox="gallery" href="images/gallery/picture4-laptop.png">
										<img className="img-fluid" src="images/gallery/picture4-laptop.png" alt="table-foto"/>
									</a>
								</div>
								<div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
									<a data-fancybox="gallery" href="images/gallery/picture10-desktop.png">
										<img className="img-fluid" src="images/gallery/picture10-desktop.png" alt="table-foto"/>
									</a>
								</div>
								<div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
									<a data-fancybox="gallery" href="images/gallery/picture12-desktop.png">
										<img className="img-fluid" src="images/gallery/picture12-desktop.png" alt="table-foto"/>
									</a>
								</div>
							</div>										
						</div>
					</div>			
				</div>
			</section-5>
        </>
    )
}

export default Fotogallery
