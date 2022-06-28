import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProfile } from 'components/Profile/App';
import { AppStatistics } from 'components/Statistics/App';
import './index.css';


//console.log(user);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProfile />
    <AppStatistics />
  </React.StrictMode>
);
