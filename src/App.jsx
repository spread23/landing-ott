import React from 'react'

import logo from './assets/logo_full_solo_blanco.svg'

import { FaComments } from 'react-icons/fa'
import { FaRobot } from 'react-icons/fa'

import './app.css'

export const App = () => {
    return (
        <div className='page-container'>
            <div className='header-container'>
                <div className='logo-header'>
                    <img className='logo' src={logo} alt="logo" />
                </div>
                <div className='button-header'>
                    <button className='btn-contact'>Contacto</button>
                </div>
            </div>

            <div className='info-header-container'>
                <h1 className='title-header'>Descubre</h1><span className='span-title'>OfreceTuTalento</span>
                <h2 className='subtitle-header'>¿Cansado de que el reclutamiento te consuma tiempo y dinero?</h2>

                <h2 className='info-subtitle'>¿Pasas horas interminables revisando CVs? Nuestra IA pre-filtra y segmenta candidatos en minutos, no días.</h2>
                <h2 className='info-subtitle'>¿Los costos de reclutamiento se te van de las manos? Optimiza tu proceso y ahorra con nuestra solución inteligente.</h2>
                <h2 className='info-subtitle'>¿Quieres tomar decisiones de contratación más acertadas? Nuestra IA te brinda información clave sobre cada candidato.</h2>

                <h2 className='info-subtitle'>¡Agenda una demo y descubre cómo revolucionar tu reclutamiento!</h2>
                <button className='btn-contact'>Agenda una cita</button>
            </div>
            <div className='description-page'>
                <FaComments className='icon-title'></FaComments>
                <h2 className='subtitle-header'>Cómo funciona la tecnología de Ofrece Tu Talento + IA </h2>
                <h2 className='info-subtitle'>
                    Nuestro chatbot con IA no solo interactúa con los candidatos vía WhatsApp, sino que también
                    organiza la información recopilada en un dashboard personalizado para tu empresa. Visualiza
                    fácilmente datos clave como teléfono, correo electrónico, talentos y experiencia de cada candidato,
                    e incluso accede a videos de presentación, todo en un solo lugar.

                </h2>
                <FaRobot className='icon-title'></FaRobot>
                <h2 className='subtitle-header'>Conoce la solución completa para gestión de talento en RRHH </h2>
                <h2 className='info-subtitle'>
                    Usamos la IA para agilizar pruebas DISC, analisis de clima laboral, planes de sucesión y mapeo de talento
                </h2>
                <button className='btn-contact'>Conoce la solución</button>
            </div>
        </div>
    )
}