import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Assistência Técnica Para Celular Molhado: Quando Ir 2026',
  description: 'Quando levar celular molhado ao técnico? Custo, o que esperar, assistências autorizadas vs não-autorizadas.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/celular-molhado/assistencia-tecnica',
  },
  openGraph: {
    title: 'Assistência Técnica Para Celular Molhado: Quando Ir 2026',
    description: 'Quando levar celular molhado ao técnico? Custo, o que esperar, assistências autorizadas vs não-autorizadas.',
    url: 'https://www.ejetaragua.com/guias/celular-molhado/assistencia-tecnica',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Celular Molhado', url: '/guias/celular-molhado' },
    { name: 'Assistência Técnica' },
  ]

const faqs = [
    {
      "question": "Quanto custa consertar celular molhado?",
      "answer": "Limpeza simples: R$ 150-300. Troca de componente: R$ 300-800. Dano na placa-mãe: R$ 800-2.000. Pode não ter conserto se muito grave."
    },
    {
      "question": "Vale a pena consertar?",
      "answer": "Se custo &lt;50% do valor usado: sim. Se &gt;50%: considere trocar. Exemplo: celular vale R$ 1.000, conserto R$ 700 = talvez não valha."
    },
    {
      "question": "Como escolher técnico confiável?",
      "answer": "Procure avaliações online, peça recomendações, verifique se oferece garantia do serviço (90 dias mínimo), e compare orçamentos de 2-3 lugares."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Assistência Técnica Para Celular Molhado: Quando Ir 2026',
    description: 'Quando levar celular molhado ao técnico? Custo, o que esperar, assistências autorizadas vs não-autorizadas.',
    url: '/guias/celular-molhado/assistencia-tecnica',
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
            Assistência Técnica: Quando e Onde Ir
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Vá ao técnico se: água salgada (urgente 24h), não liga após 48h, múltiplos problemas, ou métodos caseiros falharam. Custo: R$ 150-2.000 dependendo do dano.
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
              Quando É URGENTE (0-24h)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Água salgada (mar/praia), água quente (&gt;40°C), produtos químicos (água sanitária, detergente), ou celular não liga após tentativas. Vá IMEDIATAMENTE.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando É Importante (24-48h)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Som não melhorou após ejeção, múltiplos sintomas (câmera + mic + speaker), ou celular liga mas funciona mal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Assistência Autorizada vs Não-Autorizada
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Autorizada: peças originais, mantém garantia, caro (R$ 500-2.000). Não-autorizada: mais barato (R$ 150-800), perde garantia, qualidade varia.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que Esperar no Técnico
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Diagnóstico (R$ 50-150), orçamento, prazo 3-15 dias, possibilidade de não ter conserto (dano grave). Pergunte sobre garantia do serviço.
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
