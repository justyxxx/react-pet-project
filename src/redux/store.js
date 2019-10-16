import {combineReducers, createStore, applyMiddleware} from 'redux'
import weatherReducer from './weatherReducer'
import headerReducer from './headerReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    weather: weatherReducer,
    header: headerReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store
