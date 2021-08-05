import './assets/style/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './layouts/App';

const render = ()=> {

  ReactDOM.render(
    <App />,
    document.getElementById('app'));
};
render();

/* eslint-disable */
if (module.hot) {
    module.hot.accept('./layouts/App', render)
}
/* eslint-enable */