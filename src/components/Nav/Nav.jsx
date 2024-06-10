import React from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Banner from '../../img/banner.jpg';

const Nav = () => {
  return (
    <nav id="nav">
     <h1>Capturing your special moments</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li><FontAwesomeIcon icon={faInstagram} /></li>
      </ul>
        <img src={Banner} alt="Un papa et sa fille dans le désert de Marrakech" />
    </nav>
  );
};

export default Nav;
