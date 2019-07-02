import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MonthContainer from './MonthContainer';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 2,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      maxWidth: '40%'
    },
}));

export default function ScrollableTabsButtonAuto() {

    function getMonth(value) {
        return availableProduce.find(element => element.month == value)
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
            textColor="black"
            variant="scrollable"
            scrollButtons="auto"
            >
            <Tab label="Jan" value="January"/>
            <Tab label="Feb" value="February"/>
            <Tab label="Mar" value="March"/>
            <Tab label="Apr" value="April"/>
            <Tab label="May" value="May"/>
            <Tab label="Jun" value="June"/>
            <Tab label="July" value="July"/>
            <Tab label="Aug" value="August"/>
            <Tab label="Sept" value="September"/>
            <Tab label="Oct" value="October"/>
            <Tab label="Nov" value="November"/>
            <Tab label="Dec" value="December"/>
            </Tabs>
        </AppBar>
            {value === 'default' && <MonthContainer month='default'>default</MonthContainer>}
            {value === "January" && <MonthContainer month={getMonth(value)}></MonthContainer>}
            {value === "February" && <MonthContainer month={getMonth(value)}></MonthContainer>}
            {value === "March" && <MonthContainer month={getMonth(value)}></MonthContainer>}
            {value === "April" && <MonthContainer month={getMonth(value)}></MonthContainer>}
            {value === "May" && <MonthContainer month={getMonth(value)}></MonthContainer>}
            {value === "June" && <MonthContainer month={getMonth(value)}></MonthContainer>}
            {value === "July" && <MonthContainer month={getMonth(value)}></MonthContainer>}
            {value === "August" && <MonthContainer month={getMonth(value)}></MonthContainer>}
            {value === "September" && <MonthContainer month={getMonth(value)}></MonthContainer>}
            {value === "October" && <MonthContainer month={getMonth(value)}></MonthContainer>}
            {value === "November" && <MonthContainer month={getMonth(value)}></MonthContainer>}
            {value === "December" && <MonthContainer month={getMonth(value)}></MonthContainer>}
        </div>
    );
}

const availableProduce = [  
    {  
       month: "January",
       selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Garlic",
          "Mushrooms",
          "Onions",
          "Potatoes",
          "Turnips"
       ]
    },
    {  
       month: "February",
       selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Garlic",
          "Mushrooms",
          "Onions",
          "Potatoes"
       ]
    },
    {  
       month: "March",
       selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Rhubarb",
          "Garlic",
          "Mushrooms",
          "Onions",
          "Potatoes"
       ]
    },
    {  
       month: "April",
       selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Rhubarb",
          "Asparagus",
          "Garlic",
          "Lettuce",
          "Mushrooms",
          "Onions",
          "Potatoes"
       ]
    },
    {  
       month: "May",
       selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Rhubarb",
          "Asparagus",
          "Cauliflower",
          "Garlic",
          "Lettuce",
          "Potatoes",
          "Radishes"
       ]
    },
    {  
       month: "June",
       selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Rhubarb",
          "Blackberries",
          "Cherries",
          "Raspberries",
          "Strawberries",
          "Asparagus",
          "Broccoli",
          "Cauliflower",
          "Kohlrabi",
          "Lettuce",
          "Mushrooms",
          "Potatoes",
          "Radishes",
          "Squash"
       ]
    },
    {  
       month: "July",
       selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Rhubarb",
          "Apricots",
          "Blackberries",
          "Blueberries",
          "Cherries",
          "Melons",
          "Nectarines",
          "Peaches",
          "Raspberries",
          "Strawberries",
          "Tomatoes",
          "Beets",
          "Broccoli",
          "Brussel Sprouts",
          "Cabbage",
          "Carrots",
          "Cauliflower",
          "Cucumber",
          "Eggplant",
          "Garlic",
          "Green Beans",
          "Kohlrabi",
          "Lettuce",
          "Mushrooms",
          "Potatoes",
          "Radishes",
          "Squash",
          "Turnips"
       ]
    },
    {  
       month: "August",
       selection: [  
          "Apples",
          "Apricots",
          "Blackberries",
          "Blueberries",
          "Cherries",
          "Melons",
          "Nectarines",
          "Peaches",
          "Pears",
          "Plums",
          "Raspberries",
          "Rhubarb",
          "Strawberries",
          "Tomatoes",
          "Beets",
          "Broccoli",
          "Brussel Sprouts",
          "Cabbage",
          "Carrots",
          "Cauliflower",
          "Corn",
          "Cucumber",
          "Eggplant",
          "Garlic",
          "Green Beans",
          "Kohlrabi",
          "Lettuce",
          "Mushrooms",
          "Onions",
          "Peas",
          "Peppers",
          "Potatoes",
          "Radishes",
          "Squash",
          "Turnips"
       ]
    },
    {  
       month: "September",
       selection: [  
          "Apples",
          "Blueberries",
          "Grapes",
          "Melons",
          "Peaches",
          "Pears",
          "Plums",
          "Raspberries",
          "Tomatoes",
          "Broccoli",
          "Brussel Sprouts",
          "Cabbage",
          "Carrots",
          "Cauliflower",
          "Corn",
          "Cucumber",
          "Eggplant",
          "Garlic",
          "Green Beans",
          "Kohlrabi",
          "Lettuce",
          "Mushrooms",
          "Onions",
          "Peas",
          "Peppers",
          "Potatoes",
          "Radishes",
          "Squash",
          "Turnips"
       ]
    },
    {  
       month: "October",
       selection: [  
          "Apples",
          "Grapes",
          "Hazelnuts",
          "Melons",
          "Peaches",
          "Pears",
          "Tomatoes",
          "Broccoli",
          "Brussel Sprouts",
          "Cabbage",
          "Carrots",
          "Cauliflower",
          "Corn",
          "Cucumber",
          "Eggplant",
          "Garlic",
          "Green Beans",
          "Kohlrabi",
          "Lettuce",
          "Mushrooms",
          "Onions",
          "Peas",
          "Peppers",
          "Potatoes",
          "Pumpkins",
          "Radishes",
          "Squash",
          "Turnips"
       ]
    },
    {  
       month: "November",
       selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
          "Broccoli",
          "Carrots",
          "Cauliflower",
          "Garlic",
          "Mushrooms",
          "Onions",
          "Potatoes",
          "Squash",
          "Turnips"
       ]
    },
    {  
       month: "December",
       selection: [  
          "Apples",
          "Hazelnuts",
          "Pears",
         "Broccoli",
          "Carrots",
          "Cauliflower",
          "Garlic",
          "Mushrooms",
          "Onions",
          "Potatoes",
          "Turnips"
       ]
    }
 ];