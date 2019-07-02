import React from 'react';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles({
    navTitle: {
        flexGrow: '2'
    }
})
function NavHeader(){
    const classes = styles();
    return <h1 className={classes.navTitle}>Dustin's Veg and Sundries</h1>
}

export default NavHeader;