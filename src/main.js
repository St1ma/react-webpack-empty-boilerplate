import React                from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App.jsx';

import 'ui-toolkit/css/main.css';

injectTapEventPlugin();

require('babel-polyfill');

const ReactDOM = require('react-dom');

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
