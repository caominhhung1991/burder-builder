import React from 'react';
import classes from './Logo.scss';
import burgerLogo from './../../assets/images/logo.png';
const Logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="burger logo" />
  </div>
);

export default Logo;
