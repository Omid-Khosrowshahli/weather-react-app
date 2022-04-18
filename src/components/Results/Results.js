import './Results.css';

const Results = ({data}) => {
  return (
    <div className='results'>
      <div className='main-info'>
        <div className='location'>
          <span>{data?.city?.country}</span>
          <span>{data?.city?.name}</span>
        </div>
        <div className='current-info'>
          <span>{data?.list[0]?.main?.temp}°</span>
          <img src={`http://openweathermap.org/img/wn/${data?.list[0]?.weather[0]?.icon}@2x.png`} />
        </div>
      </div>

      <div className='more-info'>
        <div className='info'>
          <span>wind speed</span>
          <span>{data?.list[0]?.wind?.speed}</span>
        </div>
        <div className='info'>
          <span>feels like</span>
          <span>{data?.list[0]?.main?.feels_like}°</span>
        </div>
        <div className='info'>
          <span>humidity</span>
          <span>{data?.list[0]?.main?.humidity}</span>
        </div>
        <div className='info'>
          <span>pressure</span>
          <span>{data?.list[0]?.main?.pressure}</span>
        </div>
      </div>

      <div className='details-container'>
        {data?.list?.map((item) => (
          <div className='details'>
            <img src={`http://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`} />
            <span className='description'>{item?.weather[0]?.description}</span>
            <div id='details'>
              <span className='time'>{item?.dt_txt.slice(11, 16)}</span>
              <span style={{color: 'red'}}>{item?.main?.temp_max}<span style={{color: 'black'}}>°</span></span>
              <span style={{color: 'blue'}}>{item?.main?.temp_min}<span style={{color: 'black'}}>°</span></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;