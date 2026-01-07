import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Quando Ligar Celular Depois de Molhar? Tempo Seguro 2026',
  description: 'Quanto tempo esperar para ligar celular molhado? 24h, 48h, ou mais? Como saber se está seguro ligar.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/celular-molhado/quando-ligar',
  },
  openGraph: {
    title: 'Quando Ligar Celular Depois de Molhar? Tempo Seguro 2026',
    description: 'Quanto tempo esperar para ligar celular molhado? 24h, 48h, ou mais? Como saber se está seguro ligar.',
    url: 'https://www.ejetaragua.com/guias/celular-molhado/quando-ligar',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Celular Molhado', url: '/guias/celular-molhado' },
    { name: 'Quando Ligar' },
  ]

const faqs = [
    {
      "question": "Posso ligar depois de 12 horas?",
      "answer": "ARRISCADO. 12h pode não ser suficiente para secagem completa interna. Espere no mínimo 24h, ideal 48h. Pressa pode causar curto-circuito permanente."
    },
    {
      "question": "E se eu precisar usar urgente?",
      "answer": "Se MUITO urgente: após 12h + ejeção completa + testes de secura. MAS risco é seu. Melhor opção: use outro celular temporário ou pegar emprestado."
    },
    {
      "question": "Celular ligou sozinho, o que fazer?",
      "answer": "Alguns celulares ligam automaticamente ao carregar. Se isso acontecer: desligue IMEDIATAMENTE, não use, continue secagem por 24h."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Quando Ligar Celular Depois de Molhar? Tempo Seguro 2026',
    description: 'Quanto tempo esperar para ligar celular molhado? 24h, 48h, ou mais? Como saber se está seguro ligar.',
    url: '/guias/celular-molhado/quando-ligar',
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
            Quando É Seguro Ligar Celular Molhado
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Tempo mínimo: 24 horas após última ejeção e secagem. Ideal: 48 horas. NUNCA ligue antes se ainda houver água visível ou som abafado.
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
              Tempo Mínimo vs Ideal
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Mínimo: 24h (casos leves, apenas respingos). Ideal: 48h (submersão ou muita água). Água salgada: 72h + limpeza técnica.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Saber Se Está Seco
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Sinais de seco: sem água visível nas portas, som do speaker claro (teste sem ligar), sem condensação na câmera, peso normal (água pesa).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Testes Antes de Ligar
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Sacuda gentilmente - não ouve água? Olhe na porta USB com lanterna - seca? Teste speaker com ejeção - som claro? Se sim: pode tentar ligar.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que Fazer ao Ligar
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ligue em local seco. Observe se liga normal. Teste: som, microfone, câmeras, touch, Face ID/biometria, carregamento. Problemas? Desligue e espere mais 24h.
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
