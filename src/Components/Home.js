import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';



function Home() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="variant" color='blue' size='lg' id="dropdown-basic">
        Players
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item ><Link to='/Julio'>Julio Rodriguez</Link></Dropdown.Item>
        <Dropdown.Item ><Link to='/Eugenio'>Eugenio Suarez</Link></Dropdown.Item>
        <Dropdown.Item ><Link to='/JP'>JP Crawford</Link></Dropdown.Item>
        <Dropdown.Item ><Link to='/Ty'>Ty France</Link></Dropdown.Item>
        <Dropdown.Item ><Link to='/Adam'>Adam Frazier</Link></Dropdown.Item>
        <Dropdown.Item ><Link to='/Jesse'>Jesse Winker</Link></Dropdown.Item>
        <Dropdown.Item ><Link to='/Cal'>Cal Raleigh</Link></Dropdown.Item>
        <Dropdown.Item ><Link to='/Abraham'>Abraham Toro</Link></Dropdown.Item>
        <Dropdown.Item ><Link to='/Carlos'>Carlos Santana</Link></Dropdown.Item>
        <Dropdown.Item ><Link to='/Kyle'>Kyle Lewis</Link></Dropdown.Item>
      </Dropdown.Menu>
      <style>{'body { background-color: teal; }'}</style>
    </Dropdown> 
    
  );
}

export default Home;