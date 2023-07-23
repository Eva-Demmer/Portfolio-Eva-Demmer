// import { useState, useEffect } from "react";
// import axios from "axios";

// function Header() {
//   // const weatherAPIkey = process.env.REACT_APP_WEATHER_API_KEY;
//   const location = "Bordeaux";
//   const [weather, setWeather] = useState([]);
//   const date = new Date();
//   const showTime = `${date.getHours()}h${date.getMinutes()}`;

//   //   TODO: replace key with env: a2d8f02af7db4cd996a105542231105
//   const getWeather = async () => {
//     const weatherAPI = await axios.get(
//       `http://api.weatherapi.com/v1/current.json?key=a2d8f02af7db4cd996a105542231105&q=${location}`
//     );
//     return weatherAPI.data;
//   };

//   // const getWeather = async () => {
//   //   const weatherAPI = await axios.get(
//   //     `http://api.weatherapi.com/v1/current.json?key=${weatherAPIkey}&q=${location}`
//   //   );
//   //   return weatherAPI.data;
//   // };

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getWeather();
//       setWeather(data);
//     };
//     fetchData();
//   });

//   return (
//     <div className="flex flex-col text-right">
//       <p className="uppercase relative">
//         {weather?.current?.temp_c}°C{" "}
//         {/* <img
//           src={weather?.current?.condition?.icon}
//           alt="météo"
//           className="absolute -top-[18px] right-24"
//         /> */}
//         ☀️ <span>{weather?.location?.name}</span> {showTime}
//       </p>
//       <p className="uppercase">
//         <span className="text-xs mr-2">🟢</span>disponible en{" "}
//         <span>freelance</span>
//       </p>
//       <span>🇫🇷 français</span>
//     </div>
//   );
// }

// export default Header;
