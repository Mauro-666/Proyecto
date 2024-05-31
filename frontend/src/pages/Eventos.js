import React from "react";
import '../../src/styles/components/pages/Eventos.css';

const EventosPage = (props) => {
    return (
        <div className="seccion-eventos">
            <h1 className="titulo">Eventos Disponibles</h1>
            <div className="card-eventos">
                <div className="card">
                    <h1> Sound Healding y Meditacion </h1>
                    <img src="../img/reiki.jpg" />
                    <h2> MIERCOLES </h2>
                    <h3> Arrancamos el 13 de Agosto! </h3>
                    <p> alguna descripcion de la clase, curso y/o evento ya sea del dia o por alguna ocasion especial </p>
                </div>
                <div className="media">
                    <h2> videos o imagenes del lugar </h2>
                </div>
            </div>
        </div>
    )
};

export default EventosPage;