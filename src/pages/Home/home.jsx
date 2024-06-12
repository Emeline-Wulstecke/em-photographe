import React from "react";
import './home.css';
import Moment from "../../components/Moment/Moment";
import Experience from "../../components/Experience/Experience";

const Home = () => {
    return (
        <section id='home'>
            <Moment />
            <Experience />
        </section>
    );
};

export default Home;