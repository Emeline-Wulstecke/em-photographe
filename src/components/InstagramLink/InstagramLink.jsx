import React from 'react';
import PropTypes from 'prop-types';

const InstagramLink = ({ url, content, ariaLabel }) => {
  const isExternalLink = url.startsWith('https://') || url.startsWith('http://');

  return (
    <a 
      href={url} 
      rel={isExternalLink ? "noopener noreferrer" : undefined} 
      target={isExternalLink ? "_blank" : "_self"}
      aria-label={ariaLabel}
      className="custom-link"
    >
      {content}
    </a>
  );
};

InstagramLink.propTypes = {
  content: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired, 
};

export default InstagramLink;