import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Como Proteger Celular da Água: Capas IP68 e Prevenção',
  description: 'Guia de proteção: melhores capas impermeáveis, certificação IP68 explicada, cuidados na praia/piscina. Prevenção é melhor que recuperação.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/prevencao',
  },
  openGraph: {
    title: 'Como Proteger Celular da Água: Capas IP68 e Prevenção',
    description: 'Guia de proteção: melhores capas impermeáveis, certificação IP68 explicada, cuidados na praia/piscina. Prevenção é melhor que recuperação.',
    url: 'https://www.ejetaragua.com/guias/prevencao',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Prevenção' },
  ]

const faqs = [
    {
      "question": "IP68 significa à prova d'água?",
      "answer": "Não. Significa resistente à água em condições específicas (água doce, profundidade e tempo limitados). Não protege contra água salgada, produtos químicos, ou submersão prolongada."
    },
    {
      "question": "Posso nadar com celular IP68?",
      "answer": "Não é recomendado. Fabricantes não garantem uso intencional submerso. Pressão da água pode forçar entrada. Use capa impermeável se quiser levar à água."
    },
    {
      "question": "Capa impermeável vale a pena?",
      "answer": "Se você frequenta praia, piscina, ou usa celular em ambientes úmidos: sim. Capa de qualidade custa R$ 200-400, enquanto conserto pode custar R$ 500-1500."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Como Proteger Celular da Água: Capas IP68 e Prevenção',
    description: 'Guia de proteção: melhores capas impermeáveis, certificação IP68 explicada, cuidados na praia/piscina. Prevenção é melhor que recuperação.',
    url: '/guias/prevencao',
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
            Como Proteger Seu Celular da Água
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Certificação IP68 protege contra respingos e submersão breve, mas não é à prova d'água total. Use capas impermeáveis (LifeProof, Otterbox) para proteção extra.
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
              Certificação IP Explicada
            </h2>
            <p className="text-gray-700 leading-relaxed">
              IP68: primeiro dígito (6) = proteção contra poeira, segundo (8) = proteção contra água. Mas há limites: só água doce, tempo limitado (30 min), profundidade específica.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Melhores Capas Impermeáveis
            </h2>
            <p className="text-gray-700 leading-relaxed">
              LifeProof FRĒ (proteção completa), Otterbox (custo-benefício), Catalyst (premium). No Brasil: Geonav, ou capas genéricas (testar antes de confiar).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cuidados Essenciais
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Nunca mergulhe intencionalmente, mesmo com IP68. Enxague após praia (sal corrói). Evite piscina (cloro é agressivo). Não confie 100% na certificação.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando Investir em Proteção
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Se usa celular em ambientes úmidos, praia frequente, trabalho ao ar livre, ou modelo sem certificação IP. Capa custa R$ 150-400, conserto custa R$ 500-1500.
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
