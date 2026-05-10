# Plataforma da Flávia — 6º Ano

A **Plataforma da Flávia — 6º Ano** é uma aplicação educacional interativa desenvolvida com **HTML5, CSS3 e JavaScript puro**, criada para auxiliar estudantes do **6º ano do Ensino Fundamental** na revisão, prática e consolidação de conteúdos escolares por meio de uma experiência gamificada, responsiva e intuitiva.

O projeto foi desenvolvido com foco em aprendizagem, autonomia, acompanhamento familiar e uso em diferentes dispositivos, como **celulares, tablets, notebooks, desktops e Smart TVs**.

---

## Visão Geral

A plataforma funciona como um ambiente de estudos gamificado, no qual a estudante pode escolher uma disciplina, avançar por fases, responder questões, acumular estrelas e acompanhar seu desempenho por meio de um relatório pedagógico.

A aplicação foi pensada especialmente para a estudante **Flávia**, mas pode ser reutilizada por outros alunos, famílias, professores e colegas, bastando acessar o link publicado no GitHub Pages.

---

## Objetivo do Projeto

O objetivo principal da plataforma é oferecer uma ferramenta de estudo divertida, organizada e acessível para reforçar conteúdos do 6º ano do Ensino Fundamental.

A proposta é permitir que a estudante:

- revise conteúdos escolares de forma interativa;
- pratique questões de diferentes disciplinas;
- avance progressivamente por fases;
- receba feedback imediato após cada resposta;
- acompanhe seus acertos, erros e pontos de melhoria;
- estude em casa, na escola ou em atividades complementares;
- utilize a plataforma em diferentes dispositivos.

---

## Público-Alvo

A plataforma foi desenvolvida para:

- estudantes do 6º ano do Ensino Fundamental;
- pais e responsáveis que desejam acompanhar os estudos;
- professores que desejam utilizar uma ferramenta de apoio em sala;
- colegas da estudante que queiram praticar os conteúdos;
- projetos escolares, reforço pedagógico e estudos em grupo.

---

## Tecnologias Utilizadas

O projeto utiliza tecnologias web simples e amplamente compatíveis.

- **HTML5** — estrutura da aplicação;
- **CSS3** — layout, responsividade, animações e identidade visual;
- **JavaScript puro** — lógica do jogo, perguntas, fases, pontuação e relatório;
- **LocalStorage** — armazenamento local de progresso e perfil;
- **SpeechSynthesis API** — leitura por voz, quando suportada pelo navegador;
- **Fullscreen API** — modo tela cheia, útil para Smart TVs e apresentações.

Não há dependência de frameworks externos.

---

## Principais Funcionalidades

A plataforma conta com:

- seleção de disciplinas;
- 14 disciplinas cadastradas;
- 10 fases por disciplina;
- 15 questões por fase;
- 150 questões por disciplina;
- 2.100 questões no total;
- sistema de estrelas;
- desbloqueio progressivo das fases;
- apenas a primeira fase de cada disciplina liberada inicialmente;
- campo para inserir o nome da estudante;
- escolha de avatar;
- salvamento automático do perfil;
- salvamento automático do progresso;
- relatório pedagógico com acertos, erros e pontos de melhoria;
- feedback imediato após cada resposta;
- leitura de perguntas por voz;
- botão para ativar ou desativar som e leitura por voz;
- botão de tela cheia;
- navegação por mouse, toque, teclado ou controle remoto;
- layout responsivo para celular, tablet, notebook, desktop e Smart TV;
- botão para reiniciar progresso.

---

## Disciplinas Disponíveis

A plataforma contempla as seguintes disciplinas:

1. Português
2. Redação
3. Matemática
4. Pensamento Computacional
5. Informática
6. Robótica
7. Fundamentos da Programação
8. Raciocínio Lógico
9. Ciências
10. História
11. Geografia
12. Inglês
13. Arte
14. EMA — Esportes, Músicas e Arte

---

## Quantidade de Conteúdo

Cada disciplina possui:

- 10 fases;
- 15 questões por fase;
- 150 questões no total.

Como a plataforma possui 14 disciplinas, o total geral é:

```txt
14 disciplinas × 10 fases × 15 questões = 2.100 questões
```

---

## Estrutura de Progressão

A plataforma utiliza uma lógica de progressão por fases.

Ao iniciar, apenas a **Fase 1** de cada disciplina está liberada.

Para desbloquear a próxima fase, a estudante precisa concluir a fase atual e conquistar pelo menos **1 estrela**.

Esse sistema incentiva o avanço gradual, evitando que a estudante pule etapas importantes do aprendizado.

---

## Sistema de Estrelas

