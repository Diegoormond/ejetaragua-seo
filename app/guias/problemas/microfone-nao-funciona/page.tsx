import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Microfone Não Funciona Depois que Molhou: Resolver 2026',
  description: 'Microfone parou após celular molhar? Como resolver, taxa de recuperação, quando trocar.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/problemas/microfone-nao-funciona',
  },
  openGraph: {
    title: 'Microfone Não Funciona Depois que Molhou: Resolver 2026',
    description: 'Microfone parou após celular molhar? Como resolver, taxa de recuperação, quando trocar.',
    url: 'https://www.ejetaragua.com/guias/problemas/microfone-nao-funciona',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Problemas', url: '/guias/problemas' },
    { name: 'Microfone' },
  ]

const faqs = [
    {
      "question": "Microfone volta a funcionar sozinho?",
      "answer": "Pode demorar 24-72h para água evaporar. Use ejeção por som para acelerar. 70% recuperam completamente. 30% precisam trocar componente."
    },
    {
      "question": "Celular tem mais de um microfone?",
      "answer": "SIM! Celulares modernos têm 2-3 mics: principal (inferior), secundário (superior), às vezes traseiro. Todos podem ter água - teste cada um."
    },
    {
      "question": "Posso usar fone com microfone enquanto seca?",
      "answer": "SIM! Fone Bluetooth ou com fio funciona normalmente. Use enquanto microfone interno seca. Solução temporária perfeita."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Microfone Não Funciona Depois que Molhou: Resolver 2026',
    description: 'Microfone parou após celular molhar? Como resolver, taxa de recuperação, quando trocar.',
    url: '/guias/problemas/microfone-nao-funciona',
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
            Microfone Parou: Como Resolver
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Microfone não funciona indica água na membrana. Use ejeção por som para mic (posicione mic para baixo), seque 24-48h. Taxa de recuperação: 70%.
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
              Por Que Para
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Água bloqueia membrana do microfone (similar ao speaker). Microfone também vibra - água impede captação de som.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Recuperar
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Posicione celular com microfone principal (inferior) para baixo. Use ejeção por som. Fale alto próximo ao mic para criar vibração. Seque 24-48h.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Teste de Microfone
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Grave áudio (app gravador). Ouça gravação. Sem som ou muito abafado? Ainda tem água. Repita ejeção. Se clarear gradualmente: recuperando.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando Trocar
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Se após 48h seco microfone ainda não funciona: membrana pode estar danificada. Troca: R$ 100-250 (Android), R$ 200-400 (iPhone).
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
