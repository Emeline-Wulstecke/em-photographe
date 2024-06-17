import React from "react";
import './home.css';
import Moment from "../../components/Moment/Moment";
import Experience from "../../components/Experience/Experience";
import ContactForm from "../../components/ContactForm/Contactform";

const Home = () => {
    return (
        <section id='home'>
            <Moment />
            <Experience />
            <ContactForm />
        </section>
    );
};

export default Home;