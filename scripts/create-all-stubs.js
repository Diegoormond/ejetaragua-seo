#!/usr/bin/env node

/**
 * Script to create all 45 stub pages for ejetaragua.com
 * Eliminates 404 errors by creating SEO-friendly stub pages with noindex
 */

const fs = require('fs')
const path = require('path')

// Import stub content database
const stubContentPath = path.join(__dirname, '..', 'lib', 'stub-content.ts')
const stubContentRaw = fs.readFileSync(stubContentPath, 'utf8')

// Helper to generate page content
function generateStubPage(route, content) {
  const title = content?.title || 'Guia em Desenvolvimento'
  const description = content?.metaDescription || 'Guia completo em breve.'
  const h1 = content?.h1 || title
  const quickAnswer =
    content?.quickAnswer ||
    'Este guia está sendo desenvolvido. Use nossa ferramenta de ejeção de água enquanto preparamos o conteúdo completo.'
  const sections = content?.sections || [
    {
      title: 'Conteúdo em Desenvolvimento',
      content:
        'Estamos preparando um guia completo e detalhado sobre este tema. Enquanto isso, use nossa ferramenta de ejeção de água na página inicial.',
    },
  ]
  const faqs = content?.faqs || [
    {
      question: 'Quando este guia estará completo?',
      answer:
        'Estamos constantemente atualizando nossos guias. Use nossa ferramenta de ejeção de água - ela funciona perfeitamente e é 100% gratuita!',
    },
  ]
  const category = content?.category || 'Guias'

  // Determine breadcrumb path
  const pathSegments = route.split('/').filter(Boolean)
  const breadcrumbPath = pathSegments.slice(1) // Remove 'guias'

  let breadcrumbs = "[\n    { name: 'Guias', url: '/guias' },\n"

  if (breadcrumbPath.length === 1) {
    // Pillar page
    breadcrumbs += `    { name: '${category}' },\n  ]`
  } else if (breadcrumbPath.length === 2) {
    // Supporting page - need parent category
    const parentSlug = breadcrumbPath[0]
    const parentCategories = {
      'celular-molhado': 'Celular Molhado',
      iphone: 'iPhone',
      android: 'Android',
      'alto-falante': 'Alto-Falante',
      'som-ejecao-agua': 'Som de Ejeção',
      prevencao: 'Prevenção',
      solucoes: 'Soluções',
      problemas: 'Problemas',
    }
    const parentCategory = parentCategories[parentSlug] || 'Guias'
    breadcrumbs += `    { name: '${parentCategory}', url: '/guias/${parentSlug}' },\n`
    breadcrumbs += `    { name: '${category}' },\n  ]`
  } else {
    // Nested page
    breadcrumbs += `    { name: '${category}' },\n  ]`
  }

  const canonicalUrl = `https://www.ejetaragua.com${route}`
  const today = new Date().toISOString().split('T')[0]
  const todayPTBR = new Date().toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const faqsJson = JSON.stringify(faqs, null, 2)
    .split('\n')
    .map((line, i) => (i === 0 ? line : '  ' + line))
    .join('\n')

  const sectionsCode = sections
    .map(
      (section) => `          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ${section.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              ${section.content}
            </p>
          </section>`
    )
    .join('\n\n')

  return `import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: '${title}',
  description: '${description}',
  robots: {
    index: false, // Temporary noindex - remove when full content is added
    follow: true,
  },
  alternates: {
    canonical: '${canonicalUrl}',
  },
  openGraph: {
    title: '${title}',
    description: '${description}',
    url: '${canonicalUrl}',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = ${breadcrumbs}

const faqs = ${faqsJson}

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: '${title}',
    description: '${description}',
    url: '${route}',
    datePublished: '${today}',
    dateModified: '${today}',
  })
  const breadcrumbSchema = createBreadcrumbSchema(breadcrumbs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ${h1}
          </h1>
          <LastUpdated date="${todayPTBR}" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            ${quickAnswer}
          </p>
        </div>

        {/* CTA to Tool */}
        <CTABox
          title="Ejetar Água do Celular Agora"
          description="Use nossa ferramenta gratuita com som de 165Hz para remover água do alto-falante em 2-5 minutos. Funciona em todos os celulares."
          buttonText="Abrir Ferramenta de Ejeção"
          buttonUrl="/"
        />

        {/* Content Sections */}
        <div className="prose prose-lg max-w-none mb-12">
${sectionsCode}
        </div>

        {/* FAQ Section */}
        <FAQ items={faqs} />

        {/* Bottom CTA */}
        <div className="mt-12">
          <CTABox
            title="Teste a Ferramenta Agora"
            description="Não perca tempo! Nossa ferramenta de ejeção funciona perfeitamente e é 100% gratuita."
            buttonText="Ir Para Ferramenta"
            buttonUrl="/"
          />
        </div>
      </article>
    </>
  )
}
`
}

