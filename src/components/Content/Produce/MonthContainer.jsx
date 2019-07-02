import React from 'react';
import ProduceItem from './ProduceItem';

export default function MonthContainer(props) {
    const month = props.month;
    if(props.month != 'default'){
        return (
            <div>
                <h2>{month.month}</h2>
                {month.selection.map((item, index) =>
                    <ProduceItem produceItem = {item} key={index}/> 
                    )}
            </div>
        );
    } else {
        return (
            <div>
                <p>We grow Vegtables so our stock is always changing.</p>
                <p>Click on a month to see what we're growing.</p>
            </div>
        )
    }
}