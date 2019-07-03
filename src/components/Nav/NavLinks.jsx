import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const styles = makeStyles({
    navLinks: {
        display: 'flex',
        flexDirection: 'row'
    },
    navItem: {
        padding: '10px'
    }
})

function NavLinks() {
    const classes = styles();
    return (
        <div className={classes.navLinks}>
            <Link className={classes.navItem} to="/calender">Calender</Link>
            <Link className={classes.navItem} to="/produce">Produce</Link>
        </div>
    )
}

export default NavLinks;