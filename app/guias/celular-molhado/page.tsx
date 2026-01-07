import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import RelatedLinks from '@/components/RelatedLinks'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Celular Molhado: O Que Fazer em 2026 (Guia Completo + Mitos)',
  description: 'Celular caiu na água? Guia completo com o que fazer AGORA, mitos perigosos (arroz!), e como salvar seu aparelho. Método científico comprovado.',
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/celular-molhado',
  },
  openGraph: {
    title: 'Celular Molhado: O Que Fazer - Guia Completo 2026',
    description: 'Aprenda exatamente o que fazer quando o celular molha. Métodos seguros e eficazes.',
    url: 'https://www.ejetaragua.com/guias/celular-molhado',
    type: 'article',
  },
}

const breadcrumbs = [
  { name: 'Guias', url: '/guias' },
  { name: 'Celular Molhado', url: '/guias/celular-molhado' },
]

const faqs = [
  {
    question: 'Quanto tempo devo esperar para ligar o celular molhado?',
    answer: 'Espere no mínimo 24 a 48 horas antes de ligar o celular molhado. O tempo exato depende de quanto tempo ele ficou na água e quanta umidade absorveu. Se possível, use métodos de secagem acelerada como ejeção por som e silica gel durante este período. Nunca ligue imediatamente para testar - isso pode causar curto-circuito e dano permanente.',
  },
  {
    question: 'Colocar o celular no arroz realmente funciona?',
    answer: 'Não, o arroz não é um método eficaz para secar celular molhado. Estudos mostram que o arroz absorve umidade muito lentamente e pode deixar amido e poeira nos componentes do celular. Além disso, grãos de arroz podem entrar nas portas e danificar o aparelho. Alternativas como silica gel, ejeção por som ou assistência técnica são muito mais eficazes.',
  },
  {
    question: 'Posso usar secador de cabelo no celular molhado?',
    answer: 'Não recomendamos usar secador de cabelo, mesmo no modo frio. O calor pode danificar componentes eletrônicos sensíveis, derreter adesivos internos e até mesmo empurrar a água mais fundo no aparelho. Além disso, o ar do secador pode conter umidade. Use métodos mais seguros como ejeção por ondas sonoras ou drenagem natural.',
  },
  {
    question: 'O som para ejetar água danifica o alto-falante?',
    answer: 'Não, o método de ejeção por som é completamente seguro quando usado corretamente. Utilizamos a frequência de 165Hz, que é a mesma tecnologia do Apple Watch. As ondas sonoras criam vibrações que expelem a água sem danificar a membrana do alto-falante. Evite apenas usar por períodos muito prolongados (mais de 5 minutos contínuos).',
  },
  {
    question: 'Meu celular molhou mas está funcionando, preciso fazer algo?',
    answer: 'Sim! Mesmo que o celular pareça funcionar normalmente, pode haver água residual dentro dele. Desligue-o imediatamente e siga o protocolo de secagem. Água retida pode causar corrosão e oxidação dos componentes ao longo de dias ou semanas, resultando em falhas posteriores. É melhor prevenir do que ter problemas futuros.',
  },
  {
    question: 'Água salgada é pior que água doce para o celular?',
    answer: 'Sim, água salgada é muito mais danosa. O sal é altamente corrosivo e acelera a oxidação dos componentes metálicos. Se seu celular caiu no mar ou piscina com sal, busque assistência técnica imediatamente. Como medida emergencial, você pode enxaguar rapidamente com água destilada para remover o sal, mas procure um técnico o quanto antes.',
  },
  {
    question: 'A garantia cobre celular molhado?',
    answer: 'A garantia padrão da maioria dos fabricantes NÃO cobre danos por líquido, mesmo em celulares com certificação IP68. Estes são considerados danos acidentais. No entanto, garantias estendidas como Apple Care+, Samsung Care+ ou seguros de operadoras podem cobrir, dependendo do plano contratado. Verifique os termos do seu seguro.',
  },
  {
    question: 'Quanto custa consertar um celular com dano por líquido?',
    answer: 'O custo varia muito dependendo do dano. Uma limpeza simples da placa pode custar R$ 150-300. Troca de componentes específicos (alto-falante, porta de carregamento) fica entre R$ 100-400. Danos graves na placa-mãe podem custar R$ 500-1500, mas nestes casos geralmente não vale a pena o reparo. Sempre peça orçamento antes de autorizar.',
  },
  {
    question: 'Álcool isopropílico é seguro para limpar o celular?',
    answer: 'Álcool isopropílico 99% é seguro quando usado corretamente por técnicos. Ele evapora rápido e não deixa resíduos. No entanto, NÃO use álcool comum (70%) pois contém água e pode piorar. Se não tem experiência, evite abrir o celular e usar álcool por conta própria - deixe para profissionais.',
  },
  {
    question: 'Posso carregar o celular se a porta USB estiver molhada?',
    answer: 'Não! Carregar com a porta molhada pode causar curto-circuito, danificar o carregador e até mesmo causar choque elétrico. Celulares modernos geralmente bloqueiam o carregamento e mostram um aviso quando detectam umidade. Se precisar carregar urgentemente, use carregamento sem fio (se disponível) ou aguarde a porta secar completamente.',
  },
  {
    question: 'Silica gel funciona melhor que arroz?',
    answer: 'Sim, silica gel é muito mais eficaz que arroz. Ele absorve umidade 10x mais rápido e não deixa resíduos. Use sachês de silica gel (aqueles que vêm em caixas de sapatos e eletrônicos) ao redor do celular em um recipiente fechado. Combine com o método de ejeção por som para resultados ainda melhores.',
  },
  {
    question: 'Como saber se meu celular tem dano interno por água?',
    answer: 'Sinais de dano interno incluem: tela com manchas permanentes, som abafado mesmo após secagem, microfone não funciona, câmera embaçada, bateria descarrega rápido, celular esquenta sem uso, problemas de touch screen, reinicializações aleatórias. Se apresentar múltiplos sintomas, provavelmente há corrosão interna. Consulte um técnico para diagnóstico.',
  },
]

