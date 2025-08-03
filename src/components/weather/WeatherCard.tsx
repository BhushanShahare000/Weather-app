import React from 'react';
import { WeatherData } from '@/lib/types';

function WeatherCard({data,cardshimmer}:{data: WeatherData; cardshimmer: boolean}) {
  return (
  <div>
    {
      cardshimmer ?( 
          <div className="w-2xl rounded-2xl m-4 p-2 border  border-gray-100 h-80 bg-gray-300  "></div>
      ): (<div className='w-2xl p-5 rounded-2xl m-4  border border-gray-100 h-auto bg-gray-800 text-teal-50'>
  <h2 className="text-2xl font-bold">{data.city}, {data.country}</h2>
        <p className="text-5xl text-blue-400  font-bold mt-3">{data.temperature}°C</p>
        <div className='w-full h-0.5 mt-2.5  bg-blue-600'></div>
<div className='flex justify-between'>
        <p className="text-lg mt-2">💨 {data.windspeed} km/h wind</p>
        <p className="text-sm text-shadow-fuchsia-50 mt-2">Updated: {data.time}</p>
</div>

    </div>)
    }
  </div>
   
  )
}

export default WeatherCard