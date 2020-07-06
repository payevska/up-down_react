import React, {Component} from 'react'
import {Container} from 'react-bootstrap';
import '../styles/style.scss';


import imageGallery1 from '../images/gallery/picture1-desktop.png';
import imageGallery2 from '../images/gallery/picture1-laptop.png';
import imageGallery3 from '../images/gallery/picture10-desktop.png';
import imageGallery4 from '../images/gallery/picture12-desktop.png';
import imageGallery5 from '../images/gallery/picture2-desktop.png';
import imageGallery6 from '../images/gallery/picture2-laptop.png';
import imageGallery7 from '../images/gallery/picture3-desktop.png';
import imageGallery8 from '../images/gallery/picture3-laptop.png';
import imageGallery9 from '../images/gallery/picture4-laptop.png';
import imageGallery10 from '../images/gallery/picture5-desktop.png';
import imageGallery11 from '../images/gallery/picture6-desktop.png';
import imageGallery12 from '../images/gallery/picture9-desktop.png';
import imageGallery13 from '../images/gallery/photo_big_table-1.jpg';
import imageGallery14 from '../images/gallery/photo_big_table-2.jpg';
import imageGallery15 from '../images/gallery/photo_big_table-3.jpg';
import imageGallery16 from '../images/gallery/photo_big_table-4.png';


function GallaryFancyBox() {

    return (
        <>
            <div className="fotogallery-gallery">
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
                    <a href={imageGallery1} data-fancybox="gallery" data-caption="Caption #1">
                        <img className="img-fluid" src={imageGallery1} alt="table-foto"/>
                    </a>	
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
                    <a data-fancybox="gallery" href={imageGallery2}  data-caption="Caption #1">
                        <img className="img-fluid" src={imageGallery2}alt="table-foto"/>
                    </a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
                    <a data-fancybox="gallery" href={imageGallery3}  data-caption="Caption #1">
                        <img className="img-fluid" src={imageGallery3} alt="table-foto"/>
                    </a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
                    <a data-fancybox="gallery" href={imageGallery4}  data-caption="Caption #1">
                        <img className="img-fluid" src={imageGallery4} alt="table-foto"/>
                    </a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
                    <a data-fancybox="gallery" href={imageGallery5}  data-caption="Caption #1">
                        <img className="img-fluid" src={imageGallery5} alt="table-foto"/>
                    </a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
                    <a data-fancybox="gallery" href={imageGallery6}  data-caption="Caption #1">
                        <img className="img-fluid" src={imageGallery6} alt="table-foto"/>
                    </a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
                    <a data-fancybox="gallery" href={imageGallery7}  data-caption="Caption #1">
                        <img className="img-fluid" src={imageGallery7} alt="table-foto"/>
                    </a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
                    <a data-fancybox="gallery" href={imageGallery8}  data-caption="Caption #1">
                        <img className="img-fluid" src={imageGallery8} alt="table-foto"/>
                    </a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
                    <a data-fancybox="gallery" href={imageGallery9}  data-caption="Caption #1">
                        <img className="img-fluid" src={imageGallery9} alt="table-foto"/>
                    </a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
                    <a data-fancybox="gallery" href={imageGallery10}  data-caption="Caption #1">
                        <img className="img-fluid" src={imageGallery10} alt="table-foto"/>
                    </a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
                    <a data-fancybox="gallery" href={imageGallery11}  data-caption="Caption #1">
                        <img className="img-fluid" src={imageGallery11} alt="table-foto"/>
                    </a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
                    <a data-fancybox="gallery" href={imageGallery12}  data-caption="Caption #1">
                        <img className="img-fluid" src={imageGallery12} alt="table-foto"/>
                    </a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
                    <a data-fancybox="gallery" href={imageGallery13}  data-caption="Caption #1">
                        <img className="img-fluid" src={imageGallery13} alt="table-foto"/>
                    </a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
                    <a data-fancybox="gallery" href={imageGallery14}  data-caption="Caption #1">
                        <img className="img-fluid" src={imageGallery14} alt="table-foto"/>
                    </a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
                    <a data-fancybox="gallery" href={imageGallery15}  data-caption="Caption #1">
                        <img className="img-fluid" src={imageGallery15} alt="table-foto"/>
                    </a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 fotogallery-gallery__picture">
                    <a data-fancybox="gallery" href={imageGallery16}  data-caption="Caption #1">
                        <img className="img-fluid" src={imageGallery16} alt="table-foto"/>
                    </a>
                </div>
            </div>
        </>										
    )
}

export default GallaryFancyBox


