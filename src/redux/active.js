/**
 * Created by Administrator on 2017/8/3.
 */
import React from 'react';
import { browserHistory } from 'react-router'
import 'whatwg-fetch';
import * as fetch from '../config/fetch.js'
const stringifyParams = (params) => (

    Object.keys(params).map((key) => (key + '=' + encodeURIComponent(params[key]))).join('&')

);

export const getMovieList = (params)=> (dispatch)=>{
    let listData = {
        type:'hot',
        offset:0,
        limit:10
    }
    fetch.fetchGet('/movie/list.json',listData,fetchSuc)
    function fetchSuc(res) {
        console.log('--------------------')
        console.log(res)
        dispatch({
            type:'movieList',
            movieList:res.movies
        })
    }
}
export const getCinemaList = (params)=> (dispatch)=>{
    fetch.fetchGet('/cinemas.json','',fetchSuc)
    function fetchSuc(res) {
        console.log('--------------------')
        console.log(res)
        dispatch({
            type:'cinemaList',
            cinemaList:res.东城区
        })
    }
}