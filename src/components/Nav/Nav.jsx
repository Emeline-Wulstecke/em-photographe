import React from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 
import Banner from '../../assets/img/banner.webp';
import InstagramLink from '../InstagramLink/InstagramLink';

const Nav = () => {
  return (
    <nav id="nav">
      <h1>   Capturing your<br />special moments</h1>
      <ul>
        <li>
          <Link to="/">Home</Link></li>
        <li>
          <Link to="/pregnancy">Grossesse</Link></li>
        <li> <Link to="/couple">Couple</Link></li>
        <li> <Link to="/family">Famille</Link></li>
        <li> <Link to="#contact">Contact</Link></li>
        <li>
        <InstagramLink url="https://www.instagram.com/emphoto.graphe/" content={<FontAwesomeIcon icon={faInstagram} />} aria-label="Lien vers le profil Instagram" />
        </li>
        <li>
          <Link to="/admin">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </li>
      </ul>
      <img src={Banner} alt="Un papa et sa fille dans le désert de Marrakech" />
    </nav>
  );
};

export default Nav;
