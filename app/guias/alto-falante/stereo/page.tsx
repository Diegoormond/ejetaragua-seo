import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Alto-Falante Estéreo Molhado: Um Funciona, Outro Não 2026',
  description: 'Apenas um dos alto-falantes funciona depois que molhou? Como ejetar água de cada speaker. Solução para áudio estéreo.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/alto-falante/stereo',
  },
  openGraph: {
    title: 'Alto-Falante Estéreo Molhado: Um Funciona, Outro Não 2026',
    description: 'Apenas um dos alto-falantes funciona depois que molhou? Como ejetar água de cada speaker. Solução para áudio estéreo.',
    url: 'https://www.ejetaragua.com/guias/alto-falante/stereo',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Alto-Falante', url: '/guias/alto-falante' },
    { name: 'Áudio Estéreo' },
  ]

const faqs = [
    {
      "question": "Este problema tem solução?",
      "answer": "Na maioria dos casos sim. A taxa de sucesso com métodos corretos (ejeção por som + secagem adequada) é de aproximadamente 85%. Quanto mais rápido agir, maiores as chances."
    },
    {
      "question": "Quanto tempo demora para resolver?",
      "answer": "A ejeção de água por som leva 2-5 minutos. A secagem completa pode levar 24-48 horas. Não apresse o processo - dar tempo suficiente para secar é crucial."
    },
    {
      "question": "Posso usar a ferramenta de ejeção várias vezes?",
      "answer": "Sim! Use 3-5 repetições inicialmente. Se necessário, pode repetir após 10 minutos. O som de 165Hz é seguro e não danifica o alto-falante quando usado corretamente."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Alto-Falante Estéreo Molhado: Um Funciona, Outro Não 2026',
    description: 'Apenas um dos alto-falantes funciona depois que molhou? Como ejetar água de cada speaker. Solução para áudio estéreo.',
    url: '/guias/alto-falante/stereo',
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
            Alto-Falante Estéreo: Resolver Cada Speaker
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Celulares com áudio estéreo têm 2 speakers (inferior + auricular). Ejete água de CADA um separadamente: vire celular para cada lado durante ejeção.
          </p>
        </div>

        {/* CTA to Tool */}
        <CTABox
          title="Ejetar Água do Celular Agora"
          description="Use nossa ferramenta gratuita com som de 165Hz para remover água do alto-falante em 2-5 minutos. Funciona em todos os celulares."
          buttonText="Abrir Ferramenta de Ejeção"
          buttonUrl="/"
        />

        {/* Content Sections */}
        <div className="prose prose-lg max-w-none mb-12">
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por Que Acontece
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Este problema ocorre quando água entra em contato com componentes internos do celular. Entenda as causas mais comuns e como prevenir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Resolver
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Use nossa ferramenta de ejeção de água com som de 165Hz. É o método mais rápido e seguro, funcionando em 85% dos casos. Siga as instruções corretamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que NÃO Fazer
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Evite métodos populares mas perigosos: arroz (ineficaz), secador de cabelo (calor danifica), ou forçar o carregamento (risco de curto-circuito).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando Buscar Assistência
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Se o problema persistir após 48 horas de secagem completa, ou se houver múltiplos problemas simultâneos, procure assistência técnica autorizada.
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
