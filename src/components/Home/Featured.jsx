import React from 'react';
import {Container, GridList, GridListTile, Typography} from '@material-ui/core';
import featuredData from '../helpers/featuredData';
import homeClasses from '../../styles/home.module.scss';

function Featured() {
  return (
    <Container className={homeClasses.mainDiv}>
        <Typography variant="h4" className={homeClasses.featuredTitle}>
          Nuestra selección
        </Typography>
        <GridList cellHeight={360} cols={3}>
        {featuredData.map((feat) => (
          <GridListTile key={feat.id} cols={feat.cols || 1} rows={1} className={homeClasses.featDiv}>
            <img src={feat.img} alt={feat.title} />
          </GridListTile>
        ))}
      </GridList>
    </Container>
  );
}

export default Featured;
