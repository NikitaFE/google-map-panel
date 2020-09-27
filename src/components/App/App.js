import React from 'react';

import Map from '../Map';
import SideBar from '../SideBar';

import './App.scss';

const App = () => {
  return (
    <div className="app">
      <SideBar />
      <Map />
    </div>
  );
};

export default App;
