import React from 'react';
import { makeStyles } from '@material-ui/styles';
import NavHeader from './NavHeader';
import NavLinks from './NavLinks';

const styles = makeStyles({
    topNav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottom: '1px solid black'
    }
})

function TopNav() {
    const classes = styles();
    return (
        <div className={classes.topNav}>
            <NavHeader/>
        </div>
    );
};

export default TopNav;