import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import CoreLayout from './common/layouts/CoreLayout';
import './styles/_main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.StrictMode>
      <CoreLayout>
        <Routes />
      </CoreLayout>
    </React.StrictMode>
    ,
  </React.StrictMode>
);
