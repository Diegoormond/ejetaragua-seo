import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import RelatedLinks from '@/components/RelatedLinks'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'iPhone Molhado: Guia Completo de Ejeção de Água e Recuperação 2026',
  description: 'Guia especializado para iPhone molhado: como ejetar água, resistência por modelo, garantia Apple Care, e tudo sobre certificação IP. Funciona em todos os modelos.',
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/iphone',
  },
  openGraph: {
    title: 'iPhone Molhado: Guia Completo 2026',
    description: 'Como recuperar iPhone molhado: ejeção de água, garantia, e proteção',
    url: 'https://www.ejetaragua.com/guias/iphone',
    type: 'article',
  },
}

const breadcrumbs = [
  { name: 'Guias', url: '/guias' },
  { name: 'iPhone', url: '/guias/iphone' },
]

const faqs = [
  {
    question: 'Todos os iPhones são resistentes à água?',
    answer: 'Não. Apenas iPhones a partir do iPhone 7 possuem algum nível de resistência à água. iPhone 7 e 8 têm certificação IP67 (1 metro por 30 minutos), enquanto iPhone X e modelos posteriores têm IP68 (profundidade varia de 2m a 6m dependendo do modelo). iPhone 6s e anteriores não têm resistência à água.',
  },
  {
    question: 'Como ejetar água do iPhone?',
    answer: 'O método mais eficaz é usar ondas sonoras de 165Hz, a mesma técnica do Apple Watch. Use nossa ferramenta gratuita: aumente o volume ao máximo, posicione o iPhone com alto-falante para baixo, e toque por 30 segundos. Repita 3-5 vezes. Você também pode criar um atalho no iOS com Siri Shortcuts para automatizar o processo.',
  },
  {
    question: 'A garantia Apple cobre dano por água?',
    answer: 'A garantia padrão da Apple NÃO cobre danos por líquido, mesmo em modelos com certificação IP. No entanto, o Apple Care+ com cobertura para danos acidentais cobre danos por água mediante pagamento de franquia (cerca de R$ 400-600 dependendo do modelo). A Apple verifica os indicadores de contato com líquido (LCI) para determinar se houve exposição à água.',
  },
  {
    question: 'Quanto tempo esperar para carregar iPhone molhado?',
    answer: 'Espere no mínimo 24 horas antes de carregar. Se aparecer o alerta "Líquido detectado no conector", não force o carregamento. Deixe o iPhone secar naturalmente em local ventilado. Use carregamento sem fio (MagSafe ou Qi) como alternativa emergencial, mas apenas se o exterior estiver completamente seco.',
  },
  {
    question: 'iPhone à prova d\'água pode molhar sem problema?',
    answer: 'CUIDADO: iPhone é resistente à água, não à prova d\'água. A certificação IP68 protege contra respingos e submersão acidental breve em água doce. NÃO protege contra: água salgada (praia/mar), água com produtos químicos (cloro de piscina), líquidos quentes, jatos de água de alta pressão, ou uso prolongado submerso. A resistência também diminui com o tempo devido ao desgaste das vedações.',
  },
  {
    question: 'Como saber se meu iPhone tem dano por água?',
    answer: 'Indicadores de contato com líquido (LCI) ficam vermelhos quando expostos à água. Localize o LCI na bandeja do SIM. Sintomas de dano: som abafado, microfone não funciona, câmera embaçada, tela com manchas, Face ID não responde, carregamento intermitente, bateria descarrega rápido, ou o iPhone não liga. Se múltiplos sintomas aparecerem, há provável dano interno.',
  },
  {
    question: 'Posso nadar com meu iPhone?',
    answer: 'Não é recomendado. Embora iPhones recentes tenham IP68, a Apple explicitamente NÃO recomenda nadar com o iPhone. Água de piscina contém cloro (corrosivo), água do mar contém sal (muito corrosivo), e a pressão da água ao nadar pode forçar entrada de líquido. Use uma capa impermeável específica se precisar levar o iPhone na água.',
  },
  {
    question: 'O que fazer se o aviso "Líquido detectado" aparecer?',
    answer: 'Não force o carregamento. Desconecte o cabo imediatamente. Posicione o iPhone com a porta Lightning/USB-C para baixo e dê leves batidas para drenar água. Use nossa ferramenta de ejeção de som. Deixe secar em local ventilado por 24-48h. O aviso some automaticamente quando a porta estiver seca. Em emergência, use carregamento sem fio.',
  },
  {
    question: 'Face ID para de funcionar com água?',
    answer: 'Temporariamente sim. Água na tela ou no módulo TrueDepth pode interferir com Face ID. Seque bem a tela e a área superior do iPhone. Use nossa ferramenta de ejeção para remover água do speaker superior (onde fica parte do Face ID). Se Face ID não voltar após 48h de secagem, pode haver dano nos sensores e você precisará de assistência técnica.',
  },
  {
    question: 'Qual iPhone é mais resistente à água?',
    answer: 'iPhone 15 Pro e iPhone 15 Pro Max têm a melhor proteção com IP68 (até 6 metros por 30 minutos). iPhone 14 Pro/Pro Max também têm IP68 até 6m. iPhone 14, 13, 12 têm IP68 até 6m. iPhone 11 Pro tem IP68 até 4m. iPhone XR, XS têm IP68 até 2m. iPhone X, 8, 7 têm IP67 até 1m. Todos os ratings são para água doce em condições de laboratório.',
  },
]