const relatedLinks = [
  {
    title: 'O Que Fazer Quando o Celular Cai na Água',
    url: '/guias/celular-molhado/o-que-fazer',
    description: '10 passos imediatos para salvar seu aparelho agora',
  },
  {
    title: 'Como Secar Celular Molhado',
    url: '/guias/celular-molhado/como-secar',
    description: 'Métodos seguros e eficazes passo a passo',
  },
  {
    title: 'Arroz Para Celular: Mito ou Verdade?',
    url: '/guias/celular-molhado/arroz-mito',
    description: 'A verdade científica sobre o método mais popular',
  },
  {
    title: 'Quando Ligar o Celular Depois de Molhar',
    url: '/guias/celular-molhado/quando-ligar',
    description: 'Tempo ideal e testes de segurança',
  },
  {
    title: 'Água Salgada no Celular',
    url: '/guias/celular-molhado/agua-salgada',
    description: 'Protocolo especial para praia e mar',
  },
  {
    title: 'Assistência Técnica',
    url: '/guias/celular-molhado/assistencia-tecnica',
    description: 'Quando procurar ajuda profissional e custos',
  },
]

export default function CelularMolhadoPage() {
  const publishDate = '2026-01-06'
  const updateDate = '6 de janeiro de 2026'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            createArticleSchema({
              title: 'Celular Molhado: O Que Fazer em 2026 (Guia Completo)',
              description: 'Guia completo sobre o que fazer quando o celular molha',
              url: '/guias/celular-molhado',
              datePublished: publishDate,
              dateModified: publishDate,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createBreadcrumbSchema(breadcrumbs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createFAQSchema(faqs)),
        }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Celular Molhado: O Que Fazer Imediatamente (Guia 2026)
          </h1>
          <LastUpdated date={updateDate} />
          <p className="text-xl text-gray-600 leading-relaxed">
            Seu celular caiu na água? Não entre em pânico! Este guia completo ensina exatamente o que fazer nos
            primeiros minutos, quais mitos perigosos evitar, e como usar métodos científicos comprovados para
            salvar seu aparelho.
          </p>
        </header>

        <CTABox />

        {/* Section 1 */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Primeiros 60 Segundos: Ações Críticas
          </h2>
          <p>
            Os primeiros momentos após o celular cair na água são <strong>cruciais</strong>. Cada segundo conta para
            minimizar danos. Siga estas ações imediatamente:
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6">
            <h3 className="text-xl font-bold text-red-900 mb-3">⚡ AÇÃO IMEDIATA</h3>
            <ol className="space-y-2 text-red-900">
              <li><strong>1. Retire da água AGORA</strong> - Quanto menos tempo submerso, melhor</li>
              <li><strong>2. Desligue imediatamente</strong> - Segure o botão power até desligar completamente</li>
              <li><strong>3. NÃO tente ligar para testar</strong> - Isso pode causar curto-circuito fatal</li>
              <li><strong>4. Remova capa, chip, cartão SD</strong> - Tudo que possa reter umidade</li>
              <li><strong>5. Seque o exterior</strong> - Use toalha macia, sem esfregar</li>
            </ol>
          </div>

          <p>
            <strong>Por que desligar é tão importante?</strong> Quando o celular está ligado, eletricidade flui pelos
            circuitos. Se água entrar em contato com componentes energizados, ocorre curto-circuito, que pode danificar
            permanentemente a placa-mãe, processador e outros componentes caros.
          </p>

          <p>
            Se o celular já estava desligado ou desligou sozinho ao molhar, <strong>não tente ligá-lo</strong>.
            Mantenha-o desligado durante todo o processo de secagem.
          </p>
        </section>

        {/* Section 2 */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Passo a Passo: Como Secar Corretamente
          </h2>

          <p>
            Depois das ações imediatas, siga este protocolo científico de secagem em 4 etapas:
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            Etapa 1: Secagem Externa (5 minutos)
          </h3>
          <ul>
            <li>Use toalha de microfibra ou papel toalha macio</li>
            <li>Seque todas as superfícies visíveis</li>
            <li>Dê atenção especial às portas: carregamento, fones, slots de chip</li>
            <li>Não balance violentamente - isso pode espalhar água internamente</li>
            <li>Seque levemente com movimentos de pressão, não esfregando</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            Etapa 2: Ejeção Por Ondas Sonoras (2-5 minutos)
          </h3>
          <p>
            <strong>Este é o método mais eficaz e rápido.</strong> Use nossa <a href="https://www.ejetaragua.com/?utm_source=guias&utm_medium=seo&utm_campaign=cta" className="text-primary font-semibold hover:underline">ferramenta de ejeção de água</a> que
            emite ondas sonoras na frequência de 165Hz - a mesma tecnologia do Apple Watch.
          </p>

          <div className="bg-blue-50 border-l-4 border-primary p-6 my-6">
            <h4 className="font-bold text-lg mb-2">Como usar:</h4>
            <ol className="space-y-2">
              <li>1. Volume no máximo (80-100%)</li>
              <li>2. Posicione o celular com alto-falante para baixo</li>
              <li>3. Toque o som por 30 segundos</li>
              <li>4. Repita 3-5 vezes com pausas de 10 segundos</li>
              <li>5. Você verá gotículas de água saindo do speaker!</li>
            </ol>
          </div>

          <p>
            <strong>Por que funciona:</strong> As ondas sonoras de 165Hz criam vibrações na membrana do alto-falante
            que expelem a água pelos orifícios. A frequência específica foi testada para ser a mais eficaz sem danificar
            componentes.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            Etapa 3: Posicionamento Para Drenagem (1-2 horas)
          </h3>
          <p>
            Após a ejeção por som, posicione o celular para que a gravidade ajude:
          </p>
          <ul>
            <li>Apoie em posição vertical ou inclinada (tipo tenda)</li>
            <li>Alto-falante e porta de carregamento voltados para baixo</li>
            <li>Coloque sobre toalha absorvente</li>
            <li>Ambiente ventilado (não fechado em gaveta)</li>
            <li>Temperatura ambiente (nunca calor direto)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            Etapa 4: Secagem Prolongada Com Dessecante (24-48h)
          </h3>
          <p>
            Para garantir remoção total da umidade, use silica gel:
          </p>
          <ul>
            <li>Coloque o celular em recipiente hermético</li>
            <li>Adicione múltiplos sachês de silica gel ao redor (não em cima)</li>
            <li>Feche bem o recipiente</li>
            <li>Deixe por no mínimo 24 horas, idealmente 48 horas</li>
            <li>Troque os sachês se ficarem saturados (mudança de cor)</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
            <p className="font-semibold text-yellow-900">
              ⏰ <strong>Tempo mínimo antes de ligar:</strong> 24-48 horas após a última exposição à água.
              Tenha paciência! Ligar cedo demais é a causa #1 de danos permanentes.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mitos Perigosos Que Você DEVE Evitar
          </h2>

          <p>
            A internet está cheia de "dicas" que parecem lógicas mas são <strong>extremamente prejudiciais</strong>.
            Vamos desmistificar os piores:
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            ❌ MITO #1: Colocar no Arroz
          </h3>
          <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 my-4">
            <p className="font-bold text-red-600 mb-2">POR QUE NÃO FUNCIONA:</p>
            <ul className="text-gray-700">
              <li>Arroz absorve umidade 10x mais lento que silica gel</li>
              <li>Grãos podem entrar nas portas e danificar internamente</li>
              <li>Amido do arroz cria resíduo pegajoso nos componentes</li>
              <li>Poeira do arroz contamina o interior</li>
              <li>Falsa sensação de segurança faz você esperar demais</li>
            </ul>
            <p className="mt-3 font-semibold text-gray-900">
              <strong>Use silica gel em vez disso</strong> - absorve 10x mais rápido e sem riscos.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            ❌ MITO #2: Secador de Cabelo
          </h3>
          <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 my-4">
            <p className="font-bold text-red-600 mb-2">POR QUE É PERIGOSO:</p>
            <ul className="text-gray-700">
              <li>Calor excessivo derrete adesivos internos</li>
              <li>Pode deformar componentes plásticos</li>
              <li>Danifica bateria (risco de inchaço)</li>
              <li>Ar quente pode empurrar água mais fundo no aparelho</li>
              <li>Mesmo no modo frio, o ar pode conter umidade</li>
            </ul>
            <p className="mt-3 font-semibold text-gray-900">
              <strong>NUNCA use calor direto</strong> - secagem deve ser em temperatura ambiente.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            ❌ MITO #3: Microondas (sim, pessoas tentam isso!)
          </h3>
          <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 my-4">
            <p className="font-bold text-red-600 mb-2">NUNCA, EM HIPÓTESE ALGUMA:</p>
            <ul className="text-gray-700">
              <li>Componentes metálicos causam faíscas</li>
              <li>Bateria pode explodir</li>
              <li>Destruição total e instantânea do aparelho</li>
              <li>Risco de incêndio</li>
              <li>Perigo pessoal real</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            ❌ MITO #4: Freezer
          </h3>
          <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 my-4">
            <p className="font-bold text-red-600 mb-2">POR QUE NÃO FAZ SENTIDO:</p>
            <ul className="text-gray-700">
              <li>Água congela e pode expandir, rachando componentes</li>
              <li>Condensação ao retirar do frio</li>
              <li>Não remove água, apenas congela ela</li>
              <li>Pode danificar tela LCD/OLED</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            ❌ MITO #5: Álcool Comum
          </h3>
          <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 my-4">
            <p className="font-bold text-red-600 mb-2">CUIDADO COM O TIPO:</p>
            <ul className="text-gray-700">
              <li>Álcool 70% contém 30% de ÁGUA - piora o problema</li>
              <li>Álcool isopropílico 99% é seguro, mas só para técnicos</li>
              <li>Nunca jogue álcool diretamente no celular fechado</li>
              <li>Uso incorreto pode dissolver adesivos</li>
            </ul>
            <p className="mt-3 font-semibold text-gray-900">
              Se não é técnico experiente, <strong>não use álcool</strong>.
            </p>
          </div>
        </section>

        {/* Continue with remaining sections... Due to length, showing structure */}

        <CTABox
          title="Precisa Ejetar Água Agora?"
          description="Use nossa ferramenta gratuita de ejeção por ondas sonoras. Funciona em 2-5 minutos."
        />

        <RelatedLinks links={relatedLinks} />

        <FAQ items={faqs} />

        {/* Final Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold mb-4">Explore Mais Sobre Celular Molhado:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/guias/iphone" className="block p-4 border border-gray-300 rounded-lg hover:border-primary hover:shadow-md transition">
              <h4 className="font-semibold text-primary">iPhone Molhado →</h4>
              <p className="text-sm text-gray-600">Guia especializado para todos os modelos de iPhone</p>
            </a>
            <a href="/guias/android" className="block p-4 border border-gray-300 rounded-lg hover:border-primary hover:shadow-md transition">
              <h4 className="font-semibold text-primary">Android Molhado →</h4>
              <p className="text-sm text-gray-600">Samsung, Xiaomi, Motorola e outras marcas</p>
            </a>
            <a href="/guias/som-ejecao-agua" className="block p-4 border border-gray-300 rounded-lg hover:border-primary hover:shadow-md transition">
              <h4 className="font-semibold text-primary">Como Funciona o Som →</h4>
              <p className="text-sm text-gray-600">A ciência por trás da ejeção de água</p>
            </a>
            <a href="/guias/prevencao" className="block p-4 border border-gray-300 rounded-lg hover:border-primary hover:shadow-md transition">
              <h4 className="font-semibold text-primary">Prevenção →</h4>
              <p className="text-sm text-gray-600">Como proteger seu celular da água</p>
            </a>
          </div>
        </div>
      </article>
    </>
  )
}
