import {weatherApi} from '../api/api'

const SET_WEATHER_DATA = 'SET_WEATHER_DATA'

let initialState = {
    data: {},
    isFetching: true
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER_DATA:
            return {...state, data: action.data, isFetching: action.isFetching}
        default:
            return state
    }
}

export const weatherAction = (data) => ({type: SET_WEATHER_DATA, data: data, isFetching: false})

export const requestWeather = () => {
    return (dispatch) => {
        weatherApi.getWeatherData().then((data) => {
            dispatch(weatherAction(data))
        })
    }
}

export default weatherReducer
