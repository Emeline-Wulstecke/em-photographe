import React from "react";
import './home.css';
import AboutMe from '../../assets/img/aboutme.webp';

const Home = () => {
    return (
        <section id='home'>
            <section className="experience">
                <h2>Choissisez votre expérience</h2>
            </section>
            <section className="moment">
                <h2>Vous faire passer un moment spécial</h2>
                <div class="square"></div>
                <figure>
                <img scr={AboutMe} alt= 'photographe'></img>
                <figcaption>Hello moi c’est Emeline, Maman d’une petite fille, photographe dans la région Haut-de-france, je suis passionné par l’art de capturer les émotions qui animent chaque instant, qu’il s’agisse de douceur, de rires ou de moments plus intenses.Amoureuse des voyages, la photographie est bien plus qu’un simple métier pour moi, c’est une façon de partager des histoires uniques. Chaque session de prise de vue est une opportunité de capturer l’essence de vos émotions, de créer des images qui racontent votre histoire avec sincérité et authenticité.</figcaption>
                </figure>
            </section>
            <section className="contact">
                <h2>Contactez-moi</h2>
                </section>
        </section>
    );
}

export default Home;