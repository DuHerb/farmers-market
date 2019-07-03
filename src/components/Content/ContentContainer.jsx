import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CalenderContainer from './Calender/CalenderContainer';
import ProduceContainer from './Produce/ProduceContainer';
import { Switch, Route } from 'react-router-dom';

const styles = makeStyles({
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

function ContentContainer() {
    const classes = styles();
    return(
        <div className={classes.flexContainer}>
        <Switch>
            <Route path="/calender" component={CalenderContainer}/>
            <Route path="/produce" component={ProduceContainer}/>
        </Switch>
        </div>
    ) 
}

export default ContentContainer;