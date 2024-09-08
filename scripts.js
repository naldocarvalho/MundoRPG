function gerarPersonagem() {
  console.log("iniciando a geração de personagem");

  const pesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  const section = document.getElementById("resultados-pesquisa");

  console.log("termo pesquisado: " + pesquisa);

  if (!pesquisa) {
    return section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de uma classe</p>"
  }

  const classePesquisada = classeExiste(classes, pesquisa);

  if (!classePesquisada) {
    return section.innerHTML = `<p>Nenhuma classe foi encontrada com usando o termo: ${pesquisa}</p>`;
  }

  const classe = classes[classePesquisada];
  const generos = ["masculino", "feminino"];


  // Lógica para gerar atributos aleatórios com base na raça e classe
  const pontosTotais = 27; // Valor padrão, pode ser customizado
  const [forca, destreza, constituicao, inteligencia, sabedoria, carisma] =
    distribuirPontos(pontosTotais);

  // Calcula os modificadores dos atributos
  const modificadores = {
    forca: calcularModificador(forca),
    destreza: calcularModificador(destreza),
    constituicao: calcularModificador(constituicao),
    inteligencia: calcularModificador(inteligencia),
    sabedoria: calcularModificador(sabedoria),
    carisma: calcularModificador(carisma),
  };

  console.log("classe selecionada: " + classePesquisada);

  let cardPersonagem = "";

  if (classe) {

    console.log("montando personagem");

    //cardPersonagem.innerHTML = ""; // Limpa os resultados anteriores

    // Calcula os pontos de vida iniciais
    const pontosDeVida = classe.pontosDeVida(1, modificadores.constituicao); // Assumindo nível 1
    const genero = generos[Math.floor(Math.random() * 2)];

    // Cria o objeto do personagem
    const personagem = {
      nome: gerarNomeCompleto(classe, genero),
      //raca: aplicarPascalCase(raca), // Obter a raça do usuário
      classe: aplicarPascalCase(classePesquisada),
      habilidades: classe.habilidades,
      proficiências: classe.proficiências,
      caracteristica: classe.características,
      background: classe.background,
      atributos: {
        forca,
        destreza,
        constituicao,
        inteligencia,
        sabedoria,
        carisma,
        modificadores,
      },
      pontosDeVida,
      imagem: obterImagemAleatoria(classe, genero),
      // Outros atributos como equipamentos, feitiços, etc.
    };

    console.log("montando card do personagem");

    cardPersonagem = `
    <div class="item-resultado">
      <img src="images/${personagem.imagem}" alt="Imagem do Personagem" class="imagem-personagem">
      <div class="informacoes">
        <h2>${personagem.nome}</h2>
        <p><strong>Classe:</strong> ${personagem.classe}</p>
        <!--<p><strong>Raça:</strong> ${personagem.raca}</p>-->
        <p><strong>Caracteristica:</strong> ${personagem.caracteristica}</p>
        <p><strong>Pontos de Vida:</strong> ${personagem.pontosDeVida}</p>
        <p><strong>Atributos:</strong> Força ${personagem.atributos.forca}, Destreza ${personagem.atributos.destreza}, Constituição ${personagem.atributos.constituicao}, Inteligência ${personagem.atributos.inteligencia}, Sabedoria ${personagem.atributos.sabedoria}, Carisma ${personagem.atributos.carisma}</p>
        <p><strong>Habilidades:</strong> ${personagem.proficiências}</p>
        <p><strong>Historia:</strong> ${personagem.background.historia}</p>
      </div>
    </div>`;
  }

  section.innerHTML = cardPersonagem;
}

function calcularCusto(valor) {
  // Tabela de custos simplificada (ajuste conforme necessário)
  const custos = [0, 1, 2, 3, 4, 5, 7, 9];
  return custos[valor - 8];
}

function distribuirPontos(pontosTotais) {
  console.log("distribuindo pontos");

  const atributos = [8, 8, 8, 8, 8, 8]; // Inicializa com 8 em todos
  let pontosRestantes = pontosTotais;

  // Distribui os pontos aleatoriamente, garantindo que nenhum atributo fique abaixo de 8
  while (pontosRestantes > 0) {
    const atributoAleatorio = Math.floor(Math.random() * 6);
    if (atributos[atributoAleatorio] < 15) {
      // Limite máximo de 15
      atributos[atributoAleatorio]++;
      pontosRestantes -= calcularCusto(atributos[atributoAleatorio]);
    }
  }

  // Verifica se algum atributo atingiu 15
  if (atributos.includes(15)) {
    console.log("Um atributo atingiu o valor 15!");
    console.log(atributos);
  }

  return atributos;
}

function calcularModificador(valor) {
  return Math.floor((valor - 10) / 2);
}

function obterImagemAleatoria(classe, sexo) {
  console.log(`obtendo imagem da ${classe}`);
  
  // Obter dados do genero selecionado partir do array
  const genero = classe.generos[sexo];

  // Obtém a iamgem de forma aleatória entre as opções disponíveis
  const imagem = `${
    genero.imagens[Math.floor(Math.random() * genero.imagens.length)]
  }`;

  console.log(`${imagem}`);

  // Retorna um objeto com a imagem do personagem
  return imagem;
}

function gerarNomeCompleto(classe, sexo) {
  console.log(`gerando nome completo do personagam de sexo ${sexo}`);

  // Obter dados do genero selecionado partir do array
  const genero = classe.generos[sexo];

  // Obtém nome e titulo de forma aleatória entre as opções disponíveis
  const nome = genero.nomes[Math.floor(Math.random() * genero.nomes.length)];
  const titulo =
    genero.titulos[Math.floor(Math.random() * genero.titulos.length)];

  console.log(`${nome}, ${titulo}`);

  // Retorna um objeto com as informações do personagem
  return `${nome}, ${titulo}`;
}

function aplicarPascalCase(texto) {
  // Remover caracteres especiais e espaços extras
  const textoLimpo = texto.replace(/[^a-zA-Z0-9]+/g, " ");

  // Separar as palavras em um array
  const palavras = textoLimpo.split(" ");

  // Transformar a primeira letra de cada palavra em maiúscula e juntar as palavras
  const pascalCase = palavras
    .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
    .join("");

  return pascalCase;
}

function classeExiste(objeto, substring) {
  for (const propriedade in objeto) {
    // Verifica se a propriedade é um objeto e possui a propriedade 'tags'
    if (objeto.hasOwnProperty(propriedade) && objeto[propriedade].tags) {
      // Itera sobre as tags e verifica se alguma contém a substring
      for (const tag of objeto[propriedade].tags) {
        if (tag.includes(substring)) {
          return propriedade;
        }
      }
    }
  }
  return null;
}