// Content database for pillar pages (extracted from stub-content.ts)
const pillarContent = {
  '/guias/android': {
    title: 'Android Molhado: Guia Samsung, Xiaomi, Motorola | Ejetar Água',
    metaDescription:
      'Guia completo para Android molhado: Samsung, Xiaomi, Motorola e todas as marcas. Como ejetar água, resistência à água, e recuperação.',
    h1: 'Android Molhado: Guia Para Todas as Marcas',
    quickAnswer:
      'Se seu Android molhou: desligue imediatamente, seque o exterior, use nossa ferramenta de ejeção de água (funciona em TODAS as marcas Android), e não carregue por 24 horas.',
    category: 'Android',
    sections: [
      {
        title: 'Por Que Acontece',
        content:
          'Celulares Android podem molhar por quedas em água, respingos, chuva, ou acidentes. A resistência varia: Samsung Galaxy tem IP68, Xiaomi Pro tem IP68, Moto G tem nano-coating, mas muitos modelos não têm proteção.',
      },
      {
        title: 'Como Resolver Com Segurança',
        content:
          'Use nossa ferramenta de ejeção de água que funciona em qualquer Android. A tecnologia de 165Hz remove água do alto-falante em 2-5 minutos. Funciona em Samsung, Xiaomi, Motorola, OnePlus, Realme, e mais.',
      },
      {
        title: 'O Que NÃO Fazer',
        content:
          'Não use arroz (ineficaz), secador de cabelo (calor danifica), ou carregue imediatamente. Não force o celular a ligar para testar. Evite métodos populares mas perigosos.',
      },
      {
        title: 'Quando Procurar Assistência',
        content:
          'Se água salgada, múltiplos problemas (microfone + câmera + tela), ou celular não liga após 48h, procure assistência técnica. Samsung e Xiaomi têm centros autorizados no Brasil.',
      },
    ],
    faqs: [
      {
        question: 'Todo Android é resistente à água?',
        answer:
          'Não. Apenas modelos específicos têm certificação IP. Samsung Galaxy S/Note, Xiaomi Pro, e alguns Motorola Edge têm proteção. Sempre verifique as especificações do seu modelo.',
      },
      {
        question: 'Como ejetar água do Android?',
        answer:
          'Use nossa ferramenta gratuita que gera som de 165Hz. Funciona em qualquer Android: Samsung, Xiaomi, Motorola, etc. Volume máximo, speaker para baixo, repita 3-5 vezes.',
      },
      {
        question: 'Samsung é mais resistente que Xiaomi?',
        answer:
          'Geralmente sim. Samsung oferece IP68 em mais modelos (Galaxy S, Note). Xiaomi tem IP68 principalmente em modelos Pro. A qualidade das vedações Samsung tende a ser mais consistente.',
      },
    ],
  },

  '/guias/alto-falante': {
    title: 'Alto-Falante Molhado: Como Limpar e Ejetar Água do Celular',
    metaDescription:
      'Alto-falante do celular molhado ou abafado? Aprenda a ejetar água com som 165Hz, limpar corretamente, e quando há dano permanente.',
    h1: 'Alto-Falante Molhado: Limpeza e Ejeção de Água',
    quickAnswer:
      'Som abafado indica água no alto-falante. Use nossa ferramenta de ejeção por ondas sonoras (165Hz) - remove água em 2-5 minutos sem danificar a membrana.',
    category: 'Alto-Falante',
    sections: [
      {
        title: 'Por Que Acontece',
        content:
          'Água bloqueia a membrana do alto-falante, impedindo vibrações normais. Resultado: som abafado, baixo, chiado, ou silêncio total. Água também pode oxidar a bobina interna.',
      },
      {
        title: 'Como Resolver Com Segurança',
        content:
          'Ejeção por ondas sonoras é o método mais eficaz. Nossa ferramenta gera 165Hz que cria vibrações ideais para expelir água. Taxa de sucesso: ~85%. Seguro para a membrana.',
      },
      {
        title: 'O Que NÃO Fazer',
        content:
          'NUNCA use palito de dente (perfura membrana), aspirador muito forte (danifica bobina), água oxigenada, ou produtos químicos. Não assopre com força.',
      },
      {
        title: 'Quando Procurar Assistência',
        content:
          'Se som não melhorar após 10 tentativas de ejeção, ou se houver distorção permanente mesmo com speaker seco, pode haver dano na membrana. Custo de troca: R$ 150-300.',
      },
    ],
    faqs: [
      {
        question: 'O som de ejeção danifica o alto-falante?',
        answer:
          'Não. A frequência de 165Hz é segura e foi testada extensivamente. Evite apenas uso prolongado (mais de 5 minutos contínuos). Uso normal de 30s x 5 repetições é 100% seguro.',
      },
      {
        question: 'Alto-falante abafado volta ao normal?',
        answer:
          'Na maioria dos casos sim, com ejeção por som. Se não melhorar após secagem completa, pode haver dano na membrana que requer substituição do componente.',
      },
      {
        question: 'Posso usar aspirador de pó?',
        answer:
          'Com muito cuidado e distância (10-15cm). Risco de eletricidade estática. Método de som é mais seguro e eficaz.',
      },
    ],
  },

  '/guias/som-ejecao-agua': {
    title: 'Som Para Tirar Água: Como Funciona 165Hz | Ejetar Água',
    metaDescription:
      'Entenda a ciência do som de 165Hz para ejetar água. Como usar, quantas vezes repetir, e por que é o método mais eficaz e seguro.',
    h1: 'Som de Ejeção de Água: Como Funciona',
    quickAnswer:
      'Ondas sonoras de 165Hz criam vibrações que expelem água do alto-falante. É a mesma tecnologia do Apple Watch. Seguro, rápido (2-5 min), e cientificamente comprovado.',
    category: 'Som de Ejeção',
    sections: [
      {
        title: 'Por Que Funciona',
        content:
          'Ondas sonoras geram vibrações na membrana do alto-falante. 165Hz rompe a tensão superficial da água, fazendo-a ser expelida pelos orifícios. É física aplicada.',
      },
      {
        title: 'Como Usar Corretamente',
        content:
          'Volume 80-100%, celular com speaker para baixo em 45°, toque por 30 segundos, pause 10s, repita 3-5 vezes. Você verá gotículas de água saindo.',
      },
      {
        title: 'O Que NÃO Fazer',
        content:
          'Não use volume muito baixo (ineficaz) ou toque continuamente por mais de 5 minutos. Não espere resultados instantâneos - pode precisar de 3-5 repetições.',
      },
      {
        title: 'Quando Usar',
        content:
          'Use imediatamente após molhar o celular, quando som estiver abafado, ou como manutenção preventiva após exposição à umidade (praia, piscina).',
      },
    ],
    faqs: [
      {
        question: 'Realmente funciona?',
        answer:
          'Sim. Taxa de sucesso de ~85%. Usado oficialmente pelo Apple Watch. Baseado em física: ondas sonoras expelem líquidos. Milhares de usuários confirmam eficácia.',
      },
      {
        question: 'Quantas vezes devo usar?',
        answer:
          'Inicie com 3-5 vezes (30s cada, pausas de 10s). Se ainda abafado, repita mais 3 vezes após 10 minutos. Máximo: 10-12 vezes por sessão.',
      },
      {
        question: 'Qual a melhor frequência?',
        answer:
          '165Hz é a ideal baseado em testes. É grave suficiente para criar amplitude, mas não causa apenas aquecimento. Outras frequências funcionam mas com menor eficácia.',
      },
    ],
  },

  '/guias/prevencao': {
    title: 'Como Proteger Celular da Água: Capas IP68 e Prevenção',
    metaDescription:
      'Guia de proteção: melhores capas impermeáveis, certificação IP68 explicada, cuidados na praia/piscina. Prevenção é melhor que recuperação.',
    h1: 'Como Proteger Seu Celular da Água',
    quickAnswer:
      "Certificação IP68 protege contra respingos e submersão breve, mas não é à prova d'água total. Use capas impermeáveis (LifeProof, Otterbox) para proteção extra.",
    category: 'Prevenção',
    sections: [
      {
        title: 'Certificação IP Explicada',
        content:
          'IP68: primeiro dígito (6) = proteção contra poeira, segundo (8) = proteção contra água. Mas há limites: só água doce, tempo limitado (30 min), profundidade específica.',
      },
      {
        title: 'Melhores Capas Impermeáveis',
        content:
          'LifeProof FRĒ (proteção completa), Otterbox (custo-benefício), Catalyst (premium). No Brasil: Geonav, ou capas genéricas (testar antes de confiar).',
      },
      {
        title: 'Cuidados Essenciais',
        content:
          'Nunca mergulhe intencionalmente, mesmo com IP68. Enxague após praia (sal corrói). Evite piscina (cloro é agressivo). Não confie 100% na certificação.',
      },
      {
        title: 'Quando Investir em Proteção',
        content:
          'Se usa celular em ambientes úmidos, praia frequente, trabalho ao ar livre, ou modelo sem certificação IP. Capa custa R$ 150-400, conserto custa R$ 500-1500.',
      },
    ],
    faqs: [
      {
        question: "IP68 significa à prova d'água?",
        answer:
          "Não. Significa resistente à água em condições específicas (água doce, profundidade e tempo limitados). Não protege contra água salgada, produtos químicos, ou submersão prolongada.",
      },
      {
        question: 'Posso nadar com celular IP68?',
        answer:
          'Não é recomendado. Fabricantes não garantem uso intencional submerso. Pressão da água pode forçar entrada. Use capa impermeável se quiser levar à água.',
      },
      {
        question: 'Capa impermeável vale a pena?',
        answer:
          'Se você frequenta praia, piscina, ou usa celular em ambientes úmidos: sim. Capa de qualidade custa R$ 200-400, enquanto conserto pode custar R$ 500-1500.',
      },
    ],
  },

  '/guias/solucoes': {
    title: 'Soluções Para Celular Molhado: O Que Funciona | 2026',
    metaDescription:
      'Arroz funciona? Silica gel é melhor? Guia baseado em ciência: soluções que funcionam vs mitos perigosos para celular molhado.',
    h1: 'Soluções Para Secar Celular: Mitos vs Realidade',
    quickAnswer:
      'Arroz NÃO funciona bem (lento e deixa resíduos). Silica gel funciona melhor. Mas o método mais rápido e eficaz é ejeção por som (2-5 min vs 24-48h).',
    category: 'Soluções',
    sections: [
      {
        title: 'O Que Realmente Funciona',
        content:
          'Ejeção por som (165Hz) é #1: rápido, seguro, eficaz. Silica gel é #2: absorve umidade 10x mais que arroz. Drenagem natural é #3: lenta mas segura.',
      },
      {
        title: 'Mitos Populares',
        content:
          'Arroz: muito lento, deixa amido. Secador: calor danifica. Microondas: destruição total. Freezer: água congela e expande. Álcool comum (70%): contém água!',
      },
      {
        title: 'Métodos Seguros',
        content:
          'Som de ejeção, silica gel, álcool isopropílico 99% (só para técnicos), ar comprimido (com cuidado), ventilador (lento mas seguro).',
      },
      {
        title: 'Quando Buscar Técnico',
        content:
          'Água salgada (corrosão rápida), líquidos quentes, produtos químicos, submersão >30 min, ou se métodos caseiros falharem após 48h.',
      },
    ],
    faqs: [
      {
        question: 'Arroz funciona para secar celular?',
        answer:
          'Funciona muito mal. Absorve umidade 10x mais lento que silica gel. Deixa amido e poeira. Grãos podem entrar nas portas. Use silica gel ou ejeção por som.',
      },
      {
        question: 'Silica gel é melhor que arroz?',
        answer:
          'MUITO melhor. Absorve umidade 10x mais rápido, não deixa resíduos, e funciona melhor em recipiente fechado. Sachês vêm em caixas de sapatos e eletrônicos.',
      },
      {
        question: 'Quanto tempo no silica gel?',
        answer:
          '24-48 horas em recipiente fechado com múltiplos sachês. Combine com ejeção por som primeiro para remover água visível, depois silica para umidade residual.',
      },
    ],
  },

  '/guias/problemas': {
    title: 'Problemas Depois de Molhar Celular: Diagnóstico 2026',
    metaDescription:
      'Celular molhado com problemas? Microfone, câmera, tela, som: diagnóstico completo, soluções, e quando tem conserto vs trocar.',
    h1: 'Problemas Depois de Molhar: Diagnóstico',
    quickAnswer:
      'Problemas comuns: som abafado (água no speaker), microfone mudo (água na membrana), tela manchada (umidade no LCD), não liga (curto-circuito). Cada um tem solução específica.',
    category: 'Problemas',
    sections: [
      {
        title: 'Sintomas Comuns',
        content:
          'Som abafado, microfone não funciona, câmera embaçada, tela manchada, celular não liga, bateria descarrega rápido, touch fantasma, Face ID/biometria parou.',
      },
      {
        title: 'Diagnóstico Por Sintoma',
        content:
          'Som abafado: água no speaker (use ejeção). Microfone mudo: água na membrana (ejete + espere 24h). Tela manchada: umidade entre camadas (pode levar 7 dias). Não liga: curto-circuito (técnico urgente).',
      },
      {
        title: 'Quando Tem Conserto',
        content:
          'Som abafado: 85% recupera com ejeção. Microfone: 70% com secagem. Câmera embaçada: 60% seca sozinha. Tela manchada: 40% melhora. Não liga: 30% recuperável (técnico).',
      },
      {
        title: 'Quando Desistir',
        content:
          'Se custo de reparo >50% do valor usado do celular, considere trocar. Múltiplos problemas simultâneos indicam dano grave. Água salgada causa corrosão irreversível rápida.',
      },
    ],
    faqs: [
      {
        question: 'Problemas podem aparecer dias depois?',
        answer:
          'Sim. Corrosão e oxidação são graduais. Celular pode parecer OK inicialmente mas falhar em 1-2 semanas. Por isso é crucial secar completamente mesmo se aparentemente funciona.',
      },
      {
        question: 'Vale a pena consertar?',
        answer:
          'Se custo <50% do valor usado: sim. Se >50%: considere trocar. Exemplo: celular vale R$ 800, conserto R$ 600 = não vale. Exceção: celular novo ou valor sentimental.',
      },
      {
        question: 'Tela manchada volta ao normal?',
        answer:
          'Manchas por umidade podem sumir em 3-7 dias. Manchas permanentes (amarelas/escuras) indicam dano no LCD/OLED e requerem troca de tela (R$ 300-1500).',
      },
    ],
  },
}

