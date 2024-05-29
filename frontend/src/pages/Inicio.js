import React from "react";
import '../styles/components/pages/Inicio.css';
import { Card, Button } from 'react-bootstrap';
import reikiImage from '../img/reiki.jpg'


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
                <h1 className="titulo-turno">Agendemos tu turno</h1>
            </div>

<div className="card-total">
<Card className="mi-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={reikiImage}
                    className="card-imagen" />
                <Card.Body className="card-body-custom">
                    <Card.Title className="card-titulo">Reiki</Card.Title>
                    <Card.Text className="card-texto">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="mi-boton">Quiero un turno</Button>
                </Card.Body>
            </Card>
            <Card className="mi-card">
                <Card.Img variant="top" src={reikiImage}
                    className="card-imagen" />
                <Card.Body className="card-body-custom">
                    <Card.Title className="card-titulo">Reiki</Card.Title>
                    <Card.Text className="card-texto">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="mi-boton">Quiero un turno</Button>
                </Card.Body>
            </Card>
            <Card className="mi-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={reikiImage}
                    className="card-imagen" />
                <Card.Body className="card-body-custom">
                    <Card.Title className="card-titulo">Reiki</Card.Title>
                    <Card.Text className="card-texto">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="mi-boton">Quiero un turno</Button>
                </Card.Body>
            </Card>
            <Card className="mi-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={reikiImage}
                    className="card-imagen" />
                <Card.Body className="card-body-custom">
                    <Card.Title className="card-titulo">Reiki</Card.Title>
                    <Card.Text className="card-texto">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="mi-boton">Quiero un turno</Button>
                </Card.Body>
            </Card>
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