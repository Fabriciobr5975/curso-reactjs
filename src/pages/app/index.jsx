import "./index.scss";

import Cabecalho from "../../components/cabecalho";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="pagina-app pagina">
      <Cabecalho titulo="Estudando ReactJS !!!" />

      <section className="secao">
        <h1>Temas</h1>
        <input type="text" placeholder="Digite aqui" />
        <br /> <br />
        <select>
          <option>Item 1</option>
          <option>Item 2</option>
        </select>
        <br /> <br />
        <button>Clique Aqui</button>
        <ul>
          <li>
            <Link to="/contato">Ir para Contato</Link>
          </li>
          <li>
            <Link to="/eventos">Ir para Eventos</Link>
          </li>

          <li>
            <Link to="/varestado">Ir para Variável de Estado</Link>
          </li>

          <li>
            <Link to="/componentes">Ir para os Componentes</Link>
          </li>

          <li>
            <Link to="/rendecond">Ir para a Renderização Condicional</Link>
          </li>

          <li>
            <Link to="/efeitos">Ir para Efeitos</Link>
          </li>

          <li>
            <Link to="/chamadaapi">Ir para Chamada de API</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