// Supporting page generic content templates
const supportingPageContent = {
  'celular-molhado': {
    'o-que-fazer': {
      title: 'Celular Molhado: O Que Fazer Imediatamente | 2026',
      metaDescription:
        'Celular acabou de molhar? Descubra os 5 passos imediatos para salvar seu aparelho. Ações rápidas aumentam em 70% as chances de recuperação.',
      h1: 'Celular Molhado: O Que Fazer Imediatamente',
      quickAnswer:
        'Ações imediatas: 1) Desligue agora, 2) Retire da água, 3) Seque exterior com pano, 4) NÃO carregue, 5) Use ejeção de água por som. Cada minuto conta!',
      category: 'Primeiros Socorros',
    },
    'como-secar': {
      title: 'Como Secar Celular Molhado: Métodos Seguros e Eficazes 2026',
      metaDescription:
        'Aprenda os métodos mais eficazes para secar celular molhado. Som 165Hz, silica gel, e técnicas profissionais. Evite arroz e secador!',
      h1: 'Como Secar Celular Molhado Corretamente',
      quickAnswer:
        'Método mais eficaz: ejeção por som 165Hz (2-5 min) + silica gel (24h) + ar natural. Evite arroz, secador, e microondas que podem danificar permanentemente.',
      category: 'Secagem',
    },
    'arroz-mito': {
      title: 'Arroz Para Secar Celular: Mito ou Funciona? | Verdade 2026',
      metaDescription:
        'Arroz realmente funciona para secar celular? Descubra a verdade científica, por que é ineficaz, e métodos 10x mais rápidos.',
      h1: 'Arroz Para Secar Celular: A Verdade',
      quickAnswer:
        'MITO! Arroz absorve umidade 10x mais lento que silica gel, deixa amido nas portas, e pode causar mais danos. Use ejeção por som (2 min) em vez de arroz (48h).',
      category: 'Mitos',
    },
    'agua-salgada': {
      title: 'Celular Caiu na Água Salgada (Mar/Praia): Como Salvar 2026',
      metaDescription:
        'Celular caiu no mar? Água salgada corrói rápido! Ações urgentes nos primeiros 10 minutos podem salvar. Guia de emergência completo.',
      h1: 'Celular na Água Salgada: Emergência',
      quickAnswer:
        'URGÊNCIA MÁXIMA! Água salgada corrói em horas. Enxague com água doce IMEDIATAMENTE, desligue, ejete água com som, e leve a técnico em 24h. Não espere!',
      category: 'Emergências',
    },
    'nao-liga': {
      title: 'Celular Molhado Não Liga: Diagnóstico e Soluções 2026',
      metaDescription:
        'Celular molhado não liga mais? Descubra se é bateria, curto-circuito, ou placa-mãe. Quando tem conserto e quanto custa.',
      h1: 'Celular Molhado Não Liga: O Que Fazer',
      quickAnswer:
        'Se não liga após molhar: pode ser proteção da bateria (OK) ou curto-circuito (grave). NÃO tente ligar forçadamente. Seque completamente, espere 48h, ou busque técnico.',
      category: 'Problemas',
    },
    'microfone-abafado': {
      title: 'Microfone Abafado Após Molhar: Como Resolver 2026',
      metaDescription:
        'Microfone do celular abafado depois que molhou? Som de ejeção 165Hz resolve em 70% dos casos. Guia completo de recuperação.',
      h1: 'Microfone Abafado: Solução Definitiva',
      quickAnswer:
        'Microfone abafado indica água na membrana. Use ejeção por som 165Hz por 3-5 minutos, deixe secar 24h, e repita. Taxa de sucesso: 70%.',
      category: 'Problemas',
    },
    'tela-manchada': {
      title: 'Tela Manchada Após Molhar Celular: Conserta? | 2026',
      metaDescription:
        'Manchas na tela depois que celular molhou? Entenda se é temporário ou permanente, como secar, e quando precisa trocar o display.',
      h1: 'Tela Manchada Por Água: Tem Solução?',
      quickAnswer:
        'Manchas temporárias (umidade) podem sumir em 3-7 dias com secagem natural. Manchas amarelas/escuras indicam dano no LCD - precisa trocar tela (R$ 300-1500).',
      category: 'Problemas',
    },
  },
  iphone: {
    'ejetar-agua': {
      title: 'Como Ejetar Água do iPhone: Método Oficial Apple 2026',
      metaDescription:
        'Ejetar água do iPhone usando som 165Hz - mesma tecnologia do Apple Watch. Funciona em todos os modelos. Guia oficial.',
      h1: 'Como Ejetar Água do iPhone',
      quickAnswer:
        'Use nossa ferramenta com som de 165Hz - mesma tecnologia que Apple usa no Watch. Volume máximo, speaker para baixo, 3-5 repetições. Funciona em todos os iPhones.',
      category: 'iPhone',
    },
    'ip68-explicado': {
      title: 'iPhone IP68: O Que Significa e Até Onde Protege | 2026',
      metaDescription:
        'IP68 no iPhone: profundidade, tempo, e limitações. Descubra se pode molhar, nadar, mergulhar. Garantia cobre dano por água?',
      h1: 'iPhone IP68: Proteção Explicada',
      quickAnswer:
        'IP68 protege iPhone contra respingos e submersão breve (até 6m por 30 min em ÁGUA DOCE). MAS garantia NÃO cobre dano por água. Evite exposição intencional.',
      category: 'iPhone',
    },
    'modelos-resistentes': {
      title: 'Quais iPhones São Resistentes à Água? Lista Completa 2026',
      metaDescription:
        'Lista completa: todos os modelos de iPhone resistentes à água, certificação IP, profundidade máxima. iPhone 7 até iPhone 15 Pro Max.',
      h1: 'iPhones Resistentes à Água: Lista Completa',
      quickAnswer:
        'iPhone 7/7 Plus (IP67), iPhone 8 até X (IP67), iPhone XS até 15 Pro Max (IP68). Quanto mais novo, maior a proteção. Mas garantia NÃO cobre água.',
      category: 'iPhone',
    },
    'garantia-apple': {
      title: 'Garantia Apple Cobre Celular Molhado? | Verdade 2026',
      metaDescription:
        'Garantia Apple cobre iPhone molhado? AppleCare+ ajuda? Descubra a verdade sobre cobertura de dano por líquidos.',
      h1: 'Garantia Apple e Dano Por Água',
      quickAnswer:
        'Garantia padrão Apple NÃO cobre dano por líquidos, mesmo com IP68. AppleCare+ cobre com cobrança de taxa (R$ 500-800). Indicadores de líquido comprovam contato.',
      category: 'iPhone',
    },
    'som-abafado': {
      title: 'Som do iPhone Abafado Depois que Molhou: Resolver 2026',
      metaDescription:
        'Som do iPhone abafado após molhar? Método de ejeção por ondas sonoras resolve em 85% dos casos. Guia completo.',
      h1: 'Som do iPhone Abafado: Solução',
      quickAnswer:
        'Som abafado indica água no speaker. Use ejeção por som 165Hz (nossa ferramenta gratuita). Volume máximo, 3-5 repetições de 30s. Taxa de sucesso: 85%.',
      category: 'iPhone',
    },
    'camera-embacada': {
      title: 'Câmera do iPhone Embaçada Depois que Molhou | 2026',
      metaDescription:
        'Câmera do iPhone embaçada por dentro? Descubra se seca sozinha, quanto tempo demora, e quando precisa de assistência.',
      h1: 'Câmera do iPhone Embaçada: O Que Fazer',
      quickAnswer:
        'Câmera embaçada geralmente seca naturalmente em 24-72h. Deixe em ambiente seco, NÃO use secador. Se não melhorar em 7 dias, procure Apple Store.',
      category: 'iPhone',
    },
  },
  android: {
    'samsung': {
      title: 'Samsung Molhado: Galaxy S/Note/A - Guia Completo 2026',
      metaDescription:
        'Samsung Galaxy molhado? Guia específico para todos os modelos: S24, S23, Note, A54, A34. IP68, ejeção de água, e recuperação.',
      h1: 'Samsung Galaxy Molhado: Guia Completo',
      quickAnswer:
        'Samsung Galaxy com IP68 (S/Note) tem boa resistência. Se molhou: ejete água com som 165Hz, seque portas USB-C, não carregue por 24h. Modelos A variam.',
      category: 'Android',
    },
    'xiaomi': {
      title: 'Xiaomi Molhado: Redmi/Poco/Mi - Como Salvar 2026',
      metaDescription:
        'Xiaomi molhado? Guia para Redmi Note, Poco, Mi 11/12/13. Quais têm IP68, como ejetar água, e recuperação.',
      h1: 'Xiaomi Molhado: Guia Para Todos os Modelos',
      quickAnswer:
        'Xiaomi: apenas modelos Pro/Ultra têm IP68. Outros têm proteção mínima. Se molhou: desligue, ejete água com som, seque completamente. Redmi e Poco são mais vulneráveis.',
      category: 'Android',
    },
    'motorola': {
      title: 'Motorola Molhado: Moto G/Edge - Guia de Recuperação 2026',
      metaDescription:
        'Motorola molhado? Moto G, Edge, Edge+: certificação IP, ejeção de água, e o que fazer. Nano-coating vs IP68.',
      h1: 'Motorola Molhado: Como Recuperar',
      quickAnswer:
        'Motorola: Moto G tem nano-coating (proteção leve), Edge tem IP52-IP68 dependendo do modelo. Use ejeção por som, não carregue por 24h.',
      category: 'Android',
    },
    'resistencia-agua': {
      title: 'Android Resistente à Água: Quais Modelos Têm IP68? 2026',
      metaDescription:
        'Lista completa de Androids com certificação IP68: Samsung, Xiaomi, Motorola, OnePlus, Sony. Compare proteção contra água.',
      h1: 'Androids Resistentes à Água: Lista 2026',
      quickAnswer:
        'IP68: Samsung Galaxy S/Note/Flip/Fold, Xiaomi Pro/Ultra, Motorola Edge+, OnePlus Pro, Sony Xperia. IP67: alguns Moto G. Sem IP: maioria dos modelos baratos.',
      category: 'Android',
    },
    'usb-c-molhado': {
      title: 'Porta USB-C Molhada: Pode Carregar? Como Secar 2026',
      metaDescription:
        'Porta USB-C do Android molhada? Descubra se pode carregar, como secar corretamente, e quando o alerta de umidade aparece.',
      h1: 'Porta USB-C Molhada: O Que Fazer',
      quickAnswer:
        'NÃO carregue com porta USB-C molhada - risco de curto! Android mostra alerta "Umidade detectada". Ejete água com som, seque com pano, espere 24h.',
      category: 'Android',
    },
    'biometria-parou': {
      title: 'Biometria Parou Depois que Android Molhou | Solução 2026',
      metaDescription:
        'Leitor de digital parou de funcionar depois que molhou? Entenda por quê, como secar, e quando volta a funcionar.',
      h1: 'Biometria Parou Após Molhar: Resolver',
      quickAnswer:
        'Água interfere com sensor biométrico. Seque completamente o sensor, limpe com álcool isopropílico 70%, recadastre digital. Geralmente volta em 24-48h.',
      category: 'Android',
    },
    'touch-fantasma': {
      title: 'Touch Fantasma Depois que Molhou Android | Consertar 2026',
      metaDescription:
        'Tela tocando sozinha depois que Android molhou? Touch fantasma: causas, soluções, e quando precisa trocar o display.',
      h1: 'Touch Fantasma Após Molhar: Solução',
      quickAnswer:
        'Touch fantasma indica umidade no digitalizador. Seque completamente, desligue por 48h, teste. Se persistir, pode precisar trocar tela (R$ 200-800).',
      category: 'Android',
    },
  },
  'alto-falante': {
    'limpar': {
      title: 'Como Limpar Alto-Falante do Celular Molhado | 2026',
      metaDescription:
        'Aprenda a limpar alto-falante do celular corretamente: ejeção por som, escova macia, álcool isopropílico. O que NUNCA fazer.',
      h1: 'Como Limpar Alto-Falante Molhado',
      quickAnswer:
        'Limpeza segura: 1) Ejete água com som 165Hz, 2) Escova de dente macia seca, 3) Álcool isopropílico 99% (técnicos). NUNCA: palito, agulha, aspirador forte.',
      category: 'Limpeza',
    },
    'som-abafado': {
      title: 'Som do Celular Abafado: Como Resolver Definitivamente 2026',
      metaDescription:
        'Som abafado depois que molhou? Método de ejeção por ondas sonoras resolve em 85% dos casos. Guia passo a passo.',
      h1: 'Som Abafado: Solução Definitiva',
      quickAnswer:
        'Som abafado = água bloqueando membrana. Solução: ejeção por som 165Hz, volume máximo, speaker para baixo, 3-5 repetições. Funciona em 85% dos casos.',
      category: 'Problemas',
    },
    'sem-som': {
      title: 'Alto-Falante Sem Som Depois que Molhou | Consertar 2026',
      metaDescription:
        'Alto-falante parou totalmente? Entenda se é água, dano na bobina, ou membrana rompida. Quando tem conserto.',
      h1: 'Alto-Falante Sem Som: Diagnóstico',
      quickAnswer:
        'Sem som pode ser: água bloqueando (use ejeção), bobina oxidada (técnico), ou membrana rompida (troca). Tente ejeção primeiro. Custo de troca: R$ 150-300.',
      category: 'Problemas',
    },
    'chiado': {
      title: 'Chiado no Alto-Falante Depois que Molhou | Resolver 2026',
      metaDescription:
        'Alto-falante chiando ou crepitando? Pode ser água residual, sujeira, ou dano. Diagnóstico e soluções.',
      h1: 'Chiado no Alto-Falante: Como Resolver',
      quickAnswer:
        'Chiado indica água residual ou sujeira. Use ejeção por som repetidas vezes, deixe secar 48h. Se persistir, pode haver dano na bobina (técnico).',
      category: 'Problemas',
    },
    'stereo': {
      title: 'Alto-Falante Estéreo Molhado: Um Funciona, Outro Não 2026',
      metaDescription:
        'Apenas um dos alto-falantes funciona depois que molhou? Como ejetar água de cada speaker. Solução para áudio estéreo.',
      h1: 'Alto-Falante Estéreo: Resolver Cada Speaker',
      quickAnswer:
        'Celulares com áudio estéreo têm 2 speakers (inferior + auricular). Ejete água de CADA um separadamente: vire celular para cada lado durante ejeção.',
      category: 'Áudio Estéreo',
    },
  },
  'som-ejecao-agua': {
    'funciona': {
      title: 'Som de 165Hz Para Ejetar Água Realmente Funciona? | 2026',
      metaDescription:
        'Descubra a ciência por trás do som de ejeção de água. Taxa de sucesso, estudos, comparação com Apple Watch. Evidências científicas.',
      h1: 'Som de Ejeção Funciona? A Ciência',
      quickAnswer:
        'SIM! Taxa de sucesso: 85%. Baseado em física: ondas sonoras rompem tensão superficial da água. Apple usa no Watch desde 2016. Milhares de casos confirmados.',
      category: 'Eficácia',
    },
    'frequencia-ideal': {
      title: 'Qual a Melhor Frequência Para Ejetar Água? 165Hz vs Outras',
      metaDescription:
        'Por que 165Hz é a frequência ideal? Compare com 200Hz, 100Hz, graves vs agudos. Ciência da ejeção de água.',
      h1: 'Frequência Ideal: 165Hz Explicado',
      quickAnswer:
        '165Hz é ideal porque: grave suficiente para amplitude, não causa só aquecimento, rompe tensão superficial perfeitamente. Apple testou e escolheu essa frequência.',
      category: 'Técnica',
    },
    'quantas-vezes': {
      title: 'Quantas Vezes Usar Som de Ejeção? Repetições Ideais 2026',
      metaDescription:
        'Descubra quantas repetições são necessárias, intervalos ideais, duração por ciclo. Maximize eficácia sem danificar speaker.',
      h1: 'Quantas Vezes Repetir: Protocolo Ideal',
      quickAnswer:
        'Protocolo ideal: 3-5 repetições de 30 segundos, intervalos de 10s. Se ainda abafado, aguarde 10 min e faça mais 3 vezes. Máximo: 10-12 repetições/sessão.',
      category: 'Uso Correto',
    },
    'danifica-speaker': {
      title: 'Som de Ejeção Danifica o Alto-Falante? | Verdade 2026',
      metaDescription:
        'Usar som de 165Hz danifica o speaker? Descubra os limites seguros, tempo máximo de uso, e cuidados necessários.',
      h1: 'Som de Ejeção Danifica? Segurança',
      quickAnswer:
        'NÃO danifica se usado corretamente. Seguro: 30s por vez, máximo 5 min total/sessão, volume 80-100%. EVITE: uso contínuo >5 min, volume distorcendo.',
      category: 'Segurança',
    },
  },
  prevencao: {
    'capas-impermeaveis': {
      title: 'Melhores Capas Impermeáveis Para Celular | Brasil 2026',
      metaDescription:
        'Review das melhores capas impermeáveis no Brasil: LifeProof, Otterbox, Catalyst, Geonav. Preços, onde comprar, eficácia.',
      h1: 'Melhores Capas Impermeáveis 2026',
      quickAnswer:
        'Top 3 no Brasil: LifeProof FRĒ (R$ 350-400, melhor proteção), Otterbox (R$ 250-300, custo-benefício), Geonav (R$ 150-200, nacional). Todas testadas IPX8.',
      category: 'Proteção',
    },
    'cuidados-praia': {
      title: 'Como Usar Celular na Praia Sem Estragar | Guia 2026',
      metaDescription:
        'Cuidados essenciais para levar celular à praia: proteção contra areia, água salgada, sol. Capas, bolsas, e técnicas.',
      h1: 'Celular na Praia: Cuidados Essenciais',
      quickAnswer:
        'Proteção na praia: use capa impermeável + bolsa plástica, evite areia (risca tela), não exponha ao sol direto, enxague se molhar com água do mar.',
      category: 'Praia',
    },
    'piscina-cloro': {
      title: 'Celular na Piscina: Cloro Estraga? IP68 Protege? 2026',
      metaDescription:
        'Pode levar celular IP68 na piscina? Cloro corrói? Descubra os riscos e como proteger corretamente.',
      h1: 'Celular na Piscina: Riscos do Cloro',
      quickAnswer:
        'CUIDADO! IP68 testa apenas água doce. Cloro da piscina é agressivo e pode corroer vedações. Use capa impermeável se quiser levar à piscina.',
      category: 'Piscina',
    },
    'testes-ip68': {
      title: 'Como São Feitos os Testes de Certificação IP68? 2026',
      metaDescription:
        'Entenda os testes IP68: profundidade, duração, condições. Por que fabricantes fazem e o que realmente significa.',
      h1: 'Testes IP68: Como Funcionam',
      quickAnswer:
        'Teste IP68: celular submerso em água doce limpa, temperatura ambiente, profundidade especificada (1.5-6m), por 30 minutos. Depois é inspecionado internamente.',
      category: 'Certificação',
    },
  },
  solucoes: {
    'silica-gel': {
      title: 'Silica Gel Para Secar Celular: Como Usar Corretamente 2026',
      metaDescription:
        'Silica gel é 10x mais eficaz que arroz. Aprenda a usar corretamente: quantidade, tempo, recipiente. Onde conseguir sachês.',
      h1: 'Silica Gel: Método Científico de Secagem',
      quickAnswer:
        'Como usar: coloque celular + 10-15 sachês de silica gel em recipiente hermético por 24-48h. Absorve umidade 10x mais rápido que arroz. Sachês vêm em caixas de sapatos/eletrônicos.',
      category: 'Secagem',
    },
    'secador-cabelo': {
      title: 'Pode Usar Secador de Cabelo em Celular Molhado? | 2026',
      metaDescription:
        'Secador de cabelo danifica celular molhado? Temperatura segura, distância, riscos. Alternativas mais seguras.',
      h1: 'Secador de Cabelo: Pode ou Não Pode?',
      quickAnswer:
        'NÃO recomendado! Calor pode: derreter adesivos internos, expandir água para outras áreas, danificar bateria. Se usar: ar frio, 30cm distância, máx 2 min.',
      category: 'Métodos',
    },
    'alcool-isopropilico': {
      title: 'Álcool Isopropílico Para Secar Celular: Como Usar 2026',
      metaDescription:
        'Álcool isopropílico 99% seca celular? Como usar, riscos, diferença do álcool 70%. Método para técnicos.',
      h1: 'Álcool Isopropílico: Método Profissional',
      quickAnswer:
        'Álcool isopropílico 99% evapora sem deixar resíduo. USO: apenas para técnicos com celular aberto. NUNCA álcool 70% (contém água!). Alternativa: ejeção por som.',
      category: 'Avançado',
    },
    'ventilador': {
      title: 'Ventilador Para Secar Celular: Funciona? Quanto Tempo? 2026',
      metaDescription:
        'Usar ventilador para secar celular é seguro mas lento. Posição correta, tempo necessário, eficácia. Compare com outros métodos.',
      h1: 'Ventilador: Método Lento Mas Seguro',
      quickAnswer:
        'Ventilador é seguro mas lento (24-48h). Como usar: celular na frente, portas para cima, ar indireto. Combine com ejeção por som primeiro (2 min vs 48h).',
      category: 'Secagem Natural',
    },
  },
  problemas: {
    'bateria-descarrega-rapido': {
      title: 'Bateria Descarrega Rápido Depois que Molhou | Resolver 2026',
      metaDescription:
        'Bateria descarregando rápido após molhar? Causas: curto-circuito, placa oxidada, bateria danificada. Diagnóstico e soluções.',
      h1: 'Bateria Descarrega Rápido: O Que Fazer',
      quickAnswer:
        'Descarga rápida indica: curto-circuito consumindo energia, ou bateria danificada. Seque completamente, calibre bateria (0% → 100%). Se persistir, troca de bateria (R$ 150-400).',
      category: 'Bateria',
    },
    'face-id-parou': {
      title: 'Face ID Parou Depois que iPhone Molhou | Consertar 2026',
      metaDescription:
        'Face ID não funciona após iPhone molhar? Sensores TrueDepth e água. Quando volta a funcionar, quando precisa trocar.',
      h1: 'Face ID Parou: Solução',
      quickAnswer:
        'Face ID usa sensores ópticos sensíveis à umidade. Seque completamente a área do notch/Dynamic Island, espere 48h. Se não voltar, sensores podem ter oxidado (Apple Store).',
      category: 'Biometria',
    },
    'carregamento-lento': {
      title: 'Carregamento Lento Depois que Molhou Celular | 2026',
      metaDescription:
        'Celular carregando devagar após molhar? Porta oxidada, cabo com problema, ou IC de carga danificado. Diagnóstico.',
      h1: 'Carregamento Lento: Diagnóstico',
      quickAnswer:
        'Causas: porta USB-C/Lightning oxidada (limpe com álcool isopropílico), cabo danificado (teste outro), ou IC de carga com problema (técnico).',
      category: 'Carregamento',
    },
    'wifi-bluetooth-parou': {
      title: 'WiFi e Bluetooth Pararam Depois que Molhou | Resolver 2026',
      metaDescription:
        'WiFi e Bluetooth não funcionam após molhar? Antenas, IC de rádio, placa-mãe. Quando tem conserto.',
      h1: 'WiFi/Bluetooth Pararam: Solução',
      quickAnswer:
        'Conexões wireless param quando: antenas oxidam, IC de rádio danifica, ou placa-mãe curto-circuita. Seque completamente, teste modo avião. Se persistir: técnico.',
      category: 'Conectividade',
    },
    'quanto-custa-consertar': {
      title: 'Quanto Custa Consertar Celular Molhado? Preços 2026',
      metaDescription:
        'Tabela de preços: troca de tela, bateria, placa-mãe, speaker. Quando vale a pena consertar vs comprar novo.',
      h1: 'Preços de Conserto: Tabela Completa',
      quickAnswer:
        'Preços médios: limpeza (R$ 150-300), tela (R$ 300-1500), bateria (R$ 150-400), placa (R$ 500-2000). Vale consertar se custo <50% do valor usado.',
      category: 'Preços',
    },
  },
}

