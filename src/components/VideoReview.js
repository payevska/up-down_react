import React from 'react'
import '../styles/style.scss';
import videoUpDownTable from '../images/1080x1080_insta.mp4';
import { Link } from 'react-router-dom';

function VideoReview() {
    return (
        <>
            <section-2 id="Video-review">
				<div className="container">
					<div className="row">
						<div className="col-sm col-md review-wrap">
							<div className="title-section">
								<h2 className="title-section__title-topic">3D обзор</h2>
								<div className="title-section__title-border"></div>
							</div>

							<video className="video-table" controls="controls" poster="images/tables/actuator/table-actuator-big1.png" preload="">
							<source src={videoUpDownTable} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
							</video>						

							<div className="box-button-review">
								{/* <input type="button" value="Характеристики" onClick='location.href="up-down-actuator.html#characteristics-actuator"'/> */}
								<Link to={`/catalog/up-down-actuator`} className="btn-primary">Подробнее</Link>
							</div>					
						</div>				
					</div>
				</div>				
			</section-2>        
        </>
    )
}

export default VideoReview
