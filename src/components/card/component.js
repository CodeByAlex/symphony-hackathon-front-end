import React from 'react';
import { format } from 'date-fns';
export const Card = (props) => {
    const tagColors = [
        '#29B6F6',
        '#66BB6A',
        '#FFCA28',
        '#7E57C2',
        '#29B6F6',
        '#66BB6A',
        '#FFCA28',
        '#7E57C2',
        '#29B6F6',
        '#66BB6A',
        '#FFCA28',
        '#7E57C2',
    ];
    return (
        <div className='card'>
            <img src={props.card.image} />
            <div className='card-tags'>
                {
                    props.card.tags.split(',').map((el, i) => {
                        return (
                            <span
                                style={{
                                    backgroundColor: tagColors[i],
                                }}
                                className='card-tag'>{el}</span>
                        );
                    })
                }
            </div>
            <div className='card-content'>
                <a target='_blank' href={props.card.url} className='card-title'>{props.card.title}</a>
                <p>{props.card.description}</p>
                <span className='card-date'>{format(props.card.date, 'MM/DD/YYYY')}</span>
            </div>
        </div>
    );
}
;
