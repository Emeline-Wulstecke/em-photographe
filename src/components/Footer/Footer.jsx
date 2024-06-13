import React from 'react';
import './footer.css';
import Logo from '../../assets/img/logo.webp';



const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer id='footer'>
            <h3>Follow me on Instagram !</h3>
            <figure>
                <img src={Logo} alt='logos' />
                <figcaption>COPYRIGHT © {currentYear} || Tous droits réservés || Photographe couples, grossesse & familles – Lille</figcaption>
            </figure>
        </footer>
    );
}

export default Footer;
