import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Como Prevenir Água no Alto-Falante: Guia Completo 2026',
  description: 'Aprenda a prevenir entrada de água no alto-falante. Capas, cuidados, proteção IP, e melhores práticas.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/alto-falante/prevencao',
  },
  openGraph: {
    title: 'Como Prevenir Água no Alto-Falante: Guia Completo 2026',
    description: 'Aprenda a prevenir entrada de água no alto-falante. Capas, cuidados, proteção IP, e melhores práticas.',
    url: 'https://www.ejetaragua.com/guias/alto-falante/prevencao',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Alto-Falante', url: '/guias/alto-falante' },
    { name: 'Prevenção' },
  ]

const faqs = [
    {
      "question": "Capa impermeável vale a pena?",
      "answer": "Se você frequenta praia/piscina ou usa celular em ambientes úmidos: SIM. Custo R$ 150-400 vs reparo R$ 500-1.500. Prevenir é mais barato."
    },
    {
      "question": "Certificação IP é suficiente?",
      "answer": "Para acidentes ocasionais: sim. Para uso frequente perto de água: NÃO. IP68 degrada com tempo. Use proteção extra se usa muito perto de água."
    },
    {
      "question": "Como manter vedações eficazes?",
      "answer": "Evite quedas, não force portas USB, faça reparos em assistências autorizadas (vedações originais), e substitua celular após 3-4 anos."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Como Prevenir Água no Alto-Falante: Guia Completo 2026',
    description: 'Aprenda a prevenir entrada de água no alto-falante. Capas, cuidados, proteção IP, e melhores práticas.',
    url: '/guias/alto-falante/prevencao',
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
            Prevenção: Como Proteger Alto-Falante da Água
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Prevenção: use capa impermeável perto de água, evite exposição intencional, limpe alto-falante regularmente, e conheça limites da certificação IP.
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
              Proteção Preventiva
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Use capa impermeável em situações de risco (praia, piscina). Evite usar celular sob chuva forte. Mantenha longe de líquidos quando possível.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Manutenção Regular
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Limpe alto-falante 1x/mês com escova seca. Remove poeira que pode reter umidade. Verifique vedações após quedas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Limites da Certificação IP
            </h2>
            <p className="text-gray-700 leading-relaxed">
              IP68 NÃO significa à prova dágua. Protege contra acidentes, não uso intencional. Resistência diminui com tempo e quedas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando Usar Proteção Extra
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Praia, piscina, barco, chuva forte, ambientes úmidos (cozinha, banheiro). Capa impermeável adiciona camada de segurança.
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