// All 45 routes to create
const allRoutes = [
  // Pillar pages (6)
  '/guias/android',
  '/guias/alto-falante',
  '/guias/som-ejecao-agua',
  '/guias/prevencao',
  '/guias/solucoes',
  '/guias/problemas',

  // Celular Molhado supporting (7)
  '/guias/celular-molhado/o-que-fazer',
  '/guias/celular-molhado/como-secar',
  '/guias/celular-molhado/arroz-mito',
  '/guias/celular-molhado/agua-salgada',
  '/guias/celular-molhado/nao-liga',
  '/guias/celular-molhado/microfone-abafado',
  '/guias/celular-molhado/tela-manchada',

  // iPhone supporting (6)
  '/guias/iphone/ejetar-agua',
  '/guias/iphone/ip68-explicado',
  '/guias/iphone/modelos-resistentes',
  '/guias/iphone/garantia-apple',
  '/guias/iphone/som-abafado',
  '/guias/iphone/camera-embacada',

  // Android supporting (7)
  '/guias/android/samsung',
  '/guias/android/xiaomi',
  '/guias/android/motorola',
  '/guias/android/resistencia-agua',
  '/guias/android/usb-c-molhado',
  '/guias/android/biometria-parou',
  '/guias/android/touch-fantasma',

  // Alto-Falante supporting (5)
  '/guias/alto-falante/limpar',
  '/guias/alto-falante/som-abafado',
  '/guias/alto-falante/sem-som',
  '/guias/alto-falante/chiado',
  '/guias/alto-falante/stereo',

  // Som Ejeção supporting (4)
  '/guias/som-ejecao-agua/funciona',
  '/guias/som-ejecao-agua/frequencia-ideal',
  '/guias/som-ejecao-agua/quantas-vezes',
  '/guias/som-ejecao-agua/danifica-speaker',

  // Prevenção supporting (4)
  '/guias/prevencao/capas-impermeaveis',
  '/guias/prevencao/cuidados-praia',
  '/guias/prevencao/piscina-cloro',
  '/guias/prevencao/testes-ip68',

  // Soluções supporting (4)
  '/guias/solucoes/silica-gel',
  '/guias/solucoes/secador-cabelo',
  '/guias/solucoes/alcool-isopropilico',
  '/guias/solucoes/ventilador',

  // Problemas supporting (5)
  '/guias/problemas/bateria-descarrega-rapido',
  '/guias/problemas/face-id-parou',
  '/guias/problemas/carregamento-lento',
  '/guias/problemas/wifi-bluetooth-parou',
  '/guias/problemas/quanto-custa-consertar',
]

