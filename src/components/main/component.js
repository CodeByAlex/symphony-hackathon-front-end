import React from 'react';
import { getAppData } from '../services/service';
import Navbar from 'Components/navbar/component';

export const Main = () => {
    const data = getAppData().data;
    return (
        <div className='app-container'>
            <Navbar categories={['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6']} />
            {
                data.map((el) => {
                    return (
                        <div className='card'>
                            <img src={el.image} />
                            <h3>{el.title}</h3>
                        </div>
                    );
                })
            }
        </div>
    );
};
