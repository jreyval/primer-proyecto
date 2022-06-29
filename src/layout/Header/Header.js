import React from 'react'
import { Button, ButtonGroup, Navbar, Container, Nav } from 'react-bootstrap'
import './header.css'
//import { Link } from "react-router-dom";


const Header = (props) => {
  return (
    <>
    <header id='header' className='fixed-top'>
        <div className='container d-flex align-items-center'>
          <h1 className='logo me-auto'>
            <a href='/'>Javier Reyes</a>
          </h1>
          <nav id='navbar' className='navbar'>
            <ul>
              <li>
                <a className='nav-link scrollto active'>Inicio</a>
              </li>
              <li>
                <a className='nav-link scrollto active'>Sobre mí</a>
              </li>
              <li>
                <a className='nav-link scrollto active'>Lenguajes</a>
              </li>
              <li>
                <a className='nav-link scrollto active'>Experiencia y Estudios</a>
              </li>
              <li>
                <a className='nav-link scrollto active'>Portafolio</a>
              </li>
              <li>
                <a className='getstarted scrollto'>Contacto</a>
              </li>
            </ul>
            <button aria-controls='responsive-navbar-nav' type='button' aria-label='toggle-navigation' className='navbar-toggler collapsed'>
              <span className='navbar-toggler-icon '></span>
            </button>

          </nav>
        </div>
    
    </header>
     {props.children}
    </>
     
  )
}

export default Header