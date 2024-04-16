/* Scroll Button */
window.addEventListener("scroll", function () {
  var topBtn = document.getElementById("topBtn");
  if (window.scrollY > 100) {
    // Altere 100 para a quantidade de scroll necessária
    topBtn.classList.add("active");
  } else {
    topBtn.classList.remove("active");
  }
});

/* Hamburguer Menu */

function showSidebar() {
  const sidebar = document.querySelector(".navItensContainerMobile");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".navItensContainerMobile");
  sidebar.style.display = "none";
}

/* Vertical Tabs  */

function openVerticalTabs(e, tabsId) {
  let i, optionsTabContent, optionsNavItem;

  optionsTabContent = document.getElementsByClassName("optionsTabContent");
  optionsNavItem = document.getElementsByClassName("optionsNavItem");

  for (i = 0; i < optionsTabContent.length; i++) {
    optionsTabContent[i].style.display = "none";
  }

  for (i = 0; i < optionsNavItem.length; i++) {
    optionsNavItem[i].className = optionsNavItem[i].className.replace(
      " active",
      ""
    );
  }

  document.getElementById(tabsId).style.display = "block";
  e.currentTarget.className += " active";
}

const tabsData = [
  {
    id: "defaultOpen",
    prop: "AboutUs",
    title: "Quem Somos",
    paragraph: `A Ammarhes Consultores em QSMS, criadora da plataforma, é uma empresa de consultoria sólida no mercado atuando há mais de 10 anos em todos os segmentos de Segurança e Saúde Ocupacional. <br><br> Vimos a necessidade de criação da nossa própria plataforma online para gestão de SMS de forma a atender da melhor maneira possível aos nossos clientes, cumprindo todas as exigências de mercado.<br><br> Trabalhamos com um sistema de controle online, disponibilizando acesso remoto aos itens contratados e eficiência a baixo custo. Temos solidez financeira, no ramo em que atuamos é fundamental a contratação de uma empresa consolidada e com tradição no mercado.`,
  },
  {
    prop: "History",
    title: "Nossa História",
    paragraph: `A Ammarhes nasceu como equipe de consultores especializados em Saúde Ocupacional, Meio Ambiente e Segurança do Trabalho, um grupo multidisciplinar que cresceu em direção ao desenvolvimento de sistemas de gestão, incorporando ao seu portifólio a Assessoria na aplicação de diversas Normas como as ISO 14001, ISO 9001, NBR 16001 e SA 8000. <br><br>Somos registrados no CREA, com emissão de ART (Anotação de Responsabilidade Técnica) nas atividades de Engenharia, com ênfase em Segurança do Trabalho e meio ambiente; e no CRM pelo Médico-Coordenador.`,
  },
  {
    prop: "Differential",
    title: "Nosso Diferencial",
    paragraph: `Graças a grande experiência adquirida pela empresa no ramo da consultoria de Saúde e Segurança do Trabalho a plataforma Agenda Técnica Sistemas pôde ser criada de forma intuitiva trazendo agilidade na criação e consulta de todo o conteúdo de gestão de SMS, além de vir pronta para atender as exigências do eSocial`,
  },
  {
    prop: "Proposal",
    title: "Nossa Proposta",
    paragraph: `A Agenda Técnica Sistemas tem como objetivo se tornar a solução completa e definitiva para a gestão de Saúde e Segurança do Trabalho. <br><br>Sendo acessível por qualquer dispositivo com acesso a internet, fica fácil e rápido ter acesso a todos os documentos importantes agilizando as tarefas do dia-a-dia e trazendo segurança e confiabilidade para as empresas diante do eSocial.`,
  },
  {
    prop: "LearnMore",
    title: "Veja Mais",
    paragraph: `Rápida, fácil e descomplicada! Trazendo tecnologia integrada a segurança, nossa plataforma se propõe a resolver todas as questões documentais da área de Saúde, Meio Ambiente e Segurança de maneira intuitiva e confiável. <br><br>Pois se baseia em tecnologia de inteligência artificial para montagem dos documentos, minimizando os erros comuns e tornando mais eficiente as confecções dos mesmos.`,
  },
];

