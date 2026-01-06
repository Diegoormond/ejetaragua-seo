import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Aspirador de Pó Para Secar Celular: Pode Usar? 2026',
  description: 'Aspirador de pó remove água do celular? Riscos, como usar com segurança, alternativas melhores.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/solucoes/aspirador-po',
  },
  openGraph: {
    title: 'Aspirador de Pó Para Secar Celular: Pode Usar? 2026',
    description: 'Aspirador de pó remove água do celular? Riscos, como usar com segurança, alternativas melhores.',
    url: 'https://www.ejetaragua.com/guias/solucoes/aspirador-po',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Soluções', url: '/guias/solucoes' },
    { name: 'Aspirador' },
  ]

const faqs = [
    {
      "question": "Aspirador danifica o celular?",
      "answer": "Pode: eletricidade estática danifica chips, sucção forte danifica speaker, ou pode sugar componentes soltos. Use com MUITO cuidado ou evite."
    },
    {
      "question": "Posso usar aspirador de carro?",
      "answer": "Mesmos riscos. Se usar: distância segura (15cm+), sucção mínima, tempo curto. Aspirador portátil é menos potente = mais seguro que industrial."
    },
    {
      "question": "Melhor aspirar ou usar ejeção por som?",
      "answer": "Ejeção por som é MUITO superior: mais eficaz, mais seguro, testado por Apple. Aspirador: método auxiliar apenas, nunca principal."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Aspirador de Pó Para Secar Celular: Pode Usar? 2026',
    description: 'Aspirador de pó remove água do celular? Riscos, como usar com segurança, alternativas melhores.',
    url: '/guias/solucoes/aspirador-po',
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
            Aspirador de Pó: Pode ou Não Pode?
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Aspirador pode ser usado COM CUIDADO: distância mínima 10cm, sucção leve, máximo 10s por área. MAS ejeção por som é mais segura e eficaz.
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
              Riscos do Aspirador
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Eletricidade estática (pode danificar circuitos), sucção forte (danifica bobina do speaker), ou sugar componentes soltos (parafusos internos após queda).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Usar Com Segurança
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Se usar: distância 10-15cm, sucção no mínimo, máximo 10s por área (porta USB, speaker, fones), movimentos suaves. Prefira ejeção por som.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por Que Ejeção É Melhor
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Som de 165Hz: expele água ativamente, sem risco de estática, sem danificar componentes, mais eficaz (85% vs 40%). Aspirador é secundário.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando Aspirador Ajuda
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Após ejeção por som, para remover últimas gotículas de áreas acessíveis (porta USB, entrada de fone). Nunca como método principal.
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