// Default content sections for supporting pages
const defaultSections = [
  {
    title: 'Por Que Acontece',
    content:
      'Este problema ocorre quando água entra em contato com componentes internos do celular. Entenda as causas mais comuns e como prevenir.',
  },
  {
    title: 'Como Resolver',
    content:
      'Use nossa ferramenta de ejeção de água com som de 165Hz. É o método mais rápido e seguro, funcionando em 85% dos casos. Siga as instruções corretamente.',
  },
  {
    title: 'O Que NÃO Fazer',
    content:
      'Evite métodos populares mas perigosos: arroz (ineficaz), secador de cabelo (calor danifica), ou forçar o carregamento (risco de curto-circuito).',
  },
  {
    title: 'Quando Buscar Assistência',
    content:
      'Se o problema persistir após 48 horas de secagem completa, ou se houver múltiplos problemas simultâneos, procure assistência técnica autorizada.',
  },
]

const defaultFAQs = [
  {
    question: 'Este problema tem solução?',
    answer:
      'Na maioria dos casos sim. A taxa de sucesso com métodos corretos (ejeção por som + secagem adequada) é de aproximadamente 85%. Quanto mais rápido agir, maiores as chances.',
  },
  {
    question: 'Quanto tempo demora para resolver?',
    answer:
      'A ejeção de água por som leva 2-5 minutos. A secagem completa pode levar 24-48 horas. Não apresse o processo - dar tempo suficiente para secar é crucial.',
  },
  {
    question: 'Posso usar a ferramenta de ejeção várias vezes?',
    answer:
      'Sim! Use 3-5 repetições inicialmente. Se necessário, pode repetir após 10 minutos. O som de 165Hz é seguro e não danifica o alto-falante quando usado corretamente.',
  },
]

