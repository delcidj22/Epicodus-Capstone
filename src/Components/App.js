import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homelogo from './homelogo';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Julio from '../players/julio';
import Eugenio from '../players/Eugenio';



function App() {
  return (
    <Router>
      < Header />
      < Home />
      < Homelogo />
      < Routes>
      < Route path='/Julio' element={ <Julio/> } />
      < Route path='/Eugenio' element={ <Eugenio /> } />
      </Routes>
    </Router>
  );
  }

export default App;