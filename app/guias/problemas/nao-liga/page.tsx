import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Celular Molhado Não Liga: O Que Fazer? 2026',
  description: 'Celular não liga após molhar? Causas, soluções, quando tem conserto. Bateria, curto-circuito, ou placa-mãe.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/problemas/nao-liga',
  },
  openGraph: {
    title: 'Celular Molhado Não Liga: O Que Fazer? 2026',
    description: 'Celular não liga após molhar? Causas, soluções, quando tem conserto. Bateria, curto-circuito, ou placa-mãe.',
    url: 'https://www.ejetaragua.com/guias/problemas/nao-liga',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Problemas', url: '/guias/problemas' },
    { name: 'Não Liga' },
  ]

const faqs = [
    {
      "question": "Quanto custa consertar celular que não liga?",
      "answer": "Bateria: R$ 150-400. Limpeza de placa: R$ 200-500. Reparo de placa: R$ 500-1.500. Substituição de placa: R$ 1.000-3.000 (geralmente não vale)."
    },
    {
      "question": "Vale a pena consertar?",
      "answer": "Depende do valor do celular. Se vale <R$ 1.000: provavelmente não (conserto pode custar R$ 500-1.500). Se >R$ 2.000: tente."
    },
    {
      "question": "Posso tentar ligar no carregador?",
      "answer": "Após 48h seco: SIM. Conecte carregador, aguarde 5-10 min, então pressione power. Se não der sinal de vida: técnico urgente."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Celular Molhado Não Liga: O Que Fazer? 2026',
    description: 'Celular não liga após molhar? Causas, soluções, quando tem conserto. Bateria, curto-circuito, ou placa-mãe.',
    url: '/guias/problemas/nao-liga',
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
            Celular Não Liga: Diagnóstico e Soluções
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Celular não liga pode ser: (1) proteção da bateria (OK, temporário), (2) curto-circuito (grave), ou (3) placa-mãe danificada. NÃO force ligar - seque primeiro.
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
              Causas Possíveis
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Proteção automática da bateria (celular desligou sozinho - bom sinal). Curto-circuito (água fechou circuito - grave). Placa-mãe oxidada (corrosão - muito grave).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que Fazer Imediatamente
            </h2>
            <p className="text-gray-700 leading-relaxed">
              NÃO tente ligar forçadamente. Seque completamente (ejeção + 48h). Depois tente carregar (não ligar direto). Se carregar mas não ligar: problema grave.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Testes Seguros
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Após 48h seco: conecte carregador. LED acende? Bom sinal. Tela mostra carregando? Ótimo. Pressione power 10s. Liga? Sucesso! Não liga? Técnico.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando Tem Conserto
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Se LED carrega: 70% de chance de recuperar. Se nenhum sinal de vida: 30% de chance. Técnico pode: trocar bateria, limpar placa, ou declarar perda total.
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