O desempenho em cada fase é convertido em estrelas.

| Aproveitamento | Estrelas |
|---|---|
| 90% ou mais | 3 estrelas |
| 70% a 89% | 2 estrelas |
| 50% a 69% | 1 estrela |
| Abaixo de 50% | 0 estrelas |

Para desbloquear a próxima fase, é necessário conquistar pelo menos **1 estrela**.

---

## Perfil da Estudante

A plataforma permite que a estudante personalize sua experiência informando:

- nome;
- avatar.

Essas informações são salvas no navegador e utilizadas na interface e no relatório pedagógico.

Esse recurso torna a experiência mais pessoal, acolhedora e motivadora.

---

## Relatório Pedagógico

A plataforma possui um botão de relatório que apresenta um resumo do desempenho da estudante.

O relatório inclui:

- nome da estudante;
- avatar selecionado;
- total de questões respondidas;
- total de acertos;
- total de erros;
- percentual de aproveitamento;
- resumo por disciplina;
- pontos que precisam ser melhorados;
- lista de erros recentes;
- sugestões de revisão.

Esse relatório pode ser utilizado por pais, responsáveis ou professores para acompanhar a evolução da estudante.

---

## Responsividade

A aplicação foi desenvolvida para funcionar em diferentes tamanhos de tela.

Cenários contemplados:

- celular;
- tablet;
- notebook;
- desktop;
- Smart TV.

A interface adapta automaticamente:

- tamanho dos textos;
- distribuição dos cards;
- espaçamento entre alternativas;
- tamanho dos botões;
- organização das fases;
- visualização do relatório;
- navegação por controle remoto ou teclado.

---

## Acessibilidade e Usabilidade

A plataforma foi construída com atenção à usabilidade e acessibilidade.

Recursos presentes:

- botões grandes;
- bom contraste visual;
- textos legíveis;
- interface intuitiva;
- leitura por voz das perguntas;
- navegação por teclado;
- suporte a controle remoto em Smart TV;
- botão de tela cheia;
- feedback visual imediato;
- mensagens claras de erro e acerto;
- fases bloqueadas com indicação visual.

---

## Botão de Som

A plataforma possui um botão de som no canto superior da tela.

Quando o som é desativado:

- os efeitos sonoros são bloqueados;
- a leitura por voz é cancelada;
- novas leituras por voz não são executadas.

Quando o som é ativado novamente, os recursos sonoros voltam a funcionar normalmente, desde que o navegador ofereça suporte.

---

## Botão de Tela Cheia

A plataforma possui um botão de tela cheia, útil principalmente para:

- Smart TVs;
- apresentações em sala;
- uso em projetores;
- atividades com professores;
- estudos em ambiente familiar.

Esse recurso utiliza a API nativa de tela cheia do navegador.

---

## Estrutura do Projeto

A estrutura da última versão do projeto é simples e adequada para publicação no GitHub Pages.

