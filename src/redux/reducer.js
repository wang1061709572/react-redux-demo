/**
 * Created by Administrator on 2017/8/3.
 */
import React from 'react';

const Reducer = (state={movieList:[],cinemaList:[]},action) => {
    switch (action.type) {
        case 'movieList':
            return Object.assign({},state,{movieList:action.movieList})
        break
        case 'cinemaList':
            return Object.assign({},state,{cinemaList:action.cinemaList})
            break
        default :
            return state
    }
}

export default Reducer