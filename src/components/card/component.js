import React from 'react';

export const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.card.image} />
            <div className='card-content'>
                <span className='card-title'>{props.card.title}</span>
            </div>
        </div>
    );
}
;
