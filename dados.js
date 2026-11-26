/* =====================================================================
   ONBOARDING DBVO — CONTEÚDO
   Edite só este arquivo para mudar textos, etapas, guia e links. Mantenha aspas e vírgulas.
   ===================================================================== */
window.ONBOARDING_APP = {
  site: "https://grupodbvo.sharepoint.com",
  chamado: "https://pdedbvo.github.io/CentralDeServicos/",

  /* Firebase do SharePoint/Estúdio (sharepoint-studio). A chave web do Firebase é pública por natureza;
     quem protege os dados são as regras do Firestore (ver LEIAME.md). */
  firebase: { apiKey: "AIzaSyA1w_OOq478oTeTzebdaL29oCnvwFwWW3g", authDomain: "sharepoint-studio.firebaseapp.com", projectId: "sharepoint-studio" },

    contato: "mailto:sergio.f@edificabpo.com.br?subject=Onboarding",

    /* Formulários (Microsoft Forms, link de resposta) */
    forms: {
      f45: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=Dv6bV4BJbUa_OtT_WNgp2tgP6gZC-bNHhwHA3zbQKr1URVVTVTAwVFdJTVNXVDhESThZQlhNUE9DQy4u",
      f90: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=Dv6bV4BJbUa_OtT_WNgp2tgP6gZC-bNHhwHA3zbQKr1UOUs3SFZGWVZPWk1aVEYzOEFaMjQzS0tLSy4u",
      deslig: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=Dv6bV4BJbUa_OtT_WNgp2tgP6gZC-bNHhwHA3zbQKr1UM1BGWTNLSVVXRUc3SERMOEE3TTFESEpaTy4u"
    },

    /* Jornada: as 9 etapas. ancora = etapa com conteúdo nesta página */
    jornada: [
      { t: "Recrutamento", ancora: "on-rs" },
      { t: "Seleção", ancora: "on-rs" },
      { t: "Onboarding", ancora: "on-guia" },
      { t: "Desenvolvimento" },
      { t: "Engajamento" },
      { t: "Desempenho" },
      { t: "Carreira e sucessão" },
      { t: "Reconhecimento" },
      { t: "Desligamento", ancora: "on-forms" }
    ],

    /* Recrutamento e seleção: etapas por nível (ordem das imagens da Jornada do Colaborador) */
    rs: {
      colunas: ["Captação de CV", "Seleção de CV", "1ª etapa", "2ª etapa", "3ª etapa"],
      tipos: [
        { id: "adm", nome: "Administrativo", niveis: [
          { nivel: "Estratégico", cargos: "Gerente e coordenador",
            etapas: ["Gestor + RH", "RH + Diretoria / Head", "Entrevista líder + RH", "Referência profissional", "Entrevista comitê"] },
          { nivel: "Tático", cargos: "Analista e especialista",
            etapas: ["Gestor + RH", "RH + Head / TL / SL", "Formulário / teste de perfil / teste de hard skills", "Entrevista líder + RH", "Referência profissional"] },
          { nivel: "Operacional", cargos: "Assistente, auxiliar e estagiário",
            etapas: ["Gestor + RH", "RH + TL / SL", "Formulário / teste de perfil / teste de hard skills", "Entrevista líder + RH", ""] }
        ] },
        { id: "obras", nome: "Obras", niveis: [
          { nivel: "Estratégico", cargos: "Engenheiro residente e mestre de obra",
            etapas: ["Líderes + RH", "RH + Head / Eng. residente", "Entrevista líder / Head + RH", "Visita em obra", "Referência profissional"] },
          { nivel: "Tático", cargos: "Analista e estagiário",
            etapas: ["Líderes + RH", "RH + Head / Eng. residente", "Entrevista líder + RH", "Visita em obra", ""] },
          { nivel: "Operacional", cargos: "Encarregado, profissional, meio-profissional e ajudante",
            etapas: ["RH + Adm. obra", "RH + Adm. obra", "Entrevista mestre / encarregado", "", ""] }
        ] }
      ]
    },

    /* Guia padrão de onboarding. É o mesmo modelo usado na agenda de cada pessoa.
       id: não mude depois de publicado (a agenda grava por id) · antes: dias antes do início
       dia: dia útil do onboarding (1 = data de início) · dias: dias corridos depois do início
       h: horário · resp: responsável · fac: facilitador · obs: observação
       reg: campos de registro na agenda · form: f45 | f90 */
    fases: [
      { id: "antes", t: "Antes do dia 1", sub: "Preparação", itens: [
        { id: "notebook", antes: 15, q: "15 dias antes", t: "Locação de notebook e compra de periféricos (conforme acordo)", resp: "RH" },
        { id: "boasvindas", antes: 7, q: "1 semana antes", t: "Mensagem de boas-vindas no WhatsApp", resp: "Líder direto" },
        { id: "materiais", antes: 7, q: "1 semana antes", t: "Envio de materiais e temas da função", resp: "Líder direto" },
        { id: "email", antes: 1, q: "1 dia antes", t: "Usuário Microsoft (e-mail)", resp: "RH", obs: "Pedir ao CSUM pela Central de Serviços", reg: ["E-mail criado"] },
        { id: "uau", antes: 1, q: "1 dia antes", t: "Usuário UAU", resp: "RH", obs: "Pedir ao CSUM pela Central de Serviços" },
        { id: "softwares", antes: 1, q: "1 dia antes", t: "Usuários dos softwares do setor", resp: "Líder direto" }
      ] },
      { id: "d1", t: "Dia 1", sub: "Boas-vindas", itens: [
        { id: "institucional", dia: 1, h: "09:00–11:00", t: "Apresentação institucional", resp: "RH", fac: "RH" },
        { id: "sharepoint", dia: 1, h: "11:00–12:00", t: "Treinamento de SharePoint", resp: "RH", fac: "Líder direto" },
        { id: "almoco-equipe", dia: 1, h: "12:00–14:00", t: "Almoço com a equipe", resp: "Líder direto" },
        { id: "produtos-marcas", dia: 1, h: "14:00–16:00", t: "Onboarding de produtos e marcas", resp: "Líder direto", fac: "Mari's + Gabriel", obs: "Marcar com o Gabriel" },
        { id: "visita-deodoro", dia: 1, h: "16:00–17:00", t: "Visita ao BE Deodoro", resp: "Líder direto", fac: "Mari Miyamoto" }
      ] },
      { id: "d2", t: "Dia 2", sub: "Obras", itens: [
        { id: "obra1", dia: 2, h: "09:00–10:30", t: "Visita à obra 1", resp: "Líder direto", fac: "Eng. residente + TST" },
        { id: "obra2", dia: 2, h: "10:30–12:00", t: "Visita à obra 2", resp: "Líder direto", fac: "Eng. residente + TST" },
        { id: "almoco-lider", dia: 2, h: "12:00–14:00", t: "Almoço com o líder direto", resp: "Líder direto" },
        { id: "obra3", dia: 2, h: "14:00–15:30", t: "Visita à obra 3", resp: "Líder direto", fac: "Eng. residente + TST" },
        { id: "obra4", dia: 2, h: "15:30–17:00", t: "Visita à obra 4", resp: "Líder direto", fac: "Eng. residente + TST" }
      ] },
      { id: "d3", t: "Dia 3", sub: "Setores", itens: [
        { id: "posto", dia: 3, h: "08:00–09:00", t: "Ambientação no posto de trabalho", resp: "Líder direto" },
        { id: "setor1", dia: 3, h: "09:00–10:00", t: "Onboarding com setor de contato 1", resp: "Líder direto", fac: "Squad leader do setor" },
        { id: "setor2", dia: 3, h: "10:00–11:00", t: "Onboarding com setor de contato 2", resp: "Líder direto", fac: "Squad leader do setor" },
        { id: "setor3", dia: 3, h: "11:00–12:00", t: "Onboarding com setor de contato 3", resp: "Líder direto", fac: "Squad leader do setor" },
        { id: "treino-d3", dia: 3, h: "14:00–18:00", t: "Treinamentos operacionais, participação em agendas e shadowing", resp: "Líder direto", reg: ["Treinamentos"] }
      ] },
      { id: "d4", t: "Dia 4", sub: "Prática", itens: [
        { id: "treino-d4m", dia: 4, h: "08:00–12:00", t: "Treinamentos operacionais, participação em agendas e shadowing", resp: "Líder direto", reg: ["Treinamentos"] },
        { id: "treino-d4t", dia: 4, h: "14:00–17:00", t: "Treinamentos operacionais, participação em agendas e shadowing", resp: "Líder direto", reg: ["Treinamentos"] },
        { id: "feedback-d4", dia: 4, h: "17:00–18:00", t: "Feedback e definição de plena capacidade para 30, 60 e 90 dias", resp: "Líder direto", reg: ["Positivo", "A melhorar", "Plena capacidade em 30 dias", "Plena capacidade em 60 dias", "Plena capacidade em 90 dias"] }
      ] },
      { id: "marcos", t: "30 a 90 dias", sub: "Experiência", itens: [
        { id: "d30", dias: 30, q: "30º dia", t: "Feedback estruturado: alinhamento de expectativas", resp: "Líder direto", reg: ["Positivo", "A melhorar"] },
        { id: "d40", dias: 40, q: "40º dia", t: "1º término de experiência: formulário de 45 dias e decisão de continuidade", resp: "RH", form: "f45", reg: ["Decisão"] },
        { id: "d60", dias: 60, q: "60º dia", t: "Feedback estruturado: atendimento às expectativas", resp: "Líder direto", reg: ["Positivo", "A melhorar"] },
        { id: "d85", dias: 85, q: "85º dia", t: "2º término de experiência: formulário de 90 dias e decisão de efetivação", resp: "RH", form: "f90", reg: ["Decisão"] },
        { id: "d90", dias: 90, q: "90º dia", t: "Feedback estruturado: alinhamento de expectativas e PDI", resp: "Líder direto", reg: ["Positivo", "A melhorar"] }
      ] }
    ],

    /* Período de experiência e desligamento */
    experiencia: [
      { form: "f45", n: "45", t: "Avaliação parcial", quando: "Aplicar no 40º dia", d: "O líder avalia hard skills, soft skills e aderência à cultura e decide se mantém ou rescinde. Define as prioridades até os 90 dias." },
      { form: "f90", n: "90", t: "Avaliação final", quando: "Aplicar no 85º dia", d: "Mesma avaliação, agora para decidir entre efetivar ou rescindir, com os motivos registrados." }
    ],
    desligamento: { form: "deslig", t: "Entrevista de desligamento", quando: "Na saída, voluntária ou não",
      d: "Conversa com quem está saindo: tempo de casa, motivo, relação com o líder e com a empresa e a nota de 0 a 10 para indicar a empresa." },

    /* Links úteis (u: link do SharePoint começando com / ou link externo) */
    links: [
      { sigla: "AC", t: "Como acessar o SharePoint", d: "Conta da empresa e acesso liberado: o primeiro passo de quem chega.", u: "https://pdedbvo.github.io/portal-dbvo/paginas.html?pagina=duvidas&abrir=como-acessar-os-sites-do-sharepoint" },
      { sigla: "PA", t: "Pedir acesso a um site", d: "O que fazer quando aparece \"Você precisa de permissão\".", u: "https://pdedbvo.github.io/portal-dbvo/paginas.html?pagina=duvidas&abrir=como-pedir-acesso" },
      { sigla: "CS", t: "Central de Serviços", d: "Pedir e-mail, usuário do UAU e outros acessos ao CSUM.", u: "https://pdedbvo.github.io/CentralDeServicos/" },
      { sigla: "DP", t: "Portal DP", d: "Férias, holerite e solicitações ao departamento pessoal.", u: "https://portal-dp-bravo-881c5.web.app" },
      { sigla: "RT", t: "Rotinas", d: "Políticas, POPs e fichas cadastrais do grupo.", u: "/SitePages/ROTINAS.aspx" },
      { sigla: "MK", t: "Estratégia de marca", d: "Logos, cores, fonte e modelos prontos de cada marca.", u: "/SitePages/ESTRATEGIADEMARCA.aspx" },
      { sigla: "OKR", t: "OKRs", d: "Onde cada pessoa lança o realizado dos seus resultados-chave.", u: "https://okrs---bravo.web.app/" },
      { sigla: "FAQ", t: "Dúvidas frequentes", d: "Arquivos, pastas, nomes de arquivo e metas.", u: "/SitePages/DUVIDASFREQUENTES.aspx" }
    ]
};