const relatedLinks = [
  {
    title: 'Como Ejetar Água do iPhone',
    url: '/guias/iphone/ejetar-agua',
    description: 'Método passo a passo com som 165Hz e atalho Siri Shortcuts',
  },
  {
    title: 'Water Eject Atalho no iPhone',
    url: '/guias/iphone/water-eject-atalho',
    description: 'Como criar atalho Water Eject seguro com Siri Shortcuts',
  },
  {
    title: 'Modo Expulsão de Água (Atalho iOS)',
    url: '/guias/iphone/modo-expulsao-agua',
    description: 'Como instalar e configurar atalho automático de ejeção',
  },
  {
    title: 'Alto-Falante iPhone Molhado',
    url: '/guias/iphone/alto-falante-molhado',
    description: 'Como resolver som abafado ou baixo após molhar',
  },
  {
    title: 'Resistência à Água por Modelo',
    url: '/guias/iphone/resistencia-agua',
    description: 'Tabela completa: certificação IP de cada iPhone',
  },
  {
    title: 'Garantia e Apple Care',
    url: '/guias/iphone/garantia-agua',
    description: 'O que a garantia cobre e como acionar Apple Care+',
  },
  {
    title: 'Modelos Resistentes',
    url: '/guias/iphone/modelos-resistentes',
    description: 'Qual iPhone comprar para melhor proteção contra água',
  },
]

