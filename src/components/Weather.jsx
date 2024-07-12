import { useEffect, useState } from 'react';
import clear_icon from '../assets/clear.png';
import search_icon from '../assets/search.png';
const Weather = () => {
  const [weatherData, setWeatherData] = useState('');

  const [city, setCity] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const showOnClick = () => {
    search(city);
    setCity('');
  };

  const search = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
      import.meta.env.VITE_API_KEY
    }`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('from api', data);
      setWeatherData({
        location: data.name,
        windSpeed: data.wind.speed,
        temp: data.main.temp,
        humidity: data.main.humidity,
        icon: data.weather[0].icon,
      });
      console.log('from state', weatherData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    search('Dhaka');
  }, []);

  return (
    <div className=" place-self-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex flex-col items-center pb-8">
      <div className=" flex p-10  gap-3 items-center">
        <input
          type="text"
          name=""
          id=""
          placeholder="search"
          className="h-[50px] rounded-[40px] bg-[#ebfffc] text-[#626262] text-xl pl-6"
          value={city}
          required
          onChange={handleChange}
        />
        <img
          src={search_icon}
          alt=""
          className="w-[50] p-4 rounded-full bg-[#ebfffc] cursor-pointer"
          onClick={showOnClick}
        />
      </div>
      <img
        className="w-[150px] mtb-8 "
        src={`https://openweathermap.org/img/wn/${weatherData.icon}.png`}
      />
      <p className="text-white text-[48px] leading-10 mt-8">
        {Math.floor(weatherData.temp)}°
      </p>
      <p className="text-[40px] text-white">{weatherData.location}</p>
    </div>
  );
};

export default Weather;
