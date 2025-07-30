"use client";

import React, { useState } from 'react'
import { WeatherData } from '@/lib/types';
import { FetchWeatherByCity } from '@/lib/api';
function SearchBox({onweatherfetched}:{onweatherfetched: (data: WeatherData) => void}) {
    const [city, setcity] = useState("");
    const handleSearch =async ()=>{
        if (!city) return;
        const data = await FetchWeatherByCity(city);
        if (data) {
            onweatherfetched(data);
            setcity("");
        } else {
            alert("City not found");
        }
    }
  return (
    <div>
        <input placeholder="enter the city name" value={city} onChange={(e)=>setcity(e.target.value)}/> 
        <button onClick={handleSearch} >search</button>  </div>
  )
}

export default SearchBox