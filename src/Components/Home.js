import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import './App.css';


function Home() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="variant" color='blue' size='lg' id="dropdown-basic">
        Players
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href='src/players/julio.html'>Julio Rodriguez</Dropdown.Item>
        <Dropdown.Item href="#Jesse">Jesse Winker</Dropdown.Item>
        <Dropdown.Item href="#Eugenio">Eugenio Suarez</Dropdown.Item>
      </Dropdown.Menu>
      <style>{'body { background-color: teal; }'}</style>
    </Dropdown>
    
  );


}

export default Home;