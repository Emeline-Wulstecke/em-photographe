import React, { useState, useEffect } from 'react';
import './scroll.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const Scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {isVisible && (
        <div className="scroll-to-top-button" onClick={Scroll}>
        <FontAwesomeIcon icon={faArrowUp} />
        </div>
      )}
    </div>
  );
};

export default Scroll;