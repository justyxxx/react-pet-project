import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.less'
import axios from 'axios'
import {weatherApi} from './api/api'
import {requestWeather} from './redux/weatherReducer'
import WeatherData from './components/WeatherData'
import WeatherContainer from './containers/weatherContainer'
import HeaderContainer from './containers/headerContainer'

const App = () => {
    return (
        <div className="appWrapper">
            <div className="weatherBlock">
                <HeaderContainer />
            </div>
        </div>
    )
}

export default App
