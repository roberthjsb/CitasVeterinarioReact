import React, { Fragment, useState } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({ crearCita }) => {
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    const [error, actualizarError] = useState(false);

    const actualizarState = (evento) => {
        const { name, value } = evento.target;
        actualizarCita({
            ...cita,
            [name]: value
        });
    }
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    const submitCita = (evento) => {
        evento.preventDefault();
        //validar
        if (mascota.trim() === '' ||
            propietario.trim() === '' ||
            fecha.trim() === '' ||
            hora.trim() === '' ||
            sintomas.trim() === ''
        ) {
            actualizarError(true);
            return;
        }
        actualizarError(false);
        cita.id = uuid();
        crearCita(cita);
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });

    }

    return (
        <Fragment>
            <h2>Desde Formulario</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <form
                onSubmit={submitCita}
            >
                <label>Nombre de la mascotas</label>
                <input
                    type="text"
                    name="mascota"
                    value={mascota}
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                    onChange={actualizarState}
                />
                <label>Nombre propietario</label>
                <input
                    type="text"
                    name="propietario"
                    value={propietario}
                    className="u-full-width"
                    placeholder="Nombre del dueño de la mascota"
                    onChange={actualizarState}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    value={fecha}
                    className="u-full-width"
                    onChange={actualizarState}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    value={hora}
                    className="u-full-width"
                    onChange={actualizarState}

                />
                <label>Nombre de la mascotas</label>
                <textarea
                    name="sintomas"
                    value={sintomas}
                    className="u-full-width"
                    onChange={actualizarState}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
};

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
};

export default Formulario;