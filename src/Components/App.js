import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homelogo from './homelogo';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Julio from '../players/julio';
import Eugenio from '../players/Eugenio';
import Abraham from '../players/Abraham';
import Adam from '../players/Adam';
import Cal from '../players/Cal';
import Carlos from '../players/Carlos';
import Jesse from '../players/Jesse';



function App() {
  return (
    <Router>
      < Header />
      < Home />
      < Homelogo />
      < Routes>
      < Route path='/Julio' element={ <Julio/> } />
      < Route path='/Eugenio' element={ <Eugenio /> } />
      < Route path='/Abraham' element={ <Abraham /> } /> 
      < Route path='/Adam' element={ <Adam /> } />
      < Route path='/Cal' element={ <Cal /> } /> 
      < Route path='/Carlos' element={ <Carlos /> } /> 
      < Route path='/Jesse' element={ <Jesse /> } /> 
      </Routes>
    </Router>
  );
  }

export default App;