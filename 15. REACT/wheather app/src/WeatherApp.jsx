    import SearchBox from "./searchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){

    let [weatherInfo , useWeatherInfo] = useState({
        city : "Delhi",
        feelslike : 24.84,
        temp : 25.05 ,
        tempMin : 25.05,
        tempMax : 25.05 ,
        humidity : 25.05 ,
        weather : "haze",

    })

    let updateInfo = (result) => {
        useWeatherInfo(result);
    }
    return(
        <div style={{textAlign : "center"}}>
            <h2>Weather App by Ayush</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox  info={weatherInfo}/>
        </div>
    )
}