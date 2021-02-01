import React, { useState } from "react";
import ReactDOM from "react-dom";
import Usuario from "./componentes/Usuario";
import FormularioInicioSesion from "./componentes/FormularioInicioSesion";
// import ContadorClass from "./componentes/ContadorClass";
import ContadorFunc from "./componentes/ContadorFunc";

const App = () => {
  const [session, cambiarEstadoSesion] = useState(true);

  return (
    <>
      {session === true ? (
        <div>
          <Usuario />
          {/* <ContadorClass cantidadAIncrementar={10} cantidadADisminuir={2} /> */}
          <ContadorFunc cantidadAIncrementar={10} cantidadADisminuir={2} />
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
