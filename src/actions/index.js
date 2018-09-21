import axios from 'axios';

const API_KEY = 'a4f997393790f0b5d92dc78cdfdfadaf';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city){
  const url = `${ROOT_URL}&q=${city},us&appid=${API_KEY}`;
  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}