const aboutUsOptions = document.getElementById("aboutUsOptions1");

const ul = document.createElement("ul");
ul.classList.add("optionsNav");

tabsData.forEach((data) => {
  const li = document.createElement("li");
  li.classList.add("optionsNavItem");
  li.setAttribute("id", `${data.id}`);
  li.textContent = data.title;
  li.setAttribute("onclick", `openVerticalTabs(event, '${data.prop}')`);
  ul.appendChild(li);
  aboutUsOptions.appendChild(ul);
});

/* TABS CONTENT */

const aboutUsTabs = document.getElementById("aboutUsTabs1");

const ulTabs = document.createElement("ul");

tabsData.forEach((data) => {
  const li = document.createElement("li");
  li.classList.add("optionsTabContent");
  li.setAttribute("id", `${data.prop}`);
  li.innerHTML = data.paragraph;
  ulTabs.appendChild(li);
  aboutUsTabs.appendChild(ulTabs);
});

/* GRID RECURSOS */

const gridRecursosData = [
  {
    icon: "bi bi-lightbulb",
    title: "Documentação",
    subTitle: "Geração De Documentos",
    paragraph: `Integra, desenha e estratifica riscos de forma a produzir todos os documentos
necessários da área de Saúde, Meio Ambiente e Segurança do Trabalho (PGR, Laudos e etc.) `,
  },
  {
    icon: "bi bi-lightbulb",
    title: "Colaboradores",
    subTitle: "Sintonia com E-social",
    paragraph:
      "Fácil guarda e gestão colaboradores. Acesso a todo o histórico de alterações de registros de um determinado funcionário, assim como as avaliações ambientais  feitas nele e prazos de documentos. ",
  },
  {
    icon: "bi bi-lightbulb",
    title: "Prazos",
    subTitle: "Controle de prazos",
    paragraph:
      "Acompanhamento de prazos de documentos e notificação próxima ao vencimento, evitando assim a aplicação de multas.",
  },
  {
    icon: "bi bi-lightbulb",
    title: "PPP",
    subTitle: "geração de ppp",
    paragraph:
      "Imediata geração de PPP (Perfil Profissiográfico Previdenciário) para um funcionário. Fácil criação, edição e acompanhamento de documentos importantes.",
  },
  {
    icon: "bi bi-lightbulb",
    title: "Qualidade",
    subTitle: "Gestão de qualidade Total",
    paragraph:
      "Ajuda e propõe a estabelecer produtos de SMS e itens de controle pelo método da Gestão da Qualidade Total.",
  },
  {
    icon: "bi bi-lightbulb",
    title: "Acompanhamento",
    subTitle: "Dashboards eficientes ",
    paragraph:
      'Nossa "Dashboard"(Tela inicial) é adaptada a monitorar apenas as informações escolhidas como pertinentes pelo usuário.',
  },
];

const gridRecursosContainer = document.getElementById("gridRecursosContainer");

gridRecursosData.forEach((data) => {
  const gridRecursosItem = document.createElement("div");
  gridRecursosItem.classList.add("gridRecursosItem");

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("gridRecursosTitle");

  const icon = document.createElement("span");
  icon.innerHTML = `<i class="${data.icon}"></i>`;

  const title = document.createElement("h3");
  title.textContent = data.title;

  titleContainer.appendChild(icon);
  titleContainer.appendChild(title);

  const subTitle = document.createElement("span");
  subTitle.classList.add("gridRecursosSubTitle");
  subTitle.textContent = data.subTitle;

  const content = document.createElement("div");
  content.classList.add("gridRecursosContentText");

  const paragraph = document.createElement("p");
  paragraph.textContent = data.paragraph;

  content.appendChild(paragraph);

  gridRecursosItem.appendChild(titleContainer);
  gridRecursosItem.appendChild(subTitle);
  gridRecursosItem.appendChild(content);

  gridRecursosContainer.appendChild(gridRecursosItem);
});
document.getElementById("defaultOpen").click();

