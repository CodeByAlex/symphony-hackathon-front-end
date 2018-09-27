import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from 'Components/main/component';

const render = (Component) => {
    ReactDOM.render(
        <Component />,
        document.getElementById('root'),
    );
};

render(Main);

