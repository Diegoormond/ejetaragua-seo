import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Quais iPhones São Resistentes à Água? Lista Completa 2026',
  description: 'Lista completa: todos os modelos de iPhone resistentes à água, certificação IP, profundidade máxima. iPhone 7 até iPhone 15 Pro Max.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/iphone/modelos-resistentes',
  },
  openGraph: {
    title: 'Quais iPhones São Resistentes à Água? Lista Completa 2026',
    description: 'Lista completa: todos os modelos de iPhone resistentes à água, certificação IP, profundidade máxima. iPhone 7 até iPhone 15 Pro Max.',
    url: 'https://www.ejetaragua.com/guias/iphone/modelos-resistentes',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'iPhone', url: '/guias/iphone' },
    { name: 'iPhone' },
  ]

const faqs = [
    {
      "question": "Qual iPhone oferece melhor proteção contra água?",
      "answer": "iPhone 15 Pro/Pro Max com IP68 até 6 metros. Mas lembre: isso NÃO significa à prova d'água. Apple não recomenda submersão intencional. Todos os iPhones IP68 têm mesma limitação: agua doce apenas, sem garantia de cobertura."
    },
    {
      "question": "Vale a pena comprar um iPhone só pela resistência à água?",
      "answer": "NÃO. Todos os modelos IP68 (12+) oferecem proteção similar - a diferença de profundidade (2m vs 6m) raramente importa na prática. Use como critério secundário apenas. Foco em especificações mais importantes (câmera, processador, preço)."
    },
    {
      "question": "iPhone 11 é bom o suficiente para proteção contra água?",
      "answer": "SIM. iPhone 11 (IP68 até 2m) é suficiente para a maioria dos casos. Protege contra chuva, respingos, quedas acidentais. Diferença para 6m raramente importa. Economia financeira compensa para quem não nada/mergulha."
    },
    {
      "question": "Devo comprar modelo mais caro só para IP68 maior?",
      "answer": "NÃO. iPhone 12/13 com IP68 até 6m custam menos que 15/Pro e oferecem mesma proteção aquática. Diferença está em câmera, desempenho, tela - não em água. Avalie seu orçamento e necessidades reais."
    },
    {
      "question": "E se comprar iPhone 7 ou 8 usado? IP67 é suficiente?",
      "answer": "IP67 (até 1m) é menos proteção que IP68, mas funciona para uso casua. PORÉM: equipamentos com 5-7 anos têm vedações muito degradadas. Compre apenas se garantia local e risco de água é baixo."
    },
    {
      "question": "iPhone SE é tão resistente quanto os outros?",
      "answer": "iPhone SE 2 e 3 têm IP67 (até 1m) - menos que iPhone 11+. SE 1 NÃO tem proteção. Se proteção contra água é importante, considere iPhone 11+ em vez de SE. Diferença de preço às vezes não compensa."
    },
    {
      "question": "A proteção IP68 realmente dura os 5 anos de garantia?",
      "answer": "NÃO. Vedações degradam significativamente após 2-3 anos. Proteção do iPhone novo é máxima, mas diminui com: quedas, uso em ambientes úmidos, e tempo. Considere Appl Care+ se frequenta água."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Quais iPhones São Resistentes à Água? Lista Completa 2026',
    description: 'Lista completa: todos os modelos de iPhone resistentes à água, certificação IP, profundidade máxima. iPhone 7 até iPhone 15 Pro Max.',
    url: '/guias/iphone/modelos-resistentes',
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
            iPhones Resistentes à Água: Lista Completa
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            iPhone 7/7 Plus (IP67), iPhone 8 até X (IP67), iPhone XS até 15 Pro Max (IP68). Quanto mais novo, maior a proteção. Mas garantia NÃO cobre água.
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
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por Que Acontece
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Este problema ocorre quando água entra em contato com componentes internos do celular. Entenda as causas mais comuns e como prevenir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Resolver
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Use nossa ferramenta de ejeção de água com som de 165Hz. É o método mais rápido e seguro, funcionando em 85% dos casos. Siga as instruções corretamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que NÃO Fazer
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Evite métodos populares mas perigosos: arroz (ineficaz), secador de cabelo (calor danifica), ou forçar o carregamento (risco de curto-circuito).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando Buscar Assistência
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Se o problema persistir após 48 horas de secagem completa, ou se houver múltiplos problemas simultâneos, procure assistência técnica autorizada.
            </p>
          </section>
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
