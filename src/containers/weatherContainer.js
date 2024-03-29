import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {requestWeather} from './../redux/weatherReducer'
import {changeLocale} from './../redux/headerReducer'
import WeatherData from './../components/WeatherData'
import {compose} from 'redux'

const WeatherContainer = (props) => {
    const [isFetching, setFetching] = useState(true)
    useEffect(() => {
        setFetching(props.weather.isFetching)
    }, [props])

    useEffect(() => {
        props.requestWeather()
    }, [])

    if (!isFetching) {
    } else if (props.weather.data.code !== 400) {
    }
    return (
        <>
            <WeatherData data={props.data} />
        </>
    )
}

let mapStateToProps = (state) => {
    return {weather: state.weather}
}

export default compose(
    connect(
        mapStateToProps,
        {requestWeather}
    )(WeatherContainer)
)
