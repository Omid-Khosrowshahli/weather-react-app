import './SearchBar.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const SearchBar = ({data, setData}) => {
  const [city, setCity] = useState('');
  const [query, setQuery] = useState('Tabriz');

  const API_KEY = "10e500a2733b2361f1e74acf08b3cccc";
  const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${API_KEY}&units=metric&cnt=7`;

  useEffect(() => {
    axios.get(URL).then((response) => setData(response.data))
  }, [URL]);

  const handleSearchCity = (input) => {
    setCity(input);
  }
  console.log(data);
  return (
    <div className='search'>
      <input className='search-input' type='text' placeholder='Search a place...' onChange={(event) => handleSearchCity(event.target.value)} />
      <button className='btn' onClick={() => setQuery(city)}>Check Weather</button>
    </div>
  );
}

export default SearchBar;