export default function iPhonePage() {
  const publishDate = '2026-01-06'
  const updateDate = '6 de janeiro de 2026'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            createArticleSchema({
              title: 'iPhone Molhado: Guia Completo 2026',
              description: 'Guia especializado para recuperação de iPhone molhado',
              url: '/guias/iphone',
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
            iPhone Molhado: Guia Completo de Recuperação 2026
          </h1>
          <LastUpdated date={updateDate} />
          <p className="text-xl text-gray-600 leading-relaxed">
            Seu iPhone caiu na água? Este guia especializado ensina como ejetar água usando o método do Apple Watch,
            explica a resistência real de cada modelo, e mostra exatamente o que fazer para salvar seu aparelho.
          </p>
        </header>

        <CTABox
          title="Ejetar Água do iPhone Agora"
          description="Use nossa ferramenta com a mesma tecnologia do Apple Watch. Remove água em 2-5 minutos."
          buttonText="Abrir Ferramenta de Ejeção"
        />

        {/* Resposta Rápida */}
        <section className="prose prose-lg max-w-none mb-12 bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">⚡ Resposta Rápida</h2>
          <p className="mb-4">
            <strong>Se seu iPhone molhou agora:</strong>
          </p>
          <ol className="space-y-2 mb-0">
            <li>Desligue imediatamente (não teste se funciona)</li>
            <li>Seque o exterior com toalha macia</li>
            <li>Use a <a href="https://www.ejetaragua.com/?utm_source=guias&utm_medium=seo&utm_campaign=cta" className="text-primary font-semibold hover:underline">ferramenta de ejeção de água</a> (volume máximo, 3-5 vezes)</li>
            <li>Posicione com speaker para baixo por 1-2 horas</li>
            <li>NÃO carregue por 24 horas</li>
            <li>Se água salgada (praia/mar), procure assistência técnica imediatamente</li>
          </ol>
        </section>

        {/* Main Content */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Resistência à Água do iPhone: O Que Significa IP68
          </h2>

          <p>
            Desde o iPhone 7, a Apple incorporou resistência à água em seus aparelhos. Mas é fundamental entender:
            <strong> iPhone é resistente à água, NÃO é à prova d'água</strong>. Há uma diferença enorme.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            Tabela de Certificação IP por Modelo
          </h3>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Modelo</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Certificação</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Profundidade</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Tempo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">iPhone 15 Pro (Max)</td>
                  <td className="border border-gray-300 px-4 py-2">IP68</td>
                  <td className="border border-gray-300 px-4 py-2">Até 6 metros</td>
                  <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">iPhone 15 / 15 Plus</td>
                  <td className="border border-gray-300 px-4 py-2">IP68</td>
                  <td className="border border-gray-300 px-4 py-2">Até 6 metros</td>
                  <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">iPhone 14 Pro (Max)</td>
                  <td className="border border-gray-300 px-4 py-2">IP68</td>
                  <td className="border border-gray-300 px-4 py-2">Até 6 metros</td>
                  <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">iPhone 14 / 14 Plus</td>
                  <td className="border border-gray-300 px-4 py-2">IP68</td>
                  <td className="border border-gray-300 px-4 py-2">Até 6 metros</td>
                  <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">iPhone 13 (todos)</td>
                  <td className="border border-gray-300 px-4 py-2">IP68</td>
                  <td className="border border-gray-300 px-4 py-2">Até 6 metros</td>
                  <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">iPhone 12 (todos)</td>
                  <td className="border border-gray-300 px-4 py-2">IP68</td>
                  <td className="border border-gray-300 px-4 py-2">Até 6 metros</td>
                  <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">iPhone 11 Pro (Max)</td>
                  <td className="border border-gray-300 px-4 py-2">IP68</td>
                  <td className="border border-gray-300 px-4 py-2">Até 4 metros</td>
                  <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">iPhone 11 / XR / XS</td>
                  <td className="border border-gray-300 px-4 py-2">IP68</td>
                  <td className="border border-gray-300 px-4 py-2">Até 2 metros</td>
                  <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">iPhone X / 8 / 7</td>
                  <td className="border border-gray-300 px-4 py-2">IP67</td>
                  <td className="border border-gray-300 px-4 py-2">Até 1 metro</td>
                  <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">iPhone 6s e anteriores</td>
                  <td className="border border-gray-300 px-4 py-2">Sem proteção</td>
                  <td className="border border-gray-300 px-4 py-2">—</td>
                  <td className="border border-gray-300 px-4 py-2">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
            <p className="font-semibold text-yellow-900 mb-2">
              ⚠️ Importante: A resistência NÃO é permanente
            </p>
            <ul className="text-yellow-900 space-y-1">
              <li>• Vedações se desgastam com o tempo e uso</li>
              <li>• Quedas podem comprometer a proteção</li>
              <li>• Certificação é para água doce em condições de laboratório</li>
              <li>• Água salgada e produtos químicos NÃO estão cobertos</li>
              <li>• Apple não recomenda submersão intencional</li>
            </ul>
          </div>
        </section>

        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Como Ejetar Água do iPhone: Método Comprovado
          </h2>

          <p>
            O Apple Watch possui um recurso chamado "Water Lock" que expele água usando vibrações sonoras específicas.
            Podemos usar a mesma técnica no iPhone com excelentes resultados.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            Método 1: Ferramenta Online (Mais Fácil)
          </h3>

          <ol className="space-y-3">
            <li>Acesse a <a href="https://www.ejetaragua.com/?utm_source=guias&utm_medium=seo&utm_campaign=cta" className="text-primary font-semibold hover:underline">ferramenta de ejeção</a> no seu iPhone</li>
            <li>Aumente o volume do iPhone para 80-100%</li>
            <li>Posicione o iPhone com o alto-falante inferior voltado para baixo</li>
            <li>Toque no botão para iniciar a ejeção (30 segundos)</li>
            <li>Observe gotículas de água saindo do speaker</li>
            <li>Repita 3-5 vezes com pausas de 10 segundos</li>
          </ol>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            Método 2: Atalho Siri Shortcuts
          </h3>

          <p>
            Você pode criar um atalho personalizado para automatizar a ejeção de água. Veja o <a href="/guias/iphone/modo-expulsao-agua" className="text-primary font-semibold hover:underline">guia completo de atalho iOS</a> com instruções detalhadas.
          </p>
        </section>

        {/* Erros Comuns */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Erros Comuns Com iPhone Molhado
          </h2>

          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h3 className="text-xl font-semibold text-red-900 mb-2 mt-0">
                ❌ Erro #1: Confiar Demais na Certificação IP
              </h3>
              <p className="text-red-900 mb-0">
                Muitos usuários acham que IP68 significa "pode molhar sem problema". ERRADO. A certificação protege
                contra acidentes, mas não foi feita para uso intencional na água. A garantia NÃO cobre dano por líquido.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h3 className="text-xl font-semibold text-red-900 mb-2 mt-0">
                ❌ Erro #2: Carregar Imediatamente
              </h3>
              <p className="text-red-900 mb-0">
                Conectar o cabo Lightning/USB-C com a porta molhada pode causar curto-circuito. Espere 24 horas ou
                até o aviso "Líquido detectado" sumir. Use carregamento sem fio se urgente.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h3 className="text-xl font-semibold text-red-900 mb-2 mt-0">
                ❌ Erro #3: Usar Arroz
              </h3>
              <p className="text-red-900 mb-0">
                Arroz não funciona bem e pode deixar poeira/amido na porta Lightning. Use silica gel ou, melhor ainda,
                nosso método de ejeção por som que é 10x mais rápido.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h3 className="text-xl font-semibold text-red-900 mb-2 mt-0">
                ❌ Erro #4: Ignorar Aviso de Líquido
              </h3>
              <p className="text-red-900 mb-0">
                Se aparecer "Líquido detectado no conector", leve a sério. Forçar carregamento pode danificar
                permanentemente a porta ou causar curto na placa-mãe.
              </p>
            </div>
          </div>
        </section>

        {/* Quando Procurar Assistência */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Quando Procurar Assistência Técnica Autorizada
          </h2>

          <p>
            Procure uma Apple Store ou assistência autorizada imediatamente se:
          </p>

          <ul className="space-y-2">
            <li>
              <strong>Água salgada:</strong> Sal é extremamente corrosivo. Não espere - corrosão começa em horas
            </li>
            <li>
              <strong>Líquidos quentes:</strong> Podem danificar bateria e componentes internos rapidamente
            </li>
            <li>
              <strong>Produtos químicos:</strong> Água sanitária, detergente, perfume são mais agressivos que água
            </li>
            <li>
              <strong>Submersão prolongada:</strong> Mais de 30 minutos ou profundidade além da especificação
            </li>
            <li>
              <strong>Múltiplos sintomas:</strong> Face ID + microfone + câmera todos com problema = dano grave
            </li>
            <li>
              <strong>iPhone não liga após 48h:</strong> Provável curto-circuito ou dano na placa
            </li>
            <li>
              <strong>Cheiro de queimado:</strong> Sinal de curto-circuito ativo - desligue e leve ao técnico
            </li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-primary p-6 my-6">
            <p className="font-semibold text-gray-900 mb-2">
              💡 Apple Care+ e Dano por Água
            </p>
            <p className="text-gray-700 mb-2">
              Se você tem Apple Care+ com cobertura para danos acidentais, você pode trocar o iPhone mediante
              pagamento de franquia:
            </p>
            <ul className="text-gray-700 space-y-1 mb-0">
              <li>• iPhone Pro: ~R$ 600 de franquia</li>
              <li>• iPhone padrão: ~R$ 400-500 de franquia</li>
              <li>• Máximo 2 incidentes por 12 meses</li>
            </ul>
            <p className="text-gray-700 mt-3 mb-0">
              Veja mais detalhes no <a href="/guias/iphone/garantia-agua" className="text-primary font-semibold hover:underline">guia de garantia Apple</a>.
            </p>
          </div>
        </section>

        <CTABox />

        <RelatedLinks links={relatedLinks} title="Guias Relacionados iPhone" />

        <FAQ items={faqs} title="Perguntas Frequentes Sobre iPhone Molhado" />

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold mb-4">Explore Mais:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/guias/celular-molhado" className="block p-4 border border-gray-300 rounded-lg hover:border-primary hover:shadow-md transition">
              <h4 className="font-semibold text-primary">← Celular Molhado (Geral)</h4>
              <p className="text-sm text-gray-600">Guia universal para todos os celulares</p>
            </a>
            <a href="/guias/android" className="block p-4 border border-gray-300 rounded-lg hover:border-primary hover:shadow-md transition">
              <h4 className="font-semibold text-primary">Android Molhado →</h4>
              <p className="text-sm text-gray-600">Guia para Samsung, Xiaomi, Motorola e mais</p>
            </a>
          </div>
        </div>
      </article>
    </>
  )
}
