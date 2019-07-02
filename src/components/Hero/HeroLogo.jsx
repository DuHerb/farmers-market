import React from 'react';
import logo from '../../assets/veggies.png';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles({
    logo: {
        width: '100%',
        height: '200px',
        backgroundImage: 'url('+ logo +')',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
})

function HeroLogo() {
    const classes = styles();
    return (
        <div className={classes.logo}></div>
    );
}

export default HeroLogo;