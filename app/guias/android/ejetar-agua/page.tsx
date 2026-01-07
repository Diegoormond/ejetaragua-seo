import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Como Ejetar Água do Android: Samsung, Xiaomi, Motorola 2026',
  description: 'Ejetar água do Android com som 165Hz. Funciona em Samsung Galaxy, Xiaomi, Motorola, e todas as marcas.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/android/ejetar-agua',
  },
  openGraph: {
    title: 'Como Ejetar Água do Android: Samsung, Xiaomi, Motorola 2026',
    description: 'Ejetar água do Android com som 165Hz. Funciona em Samsung Galaxy, Xiaomi, Motorola, e todas as marcas.',
    url: 'https://www.ejetaragua.com/guias/android/ejetar-agua',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Android', url: '/guias/android' },
    { name: 'Ejeção de Água' },
  ]

const faqs = [
    {
      "question": "Funciona em Android barato?",
      "answer": "SIM! Som de 165Hz funciona em qualquer Android, do mais barato ao mais caro. Só precisa de alto-falante funcional (todos têm)."
    },
    {
      "question": "Xiaomi tem modo de ejeção nativo?",
      "answer": "NÃO. Ao contrário do Apple Watch, Androids não têm recurso nativo. Use nossa ferramenta web - mesmo efeito."
    },
    {
      "question": "Samsung tem proteção melhor que Xiaomi?",
      "answer": "Depende do modelo. Galaxy S/Note têm IP68 excelente. Xiaomi Pro também. Modelos baratos de ambas marcas têm pouca proteção."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Como Ejetar Água do Android: Samsung, Xiaomi, Motorola 2026',
    description: 'Ejetar água do Android com som 165Hz. Funciona em Samsung Galaxy, Xiaomi, Motorola, e todas as marcas.',
    url: '/guias/android/ejetar-agua',
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
            Como Ejetar Água do Android
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ejete água do Android com som 165Hz: volume máximo, speaker para baixo, 3-5 repetições. Funciona em TODAS as marcas: Samsung, Xiaomi, Motorola, OnePlus.
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
              Método Universal Android
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Som de 165Hz funciona em qualquer Android. Não importa a marca: Samsung, Xiaomi, Motorola, OnePlus, Realme. Tecnologia é a mesma.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Passo a Passo
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Acesse ferramenta, volume 80-100%, Android com speaker para baixo (45°), toque por 30s, observe água saindo, repita 3-5x.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Diferenças Entre Marcas
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Samsung: geralmente 2 speakers (estéreo). Xiaomi: similar. Motorola: varia por modelo. Moto G: só inferior. Edge: estéreo. Ejete cada um separadamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Taxa de Sucesso
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Android: 85% de sucesso com ejeção por som. Mesmo percentual que iPhone. Tecnologia funciona igual independente do sistema operacional.
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
