import gitLogo from "../assets/github.png";
import { Container } from "./styles.js";
import Input from "../components/Input";
import Button from "../components/Button";
import ItemRepo from "../components/ItemRepo";
import { useState } from "react";
import { api } from "../service/api.js";

export default function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);
      if (data.id) {
        const isExists = repos.find((repo) => repo.id === data.id);
        if (!isExists) {
          setRepos((prev) => [...prev, data]);
          setCurrentRepo("");
        } else {
          alert("Esse Repositório já está na lista!")
        }
      }
    } catch (err) {
      alert("Repositório não encontrado!");
    }
  };

  const handleRemoveRepo = (id) => {
    const reposFilter = repos.filter((repo) => repo.id !== id);
    setRepos(reposFilter);
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="Logo do Git" />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo} />
      ))}
    </Container>
  );
}
