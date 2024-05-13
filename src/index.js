import React from 'react';
import { render } from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import App from './app';
import './index.scss';

const Root = () => {
    return (
        <>
            <App />
        </>
    )
}

render(<Root />, document.getElementById('root'));
