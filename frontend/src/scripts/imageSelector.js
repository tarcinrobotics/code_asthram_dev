// ImageSelector.js
import React from 'react';

const ImageSelector = ({ onSelectImage }) => {
  return (
    <button onClick={() => onSelectImage('example-image.jpg')}>Select Image</button>
  );
}

export default ImageSelector;
