import React from 'react'
import {Container} from 'react-bootstrap';
import '../styles/style.scss';
import Home from '../components/Home';
import VideoReview from '../components/VideoReview';
import About from '../components/About';
import Blog from '../components/Blog';
import Fotogallery from '../components/Fotogallery';


function Main() {
	return (
		<>
			<Home/>
			<VideoReview/>
			<About/>
			<Blog/>
			<Fotogallery/>
		</>
	);
}

export default Main

