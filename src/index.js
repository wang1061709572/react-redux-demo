import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import './index.css';
import {Provider} from 'react-redux'
import store from './redux/store.js'
import Route from './config/route.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    (
        <Provider store={store}>
            {Route}
        </Provider>
    ),
    document.getElementById('root')
);
registerServiceWorker();
