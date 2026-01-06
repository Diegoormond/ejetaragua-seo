import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Som do iPhone Abafado Depois que Molhou: Resolver 2026',
  description: 'Som do iPhone abafado após molhar? Método de ejeção por ondas sonoras resolve em 85% dos casos. Guia completo.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/iphone/som-abafado',
  },
  openGraph: {
    title: 'Som do iPhone Abafado Depois que Molhou: Resolver 2026',
    description: 'Som do iPhone abafado após molhar? Método de ejeção por ondas sonoras resolve em 85% dos casos. Guia completo.',
    url: 'https://www.ejetaragua.com/guias/iphone/som-abafado',
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
      "question": "Som abafado significa que tem água?",
      "answer": "GERALMENTE sim, especialmente se começou logo após molhar. Mas pode ser: água no speaker, problema de software (silencioso ativado, limite de volume), ou dano na membrana. Teste ejeção primeiro antes de assumir dano."
    },
    {
      "question": "Devo tentar ejetar água ou levar direto ao técnico?",
      "answer": "Ejete PRIMEIRO. Taxa de sucesso é 85%. Leva 5 minutos. Se não funcionar após 5 tentativas em 24h, AÍ procure técnico. Ejeção não piora problema, então não há risco em tentar."
    },
    {
      "question": "E se o som voltar claro mas depois fica abafado novamente?",
      "answer": "Pode ser água que não saiu completamente. Repita ejeção após 2-4 horas. Se água voltar sempre, pode haver dano na vedação do speaker ou água em circuitos internos - procure técnico."
    },
    {
      "question": "O som abafado danificará mais meu iPhone se continuar usando?",
      "answer": "NÃO danificará mais. Mas água pode estar próxima a outros componentes (microfone, circuitos). Se som é ÚNICO problema, ejetar é seguro. Se múltiplos problemas: som + câmera + microfone = dano interno, procure assistência."
    },
    {
      "question": "Posso usar fones de ouvido enquanto o som está abafado?",
      "answer": "Sim! Som abafado do speaker não afeta qualidade de fones conectados. Use fones como alternativa durante secagem. Mas tente ejetar para restaurar som do aparelho."
    },
    {
      "question": "Qual é o custo para consertar alto-falante danificado?",
      "answer": "Apple Store: R$ 300-800 dependendo do modelo (troca do módulo speaker). Assistências não-autorizadas: R$ 150-400. Se for damage interno além do speaker, custo é reparo/troca completa (R$ 2.000+)."
    },
    {
      "question": "Devo desligar o iPhone enquanto ejetar água?",
      "answer": "NÃO, mantenha LIGADO. Som de 165Hz precisa do sistema operacional rodando para funcionar. Deixe ligado, volume máximo, e execute ejeção normalmente. Se desligar, som não sai."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Som do iPhone Abafado Depois que Molhou: Resolver 2026',
    description: 'Som do iPhone abafado após molhar? Método de ejeção por ondas sonoras resolve em 85% dos casos. Guia completo.',
    url: '/guias/iphone/som-abafado',
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
            Som do iPhone Abafado: Solução
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Som abafado indica água no speaker. Use ejeção por som 165Hz (nossa ferramenta gratuita). Volume máximo, 3-5 repetições de 30s. Taxa de sucesso: 85%.
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
