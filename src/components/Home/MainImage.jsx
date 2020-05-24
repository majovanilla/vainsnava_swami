import React from 'react';
import mainImage from '../../img/main2.jpg';
import homeClasses from '../../styles/home.module.scss';
import { Typography } from '@material-ui/core';

function MainImage() {
  return (
    <div className={homeClasses.mainDiv}>
      <div  className={homeClasses.textOverImage}>
        <Typography variant="h2" className={homeClasses.title}>
          Vaisnava Swami
        </Typography>
        <Typography variant="subtitle1" className={homeClasses.body}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in dignissim metus. 
        Sed faucibus felis in viverra tincidunt. Morbi venenatis euismod lacus. 
        Sed egestas vestibulum quam at aliquam. Mauris facilisis, nibh non tristique volutpat, 
        leo orci tristique turpis, quis dignissim leo arcu id ex. Nunc volutpat nisl id turpis faucibus finibus.
        </Typography>
      </div>
      <img className={homeClasses.MainImage} src={mainImage} alt="Mountains by Rajarshi Bhadra on Unsplash"/>
    </div>
  );
}

export default MainImage;
