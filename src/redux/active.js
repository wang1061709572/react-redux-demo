/**
 * Created by Administrator on 2017/8/3.
 */
import React from 'react';
import { browserHistory } from 'react-router'
import 'whatwg-fetch';
import fetchPost from '../config/fetch.js'
const stringifyParams = (params) => (

    Object.keys(params).map((key) => (key + '=' + encodeURIComponent(params[key]))).join('&')

);

export const loginClick = (params)=> (dispatch)=>{
    console.log(params)
    let loginData = {
        loginName:params.username,
        password:params.password
    }
    // fetchPost(config.url+action.url,loginData,fetchSuc)
    fetchPost('',loginData,fetchSuc)
    function fetchSuc(res) {
        console.log(res)
        localStorage.setItem('personId',res.baseUserId)
        dispatch({
            type:'login',
            loginData:res
        })
        browserHistory.push('taskAndcar')
    }
}

export const taskAndCarList = (params)=> (dispatch)=>{

    // fetchPost(config.url+action.url,loginData,fetchSuc)
    fetchPost('','',fetchSuc)
    function fetchSuc(res) {
        console.log(res)
        dispatch({
            type:'taskAndcar',
            taskCarList:res
        })
    }
}