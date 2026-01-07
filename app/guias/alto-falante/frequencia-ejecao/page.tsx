import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Frequência Ideal Para Ejetar Água: Por Que 165Hz? 2026',
  description: 'Descubra por que 165Hz é a frequência ideal para ejetar água. Comparação com outras frequências, ciência por trás.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/alto-falante/frequencia-ejecao',
  },
  openGraph: {
    title: 'Frequência Ideal Para Ejetar Água: Por Que 165Hz? 2026',
    description: 'Descubra por que 165Hz é a frequência ideal para ejetar água. Comparação com outras frequências, ciência por trás.',
    url: 'https://www.ejetaragua.com/guias/alto-falante/frequencia-ejecao',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Alto-Falante', url: '/guias/alto-falante' },
    { name: 'Frequência de Ejeção' },
  ]

const faqs = [
    {
      "question": "Por que não usar frequência mais alta?",
      "answer": "Frequências altas (&gt;300Hz) criam pouca amplitude. A membrana vibra rápido mas com movimento pequeno, insuficiente para expelir água."
    },
    {
      "question": "165Hz danifica o alto-falante?",
      "answer": "NÃO. Essa frequência está dentro da faixa segura de operação. Use volume máximo sem preocupação. Apple testa há anos no Watch."
    },
    {
      "question": "Posso usar 100Hz ou 200Hz?",
      "answer": "Sim, funciona mas com eficácia menor. 100Hz: pouca amplitude. 200Hz: funciona bem mas não tão bem quanto 165Hz. Use 165Hz se possível."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Frequência Ideal Para Ejetar Água: Por Que 165Hz? 2026',
    description: 'Descubra por que 165Hz é a frequência ideal para ejetar água. Comparação com outras frequências, ciência por trás.',
    url: '/guias/alto-falante/frequencia-ejecao',
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
            Frequência de Ejeção: Por Que 165Hz É Ideal
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            165Hz é ideal porque: rompe tensão superficial da água, cria amplitude suficiente, não danifica membrana, e foi testada pela Apple no Watch.
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
              Ciência da Frequência
            </h2>
            <p className="text-gray-700 leading-relaxed">
              165Hz é grave o suficiente para criar amplitude (movimento da membrana) sem causar apenas aquecimento. Rompe tensão superficial da água perfeitamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comparação Com Outras Frequências
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Graves muito baixos (&lt;100Hz): apenas aquecem água. Agudos (&gt;300Hz): pouca amplitude. 165Hz: equilíbrio perfeito entre amplitude e segurança.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por Que Apple Escolheu 165Hz
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Apple testou múltiplas frequências no Apple Watch. 165Hz teve melhor taxa de ejeção (&gt;85%) sem danificar componentes. É padrão desde 2016.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Outras Frequências Funcionam?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              120-200Hz funcionam mas com eficácia menor. 165Hz é otimizada. Não use &lt;80Hz ou &gt;300Hz (ineficaz ou perigoso).
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
