import React from 'react';
import './moment.css';

import AboutMe from '../../assets/img/aboutme.webp';
import Grossesse7 from '../../assets/img/grossesse7.webp';
import Vase from '../../assets/img/vase.jpg';

const Moment = () => {
    return (
        <section id="moment">
            <h2>Vous faire passer un moment spécial</h2>
            <div >
            <figure className='photo1'>
                <img src={Grossesse7} alt='femme enceinte'></img>
            </figure>

            <figure className='photo2'>
                <img src={Vase} alt='photographe'></img>
            </figure>
            <figure className='about'>
            <figcaption>
                Hello, moi c’est Emeline. Maman d’une petite fille, photographe dans la région Hauts-de-France, je suis passionnée par l’art de capturer les émotions qui animent chaque instant, qu’il s’agisse de douceur, de rires ou de moments plus intenses. Amoureuse des voyages, la photographie est bien plus qu’un simple métier pour moi, c’est une façon de partager des histoires uniques. Chaque session de prise de vue est une opportunité de capturer l’essence de vos émotions, de créer des images qui racontent votre histoire avec sincérité et authenticité.
            </figcaption>
            <img src={AboutMe} alt='photographe' className='photo3'></img>
        </figure>
        </div>
        </section >
    );
}

export default Moment;
