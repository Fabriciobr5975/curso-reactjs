import "./index.scss";
import { useState } from "react";

import Cabecalho from "../../components/cabecalho";
import Contador from "../../components/contador";
import ItemMedia from "../../components/itemMeta";

export default function Comps() {
  const [novaMeta, setNovaMeta] = useState("");
  const [listaMetas, setListaMetas] = useState([]);
  const [editando, setEditando] = useState(-1);

  const adicionarMeta = () => {
    if (novaMeta !== "") {
      if (editando === -1) {
        setListaMetas([...listaMetas, novaMeta]);
        setNovaMeta("");
      } else {
        listaMetas[editando] = novaMeta;
        setListaMetas([...listaMetas]);
        setEditando(-1);
        setNovaMeta("");
      }
    }
  };

  const teclaApertada = (e) => {
    if (e.key === "Enter") {
      adicionarMeta();
    }
  };

  const removerMeta = (posicao) => {
    alert(`Removendo a meta ${listaMetas[posicao]} na posição ${posicao}`);
    listaMetas.splice(posicao, 1);
    setListaMetas([...listaMetas]);
  };

  const alterarMeta = (posicao) => {
    setNovaMeta(listaMetas[posicao]);
    setEditando(posicao);
  };

  return (
    <div className="pagina-comps pagina">
      <Cabecalho titulo="ReactJS | Componentes" />

      <div className="secao">
        <h1>Transformando o contador em componente</h1>

        <Contador titulo="Passos" limite="5" inicio="0" />
        <Contador titulo="Erros" limite="10" inicio="0" />
      </div>

      <div className="secao metas">
        <h1>Transformando os Itens da Lista de Metas em Componentes</h1>

        <div className="entrada">
          <input
            type="text"
            placeholder="Digite a sua meta aqui"
            onKeyUp={teclaApertada}
            value={novaMeta}
            onChange={(e) => setNovaMeta(e.target.value)}
          />
          <button onClick={adicionarMeta}>Adicionar</button>
        </div>

        <ul>
          {listaMetas.map((item, posicao) => (
            <ItemMedia
              item={item}
              posicao={posicao}
              alterarMeta={alterarMeta}
              removerMeta={removerMeta}
            />
          ))}
        </ul>
      </div>

    </div>
  );
}
