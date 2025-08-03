"use client";

import React, { useState } from 'react'
import { WeatherData } from '@/lib/types';
import { FetchWeatherByCity } from '@/lib/api';
import { Dispatch, SetStateAction } from "react";
function SearchBox({
  onweatherfetched,
  cardloading,
}: {
  onweatherfetched: (data: WeatherData) => void;
  cardloading: Dispatch<SetStateAction<boolean>>;
}) {
    const [city, setcity] = useState("");
    const handleSearch =async ()=>{
        if (!city){
            alert("Please enter a city name");
            return;
        };
        cardloading(true);
        const data = await FetchWeatherByCity(city);

        console.log(data)
     
        if (data) {
            onweatherfetched(data);
            setcity("");
        } else {
            alert("City not found");
        }
        cardloading(false);
    }
  return (
    <div className=' flex m-2 gap-2'>
        <input placeholder="Enter city name" className="w-full  px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200" value={city} onChange={(e)=>setcity(e.target.value)}/> 
        <button className='px-5 py-2 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200"' onClick={handleSearch} >Search</button>  </div>
  )
}

export default SearchBox