import React from 'react';
import mainImage from '../../img/main2.jpg';
import homeClasses from '../../styles/home.module.scss';

function MainImage() {
  return (
    <div className={homeClasses.mainDiv}>
      <img className={homeClasses.MainImage} src={mainImage} alt="Mountains by Rajarshi Bhadra on Unsplash"/>
    </div>
  );
}

export default MainImage;
