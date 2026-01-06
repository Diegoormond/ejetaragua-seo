import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Alto-Falante iPhone Molhado: Como Resolver Som Abafado 2026',
  description: 'Som do iPhone abafado depois que molhou? Aprenda a ejetar água do alto-falante com método Apple Watch. Solução em 2-5 minutos.',
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/iphone/alto-falante-molhado',
  },
  openGraph: {
    title: 'Alto-Falante iPhone Molhado: Como Resolver Som Abafado 2026',
    description: 'Som do iPhone abafado depois que molhou? Aprenda a ejetar água do alto-falante com método Apple Watch.',
    url: 'https://www.ejetaragua.com/guias/iphone/alto-falante-molhado',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
  { name: 'Guias', url: '/guias' },
  { name: 'iPhone', url: '/guias/iphone' },
  { name: 'Alto-Falante Molhado' },
]

const faqs = [
  {
    question: 'Por que o som do iPhone fica abafado depois que molha?',
    answer: 'Água bloqueia a membrana do alto-falante, impedindo que ela vibre corretamente. O resultado é som abafado, baixo, ou completamente silenciado. A água cria uma barreira física que absorve as vibrações sonoras. Quanto mais água, mais abafado o som fica.',
  },
  {
    question: 'Quanto tempo demora para o alto-falante secar sozinho?',
    answer: 'Secagem natural pode levar 24-72 horas dependendo da quantidade de água e umidade ambiente. PORÉM, nosso método de ejeção por som remove água em 2-5 minutos, sendo 20-30x mais rápido. Recomendamos não esperar pela secagem natural.',
  },
  {
    question: 'O som de ejeção danifica o alto-falante do iPhone?',
    answer: 'NÃO. A frequência de 165Hz é segura e foi testada pela Apple no Apple Watch desde 2016. Use volume máximo sem preocupação - o som foi projetado para expelir água sem danificar a membrana. Milhões de usos confirmam sua segurança.',
  },
  {
    question: 'E se o som não melhorar após ejeção?',
    answer: 'Se após 5-7 repetições de ejeção e 24h de secagem o som ainda está abafado, pode haver: (1) água em outro componente interno, (2) dano na membrana, ou (3) oxidação na bobina. Nesse caso, procure Apple Store para diagnóstico.',
  },
  {
    question: 'Qual alto-falante do iPhone tem mais problema com água?',
    answer: 'O alto-falante INFERIOR (onde você fala) é mais suscetível pois fica voltado para baixo. O speaker SUPERIOR (auricular) também pode ter água, mas drena mais facilmente por gravidade. Use ejeção em ambos virando o iPhone.',
  },
  {
    question: 'Posso usar palito ou cotonete para limpar?',
    answer: 'NUNCA! Palito pode perfurar a membrana do alto-falante causando dano permanente. Cotonete pode empurrar água para dentro ou deixar fiapos. Use APENAS ejeção por som - é seguro e muito mais eficaz.',
  },
]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Alto-Falante iPhone Molhado: Como Resolver Som Abafado 2026',
    description: 'Som do iPhone abafado depois que molhou? Método de ejeção por ondas sonoras 165Hz.',
    url: '/guias/iphone/alto-falante-molhado',
    datePublished: '2026-01-06',
    dateModified: '2026-01-06',
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
            Alto-Falante iPhone Molhado: Resolver Som Abafado
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Som abafado indica água no alto-falante. Solução: use ejeção por ondas sonoras 165Hz (mesma técnica do Apple Watch).
            Volume máximo, iPhone com speaker para baixo, 3-5 repetições. Remove água em 2-5 minutos. Taxa de sucesso: 85%.
          </p>
        </div>

        {/* CTA to Tool */}
        <CTABox
          title="Ejetar Água do Alto-Falante Agora"
          description="Ferramenta gratuita com som de 165Hz. Remove água em minutos, não em horas. Funciona em todos os iPhones."
          buttonText="Abrir Ferramenta de Ejeção"
          buttonUrl="/"
        />

        {/* Content Sections */}
        <div className="prose prose-lg max-w-none mb-12">
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por Que o Som Fica Abafado
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O alto-falante do iPhone funciona através de uma <strong>membrana vibrante</strong>. Quando você
              ouve som, a membrana vibra em frequências específicas criando ondas sonoras que chegam aos seus ouvidos.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Quando água entra no alto-falante:
            </p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>🌊 <strong>Água bloqueia a membrana</strong> - impede vibrações normais</li>
              <li>🔇 <strong>Som fica abafado</strong> - vibrações são absorvidas pela água</li>
              <li>📉 <strong>Volume diminui</strong> - menos energia sonora chega ao exterior</li>
              <li>🎵 <strong>Distorção aparece</strong> - frequências são alteradas pela água</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Quanto mais água, mais grave o problema. Em casos extremos, o som some completamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Método de Ejeção: Como Funciona
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Apple desenvolveu a técnica de ejeção por som para o Apple Watch Series 2. O relógio, projetado para
              natação, usa vibrações de 165Hz para expelir água após uso aquático.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Ciência por trás:</strong>
            </p>
            <ol className="text-gray-700 space-y-3 mb-4">
              <li>
                <strong>1. Ondas sonoras criam vibrações</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Som de 165Hz faz a membrana vibrar em frequência específica
                </p>
              </li>
              <li>
                <strong>2. Vibrações quebram tensão superficial</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Água tem tensão superficial que a "segura" no speaker. Vibrações quebram essa força
                </p>
              </li>
              <li>
                <strong>3. Água é expelida pelos orifícios</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Gotículas são forçadas para fora através dos furos do alto-falante
                </p>
              </li>
              <li>
                <strong>4. Membrana volta ao normal</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Sem água bloqueando, a membrana vibra livremente novamente
                </p>
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Usar a Ferramenta Corretamente
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Siga estes passos para máxima eficácia:
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Preparação:
            </h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>✅ Seque o exterior do iPhone com toalha macia</li>
              <li>✅ Remova capinha (se tiver)</li>
              <li>✅ Aumente volume para 80-100%</li>
              <li>✅ Desative modo silencioso</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Posicionamento:
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              iPhone tem <strong>dois alto-falantes</strong> (modelos com áudio estéreo):
            </p>
            <ul className="text-gray-700 space-y-3 mb-4">
              <li>
                <strong>📱 Speaker Inferior:</strong> Na parte de baixo (ao lado da porta Lightning/USB-C)
                <p className="text-sm text-gray-600 mt-1">
                  Posição: iPhone com parte inferior para baixo, ângulo 45°
                </p>
              </li>
              <li>
                <strong>📞 Speaker Superior (Auricular):</strong> No entalhe/Dynamic Island
                <p className="text-sm text-gray-600 mt-1">
                  Posição: iPhone com parte superior para baixo, ângulo 45°
                </p>
              </li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
              <p className="font-semibold text-yellow-900 mb-2">
                💡 Dica: Ejete Água de Ambos os Speakers
              </p>
              <p className="text-yellow-900 mb-0">
                Mesmo que apenas um pareça abafado, água pode estar em ambos. Faça ejeção com iPhone em 2 posições:
                primeiro inferior para baixo (3x), depois superior para baixo (3x).
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Execução:
            </h3>
            <ol className="text-gray-700 space-y-2 mb-4">
              <li><strong>1.</strong> Acesse a <a href="/" className="text-primary font-semibold hover:underline">ferramenta de ejeção</a></li>
              <li><strong>2.</strong> Posicione iPhone com speaker para baixo (45°)</li>
              <li><strong>3.</strong> Toque no botão de ejeção</li>
              <li><strong>4.</strong> Som de 165Hz toca por 30 segundos</li>
              <li><strong>5.</strong> Observe gotículas de água saindo</li>
              <li><strong>6.</strong> Pause 10 segundos</li>
              <li><strong>7.</strong> Repita 3-5 vezes</li>
              <li><strong>8.</strong> Vire iPhone e repita para o outro speaker</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sinais de Que Está Funcionando
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Você saberá que a ejeção está funcionando quando:
            </p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>💧 <strong>Gotículas visíveis:</strong> Você vê água saindo dos orifícios do speaker</li>
              <li>🔊 <strong>Som melhora gradualmente:</strong> A cada repetição o áudio fica mais claro</li>
              <li>📈 <strong>Volume aumenta:</strong> Som vai ficando mais alto naturalmente</li>
              <li>🎵 <strong>Menos distorção:</strong> Música e voz ficam mais nítidas</li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
              <p className="font-semibold text-green-900 mb-2">
                ✅ Sucesso Completo Quando:
              </p>
              <ul className="text-green-900 space-y-1 mb-0">
                <li>• Som volta ao volume normal</li>
                <li>• Sem distorção ou chiado</li>
                <li>• Graves e agudos claros</li>
                <li>• Música toca perfeitamente</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que NÃO Fazer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Evite estes métodos populares mas perigosos:
            </p>

            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-2 mt-0">
                  ❌ Palito ou Agulha
                </h3>
                <p className="text-red-900 mb-0">
                  NUNCA use palito, agulha, ou objeto pontiagudo. Você pode perfurar a membrana do alto-falante
                  causando dano permanente. Reparo custa R$ 300-800.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-2 mt-0">
                  ❌ Aspirador de Pó
                </h3>
                <p className="text-red-900 mb-0">
                  Sucção forte pode danificar a bobina do speaker ou criar eletricidade estática que danifica
                  componentes internos. Além disso, não remove água eficientemente.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-2 mt-0">
                  ❌ Secador de Cabelo
                </h3>
                <p className="text-red-900 mb-0">
                  Calor pode derreter adesivos internos, expandir água para outras áreas, ou danificar a bateria.
                  A Apple explicitamente avisa contra uso de calor.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-2 mt-0">
                  ❌ Arroz
                </h3>
                <p className="text-red-900 mb-0">
                  Arroz é lento (24-48h vs 2-5 min do som) e pode deixar amido/poeira nos alto-falantes.
                  Grãos podem até entrar na porta Lightning causando mais problemas.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-2 mt-0">
                  ❌ Bater o iPhone
                </h3>
                <p className="text-red-900 mb-0">
                  Bater o iPhone com força pode soltar componentes internos, quebrar soldas, ou rachar a tela.
                  Leves batidas na palma da mão são OK, mas nada violento.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              E Se Não Melhorar?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Se após seguir todos os passos o som continua abafado:
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Passo 1: Tente Mais Vezes
            </h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>• Faça mais 5-7 repetições de ejeção</li>
              <li>• Certifique-se que volume está no máximo</li>
              <li>• Varie o ângulo do iPhone (30°, 45°, 90°)</li>
              <li>• Tente com iPhone em posições diferentes</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Passo 2: Dê Tempo Para Secar
            </h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>• Deixe iPhone em local seco e ventilado por 24h</li>
              <li>• Posicione com speaker para baixo</li>
              <li>• Use silica gel (sachês que vêm em caixas de sapato)</li>
              <li>• Não carregue por 24h</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Passo 3: Diagnóstico de Dano
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Se após 48h o problema persiste, pode haver:
            </p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>
                <strong>Oxidação na bobina:</strong> Água corrói componentes metálicos internos
              </li>
              <li>
                <strong>Membrana danificada:</strong> Perfuração ou deformação permanente
              </li>
              <li>
                <strong>Curto-circuito:</strong> Água causou problema elétrico
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Solução:</strong> Procure Apple Store ou assistência autorizada. Custo de troca do módulo
              de alto-falante: R$ 300-800 dependendo do modelo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prevenção: Como Evitar Água no Speaker
            </h2>
            <ul className="text-gray-700 space-y-3 mb-4">
              <li>
                <strong>🏊 Evite nadar com iPhone:</strong> Mesmo modelos IP68. Pressão da água pode forçar entrada
              </li>
              <li>
                <strong>🛁 Cuidado no banheiro:</strong> Vapor d'água durante banho quente pode entrar nos speakers
              </li>
              <li>
                <strong>🏖️ Proteção na praia:</strong> Use bolsa plástica impermeável. Areia + água são devastadores
              </li>
              <li>
                <strong>🏊 Piscina:</strong> Cloro é corrosivo. Se molhar, enxague com água doce imediatamente
              </li>
              <li>
                <strong>🧼 Limpeza:</strong> Não use água para limpar. Álcool 70% em pano é melhor opção
              </li>
            </ul>
          </section>
        </div>

        {/* FAQ Section */}
        <FAQ items={faqs} />

        {/* Bottom CTA */}
        <div className="mt-12">
          <CTABox
            title="Ejetar Água do Alto-Falante Agora"
            description="Não espere! Quanto mais rápido remover a água, menor o risco de dano permanente."
            buttonText="Abrir Ferramenta de Ejeção"
            buttonUrl="/"
          />
        </div>
      </article>
    </>
  )
}
