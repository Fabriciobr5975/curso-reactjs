import "./index.scss";
import { tratarNumeroComVirgula, imprimirNumeroComVirgula } from '../../utils/conversaoUtil'
import { useState } from "react";

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

  const aumentar = () => (contador >= 10 ? 0 : setContador(contador + 1));
  const diminuir = () => (contador > 0 ? setContador(contador - 1) : 0);

  const somar = () => {
    let soma = tratarNumeroComVirgula(num1) + tratarNumeroComVirgula(num2);
    setRes(imprimirNumeroComVirgula(soma));
  }
  return (
    <div className="pagina-varestado pagina">
      <header className="cabecalho">
        <h1>ReactJs | Variável de Estado</h1>
      </header>

      <div className="secao calculadora">
        <h1>Calculadora</h1>
        <div className="entrada">
          <input type="text" value={num1} onChange={elemento => setNum1(elemento.target.value)}/>
          <input type="text" value={num2} onChange={elemento => setNum2(elemento.target.value)}/>
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
