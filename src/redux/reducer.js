/**
 * Created by Administrator on 2017/8/3.
 */
import { combineReducers } from 'redux'

const movieReducer = (state={},action) => {
    switch (action.type) {
        case 'movieList':
            return {
                ['results']: {
                    type:action.type,
                    movieList:action.movieList,
                }
            }
        break
        case 'cinemaList':
            return {
                ['results']: {
                    type:action.type,
                    cinemaList:action.cinemaList
                }
            }
        case 'dataDetail':
            return {
                ['results']: {
                    type:action.type,
                    movieDetail:action.movieDetail,
                }
            }
        break
        default :
            return state
    }
}

const RootReducer = combineReducers({
    movieReducer
})

export default RootReducer