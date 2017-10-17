/**
 * Created by Administrator on 2017/8/3.
 */
import React from 'react';
import { Router, Route, browserHistory,IndexRoute,onEnter } from 'react-router'
//各组件引入
import App from '../App.js'
import HomePage from '../component/homepage.js'
import movieList from '../component/MovieList.js'
import cinemaList from '../component/CinemaList.js'

const RouteConfig = (
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={HomePage} />
            <Route path='homePage' component={HomePage} />
            <Route path='movieList' component={movieList}/>
            <Route path='cinemaList' component={cinemaList}/>
        </Route>
    </Router>
)
export default RouteConfig