import React from 'react';
import {Link} from 'react-router-dom';
import HideOnScroll from '../components/Navbar/HideOnScroll';
import {AppBar, Toolbar, IconButton, Menu, MenuItem, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import navBarClasses from '../styles/navbar.module.scss';

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = event => {
    setAnchorEl(null);
  }

  const handleClick = event => {
    setAnchorEl(event.target);
  }

  return (
    <HideOnScroll>
      <AppBar position="fixed" color="white" className={navBarClasses.navbar}>
        <Toolbar className={navBarClasses.toolBar}>
          <div className={navBarClasses.menuDiv}>
            <Link to="/" className={navBarClasses.menuLink}><Button size="large" color="inherit" className={navBarClasses.menuButton}>Inicio</Button></Link>
            <Link to="/historia" className={navBarClasses.menuLink}><Button size="large" color="inherit" className={navBarClasses.menuButton}>Historia</Button></Link>
            <Link to="/audios" className={navBarClasses.menuLink}><Button size="large" color="inherit" className={navBarClasses.menuButton}>Audios</Button></Link>
            <Link to="/videos" className={navBarClasses.menuLink}><Button size="large" color="inherit" className={navBarClasses.menuButton}>Videos</Button></Link>
            <Link to="/contacto" className={navBarClasses.menuLink}><Button size="large" color="inherit" className={navBarClasses.menuButton}>Contacto</Button></Link>
          </div>
    
          <IconButton edge="start"  color="inherit" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={navBarClasses.menuHamburger}>
            <MenuIcon />
          </IconButton>    
          <Menu
            className={navBarClasses.toggleMenu}
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem><Link to="/" className={navBarClasses.menuLink} onClick={handleClose}><Button size="large" color="inherit" className={navBarClasses.menuButton}>Inicio</Button></Link></MenuItem>
            <MenuItem><Link to="/historia" className={navBarClasses.menuLink} onClick={handleClose}><Button size="large" color="inherit" className={navBarClasses.menuButton}>Historia</Button></Link></MenuItem>
            <MenuItem><Link to="/audios" className={navBarClasses.menuLink} onClick={handleClose}><Button size="large" color="inherit" className={navBarClasses.menuButton}>Audios</Button></Link></MenuItem>
            <MenuItem><Link to="/videos" className={navBarClasses.menuLink} onClick={handleClose}><Button size="large" color="inherit" className={navBarClasses.menuButton}>Videos</Button></Link></MenuItem>
            <MenuItem><Link to="/contacto" className={navBarClasses.menuLink} onClick={handleClose}><Button size="large" color="inherit" className={navBarClasses.menuButton}>Contacto</Button></Link></MenuItem>
          </Menu>
        </Toolbar>
      </AppBar> 
    </HideOnScroll>
  );
}

export default Navbar;
