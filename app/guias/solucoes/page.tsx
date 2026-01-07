import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Soluções Para Celular Molhado: O Que Funciona | 2026',
  description: 'Arroz funciona? Silica gel é melhor? Guia baseado em ciência: soluções que funcionam vs mitos perigosos para celular molhado.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/solucoes',
  },
  openGraph: {
    title: 'Soluções Para Celular Molhado: O Que Funciona | 2026',
    description: 'Arroz funciona? Silica gel é melhor? Guia baseado em ciência: soluções que funcionam vs mitos perigosos para celular molhado.',
    url: 'https://www.ejetaragua.com/guias/solucoes',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Soluções' },
  ]

const faqs = [
    {
      "question": "Arroz funciona para secar celular?",
      "answer": "Funciona muito mal. Absorve umidade 10x mais lento que silica gel. Deixa amido e poeira. Grãos podem entrar nas portas. Use silica gel ou ejeção por som."
    },
    {
      "question": "Silica gel é melhor que arroz?",
      "answer": "MUITO melhor. Absorve umidade 10x mais rápido, não deixa resíduos, e funciona melhor em recipiente fechado. Sachês vêm em caixas de sapatos e eletrônicos."
    },
    {
      "question": "Quanto tempo no silica gel?",
      "answer": "24-48 horas em recipiente fechado com múltiplos sachês. Combine com ejeção por som primeiro para remover água visível, depois silica para umidade residual."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Soluções Para Celular Molhado: O Que Funciona | 2026',
    description: 'Arroz funciona? Silica gel é melhor? Guia baseado em ciência: soluções que funcionam vs mitos perigosos para celular molhado.',
    url: '/guias/solucoes',
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
            Soluções Para Secar Celular: Mitos vs Realidade
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Arroz NÃO funciona bem (lento e deixa resíduos). Silica gel funciona melhor. Mas o método mais rápido e eficaz é ejeção por som (2-5 min vs 24-48h).
          </p>
        </div>

        {/* CTA to Tool */}
        <CTABox
          title="Ejetar Água do Celular Agora"
          description="Use nossa ferramenta gratuita com som de 165Hz para remover água do alto-falante em 2-5 minutos. Funciona em todos os celulares."
          buttonText="Abrir Ferramenta de Ejeção"
          buttonUrl="https://www.ejetaragua.com/?utm_source=guias&utm_medium=seo&utm_campaign=cta"
        />

        {/* Content Sections */}
        <div className="prose prose-lg max-w-none mb-12">
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que Realmente Funciona
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ejeção por som (165Hz) é #1: rápido, seguro, eficaz. Silica gel é #2: absorve umidade 10x mais que arroz. Drenagem natural é #3: lenta mas segura.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mitos Populares
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Arroz: muito lento, deixa amido. Secador: calor danifica. Microondas: destruição total. Freezer: água congela e expande. Álcool comum (70%): contém água!
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Métodos Seguros
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Som de ejeção, silica gel, álcool isopropílico 99% (só para técnicos), ar comprimido (com cuidado), ventilador (lento mas seguro).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando Buscar Técnico
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Água salgada (corrosão rápida), líquidos quentes, produtos químicos, submersão &gt;30 min, ou se métodos caseiros falharem após 48h.
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
