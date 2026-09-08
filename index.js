class Atleta {

  constructor(nome, imagem, descricao) {
    this.nome = nome;
    this.imagem = imagem;
    this.descricao = descricao;
  }

  mostrar() {
    const novoCard = `
      <div style="
        margin-top:20px;
        padding:15px;
        background:#fff;
        border-radius:10px;
        box-shadow:0 5px 15px rgba(0,0,0,0.2);
        text-align:center;
      ">
        <h3>${this.nome}</h3>
        <img
          src="${this.imagem}"
          alt="${this.nome}"
          style="
            width:100%;
            border-radius:10px;
            margin:10px 0;
          "
        >
        <p>${this.descricao}</p>
      </div>
    `;

    if (resultado) {
      resultado.innerHTML += novoCard;
    }
  }
}

let galeria =
  JSON.parse(
    localStorage.getItem("galeria")
  ) || [];

const formulario =
  document.getElementById(
    "meuFormulario"
  );

const resultado =
  document.getElementById(
    "resultado"
  );

function mostrarGaleria() {
  if (!resultado) {
    return;
  }

  resultado.innerHTML = "";

  galeria.forEach(function(dados) {
    let atleta = new Atleta(
      dados.nome,
      dados.imagem,
      dados.descricao
    );

    atleta.mostrar();
  });
}

if (formulario) {
  formulario.addEventListener(
    "submit",
    function(evento) {
      evento.preventDefault();

      let atleta = new Atleta(
        formulario.nome.value,
        formulario.imagem.value,
        formulario.descricao.value
      );

      galeria.push(atleta);

      localStorage.setItem(
        "galeria",
        JSON.stringify(galeria)
      );

      mostrarGaleria();

      formulario.reset();
    }
  );
}

function alterarFundo() {
  document.body.style.background =
    "#222";
}

function apagarTudo() {
  localStorage.removeItem(
    "galeria"
  );

  galeria = [];

  if (resultado) {
    resultado.innerHTML = "";
  }

  alert(
    "Todos os atletas foram apagados!"
  );
}

const lista = [
  "Palmeiras",
  "História",
  "Títulos",
  "Elenco",
  "Camisas",
  "Jogos",
  "Hino e Canções"
];

lista.push("Allianz Parque");

function get() {
  fetch(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      method: "GET"
    }
  )
    .then(function(response) {
      if (!response.ok) {
        throw new Error(
          "Erro na requisição: " +
          response.status
        );
      }

      return response.json();
    })
    .then(function(data) {
      console.log("Resultado do fetch():");
      console.log(data);

      console.log("Vetor lista:");
      console.log(lista);

      const resultadoFetch =
        document.getElementById(
          "resultado-fetch"
        );

      if (resultadoFetch) {
        resultadoFetch.innerHTML = `
          <h2>Resultado do fetch()</h2>
          <p>
            <strong>ID:</strong>
            ${data.id}
          </p>
          <p>
            <strong>Título:</strong>
            ${data.title}
          </p>
          <p>
            <strong>Texto:</strong>
            ${data.body}
          </p>
          <h3>Vetor lista</h3>
          <p>
            ${lista.join(" | ")}
          </p>
        `;
      }
    })
    .catch(function(error) {
      console.error(
        "Erro no fetch():",
        error
      );

      const resultadoFetch =
        document.getElementById(
          "resultado-fetch"
        );

      if (resultadoFetch) {
        resultadoFetch.innerHTML = `
          <h2>Erro no fetch()</h2>
          <p>
            ${error.message}
          </p>
        `;
      }
    });
}

mostrarGaleria();

get();
