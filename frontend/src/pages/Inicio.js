import React from "react";
import '../styles/components/pages/Inicio.css';

const InicioPage = (props) => {
    return (
        <div className="contenedor">
            <div className="imagen-hero">
                <div className="texto-hero">
                    <h1> Marcelo Rodriguez Arias </h1>
                    <h3> Terapeuta de sonido </h3>
                </div>
            </div>
            <div className="contenido">
                <h1>Agendemos tu turno</h1>
            </div>
        </div>

    )
};

export default InicioPage;