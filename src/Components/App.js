import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homelogo from './homelogo';



function App() {
  return (
    <React.Fragment>
      < Header />
      < Home />
      < Homelogo />
    </React.Fragment>
  );
  }

export default App;