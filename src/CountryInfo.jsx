import React, { useState } from 'react';
import axios from 'axios';

function CountryInfo() {
  const [countryName, setCountryName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [flag, setFlag] = useState('');
  const [population, setPopulation] = useState('');

  const getData = () => {
    axios
      .get(`https://restcountries.com/v3.1/name/${inputValue}`)
      .then((response) => {
        const data = response.data[0];
        setCountryName(data.name.common);
        setFlag(data.flags.png);
        setPopulation(data.population);
      })
      .catch((error) => {
        console.error(error);
        setCountryName('Country not found');
        setFlag('');
        setPopulation('');
      });
  };

  return (
    <div style={{ border: '2px solid rgb(104, 101, 101)', boxShadow: '2px 3px 4px gainsboro', height: '400px', width: '500px' }}>
      <input
        type="text"
        className="input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={getData}>OK</button>
      <h1 className="cName">{countryName}</h1>
      {flag && <img src={flag} alt="Country flag" className="img" style={{ maxWidth: '100%', maxHeight: '100px' }} />}
      {population && <h4 className="pop">Population: {population}</h4>}
    </div>
  );
}

export default CountryInfo;
