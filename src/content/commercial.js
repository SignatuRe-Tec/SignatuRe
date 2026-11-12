/** Conteúdo comercial — Master §19–§39 (COMMERCIAL RULE). Não alterar valores. */
export const offers = [
  {
    name: 'Landing Page',
    description:
      'Uma página exclusiva, criada para apresentar um produto, serviço ou ideia de forma clara e envolvente. Tudo em um único lugar, com design personalizado e caminhos que facilitam o contato com seu público.',
    pre: 'A partir de',
    price: 'R$ 3.500',
    meta: '10–15 dias úteis',
    cta: 'Quero uma Landing Page',
    message: 'Olá! Conheci a SignatuRe pelo site e gostaria de conversar sobre a criação de uma Landing Page.',
  },
  {
    name: 'Site Institucional',
    description:
      'Um site que apresenta sua empresa além do que ela oferece. Sua história, seus valores e seus diferenciais ganham espaço em uma presença digital organizada, profissional e capaz de transmitir confiança desde o primeiro contato.',
    pre: 'A partir de',
    price: 'R$ 5.500',
    meta: '20–30 dias úteis',
    cta: 'Quero um Site',
    message: 'Olá! Conheci a SignatuRe pelo site e gostaria de conversar sobre a criação de um Site Institucional.',
  },
  {
    name: 'Modernização / Redesign',
    description:
      'Seu site já existe, mas será que ainda representa o seu negócio? Repensamos sua aparência, organização e experiência de navegação para que sua presença digital acompanhe a evolução da sua marca.',
    price: 'Sob avaliação e orçamento',
    meta: 'Prazo conforme proposta',
    cta: 'Quero Modernizar',
    message: 'Olá! Conheci a SignatuRe pelo site e gostaria de conversar sobre a modernização do meu site.',
  },
  {
    name: 'Projetos Personalizados',
    description:
      'De cardápios digitais e portfolios a páginas para eventos e projetos autorais. Transformamos ideias em experiências digitais feitas sob medida, com criatividade, identidade própria e atenção aos detalhes.',
    price: 'Sob avaliação e orçamento',
    meta: 'Prazo conforme proposta',
    cta: 'Quero Personalizar',
    message: 'Olá! Conheci a SignatuRe pelo site e gostaria de conversar sobre um Projeto Personalizado.',
  },
];

export const included = [
  '2 rodadas consolidadas de revisão, salvo proposta diferente.',
  'SEO técnico/on-page básico e mensuração inicial, quando aplicável. Sem promessa de ranking.',
  '30 dias de acompanhamento após a publicação.',
  'Backup por no mínimo 12 meses após a publicação.',
  'Projeto/código final entregue após a quitação, conforme proposta.',
];

export const flow = [
  'Contato',
  'Qualificação',
  'Briefing SignatuRe',
  'Alinhamento quando necessário',
  'Proposta',
  'Contrato',
  'Entrada',
  'Reserva da agenda',
  'Materiais',
  'Início',
];

export const notes = [
  'O prazo começa após o briefing e os materiais essenciais. A espera por retorno não consome prazo de produção.',
  'Você fornece os materiais-base: informações, textos, logo, fotos. Domínio e hospedagem são contratados e pagos por você.',
  'Mudança de direção, rodadas extras ou novo escopo podem alterar prazo e investimento. Nenhum adicional sem aprovação prévia.',
  'Urgência é avaliada caso a caso.',
];

export const payment = {
  parts: [
    { n: '50%', t: 'na contratação e reserva da agenda' },
    { n: '50%', t: 'na conclusão e aprovação final, antes da publicação' },
  ],
  proposal: 'Proposta válida por 10 dias corridos.',
};

export const care = {
  name: 'SignatuRe Care',
  price: 'R$ 390/mês',
  values: ['Prioridade', 'Previsibilidade', 'Praticidade', 'Continuidade', 'Relacionamento'],
  details: [
    'Até 3 solicitações consolidadas de pequenas atualizações por mês. Não acumulam.',
    'Prazo normal de até 3 dias úteis, conforme demanda.',
    'Backup enquanto ativo.',
    'Disponível após os 30 dias de acompanhamento, somente para projetos SignatuRe.',
    'Pagamento antecipado. Sem fidelidade no lançamento.',
  ],
  adhoc: 'Manutenção avulsa a partir de R$ 180 por atendimento, sujeito à avaliação.',
};

export const legal = 'Condições finais formalizadas em proposta e contrato.';
