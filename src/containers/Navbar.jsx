import React from 'react';
import {Link} from 'react-router-dom';
import HideOnScroll from '../components/Navbar/HideOnScroll';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import navBarClasses from '../styles/navbar.module.scss';

function Navbar() {
  return (
    <HideOnScroll>
      <AppBar position="fixed" color="transparent" className={navBarClasses.navbar}>
        <Toolbar className={navBarClasses.toolBar}>
          {/* <Typography className={navBarClasses.title}>
            Vaisnava Swami
          </Typography> */}
          <div className={navBarClasses.menuDiv}>
            <Link to="/" className={navBarClasses.menuLink}><Button size="large" color="inherit" className={navBarClasses.menuButton}>Inicio</Button></Link>
            <Link to="/about" className={navBarClasses.menuLink}><Button size="large" color="inherit" className={navBarClasses.menuButton}>Historia</Button></Link>
            <Link to="/audios" className={navBarClasses.menuLink}><Button size="large" color="inherit" className={navBarClasses.menuButton}>Audios</Button></Link>
            <Link to="/videos" className={navBarClasses.menuLink}><Button size="large" color="inherit" className={navBarClasses.menuButton}>Videos</Button></Link>
            <Link to="/contacto" className={navBarClasses.menuLink}><Button size="large" color="inherit" className={navBarClasses.menuButton}>Contacto</Button></Link>
          </div>
    
          <IconButton edge="start"  color="inherit" aria-label="menu" className={navBarClasses.menuHamburger}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar> 
    </HideOnScroll>
  );
}

export default Navbar;
