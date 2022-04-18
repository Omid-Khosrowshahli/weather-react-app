import { useState } from 'react';
import './Weather.css';
import SearchBar from '../SearchBar/SearchBar';
import Results from '../Results/Results';

const Weather = () => {
  const [data, setData] = useState();

  return (
    <>
      <SearchBar data={data} setData={setData} />
      <Results data={data} />
    </>
  );
}

export default Weather;