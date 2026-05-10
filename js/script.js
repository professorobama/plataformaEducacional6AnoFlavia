(function () {
  "use strict";

  var STORAGE_KEY = "trilha_saber_6ano_refatorada_v4";
  var AVATARS = ["🚀", "🧠", "🤖", "🦉", "🐱", "🐶", "🦊", "🐼", "🦁", "🐯", "🐵", "🦄", "⭐", "🎮", "🎨", "⚽"];
  var SUBJECTS = [
    { id: "portugues", title: "Português", shortTitle: "Português", icon: "📚", color: "#ef5350", description: "Leitura, gramática, vocabulário, interpretação e uso da língua.", phases: [
      phase("Leitura e Interpretação", "📖", "Ideias principais, pistas do texto e compreensão leitora.", ["ideia principal", "informação explícita", "inferência", "personagem", "contexto"]),
      phase("Substantivos e Artigos", "🔤", "Classes de palavras que nomeiam seres e acompanham substantivos.", ["substantivo comum", "substantivo próprio", "artigo definido", "artigo indefinido", "gênero e número"]),
      phase("Adjetivos e Pronomes", "🏷️", "Palavras que caracterizam e substituem nomes.", ["adjetivo", "pronome pessoal", "pronome possessivo", "pronome demonstrativo", "caracterização"]),
      phase("Verbos e Tempos Verbais", "⏱️", "Ações, estados e tempos verbais.", ["verbo", "presente", "pretérito", "futuro", "conjugação"]),
      phase("Pontuação", "❗", "Sinais que organizam frases e ajudam na leitura.", ["ponto final", "vírgula", "interrogação", "exclamação", "dois-pontos"]),
      phase("Acentuação", "´", "Regras iniciais de acentuação e tonicidade.", ["sílaba tônica", "oxítona", "paroxítona", "proparoxítona", "acento gráfico"]),
      phase("Concordância", "🤝", "Combinação adequada entre palavras na frase.", ["concordância nominal", "concordância verbal", "singular", "plural", "coerência da frase"]),
      phase("Sinônimos e Antônimos", "🔁", "Relações de sentido entre palavras.", ["sinônimo", "antônimo", "campo semântico", "sentido da palavra", "vocabulário"]),
      phase("Coesão Textual", "🧩", "Conectivos e retomadas que ligam ideias.", ["conectivo", "retomada", "referência", "sequência lógica", "parágrafo"]),
      phase("Revisão de Texto", "✅", "Correção, clareza e melhoria da escrita.", ["ortografia", "clareza", "reescrita", "pontuação", "revisão final"])
    ]},
    { id: "redacao", title: "Redação", shortTitle: "Redação", icon: "✍️", color: "#ab47bc", description: "Produção textual, organização de ideias e revisão de textos.", phases: [
      phase("Planejamento do Texto", "🗺️", "Como organizar ideias antes de escrever.", ["tema", "objetivo", "público leitor", "ideias principais", "roteiro"]),
      phase("Parágrafo", "📄", "Construção de parágrafos claros e organizados.", ["tópico frasal", "desenvolvimento", "exemplo", "fechamento", "unidade de sentido"]),
      phase("Narração", "📚", "Elementos de histórias e relatos.", ["narrador", "personagem", "tempo", "espaço", "conflito"]),
      phase("Descrição", "🔎", "Detalhamento de pessoas, lugares e objetos.", ["característica", "detalhe", "adjetivo", "observação", "imagem mental"]),
      phase("Argumentação Inicial", "💬", "Defesa de opiniões com justificativas.", ["opinião", "argumento", "justificativa", "exemplo", "conclusão"]),
      phase("Coerência", "🧠", "Sentido global e relação entre ideias.", ["coerência", "contradição", "progressão", "tema central", "sentido"]),
      phase("Coesão", "🔗", "Uso de conectivos e retomadas.", ["conectivo", "pronome retomador", "repetição", "ligação", "sequência"]),
      phase("Gêneros Textuais", "📰", "Características de diferentes tipos de texto.", ["notícia", "carta", "relato", "resenha", "poema"]),
      phase("Reescrita", "📝", "Melhoria de versões do texto.", ["cortar excesso", "trocar palavra", "corrigir erro", "melhorar clareza", "organizar frases"]),
      phase("Projeto Final", "🏁", "Produção de texto completo.", ["rascunho", "versão final", "título", "revisão", "publicação"])
    ]},
    { id: "matematica", title: "Matemática", shortTitle: "Matemática", icon: "🔢", color: "#5c6bc0", description: "Números, operações, frações, geometria, medidas e problemas.", type: "math", phases: [
      phase("Números Naturais", "🔢", "Leitura, comparação e operações com números naturais.", ["valor posicional", "ordem crescente", "adição", "subtração", "comparação"]),
      phase("Múltiplos e Divisores", "✳️", "Relações de multiplicação, divisibilidade e fatores.", ["múltiplo", "divisor", "par", "ímpar", "fator"]),
      phase("Frações", "🍕", "Partes de um todo e equivalência.", ["numerador", "denominador", "fração equivalente", "comparação", "parte do todo"]),
      phase("Números Decimais", "💰", "Leitura e operações com decimais.", ["décimos", "centésimos", "adição decimal", "comparação decimal", "dinheiro"]),
      phase("Porcentagem", "％", "Noção inicial de porcentagem.", ["porcentagem", "desconto", "metade", "dobro", "cem por cento"]),
      phase("Geometria Plana", "📐", "Formas, perímetro e área.", ["triângulo", "quadrilátero", "perímetro", "área", "ângulo"]),
      phase("Medidas", "📏", "Comprimento, massa, capacidade e tempo.", ["metro", "centímetro", "quilograma", "litro", "minuto"]),
      phase("Dados e Gráficos", "📊", "Leitura de tabelas, gráficos e médias simples.", ["tabela", "gráfico", "maior valor", "menor valor", "média"]),
      phase("Expressões Numéricas", "🧮", "Ordem das operações e resolução passo a passo.", ["parênteses", "multiplicação", "divisão", "adição", "subtração"]),
      phase("Problemas Matemáticos", "🧩", "Situações-problema do cotidiano.", ["interpretação", "estratégia", "cálculo", "resposta", "verificação"])
    ]},
    { id: "pensamento-computacional", title: "Pensamento Computacional", shortTitle: "Pensamento Computacional", icon: "🧠", color: "#ff9800", description: "Decomposição, padrões, algoritmos e resolução de problemas.", phases: [
      phase("Decomposição", "🧩", "Dividir problemas grandes em partes menores.", ["problema", "parte", "etapa", "subproblema", "organização"]),
      phase("Padrões", "🔁", "Identificar repetições e regularidades.", ["sequência", "repetição", "regularidade", "previsão", "classificação"]),
      phase("Abstração", "🎯", "Focar no que é importante.", ["detalhe essencial", "informação irrelevante", "modelo", "simplificação", "representação"]),
      phase("Algoritmos", "📋", "Criar passos ordenados para resolver tarefas.", ["passo", "ordem", "instrução", "resultado", "teste"]),
      phase("Condição", "🔀", "Tomar decisões usando se/então.", ["se", "então", "senão", "decisão", "regra"]),
      phase("Repetição", "🔄", "Usar laços para repetir ações.", ["loop", "vezes", "enquanto", "repetir", "parada"]),
      phase("Dados", "🗂️", "Organizar informações para resolver problemas.", ["dado", "categoria", "lista", "tabela", "registro"]),
      phase("Depuração", "🐞", "Encontrar e corrigir erros.", ["erro", "teste", "correção", "hipótese", "melhoria"]),
      phase("Sequência Lógica", "➡️", "Ordenar ações de forma coerente.", ["início", "meio", "fim", "ordem", "causa"]),
      phase("Projeto Computacional", "🚀", "Planejar, testar e apresentar soluções.", ["planejamento", "protótipo", "validação", "melhoria", "apresentação"])
    ]},
    { id: "informatica", title: "Informática", shortTitle: "Informática", icon: "💻", color: "#26a69a", description: "Uso do computador, arquivos, internet, segurança e produtividade.", phases: [
      phase("Hardware e Software", "🖥️", "Componentes físicos e programas.", ["hardware", "software", "periférico", "sistema operacional", "aplicativo"]),
      phase("Arquivos e Pastas", "📁", "Organização de documentos digitais.", ["arquivo", "pasta", "nome do arquivo", "extensão", "backup"]),
      phase("Editor de Texto", "📝", "Produção e formatação de documentos.", ["fonte", "parágrafo", "alinhamento", "título", "salvar"]),
      phase("Apresentações", "📽️", "Criação de slides claros.", ["slide", "imagem", "tópico", "transição", "apresentação"]),
      phase("Planilhas", "📊", "Tabelas, células e cálculos básicos.", ["célula", "linha", "coluna", "fórmula", "gráfico"]),
      phase("Internet", "🌐", "Navegação, pesquisa e avaliação de fontes.", ["navegador", "link", "busca", "site confiável", "fonte"]),
      phase("E-mail", "✉️", "Comunicação digital responsável.", ["assunto", "destinatário", "anexo", "mensagem", "etiqueta digital"]),
      phase("Segurança Digital", "🔐", "Cuidados com dados e senhas.", ["senha forte", "privacidade", "golpe", "antivírus", "dados pessoais"]),
      phase("Cidadania Digital", "🤝", "Respeito e responsabilidade online.", ["respeito", "cyberbullying", "direitos", "deveres", "rastros digitais"]),
      phase("Projeto Digital", "🚀", "Criar e compartilhar uma produção digital.", ["planejamento", "ferramenta", "produção", "revisão", "compartilhamento"])
    ]},
    { id: "robotica", title: "Robótica", shortTitle: "Robótica", icon: "🤖", color: "#78909c", description: "Sensores, atuadores, montagem, lógica e automação.", phases: [
      phase("Introdução à Robótica", "🤖", "Robôs e sua função na sociedade.", ["robô", "automação", "controle", "tarefa", "ambiente"]),
      phase("Componentes", "⚙️", "Peças, placas e conexões.", ["placa", "motor", "sensor", "cabo", "estrutura"]),
      phase("Sensores", "📡", "Entrada de dados do ambiente.", ["sensor de luz", "sensor de distância", "sensor de toque", "leitura", "entrada"]),
      phase("Atuadores", "🔧", "Saídas e movimentos.", ["motor", "led", "buzzer", "movimento", "saída"]),
      phase("Circuitos Simples", "🔌", "Conexões elétricas básicas.", ["corrente", "energia", "positivo", "negativo", "circuito"]),
      phase("Programação do Robô", "💻", "Comandos e comportamento.", ["comando", "sequência", "condição", "repetição", "teste"]),
      phase("Movimento", "🚗", "Deslocamento e direção.", ["frente", "trás", "girar", "velocidade", "trajeto"]),
      phase("Desafio com Sensor", "🎯", "Tomada de decisão baseada em leituras.", ["detectar", "desviar", "aproximar", "parar", "responder"]),
      phase("Protótipo", "🛠️", "Construção e melhoria de modelos.", ["protótipo", "montagem", "teste", "ajuste", "melhoria"]),
      phase("Missão Robótica", "🏁", "Resolver um desafio completo.", ["missão", "estratégia", "execução", "avaliação", "apresentação"])
    ]},
    { id: "fundamentos-programacao", title: "Fundamentos da Programação", shortTitle: "Programação", icon: "⌨️", color: "#42a5f5", description: "Algoritmos, variáveis, condições, laços e lógica inicial.", phases: [
      phase("Algoritmo", "📋", "Passos para resolver problemas.", ["algoritmo", "passo", "ordem", "entrada", "saída"]),
      phase("Variáveis", "📦", "Guardar informações para usar depois.", ["variável", "valor", "nome", "tipo", "atualização"]),
      phase("Tipos de Dados", "🔢", "Texto, número e valores lógicos.", ["texto", "número", "booleano", "lista", "tipo"]),
      phase("Operadores", "➕", "Operações e comparações.", ["soma", "subtração", "comparação", "igualdade", "maior que"]),
      phase("Condicionais", "🔀", "Decisões no programa.", ["if", "else", "condição", "verdadeiro", "falso"]),
      phase("Laços", "🔄", "Repetição de comandos.", ["for", "while", "repetição", "contador", "parada"]),
      phase("Funções", "🧰", "Blocos reutilizáveis de código.", ["função", "parâmetro", "retorno", "chamada", "reuso"]),
      phase("Listas", "📚", "Coleções de dados.", ["lista", "índice", "item", "adicionar", "remover"]),
      phase("Debug", "🐞", "Encontrar e corrigir problemas.", ["erro", "teste", "console", "correção", "verificação"]),
      phase("Projeto Final", "🚀", "Criar um pequeno programa.", ["planejamento", "código", "teste", "melhoria", "apresentação"])
    ]},
    { id: "raciocinio-logico", title: "Raciocínio Lógico", shortTitle: "Lógica", icon: "🧩", color: "#8d6e63", description: "Sequências, relações, dedução, padrões e resolução de problemas.", type: "logic", phases: [
      phase("Sequências", "➡️", "Identificar próximo termo.", ["sequência", "padrão", "termo", "regularidade", "continuação"]),
      phase("Classificação", "📦", "Agrupar por características.", ["grupo", "critério", "semelhança", "diferença", "categoria"]),
      phase("Analogias", "🔗", "Relações entre pares de ideias.", ["relação", "par", "comparação", "semelhança", "associação"]),
      phase("Condições", "🔀", "Se algo acontece, então outra coisa ocorre.", ["se", "então", "regra", "decisão", "consequência"]),
      phase("Dedução", "🕵️", "Tirar conclusões a partir de pistas.", ["pista", "conclusão", "evidência", "hipótese", "prova"]),
      phase("Organização", "🗂️", "Ordenar dados e informações.", ["ordem", "lista", "tabela", "posição", "critério"]),
      phase("Problemas com Tabelas", "📊", "Ler informações organizadas.", ["linha", "coluna", "valor", "comparação", "registro"]),
      phase("Lógica Espacial", "🧭", "Direções e posições.", ["direita", "esquerda", "acima", "abaixo", "trajeto"]),
      phase("Estratégias", "🎯", "Escolher caminhos de solução.", ["estratégia", "tentativa", "eliminação", "verificação", "plano"]),
      phase("Desafios Mistos", "🏆", "Combinar várias habilidades lógicas.", ["atenção", "padrão", "dedução", "comparação", "conclusão"])
    ]},
    { id: "ciencias", title: "Ciências", shortTitle: "Ciências", icon: "🔬", color: "#26c6da", description: "Vida, matéria, energia, Terra, ambiente e investigação científica.", phases: [
      phase("Método Científico", "🔎", "Observar, investigar e concluir.", ["observação", "hipótese", "experimento", "resultado", "conclusão"]),
      phase("Seres Vivos", "🌱", "Características dos seres vivos.", ["célula", "nutrição", "respiração", "reprodução", "adaptação"]),
      phase("Plantas", "🌿", "Partes das plantas e fotossíntese.", ["raiz", "caule", "folha", "flor", "fotossíntese"]),
      phase("Animais", "🐾", "Classificação e hábitos.", ["vertebrado", "invertebrado", "habitat", "alimentação", "locomoção"]),
      phase("Corpo Humano", "🫀", "Sistemas e cuidados.", ["digestão", "respiração", "circulação", "ossos", "músculos"]),
      phase("Matéria", "🧊", "Estados físicos e propriedades.", ["sólido", "líquido", "gasoso", "massa", "volume"]),
      phase("Água", "💧", "Ciclo da água e preservação.", ["evaporação", "condensação", "precipitação", "tratamento", "economia"]),
      phase("Energia", "⚡", "Fontes e transformações.", ["energia solar", "energia elétrica", "calor", "movimento", "transformação"]),
      phase("Terra e Universo", "🌎", "Planeta, Lua, Sol e movimentos.", ["rotação", "translação", "lua", "sol", "planeta"]),
      phase("Meio Ambiente", "♻️", "Ecossistemas e sustentabilidade.", ["ecossistema", "cadeia alimentar", "reciclagem", "poluição", "preservação"])
    ]},
    { id: "historia", title: "História", shortTitle: "História", icon: "🏛️", color: "#ffa726", description: "Tempo histórico, fontes, sociedades antigas e cidadania.", phases: [
      phase("Tempo Histórico", "⏳", "Passado, presente, futuro e linhas do tempo.", ["passado", "presente", "futuro", "linha do tempo", "cronologia"]),
      phase("Fontes Históricas", "📜", "Vestígios usados para estudar o passado.", ["documento", "imagem", "relato", "objeto", "fonte oral"]),
      phase("Primeiros Humanos", "🦴", "Modo de vida dos grupos humanos antigos.", ["nomadismo", "sedentarismo", "caça", "coleta", "ferramenta"]),
      phase("Civilizações Antigas", "🏺", "Sociedades, cidades e organização.", ["cidade", "governo", "religião", "escrita", "comércio"]),
      phase("Egito Antigo", "🔺", "Rio Nilo, faraós e cultura.", ["Nilo", "faraó", "pirâmide", "hieróglifo", "mumificação"]),
      phase("Grécia Antiga", "🏛️", "Cidadania, pólis e cultura.", ["pólis", "democracia", "mitologia", "filosofia", "olimpíadas"]),
      phase("Roma Antiga", "🛡️", "República, Império e legado.", ["república", "império", "lei", "exército", "cidadania"]),
      phase("Povos Originários", "🪶", "Diversidade e culturas indígenas.", ["território", "tradição", "língua", "comunidade", "memória"]),
      phase("África Antiga", "🌍", "Reinos, comércio e cultura.", ["reino", "comércio", "oralidade", "ancestralidade", "diversidade"]),
      phase("Cidadania e Memória", "🤝", "Direitos, deveres e preservação histórica.", ["cidadania", "patrimônio", "memória", "direito", "dever"])
    ]},
    { id: "geografia", title: "Geografia", shortTitle: "Geografia", icon: "🌎", color: "#66bb6a", description: "Lugar, paisagem, mapas, natureza, sociedade e território.", phases: [
      phase("Lugar e Paisagem", "🏞️", "Espaços vividos e observados.", ["lugar", "paisagem", "elemento natural", "elemento cultural", "transformação"]),
      phase("Mapas", "🗺️", "Representações do espaço geográfico.", ["mapa", "legenda", "escala", "título", "orientação"]),
      phase("Coordenadas", "📍", "Localização no espaço.", ["latitude", "longitude", "ponto cardeal", "rosa dos ventos", "localização"]),
      phase("Relevo", "⛰️", "Formas da superfície terrestre.", ["montanha", "planalto", "planície", "depressão", "altitude"]),
      phase("Clima", "🌦️", "Tempo atmosférico e tipos climáticos.", ["tempo", "clima", "temperatura", "chuva", "umidade"]),
      phase("Hidrografia", "🏞️", "Águas continentais e oceanos.", ["rio", "nascente", "foz", "bacia hidrográfica", "oceano"]),
      phase("Vegetação", "🌳", "Coberturas vegetais e biomas.", ["floresta", "cerrado", "caatinga", "bioma", "biodiversidade"]),
      phase("População", "👥", "Distribuição e características populacionais.", ["população", "migração", "densidade", "cidade", "campo"]),
      phase("Economia e Trabalho", "🏭", "Atividades econômicas e produção.", ["agricultura", "indústria", "comércio", "serviços", "trabalho"]),
      phase("Sustentabilidade", "♻️", "Uso responsável dos recursos.", ["recurso natural", "consumo", "reciclagem", "preservação", "impacto ambiental"])
    ]},
    { id: "ingles", title: "Inglês", shortTitle: "Inglês", icon: "🌍", color: "#29b6f6", description: "Vocabulário, leitura e estruturas básicas em inglês.", type: "english", phases: [
      phase("Greetings", "👋", "Cumprimentos e apresentações.", ["hello", "good morning", "goodbye", "my name is", "nice to meet you"]),
      phase("Numbers", "🔢", "Números em inglês.", ["one", "two", "ten", "twenty", "one hundred"]),
      phase("Colors", "🎨", "Cores básicas.", ["red", "blue", "green", "yellow", "black"]),
      phase("School Objects", "✏️", "Objetos escolares.", ["book", "pen", "pencil", "notebook", "eraser"]),
      phase("Family", "👪", "Membros da família.", ["mother", "father", "sister", "brother", "grandmother"]),
      phase("Animals", "🐶", "Animais comuns.", ["dog", "cat", "bird", "fish", "horse"]),
      phase("Verb To Be", "✅", "Uso inicial do verbo to be.", ["I am", "you are", "he is", "she is", "they are"]),
      phase("Simple Actions", "🏃", "Ações do cotidiano.", ["I study", "I play", "I read", "I like", "I live"]),
      phase("Places", "🏫", "Lugares da cidade.", ["school", "park", "library", "market", "hospital"]),
      phase("Reading", "📖", "Leitura curta em inglês.", ["main idea", "character", "place", "action", "question word"])
    ]},
    { id: "arte", title: "Arte", shortTitle: "Arte", icon: "🎨", color: "#ec407a", description: "Linguagens artísticas, cores, formas, leitura de imagem e cultura.", phases: [
      phase("Elementos Visuais", "👁️", "Ponto, linha, forma e textura.", ["ponto", "linha", "forma", "textura", "volume"]),
      phase("Cores", "🌈", "Cores primárias, secundárias e combinações.", ["cor primária", "cor secundária", "contraste", "harmonia", "tonalidade"]),
      phase("Desenho", "✏️", "Traço, observação e composição.", ["traço", "esboço", "proporção", "sombra", "composição"]),
      phase("Pintura", "🖌️", "Materiais e técnicas.", ["pincel", "tinta", "camada", "mistura", "suporte"]),
      phase("Escultura", "🗿", "Forma tridimensional.", ["modelagem", "volume", "material", "estrutura", "tridimensional"]),
      phase("Música", "🎵", "Som, ritmo e expressão.", ["som", "ritmo", "melodia", "instrumento", "pausa"]),
      phase("Teatro", "🎭", "Personagem, cena e expressão corporal.", ["personagem", "cena", "fala", "gesto", "expressão"]),
      phase("Dança", "💃", "Movimento e espaço.", ["movimento", "coreografia", "ritmo", "espaço", "expressão corporal"]),
      phase("Leitura de Imagem", "🖼️", "Observar, interpretar e contextualizar obras.", ["obra", "autor", "contexto", "símbolo", "interpretação"]),
      phase("Projeto Artístico", "⭐", "Criar e apresentar uma produção artística.", ["ideia", "processo", "material", "criação", "apresentação"])
    ]},
    { id: "ema", title: "EMA — Esportes, Músicas e Arte", shortTitle: "EMA", icon: "🏀", color: "#ff7043", description: "Vivências corporais, musicais e artísticas integradas.", phases: [
      phase("Esportes Coletivos", "⚽", "Cooperação e regras em equipe.", ["equipe", "regra", "passe", "marcação", "cooperação"]),
      phase("Esportes Individuais", "🏃", "Autonomia, técnica e superação.", ["técnica", "meta", "treino", "desempenho", "respeito"]),
      phase("Jogos e Brincadeiras", "🎲", "Cultura corporal e convivência.", ["brincadeira", "estratégia", "regra", "participação", "diversão"]),
      phase("Ritmo", "🥁", "Pulso, tempo e movimento.", ["pulso", "tempo", "batida", "pausa", "coordenação"]),
      phase("Música e Expressão", "🎤", "Voz, instrumentos e criação.", ["voz", "instrumento", "melodia", "letra", "interpretação"]),
      phase("Dança e Movimento", "🕺", "Corpo, espaço e expressão.", ["movimento", "coreografia", "espaço", "ritmo", "expressão"]),
      phase("Arte Integrada", "🎨", "Combinar linguagens artísticas.", ["imagem", "som", "corpo", "cena", "criação coletiva"]),
      phase("Saúde e Bem-Estar", "💪", "Hábitos saudáveis no cotidiano.", ["alongamento", "hidratação", "descanso", "alimentação", "postura"]),
      phase("Projeto Cultural", "🎪", "Planejar uma apresentação.", ["planejamento", "ensaio", "colaboração", "divulgação", "avaliação"]),
      phase("Mostra Final", "🏁", "Apresentar e refletir sobre produções.", ["apresentação", "respeito", "escuta", "feedback", "celebração"])
    ]}
  ];

  var app, backBtn, reportBtn, fullscreenBtn, soundBtn, resetBtn;
  var state = {
    screen: "home",
    subjectId: null,
    phaseIndex: 0,
    questionIndex: 0,
    score: 0,
    selectedAnswer: null,
    isAnswered: false,
    review: [],
    soundEnabled: true
  };
  var GAME_DATA = null;
  var progress = null;
  var toastTimer = null;

  document.addEventListener("DOMContentLoaded", function () {
    try {
      init();
    } catch (error) {
      console.error(error);
      renderFatalError(error);
    }
  });

  window.addEventListener("error", function (event) {
    console.error(event.error || event.message);
  });

  function phase(title, icon, description, concepts) {
    return { title: title, icon: icon, description: description, concepts: concepts };
  }

  function init() {
    app = document.getElementById("app");
    backBtn = document.getElementById("backBtn");
    reportBtn = document.getElementById("reportBtn");
    fullscreenBtn = document.getElementById("fullscreenBtn");
    soundBtn = document.getElementById("soundBtn");
    resetBtn = document.getElementById("resetBtn");

    if (!app || !backBtn || !reportBtn || !fullscreenBtn || !soundBtn || !resetBtn) {
      throw new Error("Um ou mais elementos obrigatórios do HTML não foram encontrados.");
    }

    GAME_DATA = buildGameData();
    validateGameData(GAME_DATA);
    progress = loadProgress();

    updateTvMode();
    renderHome();

    app.addEventListener("click", handleAppClick);
    backBtn.addEventListener("click", goBack);
    reportBtn.addEventListener("click", renderReport);
    fullscreenBtn.addEventListener("click", toggleFullscreen);
    soundBtn.addEventListener("click", toggleSound);
    resetBtn.addEventListener("click", resetProgress);
    document.addEventListener("keydown", handleKeyboard);
    window.addEventListener("resize", updateTvMode);
  }

  function buildGameData() {
    var subjects = SUBJECTS.map(function (subject) {
      var copy = cloneSubject(subject);
      copy.phases = copy.phases.map(function (ph, phaseIndex) {
        var p = clonePhase(ph);
        p.questions = buildQuestions(copy, p, phaseIndex);
        return p;
      });
      return copy;
    });
    return { appName: "Trilha do Saber 6º Ano", subjects: subjects };
  }

  function cloneSubject(subject) {
    return {
      id: subject.id,
      title: subject.title,
      shortTitle: subject.shortTitle,
      icon: subject.icon,
      color: subject.color,
      description: subject.description,
      type: subject.type || "generic",
      phases: subject.phases.slice()
    };
  }

  function clonePhase(ph) {
    return {
      title: ph.title,
      icon: ph.icon,
      description: ph.description,
      concepts: ph.concepts.slice()
    };
  }

  function validateGameData(data) {
    var totalQuestions = 0;
    data.subjects.forEach(function (subject) {
      if (subject.phases.length !== 10) {
        throw new Error("A disciplina " + subject.title + " precisa ter exatamente 10 fases.");
      }
      subject.phases.forEach(function (ph) {
        if (ph.questions.length !== 15) {
          throw new Error("A fase " + ph.title + " de " + subject.title + " precisa ter exatamente 15 questões.");
        }
        totalQuestions += ph.questions.length;
      });
    });
    if (totalQuestions !== 2100) {
      throw new Error("Total de questões inválido. Esperado: 2100. Encontrado: " + totalQuestions);
    }
  }

  function buildQuestions(subject, ph, phaseIndex) {
    if (subject.type === "math") return buildMathQuestions(subject, ph, phaseIndex);
    if (subject.type === "english") return buildEnglishQuestions(subject, ph, phaseIndex);
    if (subject.type === "logic") return buildLogicQuestions(subject, ph, phaseIndex);
    return buildGenericQuestions(subject, ph, phaseIndex);
  }

  function buildGenericQuestions(subject, ph, phaseIndex) {
    var concepts = ph.concepts;
    var allConcepts = getAllConcepts(subject);
    var questions = [];

    concepts.forEach(function (concept, index) {
      var distractors = pickDistractors(allConcepts, concept, 3, phaseIndex * 10 + index);
      questions.push({
        id: makeId(subject, phaseIndex, questions.length), skill: concept,
        question: "Na fase \"" + ph.title + "\", qual conceito combina melhor com: " + concept + "?",
        visual: ph.icon + " " + concept,
        options: shuffle([concept].concat(distractors), phaseIndex * 31 + index), answer: concept,
        explanation: capitalize(concept) + " é um conceito importante em " + ph.title + " e ajuda a compreender melhor " + subject.title + "."
      });

      var goodAction = getCorrectAction(subject.title, concept, ph.title);
      var badActions = getWrongActions();
      questions.push({
        id: makeId(subject, phaseIndex, questions.length), skill: concept,
        question: "Qual atitude ajuda a estudar melhor \"" + concept + "\"?",
        visual: ph.icon + " 🧠",
        options: shuffle([goodAction].concat(badActions), phaseIndex * 41 + index), answer: goodAction,
        explanation: "Uma boa estratégia é observar exemplos, registrar ideias e explicar " + concept + " com suas próprias palavras."
      });

      var use = getBestUse(concept, ph.title);
      var wrongUses = getWrongUses();
      questions.push({
        id: makeId(subject, phaseIndex, questions.length), skill: concept,
        question: "Qual alternativa mostra um uso adequado de \"" + concept + "\"?",
        visual: ph.icon + " ✅",
        options: shuffle([use].concat(wrongUses), phaseIndex * 53 + index), answer: use,
        explanation: "O uso adequado de " + concept + " aparece quando a resposta está ligada ao tema e pode ser justificada com clareza."
      });
    });

    return questions.slice(0, 15);
  }

  function buildEnglishQuestions(subject, ph, phaseIndex) {
    var translations = {
      "hello":"olá", "good morning":"bom dia", "goodbye":"tchau", "my name is":"meu nome é", "nice to meet you":"prazer em conhecer você",
      "one":"um", "two":"dois", "ten":"dez", "twenty":"vinte", "one hundred":"cem",
      "red":"vermelho", "blue":"azul", "green":"verde", "yellow":"amarelo", "black":"preto",
      "book":"livro", "pen":"caneta", "pencil":"lápis", "notebook":"caderno", "eraser":"borracha",
      "mother":"mãe", "father":"pai", "sister":"irmã", "brother":"irmão", "grandmother":"avó",
      "dog":"cachorro", "cat":"gato", "bird":"pássaro", "fish":"peixe", "horse":"cavalo",
      "I am":"eu sou/estou", "you are":"você é/está", "he is":"ele é/está", "she is":"ela é/está", "they are":"eles/elas são/estão",
      "I study":"eu estudo", "I play":"eu jogo/brinco", "I read":"eu leio", "I like":"eu gosto", "I live":"eu moro/vivo",
      "school":"escola", "park":"parque", "library":"biblioteca", "market":"mercado", "hospital":"hospital",
      "main idea":"ideia principal", "character":"personagem", "place":"lugar", "action":"ação", "question word":"palavra interrogativa"
    };
    var allWords = Object.keys(translations);
    var allMeanings = Object.keys(translations).map(function (key) { return translations[key]; });
    var questions = [];

    ph.concepts.forEach(function (word, index) {
      var meaning = translations[word] || "tradução de " + word;
      questions.push({
        id: makeId(subject, phaseIndex, questions.length), skill: word,
        question: "Qual é o significado de \"" + word + "\" em português?",
        visual: "🌍 " + word,
        options: shuffle([meaning].concat(pickDistractors(allMeanings, meaning, 3, index + phaseIndex)), index + 7), answer: meaning,
        explanation: "Em inglês, \"" + word + "\" significa \"" + meaning + "\"."
      });
      questions.push({
        id: makeId(subject, phaseIndex, questions.length), skill: word,
        question: "Qual palavra ou expressão em inglês corresponde a \"" + meaning + "\"?",
        visual: ph.icon + " " + meaning,
        options: shuffle([word].concat(pickDistractors(allWords, word, 3, index + phaseIndex * 3)), index + 17), answer: word,
        explanation: "A forma correta em inglês é \"" + word + "\"."
      });
      var sentence = "Usar \"" + word + "\" em uma frase simples.";
      questions.push({
        id: makeId(subject, phaseIndex, questions.length), skill: word,
        question: "Qual atitude ajuda a memorizar \"" + word + "\"?",
        visual: "📝 " + word,
        options: shuffle([sentence, "Evitar repetir a palavra.", "Ignorar o significado.", "Estudar sem contexto."], index + 27), answer: sentence,
        explanation: "Criar frases ajuda a lembrar vocabulário com significado e uso real."
      });
    });
    return questions.slice(0, 15);
  }

  function buildMathQuestions(subject, ph, phaseIndex) {
    var questions = [];
    for (var i = 1; i <= 15; i += 1) {
      questions.push(makeMathQuestion(subject, ph, phaseIndex, i));
    }
    return questions;
  }

  function makeMathQuestion(subject, ph, phaseIndex, i) {
    var a = phaseIndex * 4 + i + 6;
    var b = (i % 9) + 2;
    var answer, question, visual, explanation, skill;

    if (phaseIndex === 0) {
      answer = a + b; question = "Quanto é " + a + " + " + b + "?"; visual = a + " + " + b; skill = "adição"; explanation = "Somamos as duas parcelas: " + a + " + " + b + " = " + answer + ".";
    } else if (phaseIndex === 1) {
      answer = a * b; question = "Qual é o resultado de " + a + " × " + b + "?"; visual = a + " × " + b; skill = "multiplicação"; explanation = "Multiplicar é somar parcelas iguais. Resultado: " + answer + ".";
    } else if (phaseIndex === 2) {
      answer = b; question = "Em uma fração " + b + "/" + (b + 3) + ", qual é o numerador?"; visual = b + "/" + (b + 3); skill = "numerador"; explanation = "O numerador é o número de cima da fração.";
    } else if (phaseIndex === 3) {
      answer = Number((a / 10 + b / 10).toFixed(1)); question = "Quanto é " + (a / 10).toFixed(1) + " + " + (b / 10).toFixed(1) + "?"; visual = (a / 10).toFixed(1) + " + " + (b / 10).toFixed(1); skill = "adição decimal"; explanation = "Somamos décimos com décimos. Resultado: " + answer + ".";
    } else if (phaseIndex === 4) {
      var base = (i + 4) * 10; answer = base / 2; question = "Quanto é 50% de " + base + "?"; visual = "50% de " + base; skill = "porcentagem"; explanation = "50% é a metade. A metade de " + base + " é " + answer + ".";
    } else if (phaseIndex === 5) {
      answer = 2 * (a + b); question = "Um retângulo tem lados " + a + " cm e " + b + " cm. Qual é o perímetro?"; visual = "▭ " + a + "cm × " + b + "cm"; skill = "perímetro"; explanation = "Perímetro do retângulo: 2 × (" + a + " + " + b + ") = " + answer + " cm.";
    } else if (phaseIndex === 6) {
      answer = a * 100; question = a + " metros equivalem a quantos centímetros?"; visual = a + " m = ? cm"; skill = "medidas"; explanation = "Cada metro tem 100 centímetros. " + a + " × 100 = " + answer + ".";
    } else if (phaseIndex === 7) {
      answer = a; question = "A média de " + (a - 2) + ", " + a + " e " + (a + 2) + " é quanto?"; visual = (a - 2) + ", " + a + ", " + (a + 2); skill = "média"; explanation = "Somamos os valores e dividimos por 3. A média é " + answer + ".";
    } else if (phaseIndex === 8) {
      answer = a + b * 2; question = "Resolva: " + a + " + " + b + " × 2"; visual = a + " + " + b + " × 2"; skill = "ordem das operações"; explanation = "Primeiro multiplicamos: " + b + " × 2 = " + (b * 2) + ". Depois somamos " + a + ".";
    } else {
      answer = a - b + 5; question = "Ana tinha " + a + " figurinhas, deu " + b + " e ganhou 5. Com quantas ficou?"; visual = a + " - " + b + " + 5"; skill = "problema matemático"; explanation = "Calculamos em etapas: " + a + " - " + b + " + 5 = " + answer + ".";
    }

    return { id: makeId(subject, phaseIndex, i - 1), skill: skill, question: question, visual: visual, options: numericOptions(answer, i + phaseIndex * 9), answer: answer, explanation: explanation };
  }

  function buildLogicQuestions(subject, ph, phaseIndex) {
    var questions = buildGenericQuestions(subject, ph, phaseIndex);
    questions[0] = {
      id: makeId(subject, phaseIndex, 0), skill: "sequência lógica",
      question: "Complete a sequência: " + (phaseIndex + 1) + ", " + (phaseIndex + 3) + ", " + (phaseIndex + 5) + ", __",
      visual: (phaseIndex + 1) + " ➜ " + (phaseIndex + 3) + " ➜ " + (phaseIndex + 5) + " ➜ ?",
      options: numericOptions(phaseIndex + 7, phaseIndex + 1), answer: phaseIndex + 7,
      explanation: "A sequência aumenta de 2 em 2."
    };
    return questions;
  }

  function getAllConcepts(subject) {
    var all = [];
    subject.phases.forEach(function (ph) { ph.concepts.forEach(function (c) { all.push(c); }); });
    return all;
  }

  function getCorrectAction(subjectTitle, concept, phaseTitle) {
    return "Observar exemplos de " + concept + " e explicar com suas palavras.";
  }

  function getWrongActions() {
    return ["Responder sem ler o enunciado.", "Copiar sem entender o conceito.", "Ignorar exemplos e pistas da atividade."];
  }

  function getBestUse(concept, phaseTitle) {
    return "Relacionar " + concept + " ao tema " + phaseTitle + " com um exemplo claro.";
  }

  function getWrongUses() {
    return ["Usar uma resposta sem relação com o tema.", "Escolher ao acaso sem justificar.", "Apagar as pistas importantes do enunciado."];
  }

  function numericOptions(answer, seed) {
    var values = [answer];
    var deltas = [-10, -5, -3, -2, -1, 1, 2, 3, 5, 10];
    var idx = Math.abs(seed) % deltas.length;
    var guard = 0;
    while (values.length < 4 && guard < 40) {
      var candidate = Number((Number(answer) + deltas[idx]).toFixed(2));
      if (candidate >= 0 && values.indexOf(candidate) === -1) values.push(candidate);
      idx = (idx + 1) % deltas.length;
      guard += 1;
    }
    while (values.length < 4) values.push(Number(answer) + values.length + 1);
    return shuffle(values, seed);
  }

  function pickDistractors(pool, answer, amount, seed) {
    var unique = [];
    pool.forEach(function (item) {
      if (item !== answer && unique.indexOf(item) === -1) unique.push(item);
    });
    var result = [];
    if (unique.length > 0) {
      var start = Math.abs(seed || 0) % unique.length;
      for (var i = 0; i < unique.length && result.length < amount; i += 1) {
        result.push(unique[(start + i) % unique.length]);
      }
    }
    while (result.length < amount) result.push("alternativa " + (result.length + 1));
    return result;
  }

  function shuffle(array, seed) {
    var copy = array.slice();
    var localSeed = Math.abs(seed || 1) + 1;
    for (var i = copy.length - 1; i > 0; i -= 1) {
      localSeed = (localSeed * 9301 + 49297) % 233280;
      var j = localSeed % (i + 1);
      var tmp = copy[i]; copy[i] = copy[j]; copy[j] = tmp;
    }
    return copy;
  }

  function makeId(subject, phaseIndex, questionIndex) {
    return subject.id + "-f" + (phaseIndex + 1) + "-q" + (questionIndex + 1);
  }

  function loadProgress() {
    var fallback = {
      attempts: [],
      bestScores: {},
      stars: {},
      profile: { name: "", avatar: "🚀" }
    };

    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return fallback;
      var saved = JSON.parse(raw);
      if (!saved || typeof saved !== "object") return fallback;

      var profile = saved.profile && typeof saved.profile === "object"
        ? saved.profile
        : fallback.profile;

      return {
        attempts: Array.isArray(saved.attempts) ? saved.attempts : [],
        bestScores: saved.bestScores || {},
        stars: saved.stars || {},
        profile: {
          name: typeof profile.name === "string" ? profile.name : "",
          avatar: AVATARS.indexOf(profile.avatar) !== -1 ? profile.avatar : "🚀"
        }
      };
    } catch (error) {
      return fallback;
    }
  }

  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  function updateTvMode() {
    var large = window.innerWidth >= 1500 || (window.matchMedia && window.matchMedia("(min-width: 1200px) and (min-height: 750px)").matches);
    document.body.classList.toggle("tv-mode", !!large);
  }

  function renderHome() {
    state.screen = "home";
    setBack(false);
    var totals = getTotals();
    app.innerHTML = "" +
      "<section class=\"panel hero\" aria-labelledby=\"home-title\">" +
        "<div>" +
          "<span class=\"eyebrow\">🎮 Plataforma educativa do 6º ano</span>" +
          "<h1 id=\"home-title\">Escolha uma disciplina e comece a trilha de estudos!</h1>" +
          "<p>São " + totals.subjects + " disciplinas, " + totals.phases + " fases e " + totals.questions + " questões. A plataforma gera relatório com acertos, erros e pontos de melhoria.</p>" +
          "<div class=\"actions\">" +
            "<button class=\"primary-button\" type=\"button\" data-action=\"start-first\">Começar agora 🚀</button>" +
            "<button class=\"secondary-button\" type=\"button\" data-action=\"report\">Ver relatório 📊</button>" +
            "<button class=\"secondary-button\" type=\"button\" data-action=\"speak-intro\">Ouvir apresentação 🔈</button>" +
          "</div>" +
        "</div>" +
        "<div class=\"hero-art\" aria-hidden=\"true\"><div class=\"planet\"></div></div>" +
      "</section>" +
      renderProfilePanel() +
      "<section class=\"stat-grid\" aria-label=\"Resumo geral\">" +
        statCard(totals.subjects, "disciplinas") + statCard(totals.phases, "fases") + statCard(totals.questions, "questões") + statCard(getTotalAttempts(), "respondidas") +
      "</section>" +
      "<section aria-labelledby=\"subjects-title\">" +
        "<div class=\"section-head\"><div><h2 id=\"subjects-title\">Disciplinas</h2><p>Selecione uma área para ver as 10 fases disponíveis.</p></div></div>" +
        "<div class=\"subject-grid\">" + GAME_DATA.subjects.map(renderSubjectCard).join("") + "</div>" +
      "</section>";
    focusApp();
  }

  function renderProfilePanel() {
    var name = getProfileName();
    var rawName = progress.profile && progress.profile.name ? progress.profile.name : "";
    var avatar = getProfileAvatar();
    return "" +
      "<section class=\"panel profile-panel\" aria-labelledby=\"profile-title\">" +
        "<div class=\"profile-summary\">" +
          "<div class=\"profile-avatar-big\" aria-hidden=\"true\">" + avatar + "</div>" +
          "<div><span class=\"eyebrow\">👤 Perfil da estudante</span>" +
          "<h2 id=\"profile-title\">Olá, " + escapeHTML(name) + "!</h2>" +
          "<p>Digite seu nome e escolha um avatar. Essas informações ficam salvas apenas neste navegador.</p></div>" +
        "</div>" +
        "<div class=\"profile-form\">" +
          "<label class=\"field-label\" for=\"studentName\">Nome da estudante</label>" +
          "<input id=\"studentName\" class=\"name-input\" type=\"text\" maxlength=\"32\" placeholder=\"Ex.: Ana Clara\" value=\"" + escapeHTML(rawName) + "\" autocomplete=\"off\" />" +
          "<div class=\"avatar-grid\" role=\"radiogroup\" aria-label=\"Escolha de avatar\">" + AVATARS.map(function (item) {
            var selected = item === avatar;
            return "<button class=\"avatar-button" + (selected ? " selected" : "") + "\" type=\"button\" role=\"radio\" aria-checked=\"" + selected + "\" data-action=\"choose-avatar\" data-avatar=\"" + escapeHTML(item) + "\">" + item + "</button>";
          }).join("") + "</div>" +
          "<button class=\"primary-button\" type=\"button\" data-action=\"save-profile\">Salvar perfil 💾</button>" +
        "</div>" +
      "</section>";
  }

  function renderSubjectCard(subject) {
    var answered = progress.attempts.filter(function (a) { return a.subjectId === subject.id; }).length;
    return "" +
      "<button class=\"card-button\" type=\"button\" data-action=\"select-subject\" data-subject=\"" + escapeHTML(subject.id) + "\">" +
        "<div><div class=\"card-icon\" style=\"background:" + softColor(subject.color) + "\" aria-hidden=\"true\">" + subject.icon + "</div>" +
        "<h3>" + escapeHTML(subject.title) + "</h3><p>" + escapeHTML(subject.description) + "</p></div>" +
        "<div><div class=\"stars\">" + starsText(getSubjectStars(subject.id)) + "</div>" +
        "<div class=\"card-meta\"><span class=\"badge\">10 fases</span><span class=\"badge\">150 questões</span><span class=\"badge\">" + answered + " respondidas</span></div></div>" +
      "</button>";
  }

  function renderPhases(subjectId) {
    var subject = getSubject(subjectId);
    state.screen = "phases";
    state.subjectId = subject.id;
    setBack(true);
    var stats = getSubjectStats(subject.id);
    app.innerHTML = "" +
      "<section class=\"panel\" aria-labelledby=\"phase-title\">" +
        "<span class=\"eyebrow\">" + subject.icon + " " + escapeHTML(subject.title) + "</span>" +
        "<h1 id=\"phase-title\">Escolha uma fase</h1>" +
        "<p class=\"lead\">Cada disciplina tem 10 fases com 15 questões. O progresso é salvo no próprio navegador.</p>" +
        "<section class=\"stat-grid\" aria-label=\"Resumo da disciplina\">" +
          statCard("150", "questões") + statCard("10", "fases") + statCard(stats.correct, "acertos") + statCard(stats.wrong, "erros") +
        "</section>" +
        "<div class=\"phase-grid\">" + subject.phases.map(function (ph, index) { return renderPhaseCard(subject, ph, index); }).join("") + "</div>" +
      "</section>";
    focusApp();
  }

  function renderPhaseCard(subject, ph, index) {
    var phaseKey = subject.id + "::" + index;
    var best = progress.bestScores[phaseKey] || 0;
    var stars = progress.stars[phaseKey] || 0;
    var locked = !isPhaseUnlocked(subject.id, index);
    var lockText = locked ? "🔒 Bloqueada" : index === 0 ? "✅ Primeira fase" : "✅ Liberada";

    return "" +
      "<button class=\"card-button" + (locked ? " locked" : "") + "\" type=\"button\" data-action=\"start-phase\" data-phase=\"" + index + "\" " + (locked ? "disabled aria-disabled=\"true\"" : "") + ">" +
        "<div><div class=\"card-icon\" style=\"background:" + softColor(subject.color) + "\" aria-hidden=\"true\">" + ph.icon + "</div>" +
        "<h3>Fase " + (index + 1) + ": " + escapeHTML(ph.title) + "</h3><p>" + escapeHTML(ph.description) + "</p></div>" +
        "<div><div class=\"stars\">" + starsText(stars) + "</div>" +
        "<div class=\"card-meta\"><span class=\"badge " + (locked ? "badge-locked" : "badge-open") + "\">" + lockText + "</span><span class=\"badge\">15 questões</span><span class=\"badge\">Melhor: " + best + "/15</span></div></div>" +
      "</button>";
  }

  function startPhase(phaseIndex) {
    var subject = getSubject(state.subjectId || GAME_DATA.subjects[0].id);

    if (!isPhaseUnlocked(subject.id, phaseIndex)) {
      playTone(false);
      showToast("Essa fase está bloqueada. Conquiste pelo menos 1 estrela na fase anterior para liberar.");
      return;
    }

    state.screen = "game";
    state.subjectId = subject.id;
    state.phaseIndex = phaseIndex;
    state.questionIndex = 0;
    state.score = 0;
    state.selectedAnswer = null;
    state.isAnswered = false;
    state.review = [];
    setBack(true);
    renderQuestion();
  }

  function renderQuestion() {
    var subject = getSubject(state.subjectId);
    var ph = subject.phases[state.phaseIndex];
    var question = ph.questions[state.questionIndex];
    var current = state.questionIndex + 1;
    var total = ph.questions.length;
    var progressPercent = Math.round(((current - 1) / total) * 100);
    app.innerHTML = "" +
      "<section class=\"game-card\" aria-labelledby=\"question-title\">" +
        "<div class=\"game-head\">" +
          "<div><div class=\"game-meta\"><span class=\"badge\">" + subject.icon + " " + escapeHTML(subject.title) + "</span><span class=\"badge\">" + ph.icon + " Fase " + (state.phaseIndex + 1) + "</span><span class=\"badge\">⭐ " + state.score + "</span><span class=\"badge\">🧩 " + current + "/" + total + "</span></div>" +
          "<h1 id=\"question-title\">" + escapeHTML(ph.title) + "</h1></div>" +
          "<button class=\"pill-button\" type=\"button\" data-action=\"speak-question\">Ouvir pergunta 🔈</button>" +
        "</div>" +
        "<div class=\"progress-wrap\" aria-label=\"Progresso da fase\"><div class=\"progress-bar\" style=\"width:" + progressPercent + "%\"></div></div>" +
        "<div class=\"question-layout\">" +
          "<div class=\"visual-panel\"><div class=\"visual-content " + (isMostlyEmoji(question.visual) ? "emoji" : "") + "\">" + escapeHTML(question.visual) + "</div></div>" +
          "<div class=\"question-panel\"><div class=\"question-count\">Pergunta " + current + " de " + total + "</div>" +
          "<p class=\"question-text\">" + escapeHTML(question.question) + "</p>" +
          "<div class=\"option-grid\" role=\"group\" aria-label=\"Alternativas\">" + question.options.map(function (option, index) { return renderOption(question, option, index); }).join("") + "</div>" +
          (state.isAnswered ? renderFeedback(question) : "") + "</div>" +
        "</div>" +
      "</section>";
    focusFirstOption();
  }

  function renderOption(question, option, index) {
    var selected = state.selectedAnswer === option;
    var correct = option === question.answer;
    var cls = "";
    if (state.isAnswered && correct) cls = " correct";
    if (state.isAnswered && selected && !correct) cls = " wrong";
    return "<button class=\"option-button" + cls + "\" type=\"button\" data-action=\"answer\" data-answer=\"" + escapeHTML(JSON.stringify(option)) + "\" " + (state.isAnswered ? "disabled" : "") + "><span aria-hidden=\"true\">" + (index + 1) + ".</span> " + escapeHTML(option) + "</button>";
  }

  function renderFeedback(question) {
    var correct = state.selectedAnswer === question.answer;
    var last = state.questionIndex === getSubject(state.subjectId).phases[state.phaseIndex].questions.length - 1;
    return "" +
      "<div class=\"feedback " + (correct ? "success" : "danger") + "\" role=\"status\">" +
        "<strong>" + (correct ? "✅ Muito bem! Resposta correta!" : "💡 Quase lá! Vamos revisar.") + "</strong>" +
        "<p>" + escapeHTML(question.explanation) + "</p>" +
        "<div class=\"feedback-actions\"><button class=\"primary-button\" type=\"button\" data-action=\"next-question\">" + (last ? "Ver resultado 🏆" : "Próxima pergunta ➜") + "</button></div>" +
      "</div>";
  }

  function answerQuestion(answer) {
    if (state.isAnswered) return;
    var subject = getSubject(state.subjectId);
    var ph = subject.phases[state.phaseIndex];
    var question = ph.questions[state.questionIndex];
    var correct = answer === question.answer;
    state.selectedAnswer = answer;
    state.isAnswered = true;
    if (correct) { state.score += 1; playTone(true); launchConfetti(["⭐", "✨", "🎉", "🌟"], 18); } else { playTone(false); }
    var attempt = {
      subjectId: subject.id,
      subjectTitle: subject.title,
      phaseTitle: ph.title,
      phaseIndex: state.phaseIndex,
      questionId: question.id,
      question: question.question,
      skill: question.skill,
      selected: answer,
      correctAnswer: question.answer,
      isCorrect: correct,
      date: new Date().toISOString()
    };
    state.review.push(attempt);
    progress.attempts.push(attempt);
    if (progress.attempts.length > 800) progress.attempts = progress.attempts.slice(-800);
    saveProgress();
    renderQuestion();
  }

  function nextQuestion() {
    var subject = getSubject(state.subjectId);
    var ph = subject.phases[state.phaseIndex];
    if (state.questionIndex < ph.questions.length - 1) {
      state.questionIndex += 1;
      state.selectedAnswer = null;
      state.isAnswered = false;
      renderQuestion();
      return;
    }
    finishPhase();
  }

  function finishPhase() {
    var subject = getSubject(state.subjectId);
    var ph = subject.phases[state.phaseIndex];
    var stars = calculateStars(state.score, ph.questions.length);
    var phaseKey = subject.id + "::" + state.phaseIndex;
    progress.bestScores[phaseKey] = Math.max(progress.bestScores[phaseKey] || 0, state.score);
    progress.stars[phaseKey] = Math.max(progress.stars[phaseKey] || 0, stars);
    saveProgress();
    if (stars > 0) { playVictory(); launchConfetti(["⭐", "🎉", "🏆", "✨", "💛"], 42); }
    renderResult(stars);
  }

  function renderResult(stars) {
    state.screen = "result";
    var subject = getSubject(state.subjectId);
    var ph = subject.phases[state.phaseIndex];
    var total = ph.questions.length;
    var message = stars === 3 ? "Excelente desempenho!" : stars === 2 ? "Muito bom! Continue praticando." : stars === 1 ? "Bom começo! Revise os erros para melhorar." : "Tente novamente e revise os pontos principais.";
    app.innerHTML = "" +
      "<section class=\"result-card\" aria-labelledby=\"result-title\">" +
        "<div class=\"result-icon\" aria-hidden=\"true\">" + (stars > 0 ? "🏆" : "🧠") + "</div>" +
        "<span class=\"eyebrow\">" + subject.icon + " " + escapeHTML(subject.title) + " • " + ph.icon + " " + escapeHTML(ph.title) + "</span>" +
        "<h1 id=\"result-title\">Resultado da fase</h1>" +
        "<div class=\"score-big\">" + state.score + "/" + total + "</div>" +
        "<div class=\"stars\">" + starsText(stars) + "</div>" +
        "<p>" + message + "</p>" +
        "<div class=\"result-actions\"><button class=\"primary-button\" type=\"button\" data-action=\"retry-phase\">Jogar novamente 🔁</button><button class=\"secondary-button\" type=\"button\" data-action=\"phase-menu\">Escolher fase 🏠</button><button class=\"secondary-button\" type=\"button\" data-action=\"report\">Ver relatório 📊</button></div>" +
        "<div class=\"review-list\">" + state.review.map(renderReviewItem).join("") + "</div>" +
      "</section>";
    focusApp();
  }

  function renderReviewItem(item, index) {
    return "<div class=\"review-item\"><div class=\"review-mark\" aria-hidden=\"true\">" + (item.isCorrect ? "✅" : "💡") + "</div><div><strong>" + (index + 1) + ". " + escapeHTML(item.question) + "</strong><span>Sua resposta: " + escapeHTML(item.selected) + " • Correta: " + escapeHTML(item.correctAnswer) + "</span></div></div>";
  }

  function renderReport() {
    state.screen = "report";
    setBack(true);
    var attempts = progress.attempts;
    var correct = attempts.filter(function (a) { return a.isCorrect; }).length;
    var wrong = attempts.length - correct;
    var accuracy = attempts.length ? Math.round((correct / attempts.length) * 100) : 0;
    var skillStats = summarizeBy(attempts, "skill");
    var subjectStats = summarizeBy(attempts, "subjectTitle");
    var weakSkills = Object.keys(skillStats).map(function (name) {
      var data = skillStats[name];
      return { name: name, total: data.total, correct: data.correct, accuracy: data.total ? Math.round((data.correct / data.total) * 100) : 0 };
    }).sort(function (a, b) { return a.accuracy - b.accuracy || b.total - a.total; }).slice(0, 10);
    var lastErrors = attempts.filter(function (a) { return !a.isCorrect; }).slice(-10).reverse();

    app.innerHTML = "" +
      "<section class=\"panel\" aria-labelledby=\"report-title\">" +
        "<span class=\"eyebrow\">📊 Relatório pedagógico</span>" +
        "<h1 id=\"report-title\">" + getProfileAvatar() + " Resumo de desempenho de " + escapeHTML(getProfileName()) + "</h1>" +
        "<p class=\"lead\">Este relatório usa as respostas salvas neste navegador para mostrar acertos, erros e pontos que merecem reforço.</p>" +
        "<section class=\"stat-grid\" aria-label=\"Indicadores gerais\">" + statCard(attempts.length, "questões respondidas") + statCard(correct, "acertos") + statCard(wrong, "erros") + statCard(accuracy + "%", "aproveitamento") + "</section>" +
        "<div class=\"section-head\"><div><h2>Pontos que devem ser melhorados</h2><p>Priorize as habilidades com menor aproveitamento.</p></div></div>" +
        "<div class=\"report-list\">" + (weakSkills.length ? weakSkills.map(renderSkillReport).join("") : "<div class=\"empty-state\">Nenhuma questão respondida ainda. Jogue uma fase para gerar o relatório.</div>") + "</div>" +
        "<div class=\"section-head\"><div><h2>Resumo por disciplina</h2><p>Veja o desempenho em cada matéria respondida.</p></div></div>" +
        "<div class=\"report-list\">" + (Object.keys(subjectStats).length ? Object.keys(subjectStats).map(function (name) { return renderSubjectReport(name, subjectStats[name]); }).join("") : "<div class=\"empty-state\">Ainda não há dados por disciplina.</div>") + "</div>" +
        "<div class=\"section-head\"><div><h2>Últimos erros para revisão</h2><p>Releia os erros recentes e refaça as fases correspondentes.</p></div></div>" +
        "<div class=\"review-list\">" + (lastErrors.length ? lastErrors.map(function (item, index) { return renderReviewItem(item, index); }).join("") : "<div class=\"empty-state\">Nenhum erro registrado até o momento.</div>") + "</div>" +
      "</section>";
    focusApp();
  }

  function renderSkillReport(item) {
    return "<div class=\"report-item\"><div><strong>" + escapeHTML(item.name) + "</strong><span>" + item.correct + " acertos de " + item.total + " tentativa(s) • " + item.accuracy + "%</span></div><div class=\"report-bar\"><i style=\"--value:" + item.accuracy + "%\"></i></div></div>";
  }

  function renderSubjectReport(name, data) {
    var accuracy = data.total ? Math.round((data.correct / data.total) * 100) : 0;
    return "<div class=\"report-item\"><div><strong>" + escapeHTML(name) + "</strong><span>" + data.correct + " acertos de " + data.total + " tentativa(s) • " + accuracy + "%</span></div><div class=\"report-bar\"><i style=\"--value:" + accuracy + "%\"></i></div></div>";
  }

  function handleAppClick(event) {
    var target = event.target.closest("[data-action]");
    if (!target) return;
    var action = target.getAttribute("data-action");
    if (action === "start-first") { state.subjectId = GAME_DATA.subjects[0].id; renderPhases(state.subjectId); }
    else if (action === "select-subject") renderPhases(target.getAttribute("data-subject"));
    else if (action === "start-phase") startPhase(Number(target.getAttribute("data-phase")));
    else if (action === "answer") answerQuestion(JSON.parse(target.getAttribute("data-answer")));
    else if (action === "next-question") nextQuestion();
    else if (action === "retry-phase") startPhase(state.phaseIndex);
    else if (action === "phase-menu") renderPhases(state.subjectId);
    else if (action === "report") renderReport();
    else if (action === "choose-avatar") {
      progress.profile.avatar = target.getAttribute("data-avatar") || "🚀";
      saveProgress();
      renderHome();
      showToast("Avatar atualizado.");
    }
    else if (action === "save-profile") {
      var input = document.getElementById("studentName");
      var name = input ? input.value.trim() : "";
      progress.profile.name = name.slice(0, 32);
      saveProgress();
      renderHome();
      showToast("Perfil salvo com sucesso.");
    }
    else if (action === "speak-intro") speak("Bem-vindo à Trilha do Saber do sexto ano. Escolha uma disciplina, responda aos desafios e acompanhe seu desempenho pelo relatório.");
    else if (action === "speak-question") speakCurrentQuestion();
  }

  function handleKeyboard(event) {
    var key = event.key;
    if (key === "Escape") { goBack(); return; }
    if (state.screen === "game") {
      if (!state.isAnswered) {
        var number = Number(key);
        if (number >= 1 && number <= 4) {
          var question = getSubject(state.subjectId).phases[state.phaseIndex].questions[state.questionIndex];
          var option = question.options[number - 1];
          if (option !== undefined) answerQuestion(option);
        }
      } else if (key === "Enter" || key === " ") {
        event.preventDefault(); nextQuestion();
      }
    }
    if (["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].indexOf(key) !== -1) moveFocus(key);
  }

  function moveFocus(key) {
    var list = Array.prototype.slice.call(document.querySelectorAll("button:not(:disabled), a[href]"));
    var visible = list.filter(function (el) { return el.offsetParent !== null; });
    if (!visible.length) return;
    var current = visible.indexOf(document.activeElement);
    var direction = (key === "ArrowRight" || key === "ArrowDown") ? 1 : -1;
    var next = current === -1 ? 0 : (current + direction + visible.length) % visible.length;
    visible[next].focus();
  }

  function goBack() {
    if (state.screen === "home") return;
    if (state.screen === "phases" || state.screen === "report") renderHome();
    else renderPhases(state.subjectId);
  }

  function toggleSound() {
    state.soundEnabled = !state.soundEnabled;
    if (!state.soundEnabled && "speechSynthesis" in window) window.speechSynthesis.cancel();
    soundBtn.textContent = state.soundEnabled ? "🔊" : "🔇";
    soundBtn.setAttribute("aria-label", state.soundEnabled ? "Som ativado" : "Som desativado");
    if (state.soundEnabled) playTone(true);
    showToast(state.soundEnabled ? "Som ativado." : "Som desativado. A leitura por voz também foi bloqueada.");
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement && document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
    else if (document.exitFullscreen) document.exitFullscreen();
  }

  function resetProgress() {
    if (!confirm("Deseja reiniciar todo o progresso e apagar o relatório salvo neste navegador?")) return;
    var profile = progress.profile || { name: "", avatar: "🚀" };
    progress = { attempts: [], bestScores: {}, stars: {}, profile: profile };
    saveProgress();
    showToast("Progresso reiniciado com sucesso. Seu perfil foi mantido.");
    renderHome();
  }

  function speakCurrentQuestion() {
    var question = getSubject(state.subjectId).phases[state.phaseIndex].questions[state.questionIndex];
    speak(question.question + ". As opções são: " + question.options.join(", ") + ".");
  }

  function speak(text) {
    if (!state.soundEnabled) { showToast("O som está desativado."); return; }
    if (!("speechSynthesis" in window)) { showToast("Este navegador não possui leitura por voz."); return; }
    window.speechSynthesis.cancel();
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-BR";
    utterance.rate = 0.92;
    utterance.pitch = 1.04;
    window.speechSynthesis.speak(utterance);
  }

  function playTone(success) {
    if (!state.soundEnabled) return;
    try {
      var AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      var ctx = new AudioContext();
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = success ? 740 : 190;
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.22);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(); osc.stop(ctx.currentTime + 0.24);
    } catch (error) {}
  }

  function playVictory() {
    if (!state.soundEnabled) return;
    setTimeout(function () { playTone(true); }, 80);
    setTimeout(function () { playTone(true); }, 230);
    setTimeout(function () { playTone(true); }, 380);
  }

  function launchConfetti(symbols, amount) {
    for (var i = 0; i < amount; i += 1) {
      var particle = document.createElement("span");
      particle.className = "confetti";
      particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      particle.style.left = (Math.random() * 100) + "vw";
      particle.style.animationDelay = (Math.random() * 0.22) + "s";
      particle.style.animationDuration = (0.72 + Math.random() * 0.75) + "s";
      document.body.appendChild(particle);
      setTimeout((function (p) { return function () { p.remove(); }; })(particle), 1700);
    }
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    var old = document.querySelector(".toast");
    if (old) old.remove();
    var toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.textContent = message;
    document.body.appendChild(toast);
    toastTimer = setTimeout(function () { toast.remove(); }, 2800);
  }

  function renderFatalError(error) {
    var main = document.getElementById("app");
    if (!main) return;
    main.innerHTML = "<section class=\"panel\"><span class=\"eyebrow\">⚠️ Erro de inicialização</span><h1>A plataforma não conseguiu iniciar</h1><p>Abra o console do navegador para detalhes técnicos. Mensagem: " + escapeHTML(error && error.message ? error.message : String(error)) + "</p></section>";
  }

  function getTotals() {
    var phases = 0, questions = 0;
    GAME_DATA.subjects.forEach(function (s) { phases += s.phases.length; s.phases.forEach(function (p) { questions += p.questions.length; }); });
    return { subjects: GAME_DATA.subjects.length, phases: phases, questions: questions };
  }

  function getProfileName() {
    var name = progress && progress.profile && progress.profile.name ? progress.profile.name.trim() : "";
    return name || "Estudante";
  }

  function getProfileAvatar() {
    var avatar = progress && progress.profile && progress.profile.avatar ? progress.profile.avatar : "🚀";
    return AVATARS.indexOf(avatar) !== -1 ? avatar : "🚀";
  }

  function getSubject(id) {
    for (var i = 0; i < GAME_DATA.subjects.length; i += 1) if (GAME_DATA.subjects[i].id === id) return GAME_DATA.subjects[i];
    return GAME_DATA.subjects[0];
  }

  function getTotalAttempts() { return progress.attempts.length; }

  function getSubjectStats(subjectId) {
    var attempts = progress.attempts.filter(function (a) { return a.subjectId === subjectId; });
    var correct = attempts.filter(function (a) { return a.isCorrect; }).length;
    return { total: attempts.length, correct: correct, wrong: attempts.length - correct };
  }

  function isPhaseUnlocked(subjectId, phaseIndex) {
    if (phaseIndex <= 0) return true;
    for (var i = 0; i < phaseIndex; i += 1) {
      if (Number(progress.stars[subjectId + "::" + i] || 0) < 1) return false;
    }
    return true;
  }

  function getSubjectStars(subjectId) {
    var total = 0;
    Object.keys(progress.stars).forEach(function (key) { if (key.indexOf(subjectId + "::") === 0) total += Number(progress.stars[key] || 0); });
    return total;
  }

  function summarizeBy(attempts, field) {
    var result = {};
    attempts.forEach(function (item) {
      var key = item[field] || "Não informado";
      if (!result[key]) result[key] = { total: 0, correct: 0 };
      result[key].total += 1;
      if (item.isCorrect) result[key].correct += 1;
    });
    return result;
  }

  function calculateStars(score, total) {
    var pct = score / total;
    if (pct >= 0.9) return 3;
    if (pct >= 0.7) return 2;
    if (pct >= 0.5) return 1;
    return 0;
  }

  function statCard(value, label) {
    return "<div class=\"stat-card\"><strong>" + escapeHTML(value) + "</strong><span>" + escapeHTML(label) + "</span></div>";
  }

  function starsText(stars) { return "⭐".repeat(stars) + "☆".repeat(3 - stars); }

  function setBack(show) { backBtn.classList.toggle("hidden", !show); }

  function focusApp() { requestAnimationFrame(function () { app.focus({ preventScroll: true }); }); }

  function focusFirstOption() {
    requestAnimationFrame(function () {
      var first = document.querySelector(".option-button:not(:disabled)");
      if (first) first.focus({ preventScroll: true }); else focusApp();
    });
  }

  function isMostlyEmoji(value) {
    return String(value).length <= 6 || /[🍎⭐🌎📚🔬🤖🎨🏀🧠🚀]/.test(String(value));
  }

  function softColor(hex) {
    var clean = String(hex || "#5c6bc0").replace("#", "");
    if (clean.length !== 6) return "rgba(92,107,192,.16)";
    var r = parseInt(clean.slice(0, 2), 16);
    var g = parseInt(clean.slice(2, 4), 16);
    var b = parseInt(clean.slice(4, 6), 16);
    return "rgba(" + r + "," + g + "," + b + ",.16)";
  }

  function capitalize(text) {
    text = String(text);
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
})();
