import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
//import { Navbar } from 'react-bootstrap';
import logo from '../images/logo/up-and-down_logotype.png';
import { Link } from 'react-router-dom';
import '../styles/_header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends Component {
    render() {
        const elementCarpetDown = <FontAwesomeIcon icon={['fas', 'caret-down']} /* size="1x" */ className="fa-carpet-down"/>
        const elementPhone = <FontAwesomeIcon icon={['fas', 'phone']} /* size="1x" */ className="fa-phone"/>
        return (
            <header id="myHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 header-wrap">
                            <div className="col-5 col-sm-5 menu-active">

                                <ul className="header-nav">
                                    <li>
                                        <Link to="/#about">Обзор</Link>
                                    </li>
                                    <li className="dropdown">
                                        <Link to="/catalog" >Каталог 
                                            {/* <i clasName="fa fa-caret-down"></i> */}
                                            {elementCarpetDown}
                                        </Link>	
                                        <div className="dropdown-content">
                                            <Link to="/catalog/tablesupdown">Столы для работы стоя</Link>
                                            <Link to="/catalog/accessories">Аксессуары</Link>
                                        </div>						    	
                                    </li>
                                    <li>
                                        <Link to="/#blog">Блог</Link>
                                    </li>
                                    <li>
                                        <Link to="/#fotogallery">Галлерея</Link>
                                    </li>		
                                </ul>
                                
                                <div id="myGambyrger" className="col col-sm burger-menu">
                                    <Link to="#" className="burger-menu__burger-button">
                                        <span className="burger-menu__lines"></span>
                                    </Link>
                                    <div className="burger-menu__burger-nav">
                                        <ul className="burger-list">
                                            <li className="pop">
                                                <Link to="index.html#home">Главная</Link>
                                            </li>
                                            <li className="pop">
                                                <Link to="index.html#about">Обзор</Link>
                                            </li>

                                            <li className="dropdown pop">
                                                <Link to="catalog.html">Каталог 
                                                    <i className="fa fa-caret-down"></i>
                                                </Link>	
                                                <div className="dropdown-content">
                                                    <Link to="/catalog/tablesupdownle">Столы для работы стоя</Link>
                                                    <Link to="/catalog/accessories">Аксессуары</Link>
                                                </div>
                                            </li>

                                            <li className="pop">
                                                <Link to="index.html#blog">Блог</Link>
                                            </li>
                                            <li className="pop">
                                                <Link to="index.html#fotogallery">Галлерея</Link>
                                            </li>
                                            <li className="pop">
                                                <Link to="delivery.html">Доставка</Link>
                                            </li>			
                                        </ul>								
                                    </div>
                                    <div className="burger-menu__overlay"></div>
                                </div>											
                            </div>

                            <div className="col-2 col-sm-2 logotype">
                                <Link to="/">
                                    <img src={logo} alt="logotype"/>
                                </Link>
                            </div>
                            <div className="col-5 col-sm-5 menu-active">
                                <ul className="header-nav header-nav-front">
                                    <li className="behind">
                                        <Link to="/delivery">Доставка</Link>
                                    </li>
                                    <li>
                                        <Link to="/footer" className="phone-wrap">
                                            {/* <i className="fas fa-phone"></i> */}
                                            {elementPhone}
                                            <div className="phone-wrap__number-phone">050-922-33-76</div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>					
                            <div className="col-2 col-sm-2 language">
                                <Link to="/" className="language__Ru">
                                        Ru
                                </Link>						
                            </div>				
                        </div>	
                    </div>				
                </div>
            </header>
        );
    }
}

export default Navbar;