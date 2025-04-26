import "./index.scss";

import Cabecalho from "../../components/cabecalho";
import { tratarNumeroComVirgula } from '../../utils/conversaoUtil'

import { useEffect, useState } from "react";

export default function Efeitos() {
  const [mensao, setMensao] = useState("");
  const [situacaoMensao, setSituacaoMensao] = useState("-");

  const [nota1, setNota1] = useState('0');
  const [nota2, setNota2] = useState('0');
  const [nota3, setNota3] = useState('0');
  const [media, setMedia] = useState('0');
  const [sitAluno, setsitAluno] = useState("");


  useEffect(() => {
    avaliarMensao();
  }, [mensao]);

  useEffect(() => {
    avaliarNotas();
  }, [nota1, nota2, nota3]);

  useEffect(() => {
    avaliarSituacao();

  }, [media]);

  const avaliarMensao = () => {
    if (mensao === "P") {
      setSituacaoMensao("Plenamente Satisfatório");
    } else if (mensao === "S") {
      setSituacaoMensao("Satisfatório");
    } else if (mensao === "NS") {
      setSituacaoMensao("Não Satisfatório");
    } else {
      setSituacaoMensao("Inválido");
    }
  };

  const avaliarSituacao = () => {
    let s = '';  

    (media > 6) ? s = "Aprovado" : s = "DP";

    setsitAluno(s);
  }

  const avaliarNotas = () => {
    let m = (tratarNumeroComVirgula(nota1) + tratarNumeroComVirgula(nota2) + tratarNumeroComVirgula(nota3)) / 3;
    setMedia(m);
  }

  return (
    <div className="pagina-efeitos pagina">
      <Cabecalho titulo="ReactJS | Efeitos" />
      <div className="secao">
        <h1>Situação Aluno</h1>

        <div className="sit-aluno">
          <div>{situacaoMensao}</div>

          <div>
            <label>Mensão: </label>
            <input
              type="text"
              value={mensao}
              onChange={(e) => setMensao(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="secao">
        <h1>Notas Alunos</h1>
        <div className="notas-aluno">
          <div className="entradas">
            <input type="text" value={nota1} onChange={e => setNota1(e.target.value)}/>
            <input type="text" value={nota2} onChange={e => setNota2(e.target.value)}/>
            <input type="text" value={nota3} onChange={e => setNota3(e.target.value)}/>
          </div>
          <div className="media">
            <label>Média:</label>
            <div>{Number(media).toFixed(1)}</div>
          </div>
          <div className="media-situacao">
            <label>Situação:</label>
            <div>{sitAluno}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
