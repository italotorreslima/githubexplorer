import { RepositoryItem } from "./RepositoryItem";

import "../style/repositories.scss";
import { useState, useEffect } from "react";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]); //inicia vazio, com o mesmo tipo de informação que será repassado pela api
  const [repoName, setRepoName] = useState("italotorreslima");
  <form>
    <label>
      teste
      <input type="text" value={repoName} />
    </label>
    <input type="submit" value="Enviar" />
  </form>;

  const URL = `https://api.github.com/users/${repoName}/repos`;

  useEffect(() => {
    fetch(URL) //vai buscar as informações desse link
      .then((response) => response.json()) //assim que capturar a resposta ela vai ser transformada para json
      .then((data) => setRepositories(data)); //vai settar repositories com o valor de data
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
