import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import './insta.css';

const Insta = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    
    const fetchInstagramImages = async () => {
      try {
        const response = await axios.get('URL_DE_VOTRE_API_INSTAGRAM');
        const imageData = response.data.data;
        setImages(imageData);
      } catch (error) {
        console.error('Erreur lors de la récupération des images Instagram:', error);
      }
    };

    fetchInstagramImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image.url} alt={`Instagram ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Insta;
