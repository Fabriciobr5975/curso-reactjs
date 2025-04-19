import "./indes.scss";
import { useState } from "react";

import Cabecalho from "../../components/cabecalho";
import CartaoFilme from "../../components/cartaoFilme";

export default function RenderizacaoCondicional() {
  const [exibirBiscoitoSorte, setexibirBiscoitoSorte] = useState(false);

  const [nomeFilme, setNomeFilme] = useState("");
  const [classificacaoFilme, setclassificacaoFilme] = useState("");
  const [urlFilme, setUrlFilme] = useState("");
  const [estreiaFilme, setEstreiaFilme] = useState("");
  const [destaqueFilme, setdestaqueFilme] = useState(false);
  const [listaFilmes, setListaFilme] = useState([]);

  const abrirFecharBiscoitoSorte = () => {
    setexibirBiscoitoSorte(!exibirBiscoitoSorte);
  };

  const adicionarFilme = () => {
    if (!nomeFilme || !classificacaoFilme || !urlFilme) {
      alert("Preencha todos os campos");
      return;
    }

    const novoFilme = {
      nome: nomeFilme,
      classificacao: classificacaoFilme,
      url: urlFilme,
      estreia: estreiaFilme,
      destaque: destaqueFilme
    };

    setListaFilme([...listaFilmes, novoFilme]);

    setNomeFilme("");
    setclassificacaoFilme("");
    setUrlFilme("");
    setEstreiaFilme('');
    setdestaqueFilme(false);
  };

  return (
    <div className="pagina-rende-cond pagina">
      <Cabecalho titulo="ReactJS | Renderização Condicional" />

      <div className="secao filmes">
        <h1>Catalago de Filmes</h1>

        <div className="entradas">
          <input
            type="text"
            placeholder="Nome do Filme"
            value={nomeFilme}
            onChange={(e) => setNomeFilme(e.target.value)}
          />
          <input
            type="text"
            placeholder="Classificação"
            value={classificacaoFilme}
            onChange={(e) => setclassificacaoFilme(e.target.value)}
          />
          <input
            type="text"
            placeholder="URL da Capa"
            value={urlFilme}
            onChange={(e) => setUrlFilme(e.target.value)}
          />
          <input
            type="text"
            placeholder="Estreia do Filme"
            value={estreiaFilme}
            onChange={(e) => setEstreiaFilme(e.target.value)}
          />
          <div>
            <input
              type="checkbox"
              checked={destaqueFilme}
              onChange={(e) => setdestaqueFilme(e.target.checked)}
            />
            <label>Destaque</label>
          </div>
          <button onClick={adicionarFilme}>Adicionar Filmes</button>
        </div>

        <div className="lista">
          {listaFilmes.map((item) => (
            <CartaoFilme item={item} />
          ))}
        </div>
      </div>

      <div className="secao">
        <h1>Biscoito da Sorte</h1>
        <button onClick={abrirFecharBiscoitoSorte}>
          {exibirBiscoitoSorte === true ? "Fechar" : "Abrir"}
        </button>

        {exibirBiscoitoSorte === true && (
          <p className="msg-biscoito">
            "Sempre haverá pessoas melhores e piores em habilidades diferentes.
            Avance e ajude."
          </p>
        )}
      </div>
    </div>
  );
}
