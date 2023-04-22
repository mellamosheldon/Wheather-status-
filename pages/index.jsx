import React, { useEffect, useState } from 'react';

const Buttonweather = ({ onClick }) => {
  return (
    <button type='button' className='block' onClick={onClick}>
      Obtener clima
    </button>
  );
};

const Homepage = () => {
  const [weather, setWeathers] = useState({});

  const fetchUserData = () => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat=24.8091&lon=-107.3940&units=metric&appid=9576a1cdd578da92b8d571add8273a8b'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log({ data });
        setWeathers(data);
      });
  };

  return (
    <div>
      {weather && weather.name ? (
        <>
          <p>{weather.name}</p>
          <p>{weather.main.temp}</p>
        </>
      ) : (
        <div className='consultabody'>
          <div className='alineartexto'>
            The weather app
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='100'
              height='50'
              fill='currentColor'
              class='bi bi-cloud-lightning'
              viewBox='0 0 16 16'
            >
              <path d='M13.405 4.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1zM7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2z' />
            </svg>
          </div>
          <hr className='classhr' />
          <div className='divbutton'>
            <Buttonweather onClick={fetchUserData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
