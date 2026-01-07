import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Câmera do iPhone Embaçada Depois que Molhou | 2026',
  description: 'Câmera do iPhone embaçada por dentro? Descubra se seca sozinha, quanto tempo demora, e quando precisa de assistência.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/iphone/camera-embacada',
  },
  openGraph: {
    title: 'Câmera do iPhone Embaçada Depois que Molhou | 2026',
    description: 'Câmera do iPhone embaçada por dentro? Descubra se seca sozinha, quanto tempo demora, e quando precisa de assistência.',
    url: 'https://www.ejetaragua.com/guias/iphone/camera-embacada',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'iPhone', url: '/guias/iphone' },
    { name: 'iPhone' },
  ]

const faqs = [
    {
      "question": "Câmera embaçada seca sozinha?",
      "answer": "SIM! Na maioria dos casos, câmera embaçada seca naturalmente em 24-72h em local ventilado. Você NÃO precisa fazer nada além de deixar secar. A água é vapor que condensa e evapora."
    },
    {
      "question": "Posso usar a câmera enquanto está embaçada?",
      "answer": "Tecnicamente sim, mas NÃO recomendamos. Fotos ficarão desfocadas/borradas. Espere secar completamente antes de fotografar. Se usar agora, não piora o problema, mas desperdiça tempo."
    },
    {
      "question": "Quanto tempo leva para câmera clarear?",
      "answer": "Geralmente 24-48 horas em local seco e ventilado. Alguns casos levam até 7 dias dependendo da quantidade de umidade. Paciência é essencial - não acelere o processo com calor."
    },
    {
      "question": "Devo usar secador de cabelo para secar câmera?",
      "answer": "NÃO. Calor danifica adesivos internos, pode derreter lentes, e expande água para outras áreas do iPhone. Deixe secar NATURALMENTE em temperatura ambiente apenas."
    },
    {
      "question": "E se a câmera não clarear após 7 dias?",
      "answer": "Pode haver: dano na vedação do módulo câmera, ou água dentro da lente que não consegue evaporar. Procure Apple Store para diagnóstico. Reparação: R$ 300-800."
    },
    {
      "question": "Câmera frontal e traseira embaçam igualmente?",
      "answer": "SIM, ambas podem embaçar, mas traseira é mais comum pois está mais exposta. Se ambas embaçarem = muita umidade entrou. Deixe secar por 48-72h em local bem ventilado."
    },
    {
      "question": "Posso acelerar secagem usando silica gel?",
      "answer": "SIM! Silica gel (sachês que vêm em sapatos) absorve umidade rapidamente. Deixe iPhone em saco com silica gel por 24-48h. Muda cor quando saturada. Mais eficaz que deixar ao ar."
    },
    {
      "question": "Se câmera embaçada indica outro problema maior?",
      "answer": "Câmera embaçada SOZINHA não indica dano grave. Se outros sintomas aparecerem (som abafado, microfone mudo, tela com manchas), há dano mais extenso e procure técnico."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Câmera do iPhone Embaçada Depois que Molhou | 2026',
    description: 'Câmera do iPhone embaçada por dentro? Descubra se seca sozinha, quanto tempo demora, e quando precisa de assistência.',
    url: '/guias/iphone/camera-embacada',
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
            Câmera do iPhone Embaçada: O Que Fazer
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Câmera embaçada geralmente seca naturalmente em 24-72h. Deixe em ambiente seco, NÃO use secador. Se não melhorar em 7 dias, procure Apple Store.
          </p>
        </div>

        {/* CTA to Tool */}
        <CTABox
          title="Ejetar Água do Celular Agora"
          description="Use nossa ferramenta gratuita com som de 165Hz para remover água do alto-falante em 2-5 minutos. Funciona em todos os celulares."
          buttonText="Abrir Ferramenta de Ejeção"
          buttonUrl="https://www.ejetaragua.com/?utm_source=guias&utm_medium=seo&utm_campaign=cta"
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
            buttonUrl="https://www.ejetaragua.com/?utm_source=guias&utm_medium=seo&utm_campaign=cta"
          />
        </div>
      </article>
    </>
  )
}
