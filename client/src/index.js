import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import history from './history';
import Root from './components/Root';

import './i18n';

window.oidcCode = new URLSearchParams(window.location.hash.substring(1)).get('code');

ReactDOM.render(React.createElement(Root, { store, history }), document.getElementById('root'));
