import React from 'react'
import Header from '../header/Header'
import Carrousel from '../carrousel/Carrousel';
import './grid.css'
import Footer from '../footer/Footer';
import Contenido from '../contenido/Contenido';



function Grid() {
  
  const sliderImagenes= [
    '/sliderMount.jpeg',
    '/sliderDesierto.jpeg',
    '/sliderPlaya.jpeg',
];

  return (
    <div>
        <div className=' h borde'>
            <Header/>
        </div>
        <div className='m borde'>
         <Contenido/>
        </div>
        <div className='c borde'>
          <Carrousel imagenes={sliderImagenes}/>
        </div>
        <div className='f borde'>
          <Footer/>
        </div>
    </div>
  )
}

export default Grid