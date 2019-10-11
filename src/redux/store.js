import {combineReducers, createStore, applyMiddleware} from 'redux'
import weatherReducer from './weatherReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    weather: weatherReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store
