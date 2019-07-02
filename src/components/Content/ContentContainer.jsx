import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CalenderContainer from './Calender/CalenderContainer';
import ProduceContainer from './Produce/ProduceContainer';

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
            <CalenderContainer/>
            <ProduceContainer/>
        </div>
    )
}

export default ContentContainer;