import React from "react";
import '../styles/components/pages/Inicio.css';


const InicioPage = (props) => {
    return (
        <div className="contenedor">
            <div className="imagen-hero">
                <div className="texto-hero">
                    <h1>Marcelo Rodriguez Arias</h1>
                    <h3> Terapeuta de sonido </h3>
                    <button class="boton"></button>

                </div>
            </div>
            <div className="contenido">
                <h1>Agendemos tu turno</h1>
                <div className="cards">
                    <div className="card1">
                        <h3>Reiki</h3>
                        <p>Descripción del servicio</p>
                    </div>

                    <div className="card2">
                        <div className="texto-card">
                            <h3>Reiki</h3>
                            <p>Descripción del servicio</p>
                        </div>
                    </div>
                    <div className="card3">
                        <div className="texto-card">
                            <h3>Reiki</h3>
                            <p>kkjf lkdlso allsj fjjla la ljsljf la jsl ajsjidifhg al</p>
                        </div>
                    </div>
                    <div className="card4">
                        <div className="texto-card">
                            <h3>Reiki</h3>
                            <p>kkjf lkdlso allsj fjjla la ljsljf la jsl ajsjidifhg al</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contenido2-m">
                <div className="card5-m"></div>
                <div className="texto-card-m">
                    <h1>Jueves</h1>
                    <h3>Sound Healing y Meditación</h3>
                    <p>Sumergite en la vibración y resonancia de los instrumentos musicales seleccionados cuidadosamente.
                        Este baño de sonido no solo será una experiencia sensorialmente placentera, sino que
                        también promoverá la relajación profunda, la sanación y la liberación de tensiones acumuladas.Un jueves al mes, de 10hs a 11hs</p>
                </div>
            </div>
        </div>

    )
};

export default InicioPage;