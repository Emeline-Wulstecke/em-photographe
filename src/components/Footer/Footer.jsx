import React from 'react';
import './footer.css';
import Logo from '../../assets/img/logo.webp';
import Insta from '../InstagramCarousel/Insta';


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer id='footer'>
            <h3>Follow me on Instagram !</h3>
            <div id='insta'>
                <Insta />
            </div>
            <figure>
                <img src={Logo} alt='logo' />
                <figcaption>COPYRIGHT © {currentYear} || Tous droits réservés || Photographe couples, grossesse & familles – Lille</figcaption>
            </figure>
        </footer>
    );
}

export default Footer;
