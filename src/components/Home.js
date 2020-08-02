import React from 'react'
import iconDown from '../images/icons/button-down-home.png';
import '../styles/style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
					<a href="/#Video-review" className="btn-primary">
					3D обзор
					</a>
						{/* <input type="button" value="3D обзор" /> */}
						<a href="/#about" id="scroll-home" className="scroll-link">
							{element}
							<img src={iconDown} alt="button-down" className="scroll-link__link-arrow"/>
						</a>
					</div>		
				</div>		
			</section-1>
        </>
    )
}

export default Home
