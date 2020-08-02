import '../styles/style.scss';
import {ProductContext} from '../context';

import React, { useRef } from "react";
import Slider from "react-slick";
//import { baseUrl } from "../config";

export default function CenterMode({product}) {
	const slider = useRef();

	const{images,name} = product;
    const settings = {
		customPaging: function(i) {
			return (
				<a>
					<img src={images[i+1]} alt={name}/>
				</a>
			);
		},
		dots: true,
		dotsClass: "slick-dots slick-thumb",
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	
/* 	const onNext = () => {
        slider.current.slickNext();
    };
    const onPrev = () => {
        slider.current.slickPrev();
    };
 */	return (
		<>
			<Slider {...settings} ref={slider} className="carousel">

			

			{/* <img src={images[4]} alt={name} className="product-images__picture"/>
			<img src={images[5]} alt={name} className="product-images__picture"/>
			<img src={images[6]} alt={name} className="product-images__picture"/>
			<img src={images[7]} alt={name} className="product-images__picture"/>
			<img src={images[8]} alt={name} className="product-images__picture"/>
			<img src={images[9]} alt={name} className="product-images__picture"/>
			<img src={images[10]} alt={name} className="product-images__picture"/> */}

				{images.slice(1,8).map((item,index) => {
								return (
									<img key={index} src={item}/>
								);
							})}
			</Slider>
		</>
	)	
}


