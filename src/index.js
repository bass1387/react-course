import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const cities = [
  { name: 'Moscow', timeZoneOffset: 3 },
  { name: 'Ekaterinburg', timeZoneOffset: 5 },
  { name: 'Omsk', timeZoneOffset: 6 }
];

const formatDate = (offset) => {
  const now = new Date().getTime();
  const localDate = new Date(now + (offset - 3) * 3600 * 1000);

  return localDate.toLocaleString();
};

const render = () => {
  const ListItem = <li style={{ listStyle: 'none' }}></li>;
  const Element = <ul style={{ margin: 'auto', padding: 0 }}>
    {cities.map(city => {
      return React.cloneElement(ListItem, null, `${city.name}: ${formatDate(city.timeZoneOffset)}`);
    })}
  </ul>;

  ReactDOM.render(
    <div style={{ display: 'flex', height: '100vh' }}>{Element}</div>,
    document.getElementById('root')
  );
};

setInterval(render, 1000);
