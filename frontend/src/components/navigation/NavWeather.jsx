import { useState, useEffect } from "react";
import axios from "axios";

// TODO: display Franfurt/Galway weather if German/English language is chosen ==> translate Bordeaux with Frakfurt/Galway
// TODO: replace key with dotenv

function Header() {
  const location = "Bordeaux";
  const apiKey = "iZBYrwWFBTfOueFo1NUh8g==VdnzGBK1bnUW1Hua";
  //   const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const apiURL = `https://api.api-ninjas.com/v1/weather?city=${location}`;
  const [weather, setWeather] = useState([]);
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const showTime = `${hours}h${minutes}`;
  const isDayTime = hours >= 6 && hours < 21;

  const getWeather = async () => {
    try {
      const weatherApi = await axios.get(apiURL, {
        headers: { "X-Api-Key": `${apiKey}` },
      });
      return weatherApi.data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeather();
      setWeather(data);
    };
    fetchData();
  }, []);

  return (
    <div className="absolute right-[15%] top-9 hidden flex-col text-right sm:flex">
      <div className="uppercase">
        {weather?.temp}°C {isDayTime ? "☀️" : "🌙"} <span>Bordeaux</span>{" "}
        {showTime}
      </div>
      <div className="flex items-center uppercase">
        <div className="h-3 w-3 rounded-full bg-secondary" />
        <p className="mx-2">disponible en</p>
        <span>freelance</span>
      </div>
      <span>🇫🇷 français</span>
    </div>
  );
}

export default Header;
