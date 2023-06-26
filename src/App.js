import React, { useState } from 'react';
import './App.css';

function PerfilEstudiante() {
  const [mostrarSubMenuPregrado, setMostrarSubMenuPregrado] = useState(false);
  const [mostrarSubMenuPostgrado, setMostrarSubMenuPostgrado] = useState(false);
  const [mostrarSubMenuAdministracion, setMostrarSubMenuAdministracion] = useState(false);

  const mostrarSubMenu = (opcion) => {
    switch (opcion) {
      case 'pregrado':
        setMostrarSubMenuPregrado(true);
        setMostrarSubMenuPostgrado(false);
        setMostrarSubMenuAdministracion(false);
        break;
      case 'postgrado':
        setMostrarSubMenuPregrado(false);
        setMostrarSubMenuPostgrado(true);
        setMostrarSubMenuAdministracion(false);
        break;
      case 'administracion':
        setMostrarSubMenuPregrado(false);
        setMostrarSubMenuPostgrado(false);
        setMostrarSubMenuAdministracion(true);
        break;
      default:
        setMostrarSubMenuPregrado(false);
        setMostrarSubMenuPostgrado(false);
        setMostrarSubMenuAdministracion(false);
        break;
    }
  };

  const ocultarSubMenu = () => {
    setMostrarSubMenuPregrado(false);
    setMostrarSubMenuPostgrado(false);
    setMostrarSubMenuAdministracion(false);
  };

  return (
    <div className="contenedor">
      <header className="header">
        <div className="titulo">
          <h1>Dirección de Ingreso, Permanencia y Promoción</h1>
          <h2>DIPP-UNAH</h2>
        </div>
        
        <div className="menu">
          <ul>
            <li onMouseEnter={() => mostrarSubMenu('')}>Página Principal</li>
            <li onMouseEnter={() => mostrarSubMenu('')} onMouseLeave={ocultarSubMenu}>Primer Ingreso</li>
            <li onMouseEnter={() => mostrarSubMenu('pregrado')} onMouseLeave={ocultarSubMenu}>Sistema de Pregrado</li>
            {mostrarSubMenuPregrado && (
              <ul className="submenu">
                <li>Estudiantes</li>
                <li>Profesores</li>
                <li>Jefes de Departamento</li>
                <li>Coordinador de Carrera</li>
                <li>Programas Especiales</li>
                <li>Suficiencias</li>
                <li>Coordinador Asignatura</li>
              </ul>
            )}
            <li onMouseEnter={() => mostrarSubMenu('postgrado')} onMouseLeave={ocultarSubMenu}>Sistema de Postgrado</li>
            {mostrarSubMenuPostgrado && (
              <ul className="submenu">
                <li>Solicitudes de Ingreso</li>
                <li>Oferta Académica</li>
                <li>Servicio al Estudiante</li>
                <li>Coordinación de Postgrados</li>
                <li>Registro de Calificaciones</li>
              </ul>
            )}
            <li onMouseEnter={() => mostrarSubMenu('administracion')} onMouseLeave={ocultarSubMenu}>Administración</li>
            {mostrarSubMenuAdministracion && (
              <ul className="submenu">
                <li>Dirección Académica</li>
                <li>Comisionado Universitario</li>
                <li>Tesorería</li>
                <li>Decanos</li>
                <li>DIPP</li>
              </ul>
            )}
          </ul>
        </div>
        <hr className="hr1" />
      </header>
      <br></br>
      
      <div className="franja-transparente">
        <p>Información general</p>
      </div>
      <main className="main">
        <div className="perfil">
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Foto de perfil" />
          <div className="datos-personales">
            <h5>Número de cuenta:</h5>
            <h5>Nombre del estudiante:</h5>
            <h5>Carrera universitaria</h5>
          </div>
          <div className="datos-adicionales">
            <h5>Centro regional:</h5>
            <h5>Índice Global:</h5>
            <h5>Índice Periodo:</h5>
          </div>
        </div>
      </main>
      <hr />
      <hr />
      <div className="div-horizontal">
        <ul>
          <li className="opcion">Historial académico</li>
          <li className="opcion">Índice académico</li>
          <li className="opcion">Seguimiento de calificaciones</li>
          <li className="opcion">Índice de repitencia</li>
          <li className="opcion">Equivalencias</li>
          <hr />
        </ul>
      </div>
    </div>
  );
}

export default PerfilEstudiante;
