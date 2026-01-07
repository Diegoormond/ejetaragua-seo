import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Câmera Embaçada Depois de Molhar: Resolve? 2026',
  description: 'Câmera embaçada por dentro após celular molhar? Quanto tempo para secar, quando é permanente.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/problemas/camera-embacada',
  },
  openGraph: {
    title: 'Câmera Embaçada Depois de Molhar: Resolve? 2026',
    description: 'Câmera embaçada por dentro após celular molhar? Quanto tempo para secar, quando é permanente.',
    url: 'https://www.ejetaragua.com/guias/problemas/camera-embacada',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Problemas', url: '/guias/problemas' },
    { name: 'Câmera' },
  ]

const faqs = [
    {
      "question": "Câmera embaçada volta ao normal?",
      "answer": "Na maioria dos casos SIM (60-70%). Deixe secar 3-7 dias. Se não melhorar: pode precisar trocar módulo da câmera."
    },
    {
      "question": "Posso usar silica gel?",
      "answer": "SIM! Silica gel acelera secagem. Coloque celular + sachês em recipiente fechado por 24-48h. Melhor que arroz."
    },
    {
      "question": "Quanto custa trocar câmera?",
      "answer": "Câmera traseira: R$ 200-600. Câmera frontal: R$ 150-300. Varia por modelo. iPhone mais caro que Android similar."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Câmera Embaçada Depois de Molhar: Resolve? 2026',
    description: 'Câmera embaçada por dentro após celular molhar? Quanto tempo para secar, quando é permanente.',
    url: '/guias/problemas/camera-embacada',
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
            Câmera Embaçada: Solução
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Câmera embaçada geralmente seca em 24-72h naturalmente. Deixe em ambiente seco, NÃO use secador. Se não melhorar em 7 dias: pode ser dano permanente.
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
              Por Que Embaça
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Umidade entra na câmera criando condensação entre lentes. É como janela embaçada - vapor dágua se deposita no vidro.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Secagem Natural
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Deixe celular em ambiente seco, temperatura ambiente (20-25°C), com câmera para cima, por 24-72h. Umidade evapora lentamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que NÃO Fazer
            </h2>
            <p className="text-gray-700 leading-relaxed">
              NÃO use secador (calor pode derreter adesivos), NÃO coloque no sol direto, NÃO tente abrir câmera. Deixe secar naturalmente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando É Permanente
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Se após 7 dias ainda embaçada: água pode ter danificado sensor ou deixou resíduo mineral. Precisa trocar módulo da câmera (R$ 200-600).
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
