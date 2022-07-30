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
        <Dropdown.Item href="#Eugenio">JP Crawford</Dropdown.Item>
        <Dropdown.Item href="#Eugenio">Ty France</Dropdown.Item>
        <Dropdown.Item href="#Eugenio">Adam Frazier</Dropdown.Item>
        <Dropdown.Item href="#Eugenio">Jesse Winker</Dropdown.Item>
        <Dropdown.Item href="#Eugenio">Cal Raleigh</Dropdown.Item>
        <Dropdown.Item href="#Eugenio">Abraham Toro</Dropdown.Item>
        <Dropdown.Item href="#Eugenio">Carlos Santana</Dropdown.Item>
        <Dropdown.Item href="#Eugenio">Kyle Lewis</Dropdown.Item>
      </Dropdown.Menu>
      <style>{'body { background-color: teal; }'}</style>
    </Dropdown> 
    
  );
}

export default Home;