// import {
//     combineReducers
// } from 'redux'
//对combineReducers进行数据结构优化
import {
    combineReducers
} from 'redux-immutable'
import {
    reducer as recommendReducer
} from '../views/discover/pages/recommend/store'
export default combineReducers({
    recommendReducer
})