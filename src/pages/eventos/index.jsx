import "./index.scss";

export default function Eventos() {
  const clicou = () => alert("Oie, o usuário acaba de clicar!");
  const movimentouMouse = () =>
    alert("Oie, o usuário acaba de movimentar o mouse!");

  const alterouValor = (e) => {
    let novoValor = e.target.value; // String
    alert(
      "Oie, o usuário acaba de alterar o valor do input/select para: " +
        novoValor
    );
  };

  const alterouCheck = (e) => {
    let novoValor = e.target.checked; // Boolean
    alert(
      "Oie, o usuário acaba de alterar o valor do input[checkbox/radio] para: " +
        novoValor
    );
  };

  return (
    <div className="pagina-eventos pagina">
      <header className="cabecalho">
        <h1> ReactJS | Eventos </h1>
      </header>

      <section className="secao">
        <h1>Entendendo eventos</h1>

        <p onClick={clicou} onMouseMove={movimentouMouse}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur,
          nesciunt quasi! Quis laboriosam illum atque odit repellat, provident
          iure nemo suscipit commodi aspernatur illo placeat quidem dolorum!
          Corrupti, odit nihil.
        </p>

        <input
          onChange={alterouValor}
          type="text"
          placeholder="Digite aqui alguma coisa"
        />

        <select onChange={alterouValor}>
          <option> Selecione </option>
          <option> Item A </option>
          <option> Item B </option>
        </select>

        <textarea onChange={alterouValor} placeholder="Digite aqui" />

        <div className="grupo">
          <input type="checkbox" onChange={alterouCheck} /> Opção 1
          <input type="checkbox" onChange={alterouCheck} /> Opção 2
        </div>

        <div className="grupo">
          <div>
            <input type="radio" name="gpo" onChange={alterouCheck} /> Opção 1
          </div>
          <div>
            <input type="radio" name="gpo" onChange={alterouCheck} /> Opção 2
          </div>
        </div>

        <button onClick={clicou}>Clique aqui</button>
      </section>
    </div>
  );
}