```txt
plataforma-6ano-v2/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Descrição dos Arquivos

| Arquivo | Descrição |
|---|---|
| `index.html` | Estrutura principal da aplicação. |
| `style.css` | Estilos visuais, responsividade, animações e layout. |
| `script.js` | Lógica da plataforma, disciplinas, fases, questões, pontuação, perfil e relatório. |
| `README.md` | Documentação completa do projeto. |

---

## Como Executar Localmente

Para executar o projeto no computador, basta abrir o arquivo `index.html` em um navegador moderno.

### Opção 1 — Abrir diretamente

1. Baixe ou clone o projeto.
2. Abra a pasta do projeto.
3. Dê dois cliques no arquivo `index.html`.

---

### Opção 2 — Usar o Live Server no VS Code

Recomendado para desenvolvimento.

1. Abra a pasta do projeto no Visual Studio Code.
2. Instale a extensão **Live Server**.
3. Clique com o botão direito no arquivo `index.html`.
4. Selecione **Open with Live Server**.

---

## Como Publicar no GitHub Pages

Como o projeto usa apenas HTML, CSS e JavaScript, ele pode ser publicado gratuitamente no GitHub Pages.

### 1. Criar um repositório no GitHub

Crie um repositório com um nome como:

```txt
plataforma-flavia-6ano
```

---

### 2. Enviar os arquivos para o GitHub

No terminal, dentro da pasta do projeto, execute:

```bash
git init
git add .
git commit -m "Versão inicial da Plataforma da Flávia 6º Ano"
git branch -M main
git remote add origin https://github.com/seu-usuario/plataforma-flavia-6ano.git
git push -u origin main
```

Substitua `seu-usuario` pelo seu usuário do GitHub.

---

### 3. Ativar o GitHub Pages

No GitHub:

1. Acesse o repositório.
2. Clique em **Settings**.
3. Acesse a opção **Pages**.
4. Em **Branch**, selecione `main`.
5. Em pasta, selecione `/root`.
6. Clique em **Save**.

Após alguns instantes, o GitHub irá gerar um link público para acessar a plataforma.

---

## Como Usar a Plataforma

1. Abra a plataforma no navegador.
2. Insira o nome da estudante.
3. Escolha um avatar.
4. Selecione uma disciplina.
5. Comece pela Fase 1.
6. Responda às questões.
7. Ao final da fase, veja a pontuação.
8. Conquiste estrelas para desbloquear novas fases.
9. Acesse o relatório para acompanhar o desempenho.

---

## Funcionamento das Fases

Cada fase possui 15 questões.

Após responder uma questão, a plataforma informa se a resposta está correta ou incorreta.

Ao final da fase, o sistema calcula:

- quantidade de acertos;
- quantidade de erros;
- percentual de aproveitamento;
- quantidade de estrelas conquistadas.

Se a estudante conquistar pelo menos 1 estrela, a próxima fase da mesma disciplina será desbloqueada.

---

## Salvamento de Progresso

A plataforma usa `localStorage` para salvar informações diretamente no navegador.

São salvos:

- nome da estudante;
- avatar escolhido;
- fases liberadas;
- estrelas conquistadas;
- melhores desempenhos;
- histórico de respostas;
- dados usados no relatório.

Importante: como o progresso é salvo no navegador, se a estudante usar outro computador ou limpar os dados do navegador, o progresso poderá ser reiniciado.

---

## Reiniciar Progresso

A plataforma possui um botão para reiniciar o progresso.

Ao utilizar essa opção, os dados salvos no navegador são apagados, incluindo:

- progresso das fases;
- estrelas conquistadas;
- histórico de acertos e erros;
- relatório acumulado.

Esse recurso é útil para recomeçar os estudos ou testar a aplicação novamente.

---

## Conteúdos Trabalhados

A plataforma aborda conteúdos gerais das disciplinas do 6º ano.

### Português

- leitura e interpretação;
- classes de palavras;
- ortografia;
- pontuação;
- sinônimos e antônimos;
- tipos de frase;
- compreensão textual.

### Redação

- estrutura textual;
- introdução, desenvolvimento e conclusão;
- coerência;
- coesão;
- organização de ideias;
- gêneros textuais;
- revisão textual.

### Matemática

- operações básicas;
- frações;
- números naturais;
- expressões numéricas;
- problemas matemáticos;
- geometria;
- medidas;
- raciocínio quantitativo.

### Pensamento Computacional

- decomposição;
- padrões;
- abstração;
- algoritmos;
- sequência lógica;
- resolução de problemas.

### Informática

- hardware;
- software;
- sistemas operacionais;
- internet;
- segurança digital;
- arquivos e pastas;
- ferramentas digitais.

### Robótica

- sensores;
- atuadores;
- motores;
- lógica de funcionamento;
- automação;
- montagem;
- resolução de problemas.

### Fundamentos da Programação

- variáveis;
- comandos;
- condicionais;
- laços;
- entrada e saída;
- lógica de programação;
- algoritmos simples.

### Raciocínio Lógico

- sequências;
- padrões;
- dedução;
- comparação;
- lógica verbal;
- lógica matemática;
- problemas de raciocínio.

### Ciências

- seres vivos;
- corpo humano;
- ecossistemas;
- matéria e energia;
- água;
- solo;
- saúde;
- meio ambiente.

### História

- fontes históricas;
- tempo histórico;
- sociedades antigas;
- cultura;
- cidadania;
- memória;
- transformações sociais.

### Geografia

- mapas;
- paisagens;
- espaço geográfico;
- clima;
- relevo;
- população;
- localização;
- meio ambiente.

### Inglês

- vocabulário básico;
- números;
- cores;
- objetos;
- saudações;
- animais;
- leitura simples;
- compreensão de frases.

### Arte

- cores;
- formas;
- artistas;
- linguagem visual;
- música;
- teatro;
- dança;
- expressão artística.

### EMA — Esportes, Músicas e Arte

- esportes;
- ritmos;
- instrumentos musicais;
- expressão corporal;
- cultura;
- criatividade;
- trabalho em equipe.

---

## Boas Práticas Utilizadas

O projeto foi desenvolvido considerando:

- simplicidade de uso;
- interface amigável;
- responsividade;
- organização do código;
- feedback pedagógico imediato;
- progressão por fases;
- gamificação;
- compatibilidade com GitHub Pages;
- uso sem necessidade de instalação;
- compatibilidade com navegadores modernos.

---

## Requisitos

Não é necessário instalar dependências.

Para executar, é necessário apenas:

- navegador moderno;
- suporte a HTML5;
- suporte a CSS3;
- suporte a JavaScript;
- suporte opcional a leitura por voz;
- suporte opcional a tela cheia.

Navegadores recomendados:

- Google Chrome;
- Microsoft Edge;
- Mozilla Firefox;
- Safari;
- navegadores de Smart TV compatíveis com JavaScript moderno.

---

## Checklist de Testes

Antes de publicar o projeto, recomenda-se testar:

- [ ] abertura do `index.html`;
- [ ] carregamento do CSS;
- [ ] carregamento do JavaScript;
- [ ] exibição da tela inicial;
- [ ] inserção do nome da estudante;
- [ ] escolha de avatar;
- [ ] seleção de disciplina;
- [ ] bloqueio das fases após a Fase 1;
- [ ] desbloqueio progressivo das fases;
- [ ] funcionamento das alternativas;
- [ ] espaçamento correto entre respostas;
- [ ] cálculo de acertos;
- [ ] cálculo de erros;
- [ ] cálculo das estrelas;
- [ ] funcionamento do relatório;
- [ ] funcionamento do botão de som;
- [ ] funcionamento da leitura por voz;
- [ ] funcionamento do modo tela cheia;
- [ ] funcionamento no celular;
- [ ] funcionamento no tablet;
- [ ] funcionamento no notebook;
- [ ] funcionamento no desktop;
- [ ] funcionamento em Smart TV ou tela grande;
- [ ] publicação no GitHub Pages.

---

## Possíveis Melhorias Futuras

Algumas possibilidades de evolução da plataforma:

- cadastro manual de novas questões;
- painel administrativo para professores;
- exportação do relatório em PDF;
- ranking de desempenho;
- modo revisão;
- banco de questões por dificuldade;
- sistema de login;
- múltiplos perfis de estudantes;
- sincronização em nuvem;
- integração com banco de dados;
- versão PWA para uso offline;
- narração mais completa;
- trilhas personalizadas por dificuldade;
- relatório por período;
- compartilhamento do resultado com responsáveis;
- versão com backend para escolas.

---

## Limitações Atuais

A versão atual salva os dados localmente no navegador.

Isso significa que:

- o progresso não é compartilhado entre dispositivos diferentes;
- limpar os dados do navegador pode apagar o progresso;
- ainda não há login individual com conta;
- ainda não há banco de dados online;
- o relatório fica restrito ao navegador usado pela estudante.

Essas limitações podem ser resolvidas em versões futuras com backend e banco de dados.

---

## Sugestão de Uso Pedagógico

A plataforma pode ser utilizada de diferentes formas:

- estudo individual em casa;
- revisão antes de provas;
- reforço escolar;
- atividades de férias;
- estudo acompanhado pelos pais;
- desafios semanais;
- prática em sala de aula;
- atividades em Smart TV com orientação do professor;
- uso em laboratório de informática;
- projeto interdisciplinar.

Uma sugestão de uso é trabalhar uma ou duas fases por semana, acompanhando o relatório para identificar os conteúdos que precisam de revisão.

---

## Licença

Este projeto pode ser utilizado para fins educacionais, familiares e escolares.

Sugestão de licença:

```txt
MIT License
```

---

## Autor

Projeto desenvolvido para fins educacionais, com foco em apoio ao aprendizado de estudantes do 6º ano do Ensino Fundamental.

```txt
Professor/Desenvolvedor: Jailson Costa dos Santos
Projeto: Plataforma da Flávia — 6º Ano
Tecnologias: HTML5, CSS3 e JavaScript
```

---

## Status do Projeto

```txt
Status: funcional
Versão: Plataforma da Flávia — 6º Ano v2
Disciplinas: 14
Fases por disciplina: 10
Questões por fase: 15
Questões por disciplina: 150
Total de questões: 2.100
Responsividade: Mobile, Tablet, Notebook, Desktop e Smart TV
Publicação recomendada: GitHub Pages
```

---

## Considerações Finais

A **Plataforma da Flávia — 6º Ano** foi criada para tornar o estudo mais leve, organizado e motivador.

Com uma proposta gamificada, visual amigável, progressão por fases, relatório pedagógico e suporte a diferentes dispositivos, a plataforma pode ajudar estudantes a revisarem conteúdos importantes ao longo do ano letivo.

Além de apoiar a Flávia em sua jornada escolar, o projeto também pode ser compartilhado com colegas, famílias e professores, contribuindo para uma aprendizagem mais participativa, divertida e acessível.
