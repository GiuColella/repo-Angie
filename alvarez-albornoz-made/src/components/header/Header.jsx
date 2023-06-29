import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <div className="header_cont">
            <div className="top_header">
                <a href="#">Atención al cliente</a>
                <a href="#"> Informacion importante</a>
                <a href="#">Preguntas frecuentes</a>
                <Link to='/login' className='button_top_header' >
                Login
                </Link>
            </div>
            <div className="botton_header">
                <div className='logo_header'>
                    <img src="/Logo.jpg" alt="" width={'300px'} height={'100px'}/>
                </div>
                <div className="menu_header">
                    <p>Mi reserva</p>
                    <p>Experiencia</p>
                    <p>Destinos</p>
                    <p>Viajá</p>
                    <p>Flybondi</p>
                    <p>Cargas</p>
                </div>
            </div>
        </div>
  )
}

export default Header