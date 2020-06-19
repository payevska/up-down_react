import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* import ; */


class Footer extends Component {    
    render() {
        const elementPhone = <FontAwesomeIcon icon={['fas', 'phone']} className="fa-phone"/>
        const siteInstagram = 'https://www.instagram.com/up_and_down__ukraine/';
        const elementInstagram = <FontAwesomeIcon icon={['fab', 'instagram']} className="instagram"/>
        return (
            <>
                <div id="footer" className="footer">
                    <div className="container">	
                        <div className="row">
                            <div className="col-sm footer-block">
                                <div className="form-contact">
                                    <div className="form-contact__form-title">Напишите нам</div>
                                                            
                                    <form id="formMessage" action="mail.php" method="POST" className="form-contact__form-content">
                                        <input id="mail-name" type="text" className="form-contact__form-content_form-name footer-input" placeholder="Имя"/>
                                        <input id="mail-email" type="email" className="form-contact__form-content_form-email footer-input" placeholder="Электронный адресс"/>
                                        <textarea id="mail-message" name="message" className="form-contact__form-content_form-message footer-input" placeholder="Сообщение"></textarea>
                                        <button id="mail-submit" type="submit" className="form-contact__form-content_form-submit">Отправить</button>
                                        <div className="form-message"></div>
                                    </form>
                                </div>			
                        
                                <div className="footer-wrap">
                                    <div className="col-sm-4 footer-wrap__menu-footer">
                                        <div className="footer-wrap__menu-footer_title-menu">Меню
                                        </div>	
                                        <ul className="footer-wrap__menu-footer_vertical-menu">
                                            <li>
                                                <Link to="/">Главная</Link>
                                            </li>					
                                            <li>
                                                <Link to="/#about">Обзор</Link>
                                            </li>
                                            <li>
                                                <Link to="/catalog">Каталог</Link>
                                            </li>
                                            <li>
                                                <Link to="/#blog">Блог</Link>
                                            </li>
                                            <li>
                                                <Link to="/#fotogallery">Галлерея</Link>
                                            </li>			
                                        </ul>					
                                    </div>
                                    <div className="col-sm-4 footer-wrap__footer-contact">
                                        
                                        <div className="footer-wrap__footer-contact_topic-contact">Наш контакт</div>
                                        <div className="footer-wrap__footer-contact_phone-contact">
                                            {elementPhone}
                                            <div className="footer-phone">050-922-33-76</div>
                                        </div>
                                        <div className="footer-wrap__footer-contact_footer-email">
                                            <Link to="/">sales@und.com.ua</Link>
                                        </div>
                                                            
                                        <div className="footer-wrap__footer-contact_social-web">
                                            <div className="footer-wrap__footer-contact_social-web_topic-social">Мы в Instagram - </div>
                                            <a href={siteInstagram} target="_blank" rel="noreferrer noopener">
                                                {elementInstagram}
                                            </a>	
                                            
                                        </div>					
                                    </div>
                                    <div className="col-sm-4 footer-wrap__logotype-small">Up-and-Down</div>									
                                </div>								
                            </div>
                        </div>
                    </div>
            
                    <Link to="#home" className="button-up">
                        <i className="fas fa-chevron-circle-up fa-3x"></i>	      
                    </Link>				
            
                    <div className="footer-bottom">			
                        <div className="footer-bottom__footer-copyright">Up-and-Down &#169; 2020</div>	
                    </div>
                </div>	
            </>
        );
    }
}

export default Footer;