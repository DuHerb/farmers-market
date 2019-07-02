import React from 'react';
import { makeStyles } from '@material-ui/styles';

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
            <p className={classes.navItem}>Item 1</p>
            <p className={classes.navItem}>Item 2</p>
        </div>
    )
}

export default NavLinks;