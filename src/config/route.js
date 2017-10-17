/**
 * Created by Administrator on 2017/8/3.
 */
import React from 'react';
import { Router, Route, browserHistory,IndexRoute,onEnter } from 'react-router'
//各组件引入
import App from '../App.js'
import HomePage from '../component/homepage.js'
import Login from '../component/login.js'
import taskAndcar from '../component/taskAndcar.js'

const RouteConfig = (
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={HomePage} />
            <Route path='homePage' component={HomePage} />
            <Route path='login' component={Login} onEnter="" />
            <Route path='taskAndcar' component={taskAndcar} />
        </Route>
    </Router>
)
export default RouteConfig