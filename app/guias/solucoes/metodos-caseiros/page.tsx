import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Métodos Caseiros Para Secar Celular: O Que Funciona 2026',
  description: 'Métodos caseiros para celular molhado: arroz, silica gel, ventilador. O que funciona vs mitos perigosos.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/solucoes/metodos-caseiros',
  },
  openGraph: {
    title: 'Métodos Caseiros Para Secar Celular: O Que Funciona 2026',
    description: 'Métodos caseiros para celular molhado: arroz, silica gel, ventilador. O que funciona vs mitos perigosos.',
    url: 'https://www.ejetaragua.com/guias/solucoes/metodos-caseiros',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Soluções', url: '/guias/solucoes' },
    { name: 'Métodos Caseiros' },
  ]

const faqs = [
    {
      "question": "Por que arroz não funciona bem?",
      "answer": "Arroz absorve umidade 10x mais lento que silica gel. Deixa amido nas portas. Grãos podem entrar em aberturas. É mito popular mas cientificamente ineficaz."
    },
    {
      "question": "Qual o método mais rápido?",
      "answer": "Ejeção por som 165Hz: remove água visível em 2-5 minutos. Combine com silica gel para umidade residual. Total: 24h vs 72h+ de arroz."
    },
    {
      "question": "Posso combinar métodos?",
      "answer": "SIM! Melhor abordagem: ejeção por som primeiro (remove água ativa), silica gel depois (absorve umidade residual), ventilador se quiser acelerar mais."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Métodos Caseiros Para Secar Celular: O Que Funciona 2026',
    description: 'Métodos caseiros para celular molhado: arroz, silica gel, ventilador. O que funciona vs mitos perigosos.',
    url: '/guias/solucoes/metodos-caseiros',
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
            Métodos Caseiros: Verdade vs Mitos
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Funcionam: ejeção por som (melhor), silica gel (bom), ventilador (lento mas seguro). NÃO funcionam: arroz (ineficaz), secador (perigoso), microondas (destruição).
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
              Métodos Que Funcionam
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ejeção por som 165Hz (85% sucesso, 2-5 min). Silica gel (70% sucesso, 24-48h). Ventilador (60% sucesso, 48-72h). Ar natural (50% sucesso, 3-7 dias).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mitos Populares Mas Ineficazes
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Arroz: lento (48h), taxa sucesso 30%, deixa amido. Álcool comum 70%: contém água! Freezer: água congela e expande (danifica mais).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Métodos PERIGOSOS
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Secador de cabelo: calor danifica. Microondas: destruição total. Forno: idem. Sol direto: superaquece bateria. NUNCA use calor.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Método Recomendado
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Combinação: (1) Ejeção por som imediatamente (2-5 min), (2) Silica gel (24h), (3) Ventilador se necessário. Tríplice abordagem maximiza sucesso.
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
