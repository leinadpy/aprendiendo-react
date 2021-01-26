import React from "react";
import {Titulo} from "./Titulo";

// Componentes empiezan con mayúscula y usamos camel case
const Usuario = () => {
  const pais = "Paraguay";
  const amigos = ["Alejandro", "Manuel", "Cesar"];

  return (
    <div>
      <Titulo usuario="Carlos" />
      <Titulo usuario="Cesar" color="blue" />
      <p>Que tengas un buen día.</p>
      {pais && <p>Tu eres de {pais}</p>}
      <ul>
        {amigos.map((amigo, index) => (
          <li key={index}>{amigo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Usuario;
