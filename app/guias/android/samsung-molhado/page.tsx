import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Samsung Molhado: Galaxy S/Note/A - Recuperação 2026',
  description: 'Samsung Galaxy molhado: S24, S23, Note, A54. IP68, ejeção de água, e recuperação completa.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/android/samsung-molhado',
  },
  openGraph: {
    title: 'Samsung Molhado: Galaxy S/Note/A - Recuperação 2026',
    description: 'Samsung Galaxy molhado: S24, S23, Note, A54. IP68, ejeção de água, e recuperação completa.',
    url: 'https://www.ejetaragua.com/guias/android/samsung-molhado',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Android', url: '/guias/android' },
    { name: 'Samsung' },
  ]

const faqs = [
    {
      "question": "Posso carregar Galaxy com alerta de umidade?",
      "answer": "NÃO force carregamento com cabo. Use carregamento sem fio (Qi ou Samsung Fast Wireless) se urgente. Espere alerta sumir (4-48h)."
    },
    {
      "question": "Galaxy A tem resistência à água?",
      "answer": "Depende do modelo. A54/A34: IP67. A24/A14: sem proteção. Verifique especificações. Linha A é mais vulnerável que S/Note."
    },
    {
      "question": "Samsung tem garantia para água?",
      "answer": "Garantia padrão NÃO. Samsung Care+ cobre danos acidentais incluindo água, mediante franquia. Disponibilidade varia por país."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Samsung Molhado: Galaxy S/Note/A - Recuperação 2026',
    description: 'Samsung Galaxy molhado: S24, S23, Note, A54. IP68, ejeção de água, e recuperação completa.',
    url: '/guias/android/samsung-molhado',
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
            Samsung Galaxy Molhado: Guia Completo
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Samsung Galaxy molhado: modelos S/Note têm IP68 excelente. Use ejeção por som, seque porta USB-C, não carregue até alerta "umidade detectada" sumir.
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
              Proteção Por Linha
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Galaxy S (S21-S24): IP68 até 1.5m/30min. Galaxy Note: IP68. Galaxy A: varia - A54 tem IP67, A34 tem IP67, modelos mais baratos sem proteção.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Recuperar Galaxy S/Note
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Desligue (ou deixe ligado se quiser), seque, ejete água com som 165Hz, limpe porta USB-C, aguarde alerta de umidade sumir (4-24h).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Recuperar Galaxy A
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Galaxy A com IP: mesmo processo. Galaxy A sem IP: URGENTE - desligue imediatamente, ejete água, seque 48h, pode precisar técnico.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Alerta "Umidade Detectada"
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Samsung detecta umidade na USB-C e bloqueia carregamento. NÃO force. Use carregamento sem fio se urgente. Alerta some quando seco.
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
