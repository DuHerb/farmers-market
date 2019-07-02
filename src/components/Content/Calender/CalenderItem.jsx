import React from 'react';
import PropTypes from 'prop-types';

function CalenderItem(props) {
    return (
        <div>
            <p>{props.day}</p>
            <p>{props.location}</p>
            <p>{props.hours}</p>
            <p>Booth: {props.booth}</p>
        </div>
    )
}

CalenderItem.propTypes = {
    day: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired,
    booth: PropTypes.string
}

export default CalenderItem;