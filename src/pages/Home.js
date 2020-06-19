import React from 'react'
import {Container} from 'react-bootstrap';
import iconDown from '../images/icons/button-down-home.png';

import { Link } from 'react-router-dom';
import '../styles/style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VideoReview from '../components/VideoReview';
import About from '../components/About';
import Blog from '../components/Blog';
import Fotogallery from '../components/Fotogallery';


function Home() {
	const element = <FontAwesomeIcon icon={['fas', 'circle']} size="5x" />
	return (
		<>
			<section-1 id="home">
				<div className="col-sm home">
					<div className="container">				
						<div className="row">
							<div className="col-sm home-wrap">
								<div className="col-sm main">
									<div className="main__main-title">
										<h1 className="main__main-title_title">Стол для работы стоя</h1>
										<h2 className="main__main-title_topic">Забота о Вашем здоровье</h2>
									</div>
								</div>				
							</div>
						</div>	
					</div>
					<div className="home__home-overlay">
						<input type="button" value="3D обзор" onClick='location.href="#Video-review"'/>
						<Link to="#about" id="scroll-home" className="scroll-link">
							{element}
							<img src={iconDown} alt="button-down" className="scroll-link__link-arrow"/>
						</Link>
					</div>		
				</div>		
			</section-1>
			<VideoReview/>
			<About/>
			<Blog/>
			<Fotogallery/>
		</>
	);
}

export default Home

