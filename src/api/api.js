import * as axios from 'axios'

const city = {
    CITY_ID: 'London',
    API_KEY: 'b6907d289e10d714a6e88b30761fae22'
}

const instance = axios.create({
    baseURL: 'https://openweathermap.org/data/2.5/weather/?',
    headers: {}
})

export const weatherApi = {
    getWeatherData() {
        return instance.get(`q=${city.CITY_ID}&appid=${city.API_KEY}`).then((response) => {
            return response.data
        })
    }
}
