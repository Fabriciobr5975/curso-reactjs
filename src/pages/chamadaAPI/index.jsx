import "./index.scss";

import Cabecalho from "../../components/cabecalho";
import CartaoOmdb from "../../components/cartaoOmdb";

import { useState } from "react";
import axios from "axios";

export default function ChamadaAPI() {
  const [cep, setCEP] = useState("");
  const [infoLogradouro, setInfoLogradouro] = useState("");

  const [filmeBusca, setFilmeBusca] = useState("");
  const [listaFilme, setListaFilme] = useState([]);

  const buscarCEP = async () => {
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    const resp = await axios.get(url);
    let dados = resp.data;

    let msg = `${dados.logradouro}, ${dados.bairro}, ${dados.localidade}/${dados.uf}`;
    setInfoLogradouro(msg);
  };

  const buscarFilmes = async () => {
    let url = `http://www.omdbapi.com?apikey=d43a5114&s=${filmeBusca}`;

    const resp = await axios.get(url);
    let dados = resp.data;

    if (dados.Response === "False") {
      alert("Nenhum filme encontrado!");
      return;
    }

    let filmesEcontrados = dados.Search;
    setListaFilme(filmesEcontrados);
  };

  return (
    <div className="pagina-chamada-api pagina">
      <Cabecalho titulo="React JS | Chamando APIs" />

      <div className="secao omdb">
        <h1>API Omdb</h1>

        <div className="entradas">
          <input
            type="text"
            placeholder="Nome do Filme"
            value={filmeBusca}
            onChange={(e) => setFilmeBusca(e.target.value)}
          />
          <button onClick={buscarFilmes}>Buscar</button>
        </div>

        <div className="lista">
          {listaFilme.map(item => 
            <CartaoOmdb item={item} />
          )}
        </div>

        {/* <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Filme</th>
              <th>Ano</th>
            </tr>
          </thead>

          <tbody>
            {listaFilme.map(item =>  
              <tr>
                <td>{item.imdbId}</td>
                <td>{item.Title}</td>
                <td>{item.Year}</td>
              </tr>
            )}
          </tbody>
        </table> */}
      </div>

      <div className="secao correio">
        <h1>API do Correio</h1>

        <div>
          <input
            type="text"
            placeholder="Digite o CPF"
            value={cep}
            onChange={(e) => setCEP(e.target.value)}
          />
          <button onClick={buscarCEP}>Buscar</button>
        </div>

        <p>{infoLogradouro}</p>
      </div>
    </div>
  );
}
