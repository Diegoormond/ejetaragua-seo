import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Som Para Tirar Água do Android: Como Usar 165Hz 2026',
  description: 'Som de 165Hz para tirar água do Android. Como usar corretamente em Samsung, Xiaomi, Motorola.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/android/som-tirar-agua',
  },
  openGraph: {
    title: 'Som Para Tirar Água do Android: Como Usar 165Hz 2026',
    description: 'Som de 165Hz para tirar água do Android. Como usar corretamente em Samsung, Xiaomi, Motorola.',
    url: 'https://www.ejetaragua.com/guias/android/som-tirar-agua',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Android', url: '/guias/android' },
    { name: 'Som de Ejeção' },
  ]

const faqs = [
    {
      "question": "Preciso de app para usar som de ejeção?",
      "answer": "NÃO. Nossa ferramenta web funciona direto no navegador Chrome/Firefox. Sem download, sem instalação, sem permissões. Apenas acesse e use."
    },
    {
      "question": "Som funciona em Android antigo?",
      "answer": "SIM! Funciona em qualquer Android, mesmo modelos antigos (Android 4+). Só precisa reproduzir áudio - qualquer speaker consegue."
    },
    {
      "question": "Quantas vezes posso usar?",
      "answer": "Sem limite. Use 3-5x inicialmente. Se necessário, repita após 10 min. Máximo sugerido: 10-12 vezes por sessão. Som é seguro."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Som Para Tirar Água do Android: Como Usar 165Hz 2026',
    description: 'Som de 165Hz para tirar água do Android. Como usar corretamente em Samsung, Xiaomi, Motorola.',
    url: '/guias/android/som-tirar-agua',
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
            Som Para Tirar Água do Android
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Use som de 165Hz para tirar água: abra ferramenta, volume máximo, Android speaker para baixo, 30s por vez, 3-5 repetições. Funciona em todas marcas Android.
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
              Como Funciona em Android
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ondas de 165Hz vibram membrana do speaker, rompem tensão superficial da água, expelem gotículas. Funciona igual em Android e iPhone.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Instruções Específicas Android
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Desative modo "Não Perturbe", volume 80-100%, vire Android com speaker para baixo, reproduza som 30s, observe água saindo, repita.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Android vs iPhone
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Tecnologia é idêntica. Android não tem recurso nativo (como Apple Watch), mas ferramenta web funciona perfeitamente. Mesma taxa de sucesso (85%).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compatibilidade
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Funciona em: Samsung (todos), Xiaomi (todos), Motorola (todos), OnePlus, Realme, ASUS, Sony, LG. Qualquer Android com speaker funcional.
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
