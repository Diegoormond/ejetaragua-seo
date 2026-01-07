import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Motorola Molhado: Moto G, Edge - Recuperação 2026',
  description: 'Motorola molhado: guia para Moto G, Edge, Edge+. Certificação IP, nano-coating, ejeção de água.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/android/motorola-molhado',
  },
  openGraph: {
    title: 'Motorola Molhado: Moto G, Edge - Recuperação 2026',
    description: 'Motorola molhado: guia para Moto G, Edge, Edge+. Certificação IP, nano-coating, ejeção de água.',
    url: 'https://www.ejetaragua.com/guias/android/motorola-molhado',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Android', url: '/guias/android' },
    { name: 'Motorola' },
  ]

const faqs = [
    {
      "question": "Moto G tem resistência à água?",
      "answer": "Depende do modelo. Moto G comum: nano-coating (proteção mínima contra respingos). Moto G Power/Pro/5G: alguns têm IP52. Veja especificações."
    },
    {
      "question": "Edge+ é à prova dágua?",
      "answer": "NÃO. Edge+ tem IP68 (resistente à água), não à prova. Protege contra acidentes, mas não use intencionalmente na água."
    },
    {
      "question": "Garantia Motorola cobre água?",
      "answer": "NÃO. Garantia padrão não cobre dano por líquidos mesmo em modelos com certificação IP. Motorola tem programa Moto Care em alguns países (não comum no Brasil)."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Motorola Molhado: Moto G, Edge - Recuperação 2026',
    description: 'Motorola molhado: guia para Moto G, Edge, Edge+. Certificação IP, nano-coating, ejeção de água.',
    url: '/guias/android/motorola-molhado',
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
            Motorola Molhado: Guia de Recuperação
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Motorola molhado: Moto G tem nano-coating (proteção leve), Edge tem IP52-IP68. Use ejeção por som, não carregue por 24h, seque completamente.
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
              Proteção Por Modelo
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Moto G: nano-coating (respingos). Moto G Power/Pro: alguns IP52. Edge/Edge+: IP52-IP68. Verifique especificações do seu modelo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Recuperar Moto G Molhado
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Desligue, seque exterior, use ejeção por som 165Hz, posicione speaker para baixo, não carregue 24h. Moto G é mais vulnerável - aja rápido.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Recuperar Edge Molhado
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Edge tem melhor proteção mas mesmo cuidado: ejeção por som, secagem, 24h sem carregar. Resistência varia: Edge básico IP52, Edge+ pode ter IP68.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando Procurar Assistência
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Motorola não tem muitas assistências oficiais no Brasil. Procure técnico de confiança. Água salgada: urgente (12-24h).
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
