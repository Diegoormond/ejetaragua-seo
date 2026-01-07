import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Garantia Apple Cobre iPhone Molhado? Apple Care+ | 2026',
  description: 'Garantia Apple cobre água? Saiba tudo sobre Apple Care+, franquias, indicadores de líquido e como acionar cobertura para iPhone molhado.',
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/iphone/garantia-agua',
  },
  openGraph: {
    title: 'Garantia Apple Cobre iPhone Molhado? Apple Care+ | 2026',
    description: 'Garantia Apple cobre água? Saiba tudo sobre Apple Care+, franquias, indicadores de líquido e como acionar cobertura para iPhone molhado.',
    url: 'https://www.ejetaragua.com/guias/iphone/garantia-agua',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
  { name: 'Guias', url: '/guias' },
  { name: 'iPhone', url: '/guias/iphone' },
  { name: 'Garantia e Apple Care' },
]

const faqs = [
  {
    question: 'A garantia padrão da Apple cobre dano por água?',
    answer: 'NÃO. A garantia padrão Apple (1 ano) NÃO cobre danos por líquidos, mesmo em iPhones com certificação IP68. A garantia cobre apenas defeitos de fabricação. Se água entrar no iPhone, você terá que pagar pelo reparo, a menos que tenha Apple Care+ com cobertura para danos acidentais.',
  },
  {
    question: 'Apple Care+ cobre iPhone molhado?',
    answer: 'SIM, mas com cobrança de franquia. Apple Care+ com cobertura para danos acidentais cobre danos por líquidos. Você paga uma franquia de aproximadamente R$ 400-600 (iPhone padrão) ou R$ 600-800 (iPhone Pro). Você tem direito a 2 incidentes de dano acidental a cada 12 meses.',
  },
  {
    question: 'Como a Apple detecta que o iPhone molhou?',
    answer: 'Através dos Indicadores de Contato com Líquido (LCI). Todos os iPhones têm pequenos sensores que mudam de cor (branco para vermelho/rosa) quando expostos à água. O LCI fica na bandeja do SIM. Técnicos Apple verificam esses indicadores antes de aceitar reparos em garantia.',
  },
  {
    question: 'Quanto custa consertar iPhone molhado sem Apple Care+?',
    answer: 'Preços Apple Store Brasil (2026): iPhone 15 Pro Max: ~R$ 4.200, iPhone 15 Pro: ~R$ 3.800, iPhone 15: ~R$ 2.800, iPhone 14: ~R$ 2.400, iPhone 13: ~R$ 2.000. Assistências técnicas não-autorizadas podem cobrar menos (R$ 500-1.500), mas você perde garantia.',
  },
  {
    question: 'Posso acionar Apple Care+ depois que o iPhone molhou?',
    answer: 'NÃO. Apple Care+ deve ser comprado nos primeiros 60 dias após a compra do iPhone, ou no momento da compra. Você não pode comprar Apple Care+ depois que o iPhone já tem dano. A Apple verifica o estado do aparelho antes de ativar a cobertura.',
  },
  {
    question: 'Apple Care+ vale a pena para proteção contra água?',
    answer: 'Depende. Se você: frequenta praia/piscina, usa iPhone em ambientes úmidos, ou tem histórico de acidentes com água - vale a pena. Custo Apple Care+: R$ 800-1.200 por 2 anos vs custo de reparo sem seguro: R$ 2.000-4.200. Matemática favorece quem corre risco.',
  },
  {
    question: 'O que fazer se meu iPhone molhou e está na garantia?',
    answer: 'Use nossa ferramenta de ejeção de água IMEDIATAMENTE para minimizar danos. Seque completamente. Leve à Apple Store em até 48h. Se não tiver Apple Care+, prepare-se para pagar pelo reparo. Se tiver Apple Care+, informe sobre o incidente e pague a franquia. Não minta sobre o que aconteceu - LCI vai revelar contato com água.',
  },
]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Garantia Apple Cobre iPhone Molhado? Apple Care+ | 2026',
    description: 'Garantia Apple cobre água? Saiba tudo sobre Apple Care+, franquias, indicadores de líquido e como acionar cobertura.',
    url: '/guias/iphone/garantia-agua',
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
            Garantia Apple Cobre iPhone Molhado?
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Garantia padrão Apple NÃO cobre dano por água, mesmo com IP68. Apple Care+ SIM, mas com franquia de R$ 400-800.
            Indicadores de líquido (LCI) revelam exposição à água. Use nossa ferramenta de ejeção para minimizar danos antes de levar à assistência.
          </p>
        </div>

        {/* CTA to Tool */}
        <CTABox
          title="Minimize Danos Antes de Ir à Apple Store"
          description="Use nossa ferramenta de ejeção de água AGORA para remover líquido do alto-falante. Quanto menos água interna, menor o dano."
          buttonText="Abrir Ferramenta de Ejeção"
          buttonUrl="/"
        />

        {/* Content Sections */}
        <div className="prose prose-lg max-w-none mb-12">
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garantia Padrão Apple: O Que Cobre
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Todo iPhone novo vem com <strong>1 ano de garantia limitada Apple</strong>. Mas é crucial entender:
              essa garantia cobre APENAS defeitos de fabricação (bateria com problema de fábrica, tela com pixels mortos sem motivo, botões que param de funcionar sozinhos).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              A garantia padrão <strong className="text-red-600">NÃO cobre</strong>:
            </p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>❌ Danos por líquidos (água, café, refrigerante, etc.)</li>
              <li>❌ Quedas e tela quebrada</li>
              <li>❌ Arranhões e desgaste normal</li>
              <li>❌ Danos acidentais de qualquer tipo</li>
              <li>❌ Modificações não-autorizadas</li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
              <p className="font-semibold text-yellow-900 mb-2">
                ⚠️ Importante: Certificação IP68 ≠ Garantia
              </p>
              <p className="text-yellow-900 mb-0">
                Muitos usuários acham que como iPhone tem IP68, a garantia cobre água. ERRADO.
                A certificação IP68 significa que o iPhone <em>resiste</em> a água em condições específicas,
                mas a Apple deixa claro: danos por líquidos não estão cobertos pela garantia padrão.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Apple Care+: Cobertura Para Danos Acidentais
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Apple Care+</strong> é o seguro oficial da Apple. Existem dois tipos:
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              1. Apple Care+ Padrão
            </h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>✅ Estende garantia para 2 anos</li>
              <li>✅ Suporte técnico prioritário</li>
              <li>❌ NÃO cobre danos acidentais (incluindo água)</li>
              <li>💰 Custo: ~R$ 600-900 (dependendo do modelo)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              2. Apple Care+ com Cobertura para Danos Acidentais
            </h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>✅ Estende garantia para 2 anos</li>
              <li>✅ Suporte técnico prioritário</li>
              <li>✅ COBRE danos por líquidos</li>
              <li>✅ COBRE tela quebrada e outros danos</li>
              <li>✅ Até 2 incidentes por 12 meses</li>
              <li>💰 Custo: ~R$ 1.000-1.600 (dependendo do modelo)</li>
              <li>💸 Franquia por incidente: R$ 400-800</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-primary p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                💡 Como Funciona a Franquia
              </h3>
              <p className="text-gray-700 mb-2">
                Quando seu iPhone molha e você tem Apple Care+ com danos acidentais:
              </p>
              <ol className="text-gray-700 space-y-2 mb-0">
                <li><strong>1.</strong> Você leva o iPhone à Apple Store ou assistência autorizada</li>
                <li><strong>2.</strong> Técnico verifica o dano (LCI vai mostrar contato com água)</li>
                <li><strong>3.</strong> Você paga a franquia (R$ 400-800 dependendo do modelo)</li>
                <li><strong>4.</strong> Apple troca seu iPhone por um recondicionado ou conserta</li>
                <li><strong>5.</strong> Processo leva 3-7 dias úteis</li>
              </ol>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Indicadores de Contato com Líquido (LCI)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Todos os iPhones têm pequenos sensores chamados <strong>LCI (Liquid Contact Indicators)</strong>
              que mudam de cor quando expostos à água. É assim que a Apple detecta se o iPhone teve contato com líquido.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Onde Está o LCI
            </h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li><strong>iPhone 5 e posteriores:</strong> Na bandeja do SIM (lateral do iPhone)</li>
              <li><strong>Cor normal:</strong> Branco ou prata</li>
              <li><strong>Cor quando molhou:</strong> Vermelho ou rosa</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-4">
              Para verificar: remova a bandeja do SIM com a ferramenta ejetora. Olhe dentro do slot com uma lanterna.
              Se você ver uma cor avermelhada ou rosa, o LCI foi ativado.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6">
              <p className="font-semibold text-red-900 mb-2">
                ⚠️ Não Tente Enganar o Sistema
              </p>
              <p className="text-red-900 mb-0">
                Alguns usuários tentam "limpar" ou "resetar" o LCI. NÃO funciona e técnicos Apple são treinados para detectar
                tentativas de fraude. Além disso, há múltiplos LCI internos que só técnicos conseguem acessar.
                Seja honesto sobre o que aconteceu.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Custos de Reparo Sem Apple Care+
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Se você não tem Apple Care+ e o iPhone molhou, o reparo é caro. Apple Store Brasil (preços 2026):
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Modelo</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Reparo Sem Seguro</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Com Apple Care+</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">iPhone 15 Pro Max</td>
                    <td className="border border-gray-300 px-4 py-2">~R$ 4.200</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">R$ 700 (franquia)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">iPhone 15 Pro</td>
                    <td className="border border-gray-300 px-4 py-2">~R$ 3.800</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">R$ 700 (franquia)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">iPhone 15</td>
                    <td className="border border-gray-300 px-4 py-2">~R$ 2.800</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">R$ 500 (franquia)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">iPhone 14</td>
                    <td className="border border-gray-300 px-4 py-2">~R$ 2.400</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">R$ 500 (franquia)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">iPhone 13</td>
                    <td className="border border-gray-300 px-4 py-2">~R$ 2.000</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">R$ 450 (franquia)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Assistências técnicas não-autorizadas</strong> podem cobrar menos (R$ 500-1.500),
              mas você perde a garantia Apple e corre o risco de usar peças não-originais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vale a Pena Comprar Apple Care+?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depende do seu perfil. Apple Care+ compensa se você:
            </p>

            <h3 className="text-2xl font-semibold text-green-700 mt-6 mb-3">
              ✅ Vale a Pena Se Você:
            </h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>• Frequenta praia, piscina ou ambientes úmidos regularmente</li>
              <li>• Usa o iPhone em situações de risco (trabalho ao ar livre, esportes)</li>
              <li>• Tem histórico de acidentes com celulares</li>
              <li>• Comprou um iPhone caro (Pro/Pro Max)</li>
              <li>• Quer paz de espírito com cobertura total</li>
            </ul>

            <h3 className="text-2xl font-semibold text-red-700 mt-6 mb-3">
              ❌ Talvez Não Valha Se Você:
            </h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>• Cuida extremamente bem do celular</li>
              <li>• Usa capa protetora e película sempre</li>
              <li>• Evita situações de risco (água, quedas)</li>
              <li>• Tem iPhone mais barato (custo do seguro pode não compensar)</li>
              <li>• Prefere economizar e assumir o risco</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-primary p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                💰 Matemática: Vale a Pena?
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Exemplo iPhone 15 Pro:</strong>
              </p>
              <ul className="text-gray-700 space-y-1 mb-2">
                <li>• Apple Care+ por 2 anos: R$ 1.400</li>
                <li>• Franquia por incidente: R$ 700</li>
                <li>• <strong>Total se usar 1x em 2 anos: R$ 2.100</strong></li>
              </ul>
              <p className="text-gray-700 mb-2">
                <strong>Sem Apple Care+:</strong>
              </p>
              <ul className="text-gray-700 space-y-1 mb-0">
                <li>• Reparo fora de garantia: R$ 3.800</li>
                <li>• <strong>Economia com Apple Care+: R$ 1.700</strong></li>
              </ul>
              <p className="text-gray-700 mt-3 font-semibold">
                Se você usar o Apple Care+ uma única vez em 2 anos, já compensa financeiramente.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Acionar Apple Care+ Para iPhone Molhado
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Se seu iPhone molhou e você tem Apple Care+ com danos acidentais, siga estes passos:
            </p>

            <ol className="text-gray-700 space-y-3 mb-4">
              <li>
                <strong>1. Minimize o Dano Imediatamente</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Use nossa <a href="https://www.ejetaragua.com/?utm_source=guias&utm_medium=seo&utm_campaign=cta" className="text-primary font-semibold hover:underline">ferramenta de ejeção de água</a></li>
                  <li>• Seque o exterior completamente</li>
                  <li>• NÃO carregue por 24 horas</li>
                </ul>
              </li>
              <li>
                <strong>2. Agende com a Apple</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Acesse <a href="https://support.apple.com/pt-br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">support.apple.com/pt-br</a></li>
                  <li>• Escolha "Reparos e Danos Físicos"</li>
                  <li>• Selecione "Dano por Líquido"</li>
                  <li>• Agende visita à Apple Store ou envio pelo correio</li>
                </ul>
              </li>
              <li>
                <strong>3. Leve à Apple Store</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Leve o iPhone e documento de identidade</li>
                  <li>• Técnico vai verificar o dano</li>
                  <li>• Você paga a franquia (cartão de crédito/débito)</li>
                </ul>
              </li>
              <li>
                <strong>4. Aguarde o Reparo/Troca</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Apple pode consertar na hora (casos simples)</li>
                  <li>• Ou trocar por iPhone recondicionado (3-7 dias)</li>
                  <li>• iPhone recondicionado tem mesma garantia que novo</li>
                </ul>
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando Procurar Assistência Técnica
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mesmo sem Apple Care+, há situações onde você DEVE procurar assistência rapidamente:
            </p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>
                <strong className="text-red-600">Água salgada (mar/praia):</strong> Sal corrói componentes em horas.
                Enxague com água doce, use ejeção de som, e vá à Apple Store imediatamente.
              </li>
              <li>
                <strong className="text-red-600">Líquidos quentes:</strong> Podem danificar bateria e componentes
                sensíveis ao calor. Não tente ligar - leve ao técnico.
              </li>
              <li>
                <strong className="text-red-600">iPhone não liga após 48h:</strong> Provável curto-circuito ou
                dano grave na placa-mãe. Precisa de técnico especializado.
              </li>
              <li>
                <strong className="text-red-600">Múltiplos problemas:</strong> Face ID + câmera + microfone todos
                com problema = dano extenso. Avalie se compensa reparar.
              </li>
            </ul>
          </section>
        </div>

        {/* FAQ Section */}
        <FAQ items={faqs} />

        {/* Bottom CTA */}
        <div className="mt-12">
          <CTABox
            title="Ejetar Água do iPhone Agora"
            description="Use nossa ferramenta ANTES de levar à assistência. Quanto menos água interna, maior a chance de recuperação."
            buttonText="Abrir Ferramenta de Ejeção"
            buttonUrl="/"
          />
        </div>
      </article>
    </>
  )
}
