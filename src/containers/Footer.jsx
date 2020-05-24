import React from 'react';
import footerClasses from '../styles/footer.module.scss';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Typography } from '@material-ui/core';

function Footer() {
  return (
    <div className={footerClasses.Footer}>
      <div className={footerClasses.socialDiv}>
        <FacebookIcon className={footerClasses.footerIcon}/>
        <TwitterIcon className={footerClasses.footerIcon}/>
        <InstagramIcon className={footerClasses.footerIcon}/>
        <YouTubeIcon className={footerClasses.footerIcon}/>
      </div>
      <Typography type="body2">
        &copy; All rights reserved 2020
      </Typography>
    </div>
  );
}

export default Footer;
