import React from 'react';

export default function DayContainer(props) {
    const day = props.day;
    if(props.day != 'default'){
        return (
            <div>
                <p>{day.day}</p>
                <p>{day.location}</p>
                <p>{day.hours}</p>
                <p>Booth: {day.booth}</p>
            </div>
        );
    } else {
        return (
            <p>Click on a day and we'll show you were we'll be!</p>
        )
    }
}
