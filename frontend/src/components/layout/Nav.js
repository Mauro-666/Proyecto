import React from "react";
import '../../styles/components/layout/Nav.css';

import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav className="navbar">
            <h1 className="logo">Pulso de Vida</h1>
            <div className="nav1">
                <ul>
                    <li> <NavLink to='/' className={({ isActive }) => isActive ? "activo" : undefined}>Inicio</NavLink> </li>
                    <li> <NavLink to='/eventos' className={({ isActive }) => isActive ? "activo" : undefined}>Eventos</NavLink> </li>
                    <li> <NavLink to='/servicios' className={({ isActive }) => isActive ? "activo" : undefined}>Servicios</NavLink> </li>
                    <li> <NavLink to='/contacto' className={({ isActive }) => isActive ? "activo" : undefined}>Contacto</NavLink> </li>
                </ul>
            </div>
        </nav>
    )
};


export default Nav;