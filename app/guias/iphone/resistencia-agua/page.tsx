import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Resistência à Água iPhone: Tabela IP67/IP68 Por Modelo 2026',
  description: 'Tabela completa de certificação IP de todos os iPhones. Descubra profundidade, tempo, e limitações reais da resistência à água.',
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/iphone/resistencia-agua',
  },
  openGraph: {
    title: 'Resistência à Água iPhone: Tabela IP67/IP68 Por Modelo 2026',
    description: 'Tabela completa de certificação IP de todos os iPhones. Profundidade, tempo, e limitações.',
    url: 'https://www.ejetaragua.com/guias/iphone/resistencia-agua',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
  { name: 'Guias', url: '/guias' },
  { name: 'iPhone', url: '/guias/iphone' },
  { name: 'Resistência à Água' },
]

const faqs = [
  {
    question: 'Qual iPhone é mais resistente à água?',
    answer: 'iPhone 15 Pro/Pro Max: IP68 até 6m. iPhone 12-14: IP68 até 6m. iPhone 11 Pro: IP68 até 4m. iPhone XR/XS: IP68 até 2m (XR é IP67 até 1m). iPhone 7/8/X: IP67 até 1m. MAS: em prática, diferença de profundidade raramente importa - Apple não recomenda nenhum para natação.'
  },
  {
    question: 'IP68 significa à prova d\'água?',
    answer: 'NÃO. IP68 = RESISTENTE em condições controladas (água doce, parada, 30min max). NÃO é à prova d\'água. NÃO cobre: água salgada, cloro, pressão/movimento, temperaturas extremas, ou garantia de cobertura.'
  },
  {
    question: 'Qual é a melhor opção entre comprar iPhone com IP68 mais alto?',
    answer: 'Na prática: NÃO compre APENAS por IP68. Todos IP68 (12+) protegem igualmente bem contra respingos/chuva. Diferença 2m vs 6m não importa se você não nada. Priorize: câmera, processador, preço. IP68 é bônus, não razão principal.'
  },
  {
    question: 'A resistência à água diminui com o tempo?',
    answer: 'SIM, significativamente. Vedações degradam em 2-3 anos. Um iPhone novo tem 100% proteção, aos 3 anos pode ter 60%. Causas: uso diário, quedas, químicos (perfume), umidade, temperatura. Proteção NUNCA aumenta, sempre diminui.'
  },
  {
    question: 'Qual diferença entre IP67 e IP68?',
    answer: 'IP67: até 1 metro por 30 min. IP68: até 2m/4m/6m por 30 min (depende do modelo). Na prática para uso cotidiano: ambos protegem igualmente contra chuva, respingos, quedas acidentais. Diferença importa só em cenários extremos (mergulho, nado).'
  },
  {
    question: 'Devo ter medo de molhar iPhone IP68?',
    answer: 'NÃO tema, mas não confie. Água acidental não danificará. Mas: evite nadar, cloro, sal, jatos fortes. Se molhar: use ferramenta de ejeção imediatamente, deixe secar 24-48h. Proteção existe, mas não é infinita.'
  },
  {
    question: 'Se iPhone 7/8 com IP67 molhar, tenho esperança?',
    answer: 'SIM! IP67 ainda protege bem contra acidentes. Ejete água imediatamente, deixe secar 24-48h, provavelmente recuperará totalmente. Diferença IP67 vs IP68 raramente importa em emergências - ação rápida é que salva.'
  }
]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Resistência à Água iPhone: Tabela IP67/IP68 Por Modelo 2026',
    description: 'Tabela completa de certificação IP de todos os iPhones com profundidade e tempo.',
    url: '/guias/iphone/resistencia-agua',
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
            Resistência à Água iPhone: Tabela Completa
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            iPhone 15 Pro/Pro Max: IP68 até 6m. iPhone 12-14: IP68 até 6m. iPhone 11 Pro: IP68 até 4m.
            iPhone XR/XS: IP68 até 2m. iPhone 7-X: IP67 até 1m. iPhone 6s e anteriores: SEM proteção.
            IMPORTANTE: resistência diminui com tempo e quedas.
          </p>
        </div>

        {/* CTA to Tool */}
        <CTABox
          title="iPhone Molhou? Ejete Água Agora"
          description="Mesmo com IP68, água pode entrar. Use nossa ferramenta para remover líquido antes que cause dano."
          buttonText="Abrir Ferramenta de Ejeção"
          buttonUrl="/"
        />

        {/* Content Sections */}
        <div className="prose prose-lg max-w-none mb-12">
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tabela Completa de Certificação IP
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Desde o iPhone 7 (2016), a Apple adiciona resistência à água em seus smartphones.
              Veja a certificação exata de cada modelo:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Modelo iPhone</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Certificação</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Profundidade Máx</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Tempo Máx</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Ano Lançamento</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">iPhone 15 Pro Max</td>
                    <td className="border border-gray-300 px-4 py-2">IP68</td>
                    <td className="border border-gray-300 px-4 py-2">6 metros</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2023</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">iPhone 15 Pro</td>
                    <td className="border border-gray-300 px-4 py-2">IP68</td>
                    <td className="border border-gray-300 px-4 py-2">6 metros</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2023</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">iPhone 15 Plus</td>
                    <td className="border border-gray-300 px-4 py-2">IP68</td>
                    <td className="border border-gray-300 px-4 py-2">6 metros</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2023</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">iPhone 15</td>
                    <td className="border border-gray-300 px-4 py-2">IP68</td>
                    <td className="border border-gray-300 px-4 py-2">6 metros</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2023</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">iPhone 14 Pro Max</td>
                    <td className="border border-gray-300 px-4 py-2">IP68</td>
                    <td className="border border-gray-300 px-4 py-2">6 metros</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2022</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">iPhone 14 Pro</td>
                    <td className="border border-gray-300 px-4 py-2">IP68</td>
                    <td className="border border-gray-300 px-4 py-2">6 metros</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2022</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">iPhone 14 Plus</td>
                    <td className="border border-gray-300 px-4 py-2">IP68</td>
                    <td className="border border-gray-300 px-4 py-2">6 metros</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2022</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">iPhone 14</td>
                    <td className="border border-gray-300 px-4 py-2">IP68</td>
                    <td className="border border-gray-300 px-4 py-2">6 metros</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2022</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">iPhone 13 Pro Max</td>
                    <td className="border border-gray-300 px-4 py-2">IP68</td>
                    <td className="border border-gray-300 px-4 py-2">6 metros</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2021</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">iPhone 13 Pro</td>
                    <td className="border border-gray-300 px-4 py-2">IP68</td>
                    <td className="border border-gray-300 px-4 py-2">6 metros</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2021</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">iPhone 13 / 13 Mini</td>
                    <td className="border border-gray-300 px-4 py-2">IP68</td>
                    <td className="border border-gray-300 px-4 py-2">6 metros</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2021</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">iPhone 12 Pro Max</td>
                    <td className="border border-gray-300 px-4 py-2">IP68</td>
                    <td className="border border-gray-300 px-4 py-2">6 metros</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2020</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">iPhone 12 Pro</td>
                    <td className="border border-gray-300 px-4 py-2">IP68</td>
                    <td className="border border-gray-300 px-4 py-2">6 metros</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2020</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">iPhone 12 / 12 Mini</td>
                    <td className="border border-gray-300 px-4 py-2">IP68</td>
                    <td className="border border-gray-300 px-4 py-2">6 metros</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2020</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="border border-gray-300 px-4 py-2">iPhone 11 Pro Max</td>
                    <td className="border border-gray-300 px-4 py-2">IP68</td>
                    <td className="border border-gray-300 px-4 py-2">4 metros</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2019</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="border border-gray-300 px-4 py-2">iPhone 11 Pro</td>
                    <td className="border border-gray-300 px-4 py-2">IP68</td>
                    <td className="border border-gray-300 px-4 py-2">4 metros</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2019</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="border border-gray-300 px-4 py-2">iPhone 11</td>
                    <td className="border border-gray-300 px-4 py-2">IP68</td>
                    <td className="border border-gray-300 px-4 py-2">2 metros</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2019</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">iPhone XS Max</td>
                    <td className="border border-gray-300 px-4 py-2">IP68</td>
                    <td className="border border-gray-300 px-4 py-2">2 metros</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2018</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">iPhone XS</td>
                    <td className="border border-gray-300 px-4 py-2">IP68</td>
                    <td className="border border-gray-300 px-4 py-2">2 metros</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2018</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">iPhone XR</td>
                    <td className="border border-gray-300 px-4 py-2">IP67</td>
                    <td className="border border-gray-300 px-4 py-2">1 metro</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2018</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">iPhone X</td>
                    <td className="border border-gray-300 px-4 py-2">IP67</td>
                    <td className="border border-gray-300 px-4 py-2">1 metro</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2017</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">iPhone 8 Plus</td>
                    <td className="border border-gray-300 px-4 py-2">IP67</td>
                    <td className="border border-gray-300 px-4 py-2">1 metro</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2017</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">iPhone 8</td>
                    <td className="border border-gray-300 px-4 py-2">IP67</td>
                    <td className="border border-gray-300 px-4 py-2">1 metro</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2017</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">iPhone 7 Plus</td>
                    <td className="border border-gray-300 px-4 py-2">IP67</td>
                    <td className="border border-gray-300 px-4 py-2">1 metro</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2016</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">iPhone 7</td>
                    <td className="border border-gray-300 px-4 py-2">IP67</td>
                    <td className="border border-gray-300 px-4 py-2">1 metro</td>
                    <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                    <td className="border border-gray-300 px-4 py-2">2016</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="border border-gray-300 px-4 py-2">iPhone SE (todas gerações)</td>
                    <td className="border border-gray-300 px-4 py-2">IP67 (SE 2/3)</td>
                    <td className="border border-gray-300 px-4 py-2">1m (SE 2/3)</td>
                    <td className="border border-gray-300 px-4 py-2">30min (SE 2/3)</td>
                    <td className="border border-gray-300 px-4 py-2">2016-2022</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="border border-gray-300 px-4 py-2">iPhone 6s e anteriores</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold text-red-700">SEM proteção</td>
                    <td className="border border-gray-300 px-4 py-2">—</td>
                    <td className="border border-gray-300 px-4 py-2">—</td>
                    <td className="border border-gray-300 px-4 py-2">2007-2015</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que Significa Cada Certificação
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              IP67 (iPhone 7, 8, X, SE)
            </h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li><strong>6:</strong> Proteção total contra poeira</li>
              <li><strong>7:</strong> Resistente a submersão até 1 metro por 30 minutos</li>
              <li>✅ Protege contra: respingos, chuva, quedas acidentais em água rasa</li>
              <li>❌ NÃO protege contra: natação, mergulho, água salgada, pressão de jatos</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              IP68 - Nível 2m (iPhone XR, XS, 11)
            </h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li><strong>6:</strong> Proteção total contra poeira</li>
              <li><strong>8:</strong> Resistente a submersão até 2 metros por 30 minutos</li>
              <li>✅ Melhor que IP67, mas ainda limitado</li>
              <li>❌ Mesmas restrições de IP67 aplicam-se</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              IP68 - Nível 4m (iPhone 11 Pro)
            </h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>Resistente a submersão até 4 metros por 30 minutos</li>
              <li>Primeira grande melhoria da Apple</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              IP68 - Nível 6m (iPhone 12-15)
            </h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>Resistente a submersão até 6 metros por 30 minutos</li>
              <li>Melhor proteção disponível em smartphones Apple</li>
              <li>Ainda assim: Apple não recomenda submersão intencional</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Limitações Importantes da Certificação IP
            </h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6">
              <h3 className="text-xl font-semibold text-red-900 mb-2 mt-0">
                ⚠️ Certificação IP NÃO Garante:
              </h3>
              <ul className="text-red-900 space-y-2 mb-0">
                <li>❌ Proteção contra água salgada (mar/praia)</li>
                <li>❌ Proteção contra água com cloro (piscina)</li>
                <li>❌ Proteção contra líquidos quentes</li>
                <li>❌ Proteção contra jatos de alta pressão</li>
                <li>❌ Proteção contra produtos químicos (perfume, detergente)</li>
                <li>❌ Proteção permanente (degrada com tempo)</li>
                <li>❌ Cobertura de garantia para danos por líquido</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Por Que a Resistência Diminui
            </h3>
            <ol className="text-gray-700 space-y-3 mb-4">
              <li>
                <strong>1. Desgaste das Vedações</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Borrachas de vedação se degradam com temperatura, umidade, e uso diário
                </p>
              </li>
              <li>
                <strong>2. Quedas e Impactos</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Cada queda pode microfraturar vedações ou desalinhar componentes
                </p>
              </li>
              <li>
                <strong>3. Reparos Não-Autorizados</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Troca de tela ou bateria em assistências não-Apple raramente mantém as vedações originais
                </p>
              </li>
              <li>
                <strong>4. Exposição Química</strong>
                <p className="text-sm text-gray-600 mt-1">
                  Perfumes, loções, produtos de limpeza corroem vedações gradualmente
                </p>
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cenários: Pode ou Não Pode?
            </h2>

            <h3 className="text-2xl font-semibold text-green-700 mt-6 mb-3">
              ✅ PODE (Relativamente Seguro)
            </h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>• Usar iPhone sob chuva leve</li>
              <li>• Respingos acidentais (pia, copo derramado)</li>
              <li>• Limpar com pano úmido</li>
              <li>• Deixar no banheiro durante banho (vapor moderado)</li>
              <li>• Queda acidental em vaso sanitário (água doce)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-yellow-700 mt-6 mb-3">
              ⚠️ CUIDADO (Risco Moderado)
            </h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>• Usar próximo à piscina (cloro é agressivo)</li>
              <li>• Levar à praia (areia + água salgada = perigo)</li>
              <li>• Fotos rápidas perto de cachoeira (spray d'água)</li>
              <li>• Usar no chuveiro (vapor intenso pode condensar internamente)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-red-700 mt-6 mb-3">
              ❌ NÃO PODE (Alto Risco)
            </h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>• Nadar com iPhone (pressão + tempo = entrada de água)</li>
              <li>• Mergulho ou snorkeling</li>
              <li>• Entrar no mar com iPhone</li>
              <li>• Lavar com água corrente forte</li>
              <li>• Usar em sauna ou banheira de hidromassagem</li>
              <li>• Submersão intencional (mesmo dentro do rating)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garantia Apple e Dano Por Água
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong className="text-red-600">MUITO IMPORTANTE:</strong> Mesmo com certificação IP68, a garantia
              Apple NÃO cobre danos por líquidos.
            </p>

            <div className="bg-blue-50 border-l-4 border-primary p-6 my-6">
              <p className="font-semibold text-gray-900 mb-2">
                📋 O Que Diz a Garantia Apple:
              </p>
              <ul className="text-gray-700 space-y-2 mb-0">
                <li>
                  <strong>Garantia Padrão (1 ano):</strong> NÃO cobre dano por líquidos
                </li>
                <li>
                  <strong>Apple Care+ Padrão:</strong> NÃO cobre dano por líquidos
                </li>
                <li>
                  <strong>Apple Care+ com Danos Acidentais:</strong> COBRE mediante pagamento de franquia (R$ 400-800)
                </li>
              </ul>
              <p className="text-gray-700 mt-3">
                Veja mais detalhes no nosso <a href="/guias/iphone/garantia-agua" className="text-primary font-semibold hover:underline">guia completo sobre garantia Apple</a>.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que Fazer Se Molhar (Mesmo Com IP68)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Certificação IP é proteção, não imunidade. Se iPhone molhar:
            </p>
            <ol className="text-gray-700 space-y-3 mb-4">
              <li>
                <strong>1. Seque o Exterior Imediatamente</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Use toalha macia e absorvente</li>
                  <li>• Seque todas as portas e speakers</li>
                </ul>
              </li>
              <li>
                <strong>2. Ejete Água do Alto-Falante</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Use nossa <a href="https://www.ejetaragua.com/?utm_source=guias&utm_medium=seo&utm_campaign=cta" className="text-primary font-semibold hover:underline">ferramenta de ejeção</a></li>
                  <li>• Volume máximo, 3-5 repetições</li>
                  <li>• Observe gotículas saindo</li>
                </ul>
              </li>
              <li>
                <strong>3. NÃO Carregue Por 24 Horas</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Mesmo que apareça "Líquido detectado"</li>
                  <li>• Use carregamento sem fio se urgente</li>
                </ul>
              </li>
              <li>
                <strong>4. Deixe Secar Naturalmente</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Local ventilado, temperatura ambiente</li>
                  <li>• Speaker para baixo</li>
                  <li>• 24-48 horas de secagem</li>
                </ul>
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Qual iPhone Comprar Para Proteção Máxima?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Se resistência à água é prioridade:
            </p>

            <h3 className="text-2xl font-semibold text-green-700 mt-6 mb-3">
              🥇 Melhor Opção: iPhone 15 Pro/Pro Max
            </h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>✅ IP68 até 6 metros</li>
              <li>✅ Vedações mais recentes e avançadas</li>
              <li>✅ Maior investimento da Apple em proteção</li>
              <li>💰 Preço: R$ 7.000-9.000 (novo)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              🥈 Excelente Custo-Benefício: iPhone 14/14 Pro
            </h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>✅ IP68 até 6 metros (mesma proteção que 15)</li>
              <li>✅ Mais barato que iPhone 15</li>
              <li>✅ Ainda com suporte e atualizações por anos</li>
              <li>💰 Preço: R$ 4.000-6.500 (novo/semi-novo)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              🥉 Opção Econômica: iPhone 12/13
            </h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>✅ IP68 até 6 metros</li>
              <li>⚠️ Vedações mais antigas (menos confiável)</li>
              <li>✅ Preço acessível</li>
              <li>💰 Preço: R$ 2.500-4.000 (semi-novo)</li>
            </ul>
          </section>
        </div>

        {/* FAQ Section */}
        <FAQ items={faqs} />

        {/* Bottom CTA */}
        <div className="mt-12">
          <CTABox
            title="iPhone Molhou? Ejete Água Agora"
            description="Mesmo com IP68, água pode entrar. Remova imediatamente para evitar dano permanente."
            buttonText="Abrir Ferramenta de Ejeção"
            buttonUrl="/"
          />
        </div>
      </article>
    </>
  )
}
