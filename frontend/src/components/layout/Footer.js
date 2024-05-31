import React from "react";
import '../../styles/components/layout/Footer.css';

const Footer = (props) => {
    return (
        <footer className="seccion-oscura">
            <img className="footer-logo" src="" />
            <p className="footer-texto text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
                provident? <br />Lorem ipsum dolor sit amet.
            </p>
            <div className="iconos-redes-sociales" id="contacto">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-twitter"></i>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i>
                </a>
                <a href="mailto:lalalla@hotmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-envelope-at-fill"></i>
                </a>
            </div>
            <div className="derechos-de-autor">Derechos Reservados (2024) &#169;</div>
        </footer>
    )
};

export default Footer;