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

/* TABS OPTIONS */

const tabsData = [
  {
    id: "defaultOpen",
    prop: "AboutUs",
    title: "Quem Somos",
    paragraph:
      "A Ammarhes Consultores em QSMS, criadora da plataforma, é uma empresa de consultoria sólida no mercado atuando há mais de 10 anos em todos os segmentos de Segurança e Saúde Ocupacional. Vimos a necessidade de criação da nossa própria plataforma online para gestão de SMS de forma a atender da melhor maneira possível aos nossos clientes, cumprindo todas as exigências de mercado. Trabalhamos com um sistema de controle online, disponibilizando acesso remoto aos itens contratados e eficiência a baixo custo. Temos solidez financeira, no ramo em que atuamos é fundamental a contratação de uma empresa consolidada e com tradição no mercado.",
  },
  {
    prop: "History",
    title: "Nossa História",
    paragraph:
      "A Ammarhes nasceu como equipe de consultores especializados em Saúde Ocupacional, Meio Ambiente e Segurança do Trabalho, um grupo multidisciplinar que cresceu em direção ao desenvolvimento de sistemas de gestão, incorporando ao seu portifólio a Assessoria na aplicação de diversas Normas como as ISO 14001, ISO 9001, NBR 16001 e SA 8000. Somos registrados no CREA, com emissão de ART (Anotação de Responsabilidade Técnica) nas atividades de Engenharia, com ênfase em Segurança do Trabalho e meio ambiente; e no CRM pelo Médico-Coordenador.",
  },
  {
    prop: "Differential",
    title: "Nosso Diferencial",
    paragraph:
      "Graças a grande experiência adquirida pela empresa no ramo da consultoria de Saúde e Segurança do Trabalho a plataforma Agenda Técnica Sistemas pôde ser criada de forma intuitiva trazendo agilidade na criação e consulta de todo o conteúdo de gestão de SMS, além de vir pronta para atender as exigências do eSocial",
  },
  {
    prop: "Proposal",
    title: "Nossa Proposta",
    paragraph:
      "Graças a grande experiência adquirida pela empresa no ramo da consultoria de Saúde e Segurança do Trabalho a plataforma Agenda Técnica Sistemas pôde ser criada de forma intuitiva trazendo agilidade na criação e consulta de todo o conteúdo de gestão de SMS, além de vir pronta para atender as exigências do eSocial.",
  },
  {
    prop: "LearnMore",
    title: "Veja Mais",
    paragraph:
      "Rápida, fácil e descomplicada! Trazendo tecnologia integrada a segurança, nossa plataforma se propõe a resolver todas as questões documentais da área de Saúde, Meio Ambiente e Segurança de maneira intuitiva e confiável. Pois se baseia em tecnologia de inteligência artificial para montagem dos documentos, minimizando os erros comuns e tornando mais eficiente as confecções dos mesmos.",
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
  li.textContent = data.paragraph;
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
