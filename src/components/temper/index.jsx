import React, { useState } from "react";
import { useEffect } from "react";
import './style.css'


const Temp = () => {
    const [city, setCity] = useState(null);
    const  [search, setSearch] = useState("karachi");

    useEffect( () => {
        const fetchApi = async () => {
           const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d584316282300d402f66b6c404bf66b3`
            const response = await fetch(url)
            const resJson = await response.json();
            console.log(resJson)
             setCity(resJson.main);

        }



       fetchApi();

    },[search] )
return(
    <>
    <div className="box">
        <div className="inputData">
            <input
            type="seaech"
            value={search}
            className="inputField" 
            onChange={(event) =>{setSearch(event.target.value)} }
            />
        </div>
    


    { !city ? (
            <p className="errorMsg">no data found</p>
        ) : (
       
    


    <div className="info">
        <h2 className="Location">
            <i className="fa-solid fa-street-view"></i>{search}
        </h2>
        <h1 className="temp">
            {city.temp}°cel 
        </h1>

        <h3 className="temp"> min: {city.temp_min}°cel  | max: {city.temp_max}°cel </h3>

    </div>)}
    
    </div>
    </>

)

}

export default Temp;