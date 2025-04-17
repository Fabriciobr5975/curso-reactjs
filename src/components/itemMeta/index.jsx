import "./index.scss";

export default function ItemMedia(props) {
  return (
    <li className="comp-item-meta">
      <i
        className="fa fa-pen-to-square"
        onClick={() => props.alterarMeta(props.posicao)}
      ></i>
      &nbsp;
      <i className="fa fa-trash-can" onClick={() => props.removerMeta(props.posicao)}></i>
      &nbsp;
    {props.item}
    </li>
  );
}
