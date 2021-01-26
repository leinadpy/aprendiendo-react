import React, { useState } from "react";

const FormularioInicioSesion = (props) => {
  const [usuario, cambiarUsuario] = useState("");
  const [password, cambiarPassword] = useState("");

  //   const onChangeUsuario = (e) => {
  //     cambiarUsuario(e.target.value);
  //   };

  //   const onChangePassword = (e) => {
  //     cambiarPassword(e.target.value);
  //   };

  const onChange = (e) => {
    if (e.target.name === "usuario") {
      cambiarUsuario(e.target.value);
    } else if (e.target.name === "password") {
      cambiarPassword(e.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (usuario === "carlos" && password === "123") {
      props.cambiarEstadoSesion(true);
    } else {
      alert("Datos incorrectos");
      cambiarUsuario("");
      cambiarPassword("");
    }
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <p>Usuario: {usuario}</p>
      <p>Contraseña: {password}</p>
      <div>
        <label htmlFor="usuario">Usuario</label>
        <input
          type="text"
          name="usuario"
          id="usuario"
          value={usuario}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChange}
        />
      </div>
      <button type="submit">Iniciar Sesion</button>
    </form>
  );
};

export default FormularioInicioSesion;