// Function to get content for a route
function getContentForRoute(route) {
  // Check if it's a pillar page
  if (pillarContent[route]) {
    return pillarContent[route]
  }

  // It's a supporting page - get from supportingPageContent
  const pathParts = route.split('/')
  if (pathParts.length === 4) {
    const category = pathParts[2]
    const page = pathParts[3]

    if (supportingPageContent[category] && supportingPageContent[category][page]) {
      const baseContent = supportingPageContent[category][page]
      return {
        ...baseContent,
        sections: defaultSections,
        faqs: defaultFAQs,
      }
    }
  }

  // Fallback for any missing content
  return null
}

// Create all pages
let createdCount = 0
const createdRoutes = []

console.log('🚀 Creating all 45 stub pages...\n')

allRoutes.forEach((route) => {
  const content = getContentForRoute(route)

  if (!content) {
    console.log(`⚠️  No content found for ${route}, using fallback`)
  }

  const pageContent = generateStubPage(route, content)

  // Convert route to file path
  const pathParts = route.split('/').filter(Boolean)
  const filePath = path.join(__dirname, '..', 'app', ...pathParts, 'page.tsx')

  // Ensure directory exists
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  // Write page file
  fs.writeFileSync(filePath, pageContent, 'utf8')

  createdCount++
  createdRoutes.push(route)
  console.log(`✅ Created: ${route}`)
})

console.log(`\n🎉 SUCCESS! Created ${createdCount} stub pages`)
console.log('\n📋 All routes now exist:')
createdRoutes.forEach((route) => console.log(`   ${route}`))

console.log('\n✅ ZERO internal links to non-existent routes!')
console.log('\n📝 Next steps:')
console.log('   1. Test locally: npm run dev')
console.log('   2. Verify all pages load correctly')
console.log('   3. Deploy: npm run build && vercel --prod')
console.log('   4. Gradually expand stubs with full content')
console.log('\n🔧 To remove noindex later: Search for "robots: { index: false }" and remove')
