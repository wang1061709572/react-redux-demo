/**
 * Created by Administrator on 2017/8/3.
 */
import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Reducer from './reducer.js'

const middleware = [ thunk ]
const store = createStore(
    Reducer,
    applyMiddleware(...middleware)
)

export default store