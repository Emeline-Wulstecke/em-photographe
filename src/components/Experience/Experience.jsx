import React from "react";
import './experience.css';
import Card from "../Card/Card";
import Pampas from "../../assets/img/pampas.webp";
import Couple15 from "../../assets/img/couple15.webp";
import Famille11 from "../../assets/img/famille11.webp";
import Grossesse10 from "../../assets/img/grossesse10.webp";


const Experience = () => {
    return (
        <section id="experience">
            <h2>Choisissez votre expérience</h2>
            <img src={Pampas} alt="champs de pampas" loading="lazy" />

            <section>
                <Card
                    image={Couple15}
                    alt="couple en train de rire"
                    caption="Couple"
                    to="/couple"
                />
                <Card
                    image={Grossesse10}
                    alt="couple en train de rire"
                    caption="Grossesse"
                    to="/grossesse"
                />
                <Card
                    image={Famille11}
                    alt="enfant en train de souffler sur une fleur"
                    caption="Famille"
                    to="/famille"
                />
            </section>
        </section>
    );
}

export default Experience;