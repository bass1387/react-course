import React from 'react';
import './App.css';
import CityClock from './components/CityClock';

const cities = [
  { name: 'Москва', timeZoneOffset: 3 },
  { name: 'Екатеринбург', timeZoneOffset: 5 },
  { name: 'Омск', timeZoneOffset: 6 }
];

function App() {
  return <div style={{ display: 'flex', height: '100vh' }}>
    <ul style={{ margin: 'auto', padding: 0 }}>
      {cities.map(city => {
        return <li key={city.name} style={{ listStyle: 'none' }}>
          <CityClock city={city.name} timeZoneOffset={city.timeZoneOffset} />
        </li>;
      })}
    </ul>
  </div>;
}

export default App;
