import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Garantia Apple Cobre Celular Molhado? | Verdade 2026',
  description: 'Garantia Apple cobre iPhone molhado? AppleCare+ ajuda? Descubra a verdade sobre cobertura de dano por líquidos.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/iphone/garantia-apple',
  },
  openGraph: {
    title: 'Garantia Apple Cobre Celular Molhado? | Verdade 2026',
    description: 'Garantia Apple cobre iPhone molhado? AppleCare+ ajuda? Descubra a verdade sobre cobertura de dano por líquidos.',
    url: 'https://www.ejetaragua.com/guias/iphone/garantia-apple',
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
      "question": "Garantia Apple cobre dano por água?",
      "answer": "NÃO. Garantia padrão (1 ano) NÃO cobre danos por líquidos em nenhum circunstância. Mesmo com IP68. Não importa se molhou por 1 segundo ou 1 hora - dano por água não é coberto."
    },
    {
      "question": "Apple Care+ cobre iPhone molhado?",
      "answer": "SIM, mas APENAS se comprou Apple Care+ com cobertura de danos acidentais (não o padrão). Você paga franquia de R$ 400-800 dependendo do modelo. Pode usar até 2 vezes por 12 meses."
    },
    {
      "question": "Posso comprar Apple Care+ depois que já molhou?",
      "answer": "NÃO. Apple Care+ deve ser comprado nos primeiros 60 dias após a compra do iPhone, ou no momento exato da compra. Você NÃO pode comprar depois que aparece dano. Apple verifica o aparelho."
    },
    {
      "question": "Quanto custa reparar iPhone molhado sem Apple Care+?",
      "answer": "iPhone 15 Pro Max: ~R$ 4.200. iPhone 15 Pro: ~R$ 3.800. iPhone 15: ~R$ 2.800. iPhone 14: ~R$ 2.400. Preços Apple Store Brasil 2026. Assistências não-autorizadas cobram menos mas você perde garantia."
    },
    {
      "question": "Como a Apple detecta que molhou?",
      "answer": "Indicadores de Contato com Líquido (LCI) ficam vermelhos quando expostos à água. Todos os iPhones têm LCI na bandeja do SIM. Técnicos conseguem acessar múltiplos LCI internos que você não vê."
    },
    {
      "question": "Posso tentar limpar o LCI para simular que não molhou?",
      "answer": "NÃO. Não funciona e técnicos Apple são treinados para detectar fraude. Há múltiplos LCI internos que você não consegue acessar. Seja honesto - tentativas de fraude resultam em recusa de serviço."
    },
    {
      "question": "Vale a pena Apple Care+ para proteção contra água?",
      "answer": "Sim, se você: frequenta praia/piscina, usa iPhone em ambientes úmidos, ou tem histórico de acidentes. Custo 2 anos: R$ 1.200-1.600. Reparo sem seguro: R$ 2.000-4.200. Uma utilização compensa financeiramente."
    },
    {
      "question": "Qual a diferença entre Apple Care+ padrão e com danos acidentais?",
      "answer": "Padrão (R$ 600-900): estende garantia 2 anos, suporte prioritário, MAS não cobre água. Com Danos Acidentais (R$ 1.200-1.600): cobre água, tela quebrada, quedas - cobrindo até 2 incidentes por ano."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Garantia Apple Cobre Celular Molhado? | Verdade 2026',
    description: 'Garantia Apple cobre iPhone molhado? AppleCare+ ajuda? Descubra a verdade sobre cobertura de dano por líquidos.',
    url: '/guias/iphone/garantia-apple',
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
            Garantia Apple e Dano Por Água
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Garantia padrão Apple NÃO cobre dano por líquidos, mesmo com IP68. AppleCare+ cobre com cobrança de taxa (R$ 500-800). Indicadores de líquido comprovam contato.
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
