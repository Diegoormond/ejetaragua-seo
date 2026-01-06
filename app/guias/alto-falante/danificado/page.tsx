import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Alto-Falante Danificado Por Água: Tem Conserto? 2026',
  description: 'Alto-falante danificado por água: sintomas, diagnóstico, custo de reparo. Quando consertar vs trocar celular.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/alto-falante/danificado',
  },
  openGraph: {
    title: 'Alto-Falante Danificado Por Água: Tem Conserto? 2026',
    description: 'Alto-falante danificado por água: sintomas, diagnóstico, custo de reparo. Quando consertar vs trocar celular.',
    url: 'https://www.ejetaragua.com/guias/alto-falante/danificado',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Alto-Falante', url: '/guias/alto-falante' },
    { name: 'Alto-Falante Danificado' },
  ]

const faqs = [
    {
      "question": "Dá para consertar alto-falante danificado?",
      "answer": "Sim, trocando o módulo do alto-falante. Técnico remove componente danificado e instala novo. Leva 1-3 dias, custa R$ 150-300."
    },
    {
      "question": "Vale a pena consertar?",
      "answer": "Se celular vale >R$ 1.000: sim. Se <R$ 500: provavelmente não. Compare custo do reparo (R$ 150-300) com valor de revenda do celular."
    },
    {
      "question": "Garantia cobre alto-falante danificado por água?",
      "answer": "NÃO. Garantia padrão não cobre dano por líquidos. Apple Care+ com danos acidentais cobre mediante franquia (R$ 400-800)."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Alto-Falante Danificado Por Água: Tem Conserto? 2026',
    description: 'Alto-falante danificado por água: sintomas, diagnóstico, custo de reparo. Quando consertar vs trocar celular.',
    url: '/guias/alto-falante/danificado',
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
            Alto-Falante Danificado: Diagnóstico e Soluções
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Sinais de dano: distorção permanente, chiado constante, ou silêncio total após secagem. Reparo custa R$ 150-300. Vale se celular for recente.
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
              Sintomas de Dano Permanente
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Distorção mesmo seco, chiado constante, sem som após 72h, vibração estranha, ou apenas um lado funciona (em estéreo).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Causas Comuns de Dano
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Oxidação da bobina por água, membrana perfurada (por palito/agulha), desgaste por ejeção excessiva, ou curto-circuito interno.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Custo vs Benefício do Reparo
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Troca de alto-falante: R$ 150-300 em assistência. Vale se celular >R$ 1.000. Celular barato: pode não compensar.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando Procurar Técnico
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Som distorcido após 48h seco, sem som após ejeção repetida, ou chiado permanente. Técnico diagnostica se é speaker, placa, ou outro componente.
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
