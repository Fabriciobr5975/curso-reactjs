import { ItemContainer } from "./styles";

export default function ItemRepo({ repo, handleRemoveRepo }) {
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        Ver Repositório
      </a>{" "}
      <br />
      <button className="remover" onClick={() => handleRemoveRepo(repo.id)}>
        Remover
      </button>
      <hr />
    </ItemContainer>
  );
}
