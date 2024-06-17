import React from 'react';
import './moment.css';


import AboutMe from '../../assets/img/aboutme.webp';
import Grossesse7 from '../../assets/img/grossesse7.webp';
import Vase from '../../assets/img/vase.webp';

const Moment = () => {
    return (
        <section id="moment">
            <h2>Vous faire passer un moment spécial</h2>
            <div className='line'></div>
            <div>
                <figure >
                    <img src={Grossesse7} alt='femme enceinte' className='photo1' loading='lazy'></img>
                    <img src={Vase} alt='vase avec pampas' className='photo2'loading='lazy'></img>
                </figure>

                <article>
                    <p>Moi c’est Emeline, maman d’une petite fille, photographe dans la région Haut-de-france, je suis passionné par l’art de capturer les émotions qui animent chaque instant, qu’il s’agisse de douceur, de rires ou de moments plus intenses.
                        Amoureuse des voyages, la photographie est bien plus qu’un simple métier pour moi, c’est une façon de partager des histoires uniques. Chaque session de prise de vue est une opportunité de capturer l’essence de vos émotions, de créer des images qui racontent votre histoire avec sincérité et authenticité.
                        La douceur est une qualité qui imprègne chacune de mes photographies. Je cherche à capturer ces instants délicats où le temps semble suspendu, où les sourires et les regards échangés en disent bien plus que les mots.

                        Mais il ne s’agit pas seulement de capturer des moments, il s’agit également de les partager. Que ce soit à travers des portraits, des mariages, des événements ou des séances en famille, je m’efforce de créer des photographies qui résonnent avec votre entourage, suscitant des souvenirs inoubliables.

                        Alors, prêts à embarquer dans une aventure photographique où les émotions, le partage, la douceur et les rires sont les protagonistes ? Laissez-moi capturer les instants précieux qui illuminent votre vie et créons ensemble des souvenirs intemporels.

                        A très bientôt.
                    </p>
                </article>

                <figure>
                    <img src={AboutMe} alt='photographe' className='photo3' loading='lazy'></img>
                </figure>
            </div>
        </section >
    );
}

export default Moment;
