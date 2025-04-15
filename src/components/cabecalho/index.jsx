import "./index.scss";

export default function Cabecalho(props) {
  return (
    <header className="com-cabecalho">
      <h1 className="titulo">{props.titulo ?? "ReactJS"}</h1>
    </header>
  );
}
