import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Som Baixo Depois que Molhou Celular: Aumentar 2026',
  description: 'Som do celular ficou baixo após molhar? Como aumentar volume, recuperar potência total.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/problemas/som-baixo',
  },
  openGraph: {
    title: 'Som Baixo Depois que Molhou Celular: Aumentar 2026',
    description: 'Som do celular ficou baixo após molhar? Como aumentar volume, recuperar potência total.',
    url: 'https://www.ejetaragua.com/guias/problemas/som-baixo',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Problemas', url: '/guias/problemas' },
    { name: 'Som Baixo' },
  ]

const faqs = [
    {
      "question": "Volume volta ao normal?",
      "answer": "Na maioria dos casos SIM (80%). Use ejeção repetida + secagem adequada. 20% têm dano permanente que requer troca do speaker."
    },
    {
      "question": "Posso forçar volume máximo?",
      "answer": "SIM! Durante ejeção use volume 100%. Após secagem pode testar 100% também. Não danifica - só não force se estiver distorcendo muito."
    },
    {
      "question": "Quanto tempo até volume normal?",
      "answer": "Com ejeção ativa: 2-24h. Secagem passiva (sem ejeção): 48-72h. Ejeção acelera MUITO o processo."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Som Baixo Depois que Molhou Celular: Aumentar 2026',
    description: 'Som do celular ficou baixo após molhar? Como aumentar volume, recuperar potência total.',
    url: '/guias/problemas/som-baixo',
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
            Som Baixo: Como Recuperar Volume
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Som baixo indica água residual no speaker. Use ejeção por som repetidamente (5-7x), seque 24h, teste novamente. Volume deve aumentar gradualmente.
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
              Por Que Fica Baixo
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Água bloqueia parcialmente a membrana. Som sai mas com intensidade reduzida. É como falar com mão na frente da boca - abafado e baixo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Aumentar Volume
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ejeção por som: 5-7 repetições de 30s. Cada vez remove mais água. Volume aumenta gradualmente. Após ejeção: deixe secar 12-24h antes de testar.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Testes Progressivos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Teste antes de ejeção (volume X). Ejete 3x, teste (volume X+20%). Ejete mais 3x, teste (volume X+40%). Continue até volume normal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando É Permanente
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Se após 10+ ejeções e 48h seco o volume continua baixo: pode ser dano na bobina (componente que cria som). Técnico pode diagnosticar.
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
