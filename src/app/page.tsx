"use client"

import { useState } from "react";
import SearchBox from "@/components/weather/SearchBox";
import WeatherCard from "@/components/weather/WeatherCard";
import { WeatherData } from "@/lib/types";

export default function Home() {
 
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-400 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-gray-500 mb-6">🌤 Weather App</h1>
      <SearchBox onweatherfetched={setWeather} cardloading={setLoading} />
      <div className="mt-8">
       
      {weather && <WeatherCard  data={weather} cardshimmer={loading} />}

      </div>
    </main>
  ); 
}
