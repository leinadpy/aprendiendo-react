import React, { useState } from "react";
import ReactDOM from "react-dom";
import Usuario from "./componentes/Usuario";
import FormularioInicioSesion from "./componentes/FormularioInicioSesion"

const App = () => {
  const [session, cambiarEstadoSesion] = useState(false);

  return (
    <>
      {session === true ? (
        <div>
          <Usuario />
          <button onClick={() => cambiarEstadoSesion(false)}>
            Cerrar Sesion
          </button>
        </div>
      ) : (
        <div>
          <p>No has iniciado sesión</p>
          <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion} />
          {/* <button onClick={() => cambiarEstadoSesion(true)}>
            Iniciar Sesion
          </button> */}
        </div>
      )}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
