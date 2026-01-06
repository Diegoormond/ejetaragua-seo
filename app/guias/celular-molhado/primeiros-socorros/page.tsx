import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Primeiros Socorros Para Celular Molhado: Guia Urgente 2026',
  description: 'Celular acabou de molhar? Primeiros socorros imediatos podem salvar. Passo a passo dos primeiros 5 minutos críticos.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/celular-molhado/primeiros-socorros',
  },
  openGraph: {
    title: 'Primeiros Socorros Para Celular Molhado: Guia Urgente 2026',
    description: 'Celular acabou de molhar? Primeiros socorros imediatos podem salvar. Passo a passo dos primeiros 5 minutos críticos.',
    url: 'https://www.ejetaragua.com/guias/celular-molhado/primeiros-socorros',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Celular Molhado', url: '/guias/celular-molhado' },
    { name: 'Primeiros Socorros' },
  ]

const faqs = [
    {
      "question": "Devo ligar para testar se funciona?",
      "answer": "NÃO! Ligar celular molhado pode causar curto-circuito. Espere no mínimo 24h após secagem completa. Teste apenas depois."
    },
    {
      "question": "E se o celular estava ligado quando molhou?",
      "answer": "Desligue IMEDIATAMENTE. Não importa se estava fazendo algo importante. Cada segundo ligado com água dentro aumenta risco de dano permanente."
    },
    {
      "question": "Posso usar arroz nos primeiros minutos?",
      "answer": "NÃO perca tempo com arroz! Arroz leva 24-48h e é ineficaz. Use ejeção por som (2-5 min) - é 20x mais rápido e eficaz."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Primeiros Socorros Para Celular Molhado: Guia Urgente 2026',
    description: 'Celular acabou de molhar? Primeiros socorros imediatos podem salvar. Passo a passo dos primeiros 5 minutos críticos.',
    url: '/guias/celular-molhado/primeiros-socorros',
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
            Primeiros Socorros: 5 Minutos Que Salvam
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Primeiros 5 minutos: (1) Retire da água, (2) Desligue AGORA, (3) Seque exterior, (4) NÃO teste se funciona, (5) Ejete água com som. Cada segundo conta!
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
              Minuto 1: Retire e Desligue
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Pegue celular, DESLIGUE imediatamente (não teste se funciona). Se não desligar: force desligamento. Cada segundo ligado aumenta risco de curto.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Minutos 2-3: Secagem Inicial
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Seque EXTERIOR com toalha absorvente. Remova capa/película. Seque portas (USB, fones). NÃO use secador - apenas toalha.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Minutos 4-5: Ejeção de Água
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Acesse ferramenta de ejeção. Volume máximo. Speaker para baixo. Toque 30s. Veja água saindo. Repita 3x nos primeiros 5 min.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Após 5 Minutos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Continue ejeção (mais 2-3x), posicione speaker para baixo por 2h, NÃO carregue por 24h, deixe em local ventilado.
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
