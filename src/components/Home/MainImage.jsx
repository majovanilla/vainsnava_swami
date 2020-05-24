import React from 'react';
import mainImage from '../../img/main.jpg';
import homeClasses from '../../styles/home.module.scss';

function MainImage() {
  return (
    <div>
      <img className={homeClasses.MainImage} src={mainImage} alt="Mountains by Rajarshi Bhadra on Unsplash"/>
    </div>
  );
}

export default MainImage;
