import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';
import AppTwo from './AppTwo';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppTwo />
  </React.StrictMode>
);
