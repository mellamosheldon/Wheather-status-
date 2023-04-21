import React, { useEffect, useState } from 'react';

const Buttonweather = ({ onClick }) => {
  return <button onClick={onClick}>Obtener clima</button>;
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
      Consulta climas
      <Buttonweather onClick={fetchUserData} />
      {weather && weather.name && (
        <>
          <p>{weather.name}</p>
          <p>{weather.main.temp}</p>
        </>
      )}
    </div>
  );
};

export default Homepage;
