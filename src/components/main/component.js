import React from 'react';
import { getAppData } from '../services/service';
export const Main = () => {
    getAppData();
    return (
        <h1>FOO</h1>
    );
};
