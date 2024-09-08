/**
 * Gera um objeto representando um personagem para um jogo de RPG.
 *
 * @returns {object} Um objeto com as propriedades do personagem gerado.
 *   As propriedades podem incluir:
 *   - nome: O nome do personagem.
 *   - classe: A classe do personagem.
 *   - atributos: Um objeto contendo os atributos do personagem (e.g., força, agilidade, inteligência).
 *   - background: A historia do personagem.
 */
function gerarPersonagem() {
  console.log("iniciando a geração de personagem");

  // input com classe desejada para criação da ficha do personagem
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
      caracteristica: classe.caracteristicas,
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

/**
 * Calcula o custo de aumentar o valor de um atributo, considerando o valor atual. 
 * @param {number} valorAtual - O valor atual do atributo.
 * @returns {number} O custo para aumentar o valor em 1.
 */
function calcularCusto(valor) {
  // Tabela de custos simplificada (ajuste conforme necessário)
  const custos = [0, 1, 2, 3, 4, 5, 7, 9];
  return custos[valor - 8];
}

/**
 * Distribui aleatoriamente um número total de pontos entre 6 atributos, 
 * garantindo que cada atributo tenha no mínimo 8 pontos e no máximo 15. 
 * O custo de cada ponto adicional é calculado pela função `calcularCusto` (não implementada).
 *
 * @param {number} pontosTotais - O número total de pontos a serem distribuídos.
 * @returns {number[]} Um array com os valores finais de cada atributo após a distribuição.
 */
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

/**
 * Calcula o modificador para um dado valor, comumente utilizado em sistemas de RPG para determinar bônus ou penalidades em atributos.
 *
 * @param {number} valor - O valor base do atributo para o qual se deseja calcular o modificador.
 * @returns {number} O modificador calculado, que pode ser positivo, negativo ou zero.
 */
function calcularModificador(valor) {
  return Math.floor((valor - 10) / 2);
}

/**
 * Obtém uma imagem aleatória de um personagem, baseado em sua classe e gênero.
 *
 * Esta função busca no array de gêneros da classe fornecida o sexo específico e, em seguida,
 * seleciona aleatoriamente uma imagem dentre as opções disponíveis para aquele gênero.
 *
 * @param {Object} classe - Objeto representando a classe do personagem, contendo um array de gêneros.
 * @param {string} sexo - String representando o sexo do personagem.
 * @returns {string} A URL da imagem aleatória selecionada.
 */
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

/**
 * Gera um nome completo aleatório para um personagem, baseado em sua classe e sexo.
 *
 * Esta função seleciona aleatoriamente um nome e um título de um conjunto de opções
 * disponíveis para o gênero especificado na classe do personagem.
 *
 * @param {Object} classe - Objeto representando a classe do personagem, contendo um array de gêneros.
 * @param {string} sexo - String representando o sexo do personagem.
 * @returns {string} O nome completo gerado aleatoriamente, no formato "nome, título".
 */
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

/**
 * Converte uma string para o formato PascalCase.
 *
 * O PascalCase consiste em escrever cada palavra com a primeira letra em maiúscula,
 * sem espaços entre as palavras.
 *
 * **Exemplo:**
 *   aplicarPascalCase('minha frase exemplo') -> 'MinhaFraseExemplo'
 *
 * @param {string} texto - A string a ser convertida para PascalCase.
 * @returns {string} A string convertida para PascalCase.
 */
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

/**
 * Busca por uma propriedade em um objeto, verificando se ela possui uma propriedade `tags`
 * que contém uma determinada substring.
 *
 * @param {Object} objeto - O objeto a ser percorrido.
 * @param {string} substring - A substring a ser encontrada nas tags das propriedades.
 * @returns {string|null} O nome da propriedade encontrada, caso a substring seja encontrada em alguma tag,
 *                      ou null caso contrário.
 */
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