import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ url, content }) => {
  const isExternalLink = url.startsWith('https://') || url.startsWith('http://');

  return (
    <a 
      href={url} 
      rel={isExternalLink ? "noopener noreferrer" : undefined} 
      target={isExternalLink ? "_blank" : "_self"}
      className="custom-link"
    >
      {content}
    </a>
  );
};

Link.propTypes = {
  url: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default Link;
