import "./index.scss";

import Cabecalho from "../../components/cabecalho";

import { Link } from "react-router-dom";

export default function Contato() {
  return (
    <div className="pagina-contato pagina">
      <Cabecalho titulo="ReactJS | Contato"/>

      <section className="secao">
        <h1>Entre em Contato!</h1>
        <img className="icone" src="/assets/images/contato.jpeg" />
      </section>
    </div>
  );
}
