import React from 'react';
import { Card } from 'Components/card/component';
import styles from './style.styl';
export const Cards = (props) => {
    console.log(props);
    return (
        <div className='cards-container'>
            {
                props.data.map((card) => {
                    return <Card card={card} />;
                })
            }
        </div>
    );
}
;
