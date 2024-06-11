import React from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Banner from '../../assets/img/banner.webp';
import Link from '../Link/Link';

const Nav = () => {
  return (
    <nav id="nav">
      <h1>   Capturing your<br />special moments</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li>
          <Link url="https://www.instagram.com/emphoto.graphe/" content={<FontAwesomeIcon icon={faInstagram} />} aria-label="Lien vers le profil Instagram" />
        </li>
      </ul>
      <img src={Banner} alt="Un papa et sa fille dans le désert de Marrakech" />
    </nav>
  );
};

export default Nav;

