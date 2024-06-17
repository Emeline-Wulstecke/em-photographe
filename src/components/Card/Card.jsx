import React from "react";
import './card.css';
import Button from "../Button/Button";
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <Link to={props.to} className="card-link">
            <figure id='card'>
                <img src={props.image} alt={props.alt} loading="lazy"/>
                <Button>{props.caption}</Button>
            </figure>
        </Link>    
    );
}

export default Card;
