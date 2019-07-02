import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DayContainer from './DayContainer';

import CalenderNav from './CalenderNav';
import CalenderDisplay from './CalenderDisplay';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      maxWidth: '40%'
    },
}));

export default function ScrollableTabsButtonAuto() {

    function getDay(value) {
        return marketSchedule.find(element => element.day == value)
    }

    const classes = useStyles();
    const [value, setValue] = React.useState('default');

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
        <AppBar position="static" color="gray">
            <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="common"
            variant="scrollable"
            scrollButtons="auto"
            >
            <Tab label="Monday" value="Monday"/>
            <Tab label="Tuesday" value="Tuesday"/>
            <Tab label="Wednesday" value="Wednesday"/>
            <Tab label="Thursday" value="Thursday"/>
            <Tab label="Friday" value="Friday"/>
            <Tab label="Saturday" value="Saturday"/>
            <Tab label="Sunday" value="Sunday"/>
            </Tabs>
        </AppBar>
        {value === 'default' && <DayContainer day='default'>default</DayContainer>}
        {value === "Monday" && <DayContainer day={getDay(value)}></DayContainer>}
        {value === "Tuesday" && <DayContainer day={getDay(value)}></DayContainer>}
        {value === "Wednesday" && <DayContainer day={getDay(value)}></DayContainer>}
        {value === "Thursday" && <DayContainer day={getDay(value)}></DayContainer>}
        {value === "Friday" && <DayContainer day={getDay(value)}></DayContainer>}
        {value === "Saturday" && <DayContainer day={getDay(value)}></DayContainer>}
        {value === "Sunday" && <DayContainer day={getDay(value)}></DayContainer>}
        </div>
    );
}

const marketSchedule = [  
    {  
        day: "Sunday",
        location: "Lents International",
        hours: "9:00am - 2:00pm",
        booth: "4A"
    },
    {  
        day: "Monday",
        location: "Pioneer Courthouse Square",
        hours: "10:00am - 2:00pm",
        booth: "7C"
    },
    {  
        day: "Tuesday",
        location: "Hillsboro",
        hours: "5:00pm - 8:30pm",
        booth: "1F"
    },
    {  
        day: "Wednesday",
        location: "Shemanski Park",
        hours: "10:00am - 2:00pm",
        booth: "3E"
    },
    {  
        day: "Thursday",
        location: "Northwest Portland",
        hours: "2:00pm - 6:00pm",
        booth: "6D"
    },
    {  
        day: "Friday",
        location: "Beaverton",
        hours: "10:00am - 1:30pm",
        booth: "9G"
    },

    {  
        day: "Saturday",
        location: "Beaverton",
        hours: "10:00am - 1:30pm",
        booth: "9G"
    }
];