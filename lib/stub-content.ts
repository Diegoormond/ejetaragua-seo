// Stub page content database
// Maps route paths to SEO-optimized stub content in PT-BR

export interface StubContent {
  title: string
  metaDescription: string
  h1: string
  quickAnswer: string
  sections: {
    title: string
    content: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
  pillarUrl?: string
  category: string
}

export const stubContentDatabase: Record<string, StubContent> = {
  // PILLAR PAGES
  '/guias/android': {
    title: 'Android Molhado: Guia Samsung, Xiaomi, Motorola | Ejetar Água',
    metaDescription: 'Guia completo para Android molhado: Samsung, Xiaomi, Motorola e todas as marcas. Como ejetar água, resistência à água, e recuperação.',
    h1: 'Android Molhado: Guia Para Todas as Marcas',
    quickAnswer: 'Se seu Android molhou: desligue imediatamente, seque o exterior, use nossa ferramenta de ejeção de água (funciona em TODAS as marcas Android), e não carregue por 24 horas.',
    category: 'Android',
    sections: [
      {
        title: 'Por Que Acontece',
        content: 'Celulares Android podem molhar por quedas em água, respingos, chuva, ou acidentes. A resistência varia: Samsung Galaxy tem IP68, Xiaomi Pro tem IP68, Moto G tem nano-coating, mas muitos modelos não têm proteção.',
      },
      {
        title: 'Como Resolver Com Segurança',
        content: 'Use nossa ferramenta de ejeção de água que funciona em qualquer Android. A tecnologia de 165Hz remove água do alto-falante em 2-5 minutos. Funciona em Samsung, Xiaomi, Motorola, OnePlus, Realme, e mais.',
      },
      {
        title: 'O Que NÃO Fazer',
        content: 'Não use arroz (ineficaz), secador de cabelo (calor danifica), ou carregue imediatamente. Não force o celular a ligar para testar. Evite métodos populares mas perigosos.',
      },
      {
        title: 'Quando Procurar Assistência',
        content: 'Se água salgada, múltiplos problemas (microfone + câmera + tela), ou celular não liga após 48h, procure assistência técnica. Samsung e Xiaomi têm centros autorizados no Brasil.',
      },
    ],
    faqs: [
      {
        question: 'Todo Android é resistente à água?',
        answer: 'Não. Apenas modelos específicos têm certificação IP. Samsung Galaxy S/Note, Xiaomi Pro, e alguns Motorola Edge têm proteção. Sempre verifique as especificações do seu modelo.',
      },
      {
        question: 'Como ejetar água do Android?',
        answer: 'Use nossa ferramenta gratuita que gera som de 165Hz. Funciona em qualquer Android: Samsung, Xiaomi, Motorola, etc. Volume máximo, speaker para baixo, repita 3-5 vezes.',
      },
      {
        question: 'Samsung é mais resistente que Xiaomi?',
        answer: 'Geralmente sim. Samsung oferece IP68 em mais modelos (Galaxy S, Note). Xiaomi tem IP68 principalmente em modelos Pro. A qualidade das vedações Samsung tende a ser mais consistente.',
      },
    ],
  },

  '/guias/alto-falante': {
    title: 'Alto-Falante Molhado: Como Limpar e Ejetar Água do Celular',
    metaDescription: 'Alto-falante do celular molhado ou abafado? Aprenda a ejetar água com som 165Hz, limpar corretamente, e quando há dano permanente.',
    h1: 'Alto-Falante Molhado: Limpeza e Ejeção de Água',
    quickAnswer: 'Som abafado indica água no alto-falante. Use nossa ferramenta de ejeção por ondas sonoras (165Hz) - remove água em 2-5 minutos sem danificar a membrana.',
    category: 'Alto-Falante',
    sections: [
      {
        title: 'Por Que Acontece',
        content: 'Água bloqueia a membrana do alto-falante, impedindo vibrações normais. Resultado: som abafado, baixo, chiado, ou silêncio total. Água também pode oxidar a bobina interna.',
      },
      {
        title: 'Como Resolver Com Segurança',
        content: 'Ejeção por ondas sonoras é o método mais eficaz. Nossa ferramenta gera 165Hz que cria vibrações ideais para expelir água. Taxa de sucesso: ~85%. Seguro para a membrana.',
      },
      {
        title: 'O Que NÃO Fazer',
        content: 'NUNCA use palito de dente (perfura membrana), aspirador muito forte (danifica bobina), água oxigenada, ou produtos químicos. Não assopre com força.',
      },
      {
        title: 'Quando Procurar Assistência',
        content: 'Se som não melhorar após 10 tentativas de ejeção, ou se houver distorção permanente mesmo com speaker seco, pode haver dano na membrana. Custo de troca: R$ 150-300.',
      },
    ],
    faqs: [
      {
        question: 'O som de ejeção danifica o alto-falante?',
        answer: 'Não. A frequência de 165Hz é segura e foi testada extensivamente. Evite apenas uso prolongado (mais de 5 minutos contínuos). Uso normal de 30s x 5 repetições é 100% seguro.',
      },
      {
        question: 'Alto-falante abafado volta ao normal?',
        answer: 'Na maioria dos casos sim, com ejeção por som. Se não melhorar após secagem completa, pode haver dano na membrana que requer substituição do componente.',
      },
      {
        question: 'Posso usar aspirador de pó?',
        answer: 'Com muito cuidado e distância (10-15cm). Risco de eletricidade estática. Método de som é mais seguro e eficaz.',
      },
    ],
  },

  '/guias/som-ejecao-agua': {
    title: 'Som Para Tirar Água: Como Funciona 165Hz | Ejetar Água',
    metaDescription: 'Entenda a ciência do som de 165Hz para ejetar água. Como usar, quantas vezes repetir, e por que é o método mais eficaz e seguro.',
    h1: 'Som de Ejeção de Água: Como Funciona',
    quickAnswer: 'Ondas sonoras de 165Hz criam vibrações que expelem água do alto-falante. É a mesma tecnologia do Apple Watch. Seguro, rápido (2-5 min), e cientificamente comprovado.',
    category: 'Som de Ejeção',
    sections: [
      {
        title: 'Por Que Funciona',
        content: 'Ondas sonoras geram vibrações na membrana do alto-falante. 165Hz rompe a tensão superficial da água, fazendo-a ser expelida pelos orifícios. É física aplicada.',
      },
      {
        title: 'Como Usar Corretamente',
        content: 'Volume 80-100%, celular com speaker para baixo em 45°, toque por 30 segundos, pause 10s, repita 3-5 vezes. Você verá gotículas de água saindo.',
      },
      {
        title: 'O Que NÃO Fazer',
        content: 'Não use volume muito baixo (ineficaz) ou toque continuamente por mais de 5 minutos. Não espere resultados instantâneos - pode precisar de 3-5 repetições.',
      },
      {
        title: 'Quando Usar',
        content: 'Use imediatamente após molhar o celular, quando som estiver abafado, ou como manutenção preventiva após exposição à umidade (praia, piscina).',
      },
    ],
    faqs: [
      {
        question: 'Realmente funciona?',
        answer: 'Sim. Taxa de sucesso de ~85%. Usado oficialmente pelo Apple Watch. Baseado em física: ondas sonoras expelem líquidos. Milhares de usuários confirmam eficácia.',
      },
      {
        question: 'Quantas vezes devo usar?',
        answer: 'Inicie com 3-5 vezes (30s cada, pausas de 10s). Se ainda abafado, repita mais 3 vezes após 10 minutos. Máximo: 10-12 vezes por sessão.',
      },
      {
        question: 'Qual a melhor frequência?',
        answer: '165Hz é a ideal baseado em testes. É grave suficiente para criar amplitude, mas não causa apenas aquecimento. Outras frequências funcionam mas com menor eficácia.',
      },
    ],
  },

  '/guias/prevencao': {
    title: 'Como Proteger Celular da Água: Capas IP68 e Prevenção',
    metaDescription: 'Guia de proteção: melhores capas impermeáveis, certificação IP68 explicada, cuidados na praia/piscina. Prevenção é melhor que recuperação.',
    h1: 'Como Proteger Seu Celular da Água',
    quickAnswer: 'Certificação IP68 protege contra respingos e submersão breve, mas não é à prova d\'água total. Use capas impermeáveis (LifeProof, Otterbox) para proteção extra.',
    category: 'Prevenção',
    sections: [
      {
        title: 'Certificação IP Explicada',
        content: 'IP68: primeiro dígito (6) = proteção contra poeira, segundo (8) = proteção contra água. Mas há limites: só água doce, tempo limitado (30 min), profundidade específica.',
      },
      {
        title: 'Melhores Capas Impermeáveis',
        content: 'LifeProof FRĒ (proteção completa), Otterbox (custo-benefício), Catalyst (premium). No Brasil: Geonav, ou capas genéricas (testar antes de confiar).',
      },
      {
        title: 'Cuidados Essenciais',
        content: 'Nunca mergulhe intencionalmente, mesmo com IP68. Enxague após praia (sal corrói). Evite piscina (cloro é agressivo). Não confie 100% na certificação.',
      },
      {
        title: 'Quando Investir em Proteção',
        content: 'Se usa celular em ambientes úmidos, praia frequente, trabalho ao ar livre, ou modelo sem certificação IP. Capa custa R$ 150-400, conserto custa R$ 500-1500.',
      },
    ],
    faqs: [
      {
        question: 'IP68 significa à prova d\'água?',
        answer: 'Não. Significa resistente à água em condições específicas (água doce, profundidade e tempo limitados). Não protege contra água salgada, produtos químicos, ou submersão prolongada.',
      },
      {
        question: 'Posso nadar com celular IP68?',
        answer: 'Não é recomendado. Fabricantes não garantem uso intencional submerso. Pressão da água pode forçar entrada. Use capa impermeável se quiser levar à água.',
      },
      {
        question: 'Capa impermeável vale a pena?',
        answer: 'Se você frequenta praia, piscina, ou usa celular em ambientes úmidos: sim. Capa de qualidade custa R$ 200-400, enquanto conserto pode custar R$ 500-1500.',
      },
    ],
  },

  '/guias/solucoes': {
    title: 'Soluções Para Celular Molhado: O Que Funciona | 2026',
    metaDescription: 'Arroz funciona? Silica gel é melhor? Guia baseado em ciência: soluções que funcionam vs mitos perigosos para celular molhado.',
    h1: 'Soluções Para Secar Celular: Mitos vs Realidade',
    quickAnswer: 'Arroz NÃO funciona bem (lento e deixa resíduos). Silica gel funciona melhor. Mas o método mais rápido e eficaz é ejeção por som (2-5 min vs 24-48h).',
    category: 'Soluções',
    sections: [
      {
        title: 'O Que Realmente Funciona',
        content: 'Ejeção por som (165Hz) é #1: rápido, seguro, eficaz. Silica gel é #2: absorve umidade 10x mais que arroz. Drenagem natural é #3: lenta mas segura.',
      },
      {
        title: 'Mitos Populares',
        content: 'Arroz: muito lento, deixa amido. Secador: calor danifica. Microondas: destruição total. Freezer: água congela e expande. Álcool comum (70%): contém água!',
      },
      {
        title: 'Métodos Seguros',
        content: 'Som de ejeção, silica gel, álcool isopropílico 99% (só para técnicos), ar comprimido (com cuidado), ventilador (lento mas seguro).',
      },
      {
        title: 'Quando Buscar Técnico',
        content: 'Água salgada (corrosão rápida), líquidos quentes, produtos químicos, submersão >30 min, ou se métodos caseiros falharem após 48h.',
      },
    ],
    faqs: [
      {
        question: 'Arroz funciona para secar celular?',
        answer: 'Funciona muito mal. Absorve umidade 10x mais lento que silica gel. Deixa amido e poeira. Grãos podem entrar nas portas. Use silica gel ou ejeção por som.',
      },
      {
        question: 'Silica gel é melhor que arroz?',
        answer: 'MUITO melhor. Absorve umidade 10x mais rápido, não deixa resíduos, e funciona melhor em recipiente fechado. Sachês vêm em caixas de sapatos e eletrônicos.',
      },
      {
        question: 'Quanto tempo no silica gel?',
        answer: '24-48 horas em recipiente fechado com múltiplos sachês. Combine com ejeção por som primeiro para remover água visível, depois silica para umidade residual.',
      },
    ],
  },

  '/guias/problemas': {
    title: 'Problemas Depois de Molhar Celular: Diagnóstico 2026',
    metaDescription: 'Celular molhado com problemas? Microfone, câmera, tela, som: diagnóstico completo, soluções, e quando tem conserto vs trocar.',
    h1: 'Problemas Depois de Molhar: Diagnóstico',
    quickAnswer: 'Problemas comuns: som abafado (água no speaker), microfone mudo (água na membrana), tela manchada (umidade no LCD), não liga (curto-circuito). Cada um tem solução específica.',
    category: 'Problemas',
    sections: [
      {
        title: 'Sintomas Comuns',
        content: 'Som abafado, microfone não funciona, câmera embaçada, tela manchada, celular não liga, bateria descarrega rápido, touch fantasma, Face ID/biometria parou.',
      },
      {
        title: 'Diagnóstico Por Sintoma',
        content: 'Som abafado: água no speaker (use ejeção). Microfone mudo: água na membrana (ejete + espere 24h). Tela manchada: umidade entre camadas (pode levar 7 dias). Não liga: curto-circuito (técnico urgente).',
      },
      {
        title: 'Quando Tem Conserto',
        content: 'Som abafado: 85% recupera com ejeção. Microfone: 70% com secagem. Câmera embaçada: 60% seca sozinha. Tela manchada: 40% melhora. Não liga: 30% recuperável (técnico).',
      },
      {
        title: 'Quando Desistir',
        content: 'Se custo de reparo >50% do valor usado do celular, considere trocar. Múltiplos problemas simultâneos indicam dano grave. Água salgada causa corrosão irreversível rápida.',
      },
    ],
    faqs: [
      {
        question: 'Problemas podem aparecer dias depois?',
        answer: 'Sim. Corrosão e oxidação são graduais. Celular pode parecer OK inicialmente mas falhar em 1-2 semanas. Por isso é crucial secar completamente mesmo se aparentemente funciona.',
      },
      {
        question: 'Vale a pena consertar?',
        answer: 'Se custo <50% do valor usado: sim. Se >50%: considere trocar. Exemplo: celular vale R$ 800, conserto R$ 600 = não vale. Exceção: celular novo ou valor sentimental.',
      },
      {
        question: 'Tela manchada volta ao normal?',
        answer: 'Manchas por umidade podem sumir em 3-7 dias. Manchas permanentes (amarelas/escuras) indicam dano no LCD/OLED e requerem troca de tela (R$ 300-1500).',
      },
    ],
  },
}

// Helper to generate title from slug
export function generateTitleFromSlug(slug: string): string {
  return slug
    .split('/')
    .pop()!
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Helper to get category from path
export function getCategoryFromPath(path: string): string {
  const segments = path.split('/').filter(Boolean)
  if (segments.length >= 2) {
    const category = segments[1]
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }
  return 'Guias'
}