/* GRID DOCS */

const gridDocsData = [
  {
    icon: "bi bi-file-earmark-medical-fill",
    title: "PPRA",
    text: "Utilize o documento base do PPRA (tradicional ou com validação para o eSocial), fazendo o mapeamento de riscos, cronogramas de atividades e medições para determinar medidas de segurança.",
  },
  {
    icon: "bi bi-file-earmark-medical-fill",
    title: "LTCAT",
    text: "Analise o LTCAT individualmente ou coletivamente, documentando se há a necessidade ou não de aposentadoria especial de acordo com a periodicidade de exposição ao agente nocivo.",
  },
  {
    icon: "bi bi-file-earmark-medical-fill",
    title: "PCMAT",
    text: "Defina uma série de ações e medidas de segurança a serem adotadas durante o desenvolvimento da obra, visando antecipar os riscos por etapa e implementar medidas preventivas adequadas.",
  },
  {
    icon: "bi bi-file-earmark-medical-fill",
    title: "PPP",
    text: "Imediata geração de PPP (Perfil Profissiográfico Previdenciário) para um funcionário. Fácil criação, edição e acompanhamento de documentos importantes.",
  },
  {
    icon: "bi bi-file-earmark-medical-fill",
    title: "Ordens de serviço",
    text: "Elabore ordens de serviço sobre segurança e saúde no trabalho, dando ciência aos empregados por comunicados, cartazes ou meios eletrônicos dos riscos e perigos das tarefas a serem executadas.",
  },
  {
    icon: "bi bi-file-earmark-medical-fill",
    title: "PGR",
    text: "Formule e implante medidas e procedimentos, técnicos e administrativos, para prevenir riscos e manter as instalações operando dentro de padrões de segurança considerados eficazes.",
  },
  {
    icon: "bi bi-file-earmark-medical-fill",
    title: "CAT",
    text: "A Comunicação de Acidente de Trabalho deve ser emitida pela empresa para registrar um caso de acidente de trabalho ou doença ocupacional. A emissão da CAT é muito importante para que empresa e governo assumam suas responsabilidades e para que o trabalhador garanta seus direitos.",
  },
  {
    icon: "bi bi-file-earmark-medical-fill",
    title: "Outros documentos",
    text: "a plataforma possui controles de segurança específicos para a gestão ocupacional da sua empresa a fim de identificar os riscos e prevenir acidentes, e doenças, garantindo a integridade física dos colaboradores.",
  },
];

const gridDocsContainer = document.getElementById("gridDocsContainer");

gridDocsData.forEach((data) => {
  const gridDocsItem = document.createElement("div");
  gridDocsItem.classList.add("gridDocsItem");

  const icon = document.createElement("span");
  icon.innerHTML = `<i class="${data.icon}"></i>`;

  const title = document.createElement("p");
  title.classList.add("gridDocsItemTitle");
  title.textContent = data.title;

  const paragraph = document.createElement("p");
  paragraph.classList.add("gridDocsItemParagraph");
  paragraph.textContent = data.text;

  gridDocsItem.appendChild(icon);
  gridDocsItem.appendChild(title);
  gridDocsItem.appendChild(paragraph);

  gridDocsContainer.appendChild(gridDocsItem);
});

/* PLATAFORM */

const plataformData = [
  {
    icon: "bi bi-file-earmark-medical-fill",
    title: "PCMSO",
    text: "Anotação de responsabilidade técnica",
  },
  {
    icon: "bi bi-search",
    title: "PGR",
    text: "Elaboração de mapa de risco para fácil visualização das exposições nos ambientes",
  },
  {
    icon: "bi bi-map",
    title: "EPC",
    text: "Gerenciamento de equipamentos de proteção coletiva, assim como medidas mitigadoras para melhora da segurança",
  },
  {
    icon: "bi bi-graph-up",
    title: "Indicadores",
    text: "Crie e gerencie indicadores importantes para acompanhamento",
  },
];

