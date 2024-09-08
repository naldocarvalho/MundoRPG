const classes = {
  guerreiro: {
    habilidades: ["Força", "Constituição"],
    modificadores: {
      forca: 2,
      constituicao: 1
    },
    caracteristicas:
      "Guerreiros são combatentes habilidosos, especializados em combate corpo a corpo.",
    proficiências: ["Todas as armaduras", "Armas simples e marciais"],
    pontosDeVida: (nivel, constituicaoModificador) =>
      10 + constituicaoModificador,
    background: {
      historia:
        "Desde criança, foi treinado nas artes da guerra por um veterano endurecido pelas batalhas. A violência e a brutalidade da guerra marcaram sua vida, mas também lhe deram um senso de propósito e camaradagem.",
      foco: 
        "Proteger os fracos e defender o que é justo. Busca honrar a memória de seus camaradas caídos.",
      estiloDeJogo:
        "Um tanque implacável, absorvendo os golpes inimigos e abrindo caminho para seus aliados. Pode ser um líder nato, inspirando coragem em seus companheiros."
    },
    generos: {
      masculino: {
        nomes: ["Ragnar", "Ulfric", "Thorin"],
        titulos: [
          "Quebrador de Cadeias",
          "Esmagador de Crânios",
          "Dominador da Fúria",
        ],
        imagens: ["guerreiro_minotauro.png"]
      },
      feminino: {
        nomes: ["Brunhilda", "Eira", "Freya"],
        titulos: [
          "Fúria da Natureza",
          "Destruidora de Mundos",
          "Senhora da Guerra",
        ],
        imagens: ["guerreira_humana.png"]
      },
    },
    tags: ["guerreiro", "guerreira"]
  },
  mago: {
    habilidades: ["Inteligência", "Destreza"],
    modificadores: {
      inteligencia: 2,
      destreza: 1,
    },
    caracteristicas:
      "Magos são mestres da magia, capazes de conjurar poderosos feitiços.",
    proficiências: [
      "Armaduras leves",
      "Armas simples",
      "Componentes de conjuração",
    ],
    pontosDeVida: (nivel, constituicaoModificador) =>
      6 + constituicaoModificador,
    background: {
      historia:
        "Desde criança, era fascinado pelas estrelas e pelos mistérios do universo. Isolou-se em uma torre solitária para estudar os antigos grimorios e desvendar os segredos da magia.",
      foco: "Buscar conhecimento e dominar novas formas de magia. Deseja utilizar seus poderes para o bem da humanidade.",
      estiloDeJogo:
        "Um mago versátil, capaz de conjurar uma variedade de feitiços para atacar, defender e controlar o campo de batalha. É um mestre estrategista e planejador.",
    },
    generos: {
      masculino: {
        nomes: ["Arthur", "Galahad", "Lancelot"],
        titulos: [
          "Protetor da Luz", 
          "Guardião da Fé", 
          "Campeão da Justiça"
        ],
        imagens: ["mago_humano.png"]
      },
      feminino: {
        nomes: ["Brunhilda", "Eira", "Freya"],
        titulos: [
          "Fúria da Natureza",
          "Destruidora de Mundos",
          "Senhora da Guerra",
        ],
        imagens: ["maga_humana.png"]
      }
    },
    tags: ["mago", "maga"]
  },
  sacerdote: {
    habilidades: ["Sabedoria", "Carisma"],
    modificadores: {
      sabedoria: 2,
      carisma: 1,
    },
    caracteristicas:
      "Sacerdotes são devotos de uma divindade, usando seus poderes sagrados para curar, proteger e guiar seus aliados. Eles são mestres em domínios divinos como vida, morte e luz.",
    proficiências: [
      "Armaduras leves e médias",
      "Armas simples",
      "Instrumentos musicais",
      "Kit de ferramentas religiosas",
    ],
    pontosDeVida: (nivel, constituicaoModificador) =>
      8 + constituicaoModificador,
    dominioDivino: "Escolha um domínio divino (ex: Vida, Morte, Tempestade)",
    background: {
      historia:
        "Desde jovem, sentiu uma forte conexão com o divino e dedicou sua vida ao serviço de sua deidade. Treinado em um templo sagrado, aprendeu os mistérios da fé e os poderes da cura.",
      foco: "Servir aos outros e proteger os inocentes. Busca fortalecer sua fé e aprofundar sua conexão com o divino.",
      estiloDeJogo:
        "Um líder inspirador e um curandeiro habilidoso. Pode atuar tanto na linha de frente quanto no apoio, usando seus poderes divinos para proteger seus aliados e punir seus inimigos.",
    },
    generos: {
      masculino: {
        nomes: ["Aedan", "Cael", "Elias", "Silas"],
        titulos: [
          "Mão de Deus", 
          "Curador das Feridas", 
          "Profeta da Luz", 
          "Guardião da Fé"
        ],
        imagens: ["sacerdote_tiefling.png"]
      },
      feminino: {
        nomes: ["Anya", "Elara", "Serafina", "Lyra"],
        titulos: [
          "Mãe da Misericórdia", 
          "Guardiã da Alma", 
          "Portadora da Luz", 
          "Sacerdotisa Suprema"
        ],
        imagens: ["sacerdotisa_humana.png"]
      }
    },
    tags: ["sacerdote", "sacerdotisa", "priest"]
  },
  alquimista: {
    habilidades: ["Inteligência", "Destreza"],
    modificadores: {
      inteligencia: 2,
      destreza: 1,
    },
    caracteristicas:
      "Alquimistas são estudiosos e experimentadores, combinando conhecimento científico com magia para criar poções e explosivos.",
    proficiências: ["Armaduras leves", "Armas simples", "Kit de Alquimia"],
    pontosDeVida: (nivel, constituicaoModificador) =>
      8 + constituicaoModificador,
    background: {
      historia:
        "Alquimistas vêm de todas as origens, mas a maioria compartilha uma paixão por descobrir os segredos da natureza. Alguns são eremitas que vivem em laboratórios isolados, enquanto outros viajam por terras distantes em busca de ingredientes raros. A alquimia é uma arte antiga e perigosa, e os alquimistas devem ser cautelosos ao manipular substâncias desconhecidas.",
      foco: "Os alquimistas são conhecidos por suas poções e explosivos, mas também podem criar uma variedade de outros itens mágicos, como óleos inflamáveis e venenos. Eles são mestres em identificar e utilizar plantas e minerais, e podem criar itens personalizados para se adequar a suas necessidades.",
      estiloDeJogo:
        "Alquimistas são personagens versáteis que podem tanto apoiar o grupo com suas poções curativas quanto causar grandes danos com seus explosivos. Eles são ótimos exploradores e podem descobrir segredos escondidos graças ao seu conhecimento de alquimia.",
    },
    generos: {
      masculino: {
        nomes: ["Oriel", "Alaric", "Zorian", "Arlo"],
        titulos: [
          "Mestre das Poções", 
          "Manipulador da Matéria", 
          "Criador de Venenos", 
          "Desvendador dos Segredos da Natureza"
        ],
        imagens: ["alquimista_anao.png"]
      },
      feminino: {
        nomes: ["Elara", "Lyra", "Seraphina", "Thalia"],
        titulos: [
          "Mestra das Ervas", 
          "Alquimista da Lua", 
          "Criadora de Vida", 
          "Guardiã dos Segredos Antigos"
        ],
        imagens: ["alquimista_fairy.png"]
      }
    },
    tags: ["alquimista"]
  },
  monge: {
    habilidades: ["Destreza", "Sabedoria"],
    modificadores: {
      destreza: 2,
      sabedoria: 2,
    },
    caracteristicas:
      "Monges são mestres em combate desarmado e disciplinas mentais. Eles canalizam o ki para realizar feitos sobrehumanos.",
    proficiências: [
      "Armaduras leves",
      "Armas simples",
      "Instrumentos musicais",
    ],
    pontosDeVida: (nivel, constituicaoModificador) =>
      8 + constituicaoModificador,
    tradiçãoMonástica:
      "Escolha uma tradição monástica (ex: Caminho da Palma Aberta, Caminho do Sol, Caminho da Sombra)",
    background: {
      historia:
        "Desde jovem, foi treinado em um monastério remoto, aprendendo as artes marciais e as disciplinas mentais. Agora, busca a perfeição e a iluminação.",
      foco: "Alcançar a perfeição física e mental, e proteger o mundo com seus poderes.",
      estiloDeJogo:
        "Um combatente ágil e versátil, capaz de desviar de ataques, curar ferimentos e infligir danos com golpes precisos. É um defensor da justiça e da harmonia.",
    },
    generos: {
      masculino: {
        nomes: ["Kai", "Kenji", "Bo", "Tao"],
        titulos: [
          "Mestre das Artes Marciais", 
          "Guerreiro Zen", 
          "Monge Guerreiro", 
          "Caminhante do Vento"
        ],
        imagens: ["monge_meioelfo.png"]
      },
      feminino: {
        nomes: ["Kai", "Kenji", "Bo", "Tao"],
        titulos: [
          "Fúria da Natureza",
          "Destruidora de Mundos",
          "Senhora da Guerra",
        ],
        imagens: ["monja_satira.png"]
      }
    },
    tags: ["monge", "monja"]
  },
  ladrao: {
    habilidades: ["Destreza", "Inteligência"],
    modificadores: {
      destreza: 2,
      inteligência: 1,
    },
    caracteristicas:
      "Ladrões são mestres da furtividade e da habilidade. Eles são peritos em se mover silenciosamente, desarmar armadilhas e roubar objetos.",
    proficiências: [
      "Armaduras leves",
      "Armas simples",
      "Ladrilhos de ferramentas",
    ],
    pontosDeVida: (nivel, constituicaoModificador) =>
      8 + constituicaoModificador,
    especialidadeDeLadrao:
      "Escolha uma especialidade de ladrão (ex: Mestre em Furtividade, Maestro das Armadilhas, Ladrão de Carteiras)",
    background: {
      historia:
        "Desde jovem, mostrou uma habilidade natural para se mover silenciosamente e escapar de situações perigosas. Aprendeu a sobreviver nas ruas, desenvolvendo habilidades que o tornaram um mestre ladrão.",
      foco: "Sobreviver e prosperar. Busca riqueza, aventura e liberdade.",
      estiloDeJogo:
        "Um especialista em furtividade e combate corpo a corpo. É capaz de se infiltrar em lugares seguros, desarmar armadilhas e eliminar inimigos silenciosamente.",
    },
    generos: {
      masculino: {
        nomes: ["Rian", "Talon", "Zayne", "Kaito"],
        titulos: [
          "Mestre das Sombras", 
          "Ladrão de Carteiras", 
          "Artista da Fuga", 
          "Espião Infiltrado"
        ],
        imagens: ["ladrao_hobbit.png"],
      },
      feminino: {
        nomes: ["Nyx", "Seraphina", "Anya", "Isolde"],
        titulos: [
          "Sedutora Fatal", 
          "Ladra de Corações", 
          "Mestra da Disfarce", 
          "Assassina Silenciosa"
        ],
        imagens: ["ladra_warforged.png"],
      }
    },
    tags: ["ladrao", "ladra"]
  },
  druida: {
    habilidades: ["Sabedoria", "Destreza"],
    modificadores: {
      sabedoria: 2,
      destreza: 1,
    },
    caracteristicas:
      "Druidas são sacerdotes da natureza, com um profundo conhecimento das plantas e animais. Eles utilizam magia divina para proteger o meio ambiente e seus aliados.",
    proficiências: [
      "Armaduras leves",
      "Armaduras de couro",
      "Armas simples",
      "Instrumentos musicais",
      "Kit de ferramentas de alquimista",
    ],
    pontosDeVida: (nivel, constituicaoModificador) =>
      8 + constituicaoModificador,
    círculoDruídico:
      "Escolha um círculo druídico (ex: da Lua, da Terra, do Ar)",
    background: {
      historia:
        "Desde criança, sentiu uma forte conexão com a natureza. Cresceu em uma floresta, aprendendo os segredos das plantas e animais. Agora, dedica sua vida a proteger o mundo natural.",
      foco: "Proteger a natureza e restaurar o equilíbrio ecológico. Busca uma conexão mais profunda com os espíritos da floresta.",
      estiloDeJogo:
        "Um curandeiro, um transformador e um defensor da natureza. Pode se adaptar a diferentes situações, utilizando seus poderes para curar, controlar animais e lutar contra ameaças ao meio ambiente.",
    },
    generos: {
      masculino: {
        nomes: ["Kael", "Orion", "Rowan", "Silas"],
        titulos: [
          "Mestre das Florestas", 
          "Shamane da Tribo", 
          "Guardião da Natureza", 
          "Transformador"
        ],
        imagens: ["druida_orc.png"]
      },
      feminino: {
        nomes: ["Nyara", "Elara", "Anya", "Maeve"],
        titulos: [
          "Sacerdotisa da Lua", 
          "Mãe Natureza", 
          "Mestra das Bestas", 
          "Protetoras das Florestas"
        ],
        imagens: ["druida_elfa.png"]
      }
    },
    tags: ["druida", "druidesa"]
  },
  assassino: {
    habilidades: ["Destreza", "Inteligência"],
    modificadores: {
      destreza: 2,
      inteligência: 1,
    },
    caracteristicas:
      "Assassinos são mestres da morte, especializados em eliminar seus alvos de forma rápida e silenciosa. Eles combinam habilidades furtivas com ataques letais.",
    proficiências: [
      "Armaduras leves",
      "Armas simples",
      "Ladrilhos de ferramentas",
    ],
    pontosDeVida: (nivel, constituicaoModificador) =>
      8 + constituicaoModificador,
    estiloDeAssassino:
      "Escolha um estilo de assassino (ex.: Ambusher, Shadowdancer, Mastermind)",
    background: {
      historia:
        "Treinado desde a infância para ser uma arma, o assassino aprendeu a eliminar seus alvos com precisão e eficiência. Agora, ele busca vingança ou simplesmente a emoção da caçada.",
      foco: "Sobrevivência e sucesso em suas missões. Busca a perfeição em sua arte e a eliminar seus inimigos com estilo.",
      estiloDeJogo:
        "Um especialista em combate furtivo e ataques surpresa. É capaz de eliminar seus inimigos silenciosamente e desaparecer nas sombras.",
    },
    generos: {
      masculino: {
        nomes: ["Talon", "Zayne", "Kaito", "Nox"],
        titulos: [
          "Sombra da Morte", 
          "Mestre da Escuridão", 
          "Ceifador Silencioso", 
          "Assassino Implacável"
        ],
        imagens: ["assassino_lizardfolk.png"]
      },
      feminino: {
        nomes: ["Nyx", "Morwen", "Seraphina", "Maeve"],
        titulos: [
          "Viúva Negra", 
          "Mestra da Adaga", 
          "Assassina Fantasma", 
          "Sedutora Fatal"
        ],
        imagens: ["assassina_tiefling.png"]
      }
    },
    tags: ["assassino", "assassina"]
  },
  bardo: {
    habilidades: ["Carisma", "Destreza"],
    modificadores: {
      carisma: 2,
      destreza: 1,
    },
    caracteristicas:
      "Bardos são artistas versáteis que utilizam sua música e palavras para inspirar aliados e confundir inimigos. Eles são mestres da persuasão e da magia.",
    proficiências: [
      "Armaduras leves",
      "Armas simples",
      "Instrumentos musicais",
    ],
    pontosDeVida: (nivel, constituicaoModificador) =>
      8 + constituicaoModificador,
    colégioBárdico:
      "Escolha um colégio bárdico (ex.: Valor, Eloquência, Conhecimento)",
    background: {
      historia:
        "Desde jovem, mostrou um talento natural para a música e a poesia. Viajou por diversas terras, contando histórias e encantando multidões. Agora, utiliza seus dons para ajudar os outros e buscar a aventura.",
      foco: "Buscar conhecimento, fama e aventura. Deseja deixar sua marca no mundo através de suas histórias e feitos.",
      estiloDeJogo:
        "Um artista versátil, capaz de inspirar aliados, confundir inimigos e utilizar magia para manipular a realidade. É um mestre da diplomacia e da persuasão.",
    },
    generos: {
      masculino: {
        nomes: ["Alain", "Orfeo", "Eldrin", "Caedmon"],
        titulos: [
          "Mestre dos Cantos", 
          "Contador de Histórias", 
          "Cantor de Guerra", 
          "Mago da Palavra"
        ],
        imagens: ["bardo_elfo.png"]
      }
    },
    tags: ["bardo"]
  },
  bruxo: {
    habilidades: ["Carisma"],
    modificadores: {
      carisma: 2,
    },
    caracteristicas:
      "Bruxos são magos que trocaram parte de si por poder. Eles formam um pacto com uma entidade extraplanar, ganhando acesso a magias arcanas únicas.",
    proficiências: [
      "Armaduras leves",
      "Armas simples",
      "Componentes de conjuração",
    ],
    pontosDeVida: (nivel, constituicaoModificador) =>
      8 + constituicaoModificador,
    pacto: "Escolha um pacto (ex: O Arquifeito, O Grande Antigo, O Corruptor)",
    background: {
      historia:
        "Em um momento crucial de sua vida, fez um pacto com uma entidade poderosa, ganhando poderes sobrenaturais em troca de um preço. Agora, luta para controlar suas novas habilidades e cumprir os termos do acordo.",
      foco: "Buscar conhecimento e poder, mas também lidar com as consequências de seu pacto.",
      estiloDeJogo:
        "Um mago misterioso e enigmático, capaz de conjurar feitiços poderosos e manipular as forças das trevas. Frequentemente lida com dilemas morais e tenta equilibrar seu desejo por poder com sua humanidade.",
    },
    generos: {
      masculino: {
        nomes: ["Azrael", "Malachi", "Lucien", "Kael"],
        titulos: [
          "Mestre das Sombras", 
          "Conjurador das Trevas", 
          "Pactuante Infernal", 
          "Senhor dos Demônios"
        ],
        imagens: ["bruxo_dragonborn.png"]
      },
      feminino: {
        nomes: ["Morwen", "Nyx", "Lilith", "Morgiana"],
        titulos: [
          "Rainha das Trevas", 
          "Mestra da Magia Negra", 
          "Sedutora Infernal", 
          "Mão Esquerda da Escuridão"
        ],
        imagens: ["bruxa_humana.png"]
      }
    },
    tags: ["bruxo", "bruxa", "wizard"]
  },
  dancarina: {
    habilidades: ["Destreza", "Carisma"],
    modificadores: {
        destreza: 2,
        carisma: 1
    },
    caracteristicas:
        "Dançarinas são artistas marciais que utilizam o movimento e a dança como suas principais armas. Elas possuem uma profunda conexão com a música e a expressão artística, e são hábeis em combate corpo a corpo e em situações sociais.",
    proficiências: [
        "Armas simples",
        "Armaduras leves",
        "Acrobacia",
        "Performance"
    ],
    pontosDeVida: (nivel, constituicaoModificador) =>
        8 + constituicaoModificador,
    estiloDeDança: ["Balé", "Jazz", "Hip Hop", "Contemporâneo"],
    background: {
        historia:
            "Desde criança, a dança era sua paixão. Através do movimento, encontrou uma forma única de expressar seus sentimentos e conectar-se com o mundo. Sua jornada como dançarina a levou a descobrir habilidades sobrenaturais, tornando-a uma guerreira ágil e elegante.",
        foco: 
          "Perfeicionar suas habilidades de dança e combate, buscando a expressão artística perfeita e a harmonia entre corpo e mente.",
        estiloDeJogo:
            "Um personagem charmoso e carismático, capaz de encantar e deslumbrar com seus movimentos. É um mestre da dissimulação e da manipulação, e pode usar sua dança para distrair seus inimigos ou ganhar aliados."
    },
    generos: {
      feminino: {
        nomes: ["Isadora", "Martha", "Anna Pavlova", "Misty Copeland"],
        titulos: [
          "A Bela", 
          "A Suave", 
          "A Poderosa"
        ],
        imagens: ["dancarina_shifter.png"]
      }
    },
    tags: ["dancarina", "dancer"]
  },
  paladino: {
    habilidades: ["Força", "Carisma"],
    modificadores: {
        forca: 2,
        carisma: 2
    },
    caracteristicas:
        "Paladinos são guerreiros sagrados que combinam proezas marciais com poderes divinos. Guiados por um código de honra, eles são defensores da justiça e protetores dos inocentes.",
    proficiências: [
        "Todas as armaduras",
        "Todas as armas marciais",
        "Escudos",
        "Montaria"
    ],
    pontosDeVida: (nivel, constituicaoModificador) =>
        10 + constituicaoModificador,
    juramento: ["Anticristo", "Protetor", "Vingador"],
    deidade: ["Pelor", "Torm", "Bahamut"],
    background: {
        historia:
            "Após uma experiência transformadora, ele ou ela jurou servir a uma deidade e defender os valores da justiça e da honra. Agora, empunha uma arma sagrada e busca cumprir seu juramento.",
        foco: 
            "Defender os inocentes, combater o mal e manter a ordem.",
        estiloDeJogo:
            "Um líder nato, inspirador e justo. Combina força física com poderes divinos para proteger aqueles que não podem se defender."
    },
    generos: {
      masculino: {
        nomes: ["Arthur", "Roland", "Tarik"],
        titulos: [
          "Protetor", 
          "Vingador", 
          "Aura de Proteção"
        ],
        imagens: ["paladino_warforged.png"]
      },
      feminino: {
        nomes: ["Brienne", "Aethelflaed", "Paladyn"],
        titulos: [
          "Protetora",
          "Divina Proteção",
          "Senhora da Paz",
        ],
        imagens: ["paladina_reborn.png"]
      }
    },
    tags: ["paladino", "paladina"]
  },
  cacador: {
    habilidades: ["Destreza", "Sabedoria"],
    modificadores: {
        destreza: 2,
        sabedoria: 2
    },
    caracteristicas:
        "Caçadores são mestres da selva, habilidosos com arco e flecha e íntimos da natureza. Eles possuem uma conexão especial com os animais e com o ambiente selvagem, utilizando essas habilidades para sobreviver e caçar.",
    proficiências: [
        "Armas simples",
        "Armas de distância",
        "Armaduras leves",
        "Sobrevivência",
        "Percepção"
    ],
    pontosDeVida: (nivel, constituicaoModificador) =>
        8 + constituicaoModificador,
    companheiroAnimal: ["Lobo", "Coruja", "Falcão"],
    ambiente: ["Floresta", "Montanha", "Deserto"],
    background: {
        historia:
            "Cresceu em contato com a natureza, aprendendo a sobreviver e a caçar desde cedo. Sua conexão com os animais e com a selva é profunda, e ele utiliza suas habilidades para proteger o ambiente e seus habitantes.",
        foco: 
            "Sobreviver na natureza, proteger o ambiente e caçar para se alimentar.",
        estiloDeJogo:
            "Um personagem solitário e independente, com um profundo conhecimento da natureza. É hábil em combate à distância e em se mover silenciosamente."
    },
    generos: {
      masculino: {
        nomes: ["Talon", "Kael", "Atreus"],
        titulos: [
          "Protetor da Floresta",
          "Guardião das Bestas",
          "Senhor dos Lobos"
        ],
        imagens: ["cacador_genasi.png"]
      },
      feminino: {
        nomes: ["Nyx", "Anya", "Elara"],
        titulos: [
          "Protetora da Natureza",
          "Senhora da Bestas",
          "Defensora da Floresta",
        ],
        imagens: ["cacadora_gensasi.png"]
      }
    },
    tags: ["cacador", "cacadora", "hunter"]
  },
};