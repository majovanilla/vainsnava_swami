import React from 'react';
import { Container, Typography, Card, CardMedia, CardContent, IconButton } from '@material-ui/core';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import classes from '../styles/audios.module.scss';
import podcasts from '../components/helpers/audios';

function Audios() {
  return (
    <Container className={classes.mainDiv}>
      <Typography variant="h4" className={classes.mainTitle}>
        Nuestros Podcasts
      </Typography>
      <Typography variant="body1" className={classes.mainText}>
      </Typography>
      <div className={classes.podcastDiv}>
        {podcasts.map((podcast) => {
          return (
            <Card className={classes.audioCard}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {podcast.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {podcast.author}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <IconButton aria-label="previous">
                {classes.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon className={classes.playIcon} />
              </IconButton>
              <IconButton aria-label="next">
                {classes.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
              </IconButton>
            </div>
          </div>
          <CardMedia
            className={classes.cover}
            image={podcast.img}
            title="Live from space album cover"
            />
        </Card>
          )
        })}
    </div>
</Container>
  );
}

export default Audios;
