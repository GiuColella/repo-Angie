import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Login() {
    const [nombre, setNombre] = useState("");
    const [contrasena, setContrasena] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre === "angiemade" && contrasena === "12345678") console.log("Iniciaste Sesion")
        else console.log("Contraseña Incorrecta")
        setContrasena("")
        setNombre("")

    }


    return (
        <div>
            <form className="formPatron" onSubmit={handleSubmit}>
                <h1>Iniciar Sesion</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Usuario"
                        value={nombre}
                        onChange={(ev) => setNombre(ev.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={contrasena}
                        onChange={(ev) => setContrasena(ev.target.value)}
                    />
                </div>
                <Link to='/'>
                    Ir a otra página
                </Link>


            </form>
        </div>
    );
}

export default Login