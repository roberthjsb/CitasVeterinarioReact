import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({ cita, eliminarCita }) => {
    return (
        <div className="cita">
            <p>Macota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.propietario}</span></p>
            <p>fecha: <span>{cita.fecha}</span></p>
            <p>hora: <span>{cita.hora}</span></p>
            <p>sintomas: <span>{cita.mascota}</span></p>
            <button className="button eliminar u-full-width"
                onClick={() => { eliminarCita(cita.id) }}
            >eliminar</button>
        </div>
    );
};

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
export default Cita;