import "./index.scss";

import { useState } from "react";

export default function Contador(props) {
  const [contador, setContador] = useState(0);

  const aumentar = () => (contador >= (props.limite ?? 10) ? 0 : setContador(contador + 1) );
  const diminuir = () => (contador > (props.inicio ?? 0) ? setContador(contador - 1) : 0);

  return (
    <div className="comp-contador">
      <h1>{props.titulo}</h1>

      <div className="cont">
        <button onClick={aumentar}> + </button>
        {contador}
        <button onClick={diminuir}> - </button>
      </div>
    </div>
  );
}
