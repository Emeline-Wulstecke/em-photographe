import React from 'react';
import './footer.css';
import Logo from '../../assets/img/logo.webp';


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer id='footer'>
            <h3>Follow me on Instagram !</h3>
            <div id='insta'></div>
            <figure>
                <img src={Logo} alt='logo de la photographe' />
                <figcaption>COPYRIGHT © {currentYear} || Tous droits réservés || Photographe couples, grossesse & familles – Lille</figcaption>
            </figure>
        </footer>
    );
}

export default Footer;
