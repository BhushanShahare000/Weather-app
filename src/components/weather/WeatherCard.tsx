import React from 'react';
import { WeatherData } from '@/lib/types';

function WeatherCard({data}:{data: WeatherData}) {
  return (
    <div>
  <h2 className="text-2xl font-bold">{data.city}, {data.country}</h2>
        <p className="text-5xl font-semibold mt-2">{data.temperature}°C</p>
        <p className="text-lg mt-2">💨 {data.windspeed} km/h wind</p>
        <p className="text-sm text-gray-600 mt-2">Updated: {data.time}</p>
    </div>
  )
}

export default WeatherCard