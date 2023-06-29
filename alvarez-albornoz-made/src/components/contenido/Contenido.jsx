import React, { useState } from 'react'
import './contenido.css'

function Contenido() {

    const [pasajeros, setPasajeros] = useState(0);
    const sumarPasajeros = () => {
        if (pasajeros < 10) {
            setPasajeros(pasajeros + 1);
        }
    }
    const restarPasajeros = () => {
        if (count > 0) {
            setPasajeros(pasajeros - 1);

        }
    }

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
  
    const handleSelectChange = event => {
      const options = event.target.options;
      const selectedValues = [];
  
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          selectedValues.push(options[i].value);
        }
      }
  
      setSelectedOptions(selectedValues);
    };
  
    const handleButtonClick = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div className='cont_pasajeros'>
            <div className='top_pasajeros'>
                <div className='top_pasajeros'>
                    <h3>Vuelos</h3>
                    <div>
      <button onClick={handleButtonClick}>Destinos</button>
      {isOpen && (
        <select multiple={true} onChange={handleSelectChange}>
          <option value="option1">París</option>
          <option value="option2">Milán</option>
          <option value="option3">Sídney</option>
          <option value="option4">Berlín</option>
        </select>
      )}
      {selectedOptions.length > 0 && (
        <p>Opciones seleccionadas: {selectedOptions.join(', ')}</p>
      )}
    </div>
                </div>
            </div>
            <div className='botton_pasajeros'>
                <button className='btn_op' onClick={sumarPasajeros}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                    </svg>
                </button>
                <p className='txt_pasajeros'>{pasajeros}</p>
                <button className='btn_op' onClick={restarPasajeros}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Contenido