import React                from 'react';

import App from './App.jsx';

require('babel-polyfill');

const ReactDOM = require('react-dom');

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
