import "./index.scss";
import { useState } from "react";

import Cabecalho from "../../components/cabecalho";
import Contador from "../../components/contador";
import ItemMedia from "../../components/itemMeta";
import ItemPlano from "../../components/itemPlano";
import CartaoFilme from "../../components/cartaoFilme";

export default function Comps() {
  const [novaMeta, setNovaMeta] = useState("");
  const [listaMetas, setListaMetas] = useState([]);
  const [editando, setEditando] = useState(-1);

  const [plano, setPlano] = useState("");
  const [situacao, setSituacao] = useState("");
  const [cor, setCor] = useState("");
  const [listaPlanos, setListaPlanos] = useState([]);

  const [nomeFilme, setNomeFilme] = useState("");
  const [classificacaoFilme, setclassificacaoFilme] = useState("");
  const [urlFilme, setUrlFilme] = useState("");
  const [listaFilmes, setListaFilme] = useState([]);

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

  const adicionarPlano = () => {
    const novoPlano = {
      titulo: plano,
      tempo: situacao,
      tema: cor,
    };

    setListaPlanos([...listaPlanos, novoPlano]);
    setPlano("");
    setSituacao("");
    setCor("");
  };
  
  const adicionarFilme = () => {
    if(!nomeFilme || !classificacaoFilme || !urlFilme) {
      alert("Preencha todos os campos");
      return;
    } 
    
    const novoFilme = {
      nome: nomeFilme,
      classificacao: classificacaoFilme,
      url: urlFilme
    }

    setListaFilme([...listaFilmes, novoFilme]);

    setNomeFilme("");
    setclassificacaoFilme("");
    setUrlFilme("");
  }

  return (
    <div className="pagina-comps pagina">
      <Cabecalho titulo="ReactJS | Componentes" />

      <div className="secao filmes">
        <h1>Catalago de Filmes</h1>

        <div className="entradas">
            <input type="text" placeholder="Nome do Filme" value={nomeFilme} onChange={e => setNomeFilme(e.target.value)} />
            <input type="text" placeholder="Classificação" value={classificacaoFilme} onChange={e => setclassificacaoFilme(e.target.value)}/>
            <input type="text" placeholder="URL da Capa" value={urlFilme} onChange={e => setUrlFilme(e.target.value)}/>
            <button onClick={adicionarFilme}>Adicionar Filmes</button>
        </div>

        <div className="lista"> 
          {listaFilmes.map((item) => 
            <CartaoFilme item={item} />
          )}
        </div>
      </div>

      <div className="secao planos">
        <h1>Meus Planos atuais</h1>

        <div className="entrada">
          <input
            type="text"
            placeholder="Meu plano aqui"
            value={plano}
            onChange={(e) => setPlano(e.target.value)}
          />
          <input
            type="text"
            placeholder="Situação do plano aqui"
            value={situacao}
            onChange={(e) => setSituacao(e.target.value)}
          />
          <input
            type="text"
            placeholder="Cor de indentificação"
            value={cor}
            onChange={(e) => setCor(e.target.value)}
          />
          <button onClick={adicionarPlano}>Adicionar Plano</button>
        </div>

        <div className="lista">
          {listaPlanos.map((item, posicao) => 
              <ItemPlano item={item} />
          )}
        </div>
      </div>

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
