import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Alto-Falante Android Entupido: Como Desentupir 2026',
  description: 'Alto-falante Android entupido por água ou sujeira? Métodos seguros para desentupir Samsung, Xiaomi, Motorola.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/android/alto-falante-entupido',
  },
  openGraph: {
    title: 'Alto-Falante Android Entupido: Como Desentupir 2026',
    description: 'Alto-falante Android entupido por água ou sujeira? Métodos seguros para desentupir Samsung, Xiaomi, Motorola.',
    url: 'https://www.ejetaragua.com/guias/android/alto-falante-entupido',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Android', url: '/guias/android' },
    { name: 'Alto-Falante Entupido' },
  ]

const faqs = [
    {
      "question": "Ar comprimido pode danificar?",
      "answer": "Sim se muito perto ou pressão alta. Use distância mínima 15cm, jatos curtos (1-2s), e nunca pressione spray diretamente na membrana."
    },
    {
      "question": "Escova de dente danifica?",
      "answer": "NÃO se usada seca e gentilmente. Use cerdas macias, movimento circular leve, sem pressionar. Remove sujeira externa sem tocar membrana."
    },
    {
      "question": "Ejeção por som desentope sujeira?",
      "answer": "Sim! Vibrações de 165Hz soltam partículas de sujeira assim como água. Use antes de limpeza física para melhores resultados."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Alto-Falante Android Entupido: Como Desentupir 2026',
    description: 'Alto-falante Android entupido por água ou sujeira? Métodos seguros para desentupir Samsung, Xiaomi, Motorola.',
    url: '/guias/android/alto-falante-entupido',
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
            Como Desentupir Alto-Falante Android
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Desentupir alto-falante Android: use ejeção por som 165Hz (remove água + sujeira), escova macia, e ar comprimido leve. Funciona em Samsung, Xiaomi, Motorola.
          </p>
        </div>

        {/* CTA to Tool */}
        <CTABox
          title="Abrir a ferramenta para ejetar água"
          description="Use nossa ferramenta gratuita com som de 165Hz para remover água do alto-falante em 2-5 minutos. Funciona em todos os celulares."
          buttonText="Abrir Ferramenta de Ejeção"
          buttonUrl="https://www.ejetaragua.com/?utm_source=guias&utm_medium=seo&utm_campaign=cta"
        />

        {/* Content Sections */}
        <div className="prose prose-lg max-w-none mb-12">
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Causas de Entupimento
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Água residual, poeira acumulada, pelos de bolso, resíduos de protetores de tela, ou combinação de água + sujeira.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Método de Desentupimento
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ejeção por som 165Hz (remove água), escova de dente seca (remove sujeira), ar comprimido a 15cm (remove resíduos). Nessa ordem.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Diferenças Por Marca
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Samsung: speakers em cima e embaixo. Xiaomi: similar. Motorola: alguns só embaixo. Trate cada speaker separadamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando É Dano Permanente
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Se após limpeza completa som continua abafado, pode ser membrana danificada. Técnico pode diagnosticar e trocar (R$ 100-250).
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
            buttonUrl="https://www.ejetaragua.com/?utm_source=guias&utm_medium=seo&utm_campaign=cta"
          />
        </div>
      </article>
    </>
  )
}
