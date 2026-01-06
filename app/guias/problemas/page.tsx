import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Problemas Depois de Molhar Celular: Diagnóstico 2026',
  description: 'Celular molhado com problemas? Microfone, câmera, tela, som: diagnóstico completo, soluções, e quando tem conserto vs trocar.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/problemas',
  },
  openGraph: {
    title: 'Problemas Depois de Molhar Celular: Diagnóstico 2026',
    description: 'Celular molhado com problemas? Microfone, câmera, tela, som: diagnóstico completo, soluções, e quando tem conserto vs trocar.',
    url: 'https://www.ejetaragua.com/guias/problemas',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Problemas' },
  ]

const faqs = [
    {
      "question": "Problemas podem aparecer dias depois?",
      "answer": "Sim. Corrosão e oxidação são graduais. Celular pode parecer OK inicialmente mas falhar em 1-2 semanas. Por isso é crucial secar completamente mesmo se aparentemente funciona."
    },
    {
      "question": "Vale a pena consertar?",
      "answer": "Se custo <50% do valor usado: sim. Se >50%: considere trocar. Exemplo: celular vale R$ 800, conserto R$ 600 = não vale. Exceção: celular novo ou valor sentimental."
    },
    {
      "question": "Tela manchada volta ao normal?",
      "answer": "Manchas por umidade podem sumir em 3-7 dias. Manchas permanentes (amarelas/escuras) indicam dano no LCD/OLED e requerem troca de tela (R$ 300-1500)."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Problemas Depois de Molhar Celular: Diagnóstico 2026',
    description: 'Celular molhado com problemas? Microfone, câmera, tela, som: diagnóstico completo, soluções, e quando tem conserto vs trocar.',
    url: '/guias/problemas',
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
            Problemas Depois de Molhar: Diagnóstico
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Problemas comuns: som abafado (água no speaker), microfone mudo (água na membrana), tela manchada (umidade no LCD), não liga (curto-circuito). Cada um tem solução específica.
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
              Sintomas Comuns
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Som abafado, microfone não funciona, câmera embaçada, tela manchada, celular não liga, bateria descarrega rápido, touch fantasma, Face ID/biometria parou.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Diagnóstico Por Sintoma
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Som abafado: água no speaker (use ejeção). Microfone mudo: água na membrana (ejete + espere 24h). Tela manchada: umidade entre camadas (pode levar 7 dias). Não liga: curto-circuito (técnico urgente).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando Tem Conserto
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Som abafado: 85% recupera com ejeção. Microfone: 70% com secagem. Câmera embaçada: 60% seca sozinha. Tela manchada: 40% melhora. Não liga: 30% recuperável (técnico).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando Desistir
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Se custo de reparo >50% do valor usado do celular, considere trocar. Múltiplos problemas simultâneos indicam dano grave. Água salgada causa corrosão irreversível rápida.
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
