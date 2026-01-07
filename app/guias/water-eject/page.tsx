import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Water Eject: O Que É, Como Funciona e Quando Usar (2026)',
  description: 'Guia completo sobre Water Eject: origem no Apple Watch, como funciona o som 165Hz, quando usar para remover água do celular iPhone e Android com segurança.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/water-eject',
  },
  openGraph: {
    title: 'Water Eject: O Que É, Como Funciona e Quando Usar (2026)',
    description: 'Guia completo sobre Water Eject: origem no Apple Watch, como funciona o som 165Hz, quando usar para remover água do celular iPhone e Android com segurança.',
    url: 'https://www.ejetaragua.com/guias/water-eject',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
  { name: 'Guias', url: '/guias' },
  { name: 'Water Eject' },
]

const faqs = [
  {
    question: 'O que é Water Eject?',
    answer: 'Water Eject é um recurso do Apple Watch que expulsa água do alto-falante usando vibrações sonoras de baixa frequência (165Hz). O termo se popularizou e hoje também se refere a ferramentas web e apps que usam a mesma tecnologia em smartphones iPhone e Android.',
  },
  {
    question: 'Water Eject funciona em iPhone e Android?',
    answer: 'SIM. Embora o recurso nativo seja exclusivo do Apple Watch, o princípio físico (som 165Hz) funciona em QUALQUER celular com alto-falante. Basta reproduzir o som calibrado através do navegador ou app.',
  },
  {
    question: 'Qual a frequência do Water Eject?',
    answer: 'O Apple Watch usa 165Hz. Esta frequência foi escolhida por criar vibrações ideais para deslocar gotículas de água sem danificar componentes. Frequências muito altas ou baixas são menos eficazes.',
  },
  {
    question: 'Water Eject é seguro para o celular?',
    answer: 'SIM. O som 165Hz usado no Water Eject é calibrado para ser seguro. É a mesma tecnologia que a Apple usa em milhões de Apple Watches. Não danifica alto-falante, membrana ou circuitos internos quando usado corretamente.',
  },
  {
    question: 'Quanto tempo devo rodar o Water Eject?',
    answer: 'Recomendamos 3-5 ciclos de 30 segundos cada, com pausas de 10 segundos entre eles. Total: 2-5 minutos. Se após 5 ciclos ainda houver água, seque externamente com pano e repita depois de 30 minutos.',
  },
  {
    question: 'Water Eject substitui arroz ou sílica gel?',
    answer: 'SIM. Water Eject é muito mais eficaz que arroz (que não funciona) ou sílica gel (lento). O som 165Hz remove água do alto-falante em minutos, enquanto métodos passivos levam horas ou dias e podem deixar resíduos.',
  },
  {
    question: 'Posso usar Water Eject preventivamente?',
    answer: 'Não é necessário. Use Water Eject apenas QUANDO o celular molhar. Usar sem motivo não traz benefícios e desperdiça bateria. Reserve para situações reais de contato com água.',
  },
  {
    question: 'Water Eject funciona com água salgada?',
    answer: 'SIM, mas aja RÁPIDO. Water Eject remove a água, mas sal/minerais podem deixar resíduos corrosivos. Após usar Water Eject em água salgada, limpe externamente com pano úmido (água doce) e repita a ejeção.',
  },
  {
    question: 'Existe Water Eject nativo no iPhone?',
    answer: 'NÃO. O iPhone não tem recurso Water Eject nativo como o Apple Watch. Mas você pode criar um atalho Siri Shortcuts para acesso rápido, ou usar ferramentas web 165Hz que funcionam identicamente bem.',
  },
  {
    question: 'Por que o Apple Watch tem Water Eject mas o iPhone não?',
    answer: 'O Apple Watch é usado em natação/mergulho frequentemente, então a Apple incluiu o recurso nativo. O iPhone tem certificação IP68 mas é menos exposto à água, então a Apple não adicionou o recurso — mas a tecnologia funciona da mesma forma.',
  },
  {
    question: 'Water Eject consome muita bateria?',
    answer: 'NÃO. Um ciclo de 30 segundos consome menos de 0,5% da bateria. Mesmo 5 ciclos (2-5 minutos totais) consomem menos de 2%. É negligível comparado ao risco de deixar água no celular.',
  },
  {
    question: 'Quando NÃO devo usar Water Eject?',
    answer: 'Não use se: 1) Celular NÃO molhou (sem motivo), 2) Celular não liga (procure assistência), 3) Água entrou por tela rachada (risco de curto-circuito), 4) Já passaram mais de 48h (água evaporou ou já causou dano).',
  },
]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Water Eject: O Que É, Como Funciona e Quando Usar (2026)',
    description: 'Guia completo sobre Water Eject: origem no Apple Watch, como funciona o som 165Hz, quando usar para remover água do celular.',
    url: '/guias/water-eject',
    datePublished: '2026-01-07',
    dateModified: '2026-01-07',
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
            Water Eject: O Que É, Como Funciona e Quando Usar
          </h1>
          <LastUpdated date="7 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Resposta Rápida</h2>
          <p className="text-gray-800 leading-relaxed">
            <strong>Water Eject</strong> é um recurso do Apple Watch que expulsa água do alto-falante usando som de 165Hz. Embora nativo apenas no Watch, a mesma tecnologia funciona perfeitamente em iPhone e Android através de ferramentas web ou atalhos. É o método mais rápido e seguro para remover água de celulares molhados — sem arroz, sem calor, sem riscos.
          </p>
        </div>

        <CTABox
          title="Precisa Usar Water Eject Agora?"
          description="Use nossa ferramenta gratuita de Water Eject 165Hz para iPhone e Android. Remove água do alto-falante em 2-5 minutos."
          buttonText="Abrir Ferramenta de Water Eject"
          buttonUrl="https://www.ejetaragua.com/?utm_source=guias&utm_medium=seo&utm_campaign=cta"
        />

        {/* Table of Contents */}
        <nav className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Neste Guia</h2>
          <ul className="space-y-2">
            <li>
              <a href="#o-que-e" className="text-primary hover:underline">
                O que é Water Eject
              </a>
            </li>
            <li>
              <a href="#origem" className="text-primary hover:underline">
                Como surgiu: Apple Watch e a tecnologia 165Hz
              </a>
            </li>
            <li>
              <a href="#por-que-funciona" className="text-primary hover:underline">
                Por que Water Eject funciona: a ciência por trás
              </a>
            </li>
            <li>
              <a href="#celular" className="text-primary hover:underline">
                Water Eject funciona em celular? iPhone e Android
              </a>
            </li>
            <li>
              <a href="#diferencas" className="text-primary hover:underline">
                Diferenças: Apple Watch vs Celular
              </a>
            </li>
            <li>
              <a href="#quando-usar" className="text-primary hover:underline">
                Quando usar Water Eject
              </a>
            </li>
            <li>
              <a href="#o-que-nao-fazer" className="text-primary hover:underline">
                O que NÃO fazer: mitos e riscos
              </a>
            </li>
            <li>
              <a href="#passo-a-passo" className="text-primary hover:underline">
                Passo a passo seguro para usar Water Eject
              </a>
            </li>
            <li>
              <a href="#checklist" className="text-primary hover:underline">
                Checklist rápido
              </a>
            </li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          {/* O que é Water Eject */}
          <section id="o-que-e" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">O Que É Water Eject</h2>
            <p>
              <strong>Water Eject</strong> é um recurso desenvolvido pela Apple para o <strong>Apple Watch Series 2</strong> (2016) que expulsa água do alto-falante do relógio usando vibrações sonoras de baixa frequência.
            </p>
            <p>
              Quando ativado, o Apple Watch emite um som específico de <strong>165Hz</strong> que cria vibrações capazes de deslocar gotículas de água presas no alto-falante, expelindo-as para fora do dispositivo.
            </p>
            <p>
              O termo "Water Eject" se popularizou e hoje também se refere a:
            </p>
            <ul>
              <li>Ferramentas web que reproduzem o mesmo som 165Hz em smartphones</li>
              <li>Apps iOS e Android com função de ejeção de água</li>
              <li>Atalhos Siri Shortcuts que automatizam o processo no iPhone</li>
            </ul>
            <p>
              Embora o recurso <strong>nativo</strong> seja exclusivo do Apple Watch, a tecnologia por trás (som 165Hz) funciona em <strong>qualquer dispositivo</strong> com alto-falante — incluindo iPhone, Android, tablets e até laptops.
            </p>
          </section>

          {/* Como surgiu */}
          <section id="origem" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Como Surgiu: Apple Watch e a Tecnologia 165Hz</h2>
            <p>
              O Water Eject foi introduzido pela Apple em <strong>setembro de 2016</strong> com o lançamento do Apple Watch Series 2, o primeiro relógio da marca com certificação de resistência à água <strong>50 metros</strong> (5 ATM).
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">O Problema Original</h3>
            <p>
              O Apple Watch Series 2 foi projetado para natação e esportes aquáticos. Mas durante testes internos, a Apple descobriu um problema crítico:
            </p>
            <ul>
              <li>Água entrava no alto-falante durante natação/mergulho</li>
              <li>Gotículas ficavam presas na membrana do speaker</li>
              <li>Isso <strong>abafava o som</strong> e interferia em alertas/chamadas</li>
              <li>A água demorava horas para evaporar naturalmente</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">A Solução: Vibrações Sonoras Calibradas</h3>
            <p>
              A equipe de engenharia da Apple desenvolveu uma solução elegante: usar o próprio alto-falante para <strong>expulsar a água</strong> através de vibrações sonoras.
            </p>
            <p>
              Após extensos testes, a Apple determinou que a frequência ideal era <strong>165Hz</strong> — suficientemente baixa para criar vibrações fortes na membrana do speaker, mas sem risco de dano aos componentes.
            </p>
            <p>
              Quando o usuário ativa o Water Eject no Apple Watch:
            </p>
            <ol>
              <li>O relógio bloqueia a tela (para evitar toques acidentais)</li>
              <li>O alto-falante emite um tom de 165Hz por alguns segundos</li>
              <li>As vibrações deslocam gotículas de água para fora do dispositivo</li>
              <li>Água visível é expelida pelos orifícios do speaker</li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Por Que 165Hz?</h3>
            <p>
              A frequência de <strong>165Hz</strong> não foi escolhida aleatoriamente. Ela oferece o equilíbrio perfeito entre:
            </p>
            <ul>
              <li><strong>Potência vibratória:</strong> Suficiente para deslocar gotículas de água</li>
              <li><strong>Segurança:</strong> Não danifica a membrana do speaker nem componentes internos</li>
              <li><strong>Eficiência energética:</strong> Consome pouca bateria (crítico em dispositivos pequenos como o Watch)</li>
              <li><strong>Audível mas não desconfortável:</strong> O som é perceptível mas não causa desconforto auditivo</li>
            </ul>
          </section>

          {/* Por que funciona */}
          <section id="por-que-funciona" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Por Que Water Eject Funciona: A Ciência Por Trás</h2>
            <p>
              O Water Eject funciona através de princípios físicos bem estabelecidos de <strong>acústica</strong> e <strong>dinâmica de fluidos</strong>.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">1. Vibrações Sonoras e Ressonância</h3>
            <p>
              Quando o alto-falante reproduz um som, a <strong>membrana do speaker</strong> (diafragma) vibra para frente e para trás centenas de vezes por segundo. A frequência de 165Hz significa 165 vibrações por segundo.
            </p>
            <p>
              Essas vibrações criam ondas de <strong>pressão de ar</strong> que:
            </p>
            <ul>
              <li>Empurram as gotículas de água para fora do alto-falante</li>
              <li>Quebram a tensão superficial que mantém a água "presa"</li>
              <li>Criam um efeito de "catapulta" que expele água pelos orifícios</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">2. Tensão Superficial da Água</h3>
            <p>
              Água tem alta <strong>tensão superficial</strong>, o que faz com que gotículas "grudem" em superfícies. É por isso que água não sai facilmente do alto-falante apenas sacudindo o celular.
            </p>
            <p>
              As vibrações de 165Hz são fortes o suficiente para <strong>vencer essa tensão superficial</strong> e deslocar a água — algo que gravidade e movimentos manuais não conseguem fazer eficientemente.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">3. Por Que Não Funciona com Qualquer Som?</h3>
            <p>
              Você pode estar se perguntando: "Por que não posso simplesmente tocar música alta?"
            </p>
            <p>
              A diferença está na <strong>calibração</strong>:
            </p>
            <ul>
              <li><strong>Música:</strong> Contém múltiplas frequências (graves, médios, agudos) que se cancelam mutuamente. O efeito vibratório é irregular e ineficaz.</li>
              <li><strong>165Hz puro:</strong> É uma <strong>onda senoidal</strong> (tom puro) que cria vibrações consistentes e direcionadas. Toda a energia vai para o movimento da membrana.</li>
            </ul>
            <p>
              Pense em empurrar um balanço: impulsos regulares (165Hz) são muito mais eficazes que empurrões aleatórios (música).
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">4. Volume e Intensidade</h3>
            <p>
              O volume também importa. O Water Eject usa volume <strong>alto mas seguro</strong> (tipicamente 80-90% do máximo) para maximizar a amplitude das vibrações sem distorção que poderia danificar o speaker.
            </p>
          </section>

          {/* Funciona em celular */}
          <section id="celular" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Water Eject Funciona em Celular? iPhone e Android</h2>
            <p>
              <strong>SIM</strong>, o Water Eject funciona perfeitamente em smartphones — tanto iPhone quanto Android.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Por Que Funciona em Celular</h3>
            <p>
              O princípio físico é o mesmo do Apple Watch:
            </p>
            <ul>
              <li>Todos os smartphones têm alto-falantes com membrana vibrátil</li>
              <li>Todos conseguem reproduzir sons de 165Hz</li>
              <li>A física da água e vibrações é idêntica</li>
            </ul>
            <p>
              A diferença é que o iPhone e Android <strong>não têm o recurso nativo</strong> — você precisa usar uma ferramenta externa (web, app ou atalho).
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">iPhone</h3>
            <p>
              No iPhone, você tem três opções:
            </p>
            <ol>
              <li>
                <strong>Ferramenta web 165Hz</strong> (mais rápido): Abra no Safari e clique em "Ejetar Água". Funciona offline após o primeiro carregamento.
              </li>
              <li>
                <strong>Atalho Siri Shortcuts</strong>: Crie um atalho personalizado para acesso via "Ei Siri, ejetar água".
                <Link href="/guias/iphone/water-eject-atalho" className="text-primary hover:underline ml-1">
                  Veja o tutorial completo
                </Link>.
              </li>
              <li>
                <strong>Apps de terceiros</strong>: Disponíveis na App Store, mas muitos têm anúncios ou cobram.
              </li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Android</h3>
            <p>
              No Android, as opções são similares:
            </p>
            <ol>
              <li>
                <strong>Ferramenta web 165Hz</strong> (recomendado): Funciona em Chrome, Firefox, Samsung Internet, etc. Sem instalação necessária.
              </li>
              <li>
                <strong>Apps da Play Store</strong>: Existem vários, mas verifique avaliações — alguns usam frequências incorretas.
              </li>
              <li>
                <strong>Tasker/Automação</strong>: Usuários avançados podem criar automações personalizadas.
              </li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Eficácia: Celular vs Apple Watch</h3>
            <p>
              O Water Eject funciona <strong>igualmente bem</strong> em celulares e Apple Watch. A única diferença prática é a conveniência:
            </p>
            <ul>
              <li><strong>Apple Watch:</strong> Botão nativo integrado (mais conveniente)</li>
              <li><strong>Celular:</strong> Requer abrir ferramenta/app (extra 5-10 segundos)</li>
            </ul>
            <p>
              Em termos de <strong>eficácia de remoção de água</strong>, não há diferença — ambos usam o mesmo princípio de 165Hz.
            </p>
          </section>

          {/* Diferenças */}
          <section id="diferencas" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Diferenças: Apple Watch vs Celular</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                      Característica
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                      Apple Watch
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                      iPhone / Android
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Recurso Nativo</td>
                    <td className="px-6 py-4 text-sm text-gray-800">✅ SIM (Series 2+)</td>
                    <td className="px-6 py-4 text-sm text-gray-800">❌ NÃO (precisa ferramenta)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Frequência</td>
                    <td className="px-6 py-4 text-sm text-gray-800">165Hz (calibrado)</td>
                    <td className="px-6 py-4 text-sm text-gray-800">165Hz (via web/app)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Ativação</td>
                    <td className="px-6 py-4 text-sm text-gray-800">Botão nativo integrado</td>
                    <td className="px-6 py-4 text-sm text-gray-800">Ferramenta web ou atalho</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Eficácia</td>
                    <td className="px-6 py-4 text-sm text-gray-800">Alta</td>
                    <td className="px-6 py-4 text-sm text-gray-800">Alta (idêntica)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Conveniência</td>
                    <td className="px-6 py-4 text-sm text-gray-800">Imediata (1 toque)</td>
                    <td className="px-6 py-4 text-sm text-gray-800">Rápida (abrir ferramenta)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Custo</td>
                    <td className="px-6 py-4 text-sm text-gray-800">Incluído no Watch</td>
                    <td className="px-6 py-4 text-sm text-gray-800">Grátis (ferramentas web)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6">
              <strong>Conclusão:</strong> A diferença entre Apple Watch e celular é apenas de <strong>conveniência de acesso</strong>, não de eficácia. Ambos usam a mesma tecnologia 165Hz e removem água com a mesma eficiência.
            </p>
          </section>

          {/* Quando usar */}
          <section id="quando-usar" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quando Usar Water Eject</h2>
            <p>
              Use o Water Eject nas seguintes situações:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">✅ Cenários Recomendados</h3>
            <ul>
              <li>
                <strong>Celular caiu na água</strong> (piscina, vaso sanitário, copo, chuva forte)
              </li>
              <li>
                <strong>Respingos acidentais</strong> (pia, chuveiro, bebida derramada)
              </li>
              <li>
                <strong>Após natação/mergulho</strong> (se levou celular resistente à água)
              </li>
              <li>
                <strong>Som abafado do alto-falante</strong> (indicando água presa)
              </li>
              <li>
                <strong>Condensação interna</strong> (mudança brusca de temperatura)
              </li>
              <li>
                <strong>Chuva intensa</strong> (água entrou pelos orifícios)
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">⏱️ Timing Ideal</h3>
            <ul>
              <li>
                <strong>IMEDIATAMENTE</strong> após o celular molhar (quanto antes, melhor)
              </li>
              <li>
                Se não puder usar imediatamente: seque externamente com pano e use Water Eject assim que possível
              </li>
              <li>
                Evite esperar mais de <strong>30 minutos</strong> — água pode migrar para outros componentes
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">❌ Quando NÃO Usar</h3>
            <ul>
              <li>
                <strong>Celular não molhou:</strong> Usar Water Eject sem motivo não traz benefícios e desperdiça bateria
              </li>
              <li>
                <strong>Celular não liga:</strong> Se não liga, Water Eject não vai ajudar — procure assistência técnica
              </li>
              <li>
                <strong>Tela rachada com água:</strong> Risco de curto-circuito — desligue e leve à assistência
              </li>
              <li>
                <strong>Muito tempo depois (48h+):</strong> Água já evaporou ou causou dano — Water Eject não resolve danos existentes
              </li>
              <li>
                <strong>Alto-falante já danificado:</strong> Se speaker não emite som, não conseguirá ejetar água
              </li>
            </ul>
          </section>
        </div>

        <CTABox
          title="Experimente o Water Eject Agora"
          description="Nossa ferramenta usa o mesmo som 165Hz do Apple Watch. Funciona em iPhone e Android. Grátis e sem cadastro."
          buttonText="Usar Water Eject Gratuito"
          buttonUrl="https://www.ejetaragua.com/?utm_source=guias&utm_medium=seo&utm_campaign=cta"
        />

        <div className="prose prose-lg max-w-none">
          {/* O que NÃO fazer */}
          <section id="o-que-nao-fazer" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">O Que NÃO Fazer: Mitos e Riscos</h2>
            <p>
              Evite estes métodos populares mas <strong>perigosos ou ineficazes</strong>:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">❌ Arroz</h3>
            <p>
              <strong>MITO.</strong> Arroz NÃO absorve água de forma eficaz. Estudos mostram que deixar o celular ao ar livre seca mais rápido que arroz. Além disso:
            </p>
            <ul>
              <li>Pó de arroz pode entrar no dispositivo</li>
              <li>Demora 24-48h (água pode causar dano nesse tempo)</li>
              <li>Não remove água do alto-falante, apenas evapora lentamente</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">❌ Secador de Cabelo</h3>
            <p>
              <strong>PERIGOSO.</strong> Calor excessivo pode:
            </p>
            <ul>
              <li>Derreter componentes plásticos internos</li>
              <li>Danificar a bateria (risco de inchaço ou explosão)</li>
              <li>Empurrar água para áreas mais profundas do dispositivo</li>
              <li>Causar condensação interna (pior que água externa)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">❌ Micro-ondas / Forno</h3>
            <p>
              <strong>NUNCA FAÇA ISSO.</strong> Óbvio, mas precisa ser dito: celular no micro-ondas causa:
            </p>
            <ul>
              <li>Explosão da bateria</li>
              <li>Incêndio</li>
              <li>Destruição total do dispositivo</li>
              <li>Risco de ferimentos graves</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">❌ Aspirador de Pó</h3>
            <p>
              <strong>INEFICAZ.</strong> Aspirador não consegue sugar água de dentro do alto-falante porque:
            </p>
            <ul>
              <li>A tensão superficial mantém a água "presa"</li>
              <li>Orifícios do speaker são muito pequenos</li>
              <li>Pode gerar eletricidade estática (risco de dano)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">❌ Álcool Isopropílico (uso incorreto)</h3>
            <p>
              Álcool isopropílico 99% é seguro para <strong>técnicos</strong> limparem placas eletrônicas <strong>após desmontagem</strong>. Mas:
            </p>
            <ul>
              <li>NÃO despeje álcool em celular montado</li>
              <li>Pode danificar tela oleofóbica, vedações e adesivos</li>
              <li>Não remove água — apenas dilui</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">❌ Sacudir Violentamente</h3>
            <p>
              Sacudir o celular pode:
            </p>
            <ul>
              <li>Espalhar água para mais áreas internas</li>
              <li>Não remove água do alto-falante efetivamente</li>
              <li>Danificar componentes internos soltos (câmera OIS, por exemplo)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">✅ Alternativa Correta</h3>
            <p>
              Use <strong>Water Eject 165Hz</strong>. É o único método que:
            </p>
            <ul>
              <li>Remove água do alto-falante em minutos (não horas/dias)</li>
              <li>É 100% seguro (mesma tecnologia que Apple usa em milhões de Watches)</li>
              <li>Não requer desmontagem, calor, produtos químicos ou espera</li>
            </ul>
          </section>

          {/* Passo a passo */}
          <section id="passo-a-passo" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Passo a Passo Seguro Para Usar Water Eject</h2>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Protocolo Completo (5-10 minutos)</h3>
              <ol className="space-y-4">
                <li>
                  <strong>1. Seque externamente</strong>
                  <p className="text-gray-700 mt-1">Use pano seco/toalha para remover água da superfície. Seque especialmente ao redor dos orifícios (speaker, microfone, portas).</p>
                </li>
                <li>
                  <strong>2. Posicione o celular</strong>
                  <p className="text-gray-700 mt-1">Segure com o <strong>alto-falante voltado para baixo</strong> (gravidade ajuda). Se celular tem dois speakers (topo + base), faça uma vez para cada.</p>
                </li>
                <li>
                  <strong>3. Abra a ferramenta Water Eject</strong>
                  <p className="text-gray-700 mt-1">Acesse a ferramenta 165Hz no navegador ou use atalho Siri (se já configurou).</p>
                </li>
                <li>
                  <strong>4. Ajuste o volume</strong>
                  <p className="text-gray-700 mt-1">Configure volume para <strong>80-90%</strong> do máximo. Não use 100% (pode distorcer o som).</p>
                </li>
                <li>
                  <strong>5. Execute o ciclo</strong>
                  <p className="text-gray-700 mt-1">Clique em "Ejetar Água" e deixe tocar por <strong>30 segundos</strong>. Você verá/sentirá gotículas sendo expelidas.</p>
                </li>
                <li>
                  <strong>6. Seque novamente</strong>
                  <p className="text-gray-700 mt-1">Use pano seco para remover a água que foi expelida. Não pule esta etapa.</p>
                </li>
                <li>
                  <strong>7. Repita 3-5 vezes</strong>
                  <p className="text-gray-700 mt-1">Faça pausas de <strong>10 segundos</strong> entre cada ciclo. Total: 3-5 ciclos ou até não sair mais água.</p>
                </li>
                <li>
                  <strong>8. Teste o som</strong>
                  <p className="text-gray-700 mt-1">Toque uma música ou faça uma ligação de teste. Som deve estar claro, não abafado.</p>
                </li>
                <li>
                  <strong>9. Deixe secar naturalmente</strong>
                  <p className="text-gray-700 mt-1">Após Water Eject, deixe o celular em local ventilado por <strong>2-4 horas</strong> para secagem residual. Não use nesse período se possível.</p>
                </li>
              </ol>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Dicas Extras</h3>
            <ul>
              <li>
                <strong>Se celular tem 2 speakers:</strong> Repita o processo para cada um (speaker inferior e superior)
              </li>
              <li>
                <strong>Água salgada:</strong> Após Water Eject, limpe externamente com pano úmido (água doce) e repita a ejeção
              </li>
              <li>
                <strong>Se não sair água:</strong> Pode já ter evaporado ou não havia água no speaker — normal
              </li>
              <li>
                <strong>Som ainda abafado:</strong> Repita o processo depois de 30 minutos. Se persistir, pode haver dano no speaker
              </li>
            </ul>
          </section>

          {/* Checklist */}
          <section id="checklist" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Checklist Rápido: Water Eject em 2 Minutos</h2>
            <div className="bg-primary/5 border-2 border-primary rounded-lg p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">□</span>
                  <span>Celular molhou? Aja rápido (quanto antes, melhor)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">□</span>
                  <span>Seque externamente com pano (especialmente ao redor dos orifícios)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">□</span>
                  <span>Posicione celular com speaker voltado para baixo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">□</span>
                  <span>Abra ferramenta Water Eject 165Hz</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">□</span>
                  <span>Volume 80-90% (não 100%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">□</span>
                  <span>Execute 3-5 ciclos de 30s cada (pausas de 10s entre eles)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">□</span>
                  <span>Seque água expelida após cada ciclo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">□</span>
                  <span>Teste o som (deve estar claro, não abafado)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">□</span>
                  <span>Deixe secar naturalmente por 2-4h em local ventilado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">□</span>
                  <span>Se persistir: repita depois de 30 min ou procure assistência</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Links internos */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Guias Relacionados</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/guias/iphone/water-eject-atalho"
                className="block bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-primary transition"
              >
                <h3 className="font-bold text-gray-900 mb-2">Water Eject Atalho no iPhone</h3>
                <p className="text-gray-600 text-sm">
                  Como criar atalho Siri Shortcuts para Water Eject com comando de voz
                </p>
              </Link>
              <Link
                href="/guias/som-ejecao-agua"
                className="block bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-primary transition"
              >
                <h3 className="font-bold text-gray-900 mb-2">Som Para Tirar Água: 165Hz</h3>
                <p className="text-gray-600 text-sm">
                  Entenda a ciência por trás do som 165Hz e por que funciona
                </p>
              </Link>
              <Link
                href="/guias/iphone"
                className="block bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-primary transition"
              >
                <h3 className="font-bold text-gray-900 mb-2">Guias iPhone</h3>
                <p className="text-gray-600 text-sm">
                  Todos os guias sobre iPhone molhado, resistência à água e garantia
                </p>
              </Link>
              <Link
                href="/guias/android"
                className="block bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-primary transition"
              >
                <h3 className="font-bold text-gray-900 mb-2">Guias Android</h3>
                <p className="text-gray-600 text-sm">
                  Samsung, Xiaomi, Motorola e todas as marcas Android
                </p>
              </Link>
            </div>
          </section>
        </div>

        <FAQ items={faqs} />
      </article>
    </>
  )
}
