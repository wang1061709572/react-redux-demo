/**
 * Created by Administrator on 2017/8/3.
 */
import React from 'react';

const Reducer = (state={loginData:{},taskCarList:[]},action) => {
    switch (action.type) {
        case 'login':
            console.log(action)
            return Object.assign({},state,{loginData:action.loginData})
        break
        case 'taskAndcar':
            return Object.assign({},state,{taskCarList:action.taskCarList})
        break
        default :
            return state
    }
}

export default Reducer