import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './componentes/Formulario';
import Cita from './componentes/Cita';


function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  };


  const [citas, guardarCitas] = useState(citasIniciales);

  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas])

  const crearCita = (cita) => {
    console.log(cita);
    guardarCitas([...citas, cita]);
  }
  const eliminarCitaPorID = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id)
    guardarCitas(nuevasCitas);
  }
  return (
    <Fragment>
      <h1>Administración de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita} />
          </div>
          <div className="one-half column">
            {citas.length === 0 ? <h2>Agrega una cita</h2> : <h2>Administra tus citas</h2>}
            {citas.map(cita => <Cita
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCitaPorID}
            />)}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
