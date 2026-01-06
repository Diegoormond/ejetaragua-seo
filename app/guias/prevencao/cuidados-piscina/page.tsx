import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Celular na Piscina: Cuidados Com Cloro e Água 2026',
  description: 'Pode levar celular na piscina? Cloro estraga? IP68 protege? Cuidados essenciais.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/prevencao/cuidados-piscina',
  },
  openGraph: {
    title: 'Celular na Piscina: Cuidados Com Cloro e Água 2026',
    description: 'Pode levar celular na piscina? Cloro estraga? IP68 protege? Cuidados essenciais.',
    url: 'https://www.ejetaragua.com/guias/prevencao/cuidados-piscina',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Prevenção', url: '/guias/prevencao' },
    { name: 'Piscina' },
  ]

const faqs = [
    {
      "question": "Posso nadar com iPhone/Samsung na piscina?",
      "answer": "Apple e Samsung NÃO recomendam. IP68 não cobre cloro. Se cair acidentalmente: provável que sobreviva. Uso intencional: arriscado."
    },
    {
      "question": "Capa impermeável funciona contra cloro?",
      "answer": "SIM. Capas de qualidade (LifeProof, Otterbox) protegem completamente contra água + cloro. Teste capa com papel antes de confiar (submerja com papel dentro)."
    },
    {
      "question": "Quanto tempo posso deixar na piscina?",
      "answer": "Com capa impermeável: quanto quiser. Sem capa: NADA. Mesmo celular IP68 não deve ficar exposto a cloro. Respingos ocasionais: OK. Submersão: NÃO."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Celular na Piscina: Cuidados Com Cloro e Água 2026',
    description: 'Pode levar celular na piscina? Cloro estraga? IP68 protege? Cuidados essenciais.',
    url: '/guias/prevencao/cuidados-piscina',
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
            Cuidados Com Celular na Piscina
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            CUIDADO! Cloro da piscina corrói vedações. IP68 testa apenas água doce. Use capa impermeável se quiser levar celular à piscina.
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
              Risco do Cloro
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Cloro (hipoclorito de sódio) é químico agressivo. Corrói vedações de borracha, oxida contatos metálicos. Certificação IP68 NÃO cobre produtos químicos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              IP68 vs Água de Piscina
            </h2>
            <p className="text-gray-700 leading-relaxed">
              IP68 testa água doce limpa, temperatura ambiente, 30 min. Piscina: cloro, temperatura variável, possível submersão prolongada. NÃO é o mesmo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Usar Seguramente
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Use capa impermeável (LifeProof, Otterbox). Mantenha longe da água sempre que possível. Se respingos: enxague com água doce imediatamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Se Molhar Com Água de Piscina
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Enxague com água doce IMEDIATAMENTE (remove cloro), seque, ejete água, não carregue 24h. Cloro acelera corrosão - aja rápido.
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
