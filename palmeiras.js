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


    resultado.innerHTML += novoCard;

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


function alterarFundo() {

  document.body.style.background =
      "#222";

}


function apagarTudo() {

  localStorage.removeItem(
      "galeria"
  );


  galeria = [];


  resultado.innerHTML = "";


  alert(
      "Todos os atletas foram apagados!"
  );

}


mostrarGaleria();
