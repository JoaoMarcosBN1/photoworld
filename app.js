function pesquisar() {
  // Função para realizar uma pesquisa e exibir os resultados em uma seção HTML.
  // Essa função assume que existe um array global chamado "dados" contendo os resultados da pesquisa.

  let section = document.getElementById("resultados-pesquisa");
  // Obtém a referência para a seção HTML onde os resultados serão exibidos.
  // Essa seção deve ter um ID "resultados-pesquisa" no HTML.

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (campoPesquisa == "") {
    section.innerHTML = "Nada foi encontrado. Digite o tipo de fotografia ou descrição que deseja";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = "";
  // Inicializa uma string vazia para armazenar o HTML dos resultados.
  // Essa string será preenchida no loop a seguir e, por fim, inserida na seção HTML.

  let titulo = "";
  let descricao = "";
  let tags = "";

  for (let dado of dados) {
    // Itera sobre cada item (objeto) do array "dados".
    // Cada item representa um resultado da pesquisa e possui as propriedades:
    // - titulo: o título do resultado
    // - descricao: uma breve descrição
    // - link: um link para mais informações
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Algumas imagens</a>
      </div>
    `;
      // Constrói uma string de HTML para cada resultado, formatando-a como uma div com um título, descrição e link.
      // A crase (`) permite a interpolação de variáveis dentro de strings (template literals).
      // A propriedade "target="_blank"" faz com que o link abra em uma nova aba do navegador.
    }
  }

  if (!resultado){
    resultados = "<p> Nada foi encontrado.</p>"
  }

  section.innerHTML = resultados;
  // Substitui todo o conteúdo HTML da seção "resultados-pesquisa" pela string "resultados".
  // Isso exibe os resultados da pesquisa na página.
}
