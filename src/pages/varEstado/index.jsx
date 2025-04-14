import "./index.scss";
import { useState } from "react";

import {
  tratarNumeroComVirgula,
  imprimirNumeroComVirgula,
} from "../../utils/conversaoUtil";

import { calcularTotalIngresso } from "../../services/ingresso";

export default function VarEstado() {
  const [contador, setContador] = useState(0);
  const [tituloS2, setTituloS2] = useState("Oie");
  const [tituloS3, setTituloS3] = useState("Escolha um Item");
  const [marcouOpcaoS4, setMarcouOpcaoS4] = useState(false);
  const [tituloS5, setTituloS5] = useState("Oie");
  const [descricaoS5, setDescricaoS5] = useState("Oie");

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [res, setRes] = useState(0);

  const [qtdIng, setQtdIng] = useState(0);
  const [meioIng, setMeioIng] = useState(false);
  const [cupom, setCupom] = useState("");
  const [totalIng, setTotalIng] = useState(0);

  const [novaMeta, setNovaMeta] = useState("");
  const [listaMetas, setListaMetas] = useState([]);
  const [editando, setEditando] = useState(-1);

  const [plano, setPlano] = useState("");
  const [situacao, setSituacao] = useState("");
  const [cor, setCor] = useState("");
  const [listaPlanos, setListaPlanos] = useState([]);

  const aumentar = () => (contador >= 10 ? 0 : setContador(contador + 1));
  const diminuir = () => (contador > 0 ? setContador(contador - 1) : 0);

  const somar = () => {
    let soma = tratarNumeroComVirgula(num1) + tratarNumeroComVirgula(num2);
    setRes(imprimirNumeroComVirgula(soma));
  };

  const calcularIngresso = () => {
    let tot = calcularTotalIngresso(qtdIng, meioIng, cupom);
    setTotalIng(tot);
  };

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

  return (
    <div className="pagina-varestado pagina">
      <header className="cabecalho">
        <h1>ReactJs | Variável de Estado</h1>
      </header>

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
              <div className="plano" key={posicao}>
                <div className="cor" style={{ backgroundColor: item.tema }}>&nbsp;</div>
                <div>
                  <h1>{item.titulo}</h1>
                  <h2>{item.tempo}</h2>
                </div>
              </div>
          )}
        </div>
      </div>

      <div className="secao metas">
        <h1>Metas para os próximos 5 anos</h1>

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
            <li key={posicao}>
              <i
                className="fa fa-pen-to-square"
                onClick={() => alterarMeta(posicao)}
              ></i>
              &nbsp;
              <i
                className="fa fa-trash-can"
                onClick={() => removerMeta(posicao)}
              ></i>
              &nbsp;
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="secao ingresso">
        <h1>Venda de Ingressos</h1>
        <div className="entrada">
          <div>
            <label>Quantidade: </label>
            <input
              type="text"
              value={qtdIng}
              onChange={(elemento) => setQtdIng(elemento.target.value)}
            />
          </div>
          <div>
            <label>Meia Entrada: </label>
            <input
              type="checkbox"
              checked={meioIng}
              onChange={(elemento) => setMeioIng(elemento.target.checked)}
            />
          </div>
          <div>
            <label>Cupom:</label>
            <input
              type="text"
              value={cupom}
              onChange={(elemento) => setCupom(elemento.target.value)}
            />
          </div>
          <div>
            <label> &nbsp; </label>
            <button onClick={calcularIngresso}>Calcular</button>
          </div>
          <hr />
          <div>O total é R$ ${totalIng}</div>
        </div>
      </div>

      <div className="secao calculadora">
        <h1>Calculadora</h1>
        <div className="entrada">
          <input
            type="text"
            value={num1}
            onChange={(elemento) => setNum1(elemento.target.value)}
          />
          <input
            type="text"
            value={num2}
            onChange={(elemento) => setNum2(elemento.target.value)}
          />
          <div>=</div>
          <div className="res">{res}</div>
        </div>
        <button onClick={somar}>Somar</button>
      </div>

      <div className="secao">
        <h1>Contador</h1>

        <div className="cont">
          <button onClick={aumentar}> + </button>
          {contador}
          <button onClick={diminuir}> - </button>
        </div>
      </div>

      <div className="secao">
        <h1>{tituloS2}</h1>
        <input
          type="text"
          value={tituloS2}
          onChange={(elemento) => setTituloS2(elemento.target.value)}
        />
      </div>

      <div className="secao">
        <h1>{tituloS3}</h1>
        <select
          value={tituloS3}
          onChange={(elemento) => setTituloS3(elemento.target.value)}
        >
          <option>Selecione</option>
          <option>JavaScript</option>
          <option>HTML</option>
          <option>React</option>
          <option>Java</option>
        </select>
      </div>

      <div className="secao">
        <h1>Programar é lindezinha? {marcouOpcaoS4 ? "Sim" : "Não"}</h1>
        <input
          type="checkbox"
          checked={marcouOpcaoS4}
          onChange={(elemento) => setMarcouOpcaoS4(elemento.target.checked)}
        />
        Programar é lindezinha?
      </div>

      <div className="secao">
        <h1> {tituloS5} </h1>
        <input
          type="text"
          value={descricaoS5}
          onChange={(elemento) => setDescricaoS5(elemento.target.value)}
        />
        <button onClick={() => setTituloS5(descricaoS5)}>Alterar</button>
      </div>
    </div>
  );
}