const plataformContainer = document.getElementById("gridsPlataformaContainer");

plataformData.forEach((data) => {
  const gridsPlataformaItem = document.createElement("div");
  gridsPlataformaItem.classList.add("gridsPlataformaItem");

  const icon = document.createElement("span");
  icon.innerHTML = `<i class="${data.icon}"></i>`;

  const title = document.createElement("p");
  title.classList.add("gridsPlataformaItemTitle");
  title.textContent = data.title;

  const paragraph = document.createElement("p");
  paragraph.classList.add("gridsPlataformaItemParagraph");
  paragraph.textContent = data.text;

  gridsPlataformaItem.appendChild(icon);
  gridsPlataformaItem.appendChild(title);
  gridsPlataformaItem.appendChild(paragraph);

  plataformContainer.appendChild(gridsPlataformaItem);
});

/* SLIDER */

const sliderData = [
  {
    title: "Entrega de EPI",
    pContent: `Em conformidade com a Norma Regulamentadora 6 do
  MTE (Ministério do Trabalho e Emprego), a plataforma consegue executar a gestão de
  Equipamentos de Proteção Individuais com seus dados mais importantes: <br> <br>
  cadastros,
  características, prazos de entrega, reposição e compra, além da validade de
  vencimento e
  certificado de aprovação (CA).
  <br> <br>Desta forma, os gestores e colaboradores serão notificados evitando assim
  quaisquer
  problemas com segurança e documentação.
  <br> <br>A plataforma ainda conta com módulo de gestão de EPI por biometria
  garantindo
  segurança e agilidade com os colaboradores.`,
    id: "imgEPI",
  },
  {
    title: "Exposição dos riscos GHE",
    pContent: `A plataforma, através da sua guia de GHE (Grupo Homogêneo de
    Exposição), mapeia os riscos de mesmo grau aos colaboradores, gerando assim um grupo
    onde eles estão expostos a um risco comum.
    <br> <br> Dessa forma é possível organizar gerir as
    avaliações ambientais e exames que deverão ser feitos nesses grupos de maneira mais
    fácil, assim como seu acompanhamento.
    <br> <br>Com esse procedimento fica mais simples para determinar e adotar medidas de
    prevenção de acidentes de trabalho nos grupos de exposição comuns, assim como
    avaliar e
    acompanhar a evolução dos valores encontrados nas avaliações e na saúde dos
    colaboradores.`,
    id: "imgRiscos",
  },
  {
    title: "Relatório",
    pContent: `Gere relatórios de maneira fácil e descomplicada, além de
  criar
  indicadores necessários para acompanhamentos específicos de dados. <br><br>
  O usuário pode fazer o download dos relatórios gerados em PDF.
`,
    id: "imgRelatorio",
  },
];

const sliderContainer = document.getElementById("slider");

sliderData.forEach((data) => {
  const sliderImage = document.createElement("li");
  sliderImage.classList.add("sliderImage");
  sliderImage.id = data.id;

  const background = document.createElement("div");
  background.classList.add("background");

  const backgroundContent = document.createElement("div");
  backgroundContent.classList.add("backgroundContent");

  const sliderTitle = document.createElement("h2");
  sliderTitle.classList.add("sliderTitle");
  sliderTitle.textContent = data.title;

  const sliderParagraph = document.createElement("p");
  sliderParagraph.classList.add("sliderParagraph");
  sliderParagraph.innerHTML = data.pContent;

  backgroundContent.appendChild(sliderTitle);
  backgroundContent.appendChild(sliderParagraph);
  background.appendChild(backgroundContent);
  sliderImage.appendChild(background);

  sliderContainer.appendChild(sliderImage);
});

/* FORM */

function handleRecaptcha() {
  let button = document.getElementById("submitButton");
  button.disabled = false;
  button.classList.remove("disabled");
}
