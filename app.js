function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  //esse comando é usado para buscar informações do documento HTML

  let resultados = "";

  for (let dado of dados) {
    resultados += ` 
    <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}> </p>
          <a href=${dado.link} target="_blank">Algumas imagens</a>
    </div>
`;
  }
  //Todo esse código foi usado para mostrar os dados no outro doc .js em loop "+="
  //Ele mostra todos os elementos presentes no "dados.js"
  //Não esquecer da crase `` entre o código HTML que quer apresentar

  section.innerHTML = resultados;
  //foi criada outra variável para não deixar tudo em apenas uma
  //o "section" é muito delicado e se errar pode comprometer TODO o código
}
