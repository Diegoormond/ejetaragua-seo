import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Xiaomi Molhado: Redmi Note, Poco, Mi - Recuperação 2026',
  description: 'Xiaomi molhado: Redmi Note, Poco, Mi 11/12/13. IP68, ejeção de água, recuperação.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/android/xiaomi-molhado',
  },
  openGraph: {
    title: 'Xiaomi Molhado: Redmi Note, Poco, Mi - Recuperação 2026',
    description: 'Xiaomi molhado: Redmi Note, Poco, Mi 11/12/13. IP68, ejeção de água, recuperação.',
    url: 'https://www.ejetaragua.com/guias/android/xiaomi-molhado',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Android', url: '/guias/android' },
    { name: 'Xiaomi' },
  ]

const faqs = [
    {
      "question": "Redmi Note tem resistência à água?",
      "answer": "Maioria NÃO. Alguns Redmi Note Pro têm IP53 (proteção leve contra respingos). Veja especificações do seu modelo. Assuma que não tem se não tiver certeza."
    },
    {
      "question": "Poco pode molhar?",
      "answer": "Poco geralmente NÃO tem proteção IP. Poco X/F são vulneráveis. Se molhou: aja IMEDIATAMENTE - cada minuto aumenta risco de dano permanente."
    },
    {
      "question": "Mi 11/12/13 tem IP68?",
      "answer": "Depende: Mi 11 Pro/Ultra: IP68. Mi 11 padrão: não. Mi 12 Pro: IP68. Mi 12: IP53. Mi 13 Pro: IP68. Mi 13: IP68. Varie especificações."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Xiaomi Molhado: Redmi Note, Poco, Mi - Recuperação 2026',
    description: 'Xiaomi molhado: Redmi Note, Poco, Mi 11/12/13. IP68, ejeção de água, recuperação.',
    url: '/guias/android/xiaomi-molhado',
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
            Xiaomi Molhado: Guia Completo
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Xiaomi molhado: apenas Pro/Ultra têm IP68. Redmi e Poco têm proteção mínima. Use ejeção por som, desligue, seque 24-48h, não carregue.
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
              Proteção Por Linha
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Mi Pro/Ultra: IP68. Mi padrão: IP53-IP68 (varia). Redmi Note: geralmente sem IP (alguns Pro têm IP53). Poco: proteção mínima ou nenhuma.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Recuperar Mi Pro Molhado
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Mi Pro tem IP68 - boa resistência. Mesmo assim: ejete água com som, seque porta USB-C, aguarde alerta de umidade sumir, não force carregamento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Recuperar Redmi/Poco Molhado
            </h2>
            <p className="text-gray-700 leading-relaxed">
              SEM proteção IP - URGENTE. Desligue imediatamente, ejete água repetidamente, seque 48h, pode precisar técnico. Chance de recuperação: 60-70%.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando Buscar Técnico
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Xiaomi tem centros autorizados em capitais brasileiras. Redmi/Poco sem IP: vá em 24h. Mi com IP: vá se não melhorar em 48h.
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
