import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'IP68 Explicado: O Que Significa Para Celular? 2026',
  description: 'Entenda IP68: profundidade, tempo, limitações. IP67 vs IP68. O que a certificação NÃO cobre.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/prevencao/ip68-explicado',
  },
  openGraph: {
    title: 'IP68 Explicado: O Que Significa Para Celular? 2026',
    description: 'Entenda IP68: profundidade, tempo, limitações. IP67 vs IP68. O que a certificação NÃO cobre.',
    url: 'https://www.ejetaragua.com/guias/prevencao/ip68-explicado',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Prevenção', url: '/guias/prevencao' },
    { name: 'IP68' },
  ]

const faqs = [
    {
      "question": "IP68 significa à prova dágua?",
      "answer": "NÃO! IP68 = resistente à água em condições específicas. À prova dágua = 100% impermeável sempre. Celulares são resistentes, nunca 100% à prova."
    },
    {
      "question": "IP68 protege na praia?",
      "answer": "NÃO completamente. Água salgada NÃO faz parte do teste IP68. Sal corrói componentes. Se usar na praia: enxague com água doce depois."
    },
    {
      "question": "Certificação IP dura para sempre?",
      "answer": "NÃO. Vedações se desgastam com: tempo (2-3 anos), quedas, reparos não-autorizados, exposição a calor/frio extremo. Proteção diminui gradualmente."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'IP68 Explicado: O Que Significa Para Celular? 2026',
    description: 'Entenda IP68: profundidade, tempo, limitações. IP67 vs IP68. O que a certificação NÃO cobre.',
    url: '/guias/prevencao/ip68-explicado',
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
            IP68: O Que Realmente Significa
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            IP68: primeiro dígito (6) = proteção contra poeira. Segundo (8) = submersão específica. MAS: só água doce, tempo limitado, não cobre uso intencional.
          </p>
        </div>

        {/* CTA to Tool */}
        <CTABox
          title="Abrir a ferramenta para ejetar água"
          description="Use nossa ferramenta gratuita com som de 165Hz para remover água do alto-falante em 2-5 minutos. Funciona em todos os celulares."
          buttonText="Abrir Ferramenta de Ejeção"
          buttonUrl="/"
        />

        {/* Content Sections */}
        <div className="prose prose-lg max-w-none mb-12">
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Decodificando IP68
            </h2>
            <p className="text-gray-700 leading-relaxed">
              I = Ingress (entrada), P = Protection (proteção). Primeiro número (6) = sólidos (poeira total). Segundo (8) = líquidos (submersão contínua).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que IP68 Garante
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Proteção contra poeira completa. Submersão em água doce limpa, profundidade específica (varia 1.5m-6m), por tempo específico (30 min), temperatura ambiente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que IP68 NÃO Garante
            </h2>
            <p className="text-gray-700 leading-relaxed">
              NÃO protege: água salgada, cloro, líquidos quentes, pressão de jatos, produtos químicos, uso prolongado submerso, ou desgaste ao longo do tempo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              IP67 vs IP68
            </h2>
            <p className="text-gray-700 leading-relaxed">
              IP67: até 1m por 30 min. IP68: varia - pode ser 1.5m, 2m, 4m, ou 6m por 30 min. Fabricante especifica profundidade exata. IP68 é sempre melhor que IP67.
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
