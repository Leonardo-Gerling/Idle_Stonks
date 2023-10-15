import Client from "@utilities/client"

import { WeatherData } from "types"

const API_KEY = "QLdAjjG2IQbr9q6zuTi0idllkOaSr2oV"

export default function fetchWeather(location: string): void {
    Client.get(`/realtime?location=${location}&apikey=${API_KEY}&units=metric`)
          .then(response => {
            const weatherData: WeatherData = response.data

            console.log(weatherData)
          })
          .catch(error => console.error(error))
}