import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Samsung Molhado: Galaxy S/Note/A - Guia Completo 2026',
  description: 'Samsung Galaxy molhado? Guia específico para todos os modelos: S24, S23, Note, A54, A34. IP68, ejeção de água, e recuperação.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/android/samsung',
  },
  openGraph: {
    title: 'Samsung Molhado: Galaxy S/Note/A - Guia Completo 2026',
    description: 'Samsung Galaxy molhado? Guia específico para todos os modelos: S24, S23, Note, A54, A34. IP68, ejeção de água, e recuperação.',
    url: 'https://www.ejetaragua.com/guias/android/samsung',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Android', url: '/guias/android' },
    { name: 'Samsung' },
  ]

const faqs = [
    {
      "question": "Galaxy S é realmente IP68?",
      "answer": "Sim. Galaxy S24/S23/S22/S21 são IP68 até 1.5m/30min. Excelente proteção. Ainda assim, não mergulhe intencionalmente - é para acidentes."
    },
    {
      "question": "Galaxy Note tem proteção melhor que S?",
      "answer": "Igual! Galaxy Note também é IP68. Note também tem carregamento sem fio. Proteção é idêntica. Escolha depende do tamanho que você prefere."
    },
    {
      "question": "Galaxy A54 tem proteção?",
      "answer": "Sim, Galaxy A54 é IP67 (um pouco menos que S/Note que são IP68). A34 também é IP67. Modelos A mais baratos (A24, A14): sem IP. Verifique seu."
    },
    {
      "question": "Samsung bloqueia carregamento se detectar água?",
      "answer": "Sim! Samsung mostra alerta 'Umidade detectada' e bloqueia carregamento com fio. Use carregamento sem fio (Qi) se urgente. Alerta desaparece quando seco (4-48h)."
    },
    {
      "question": "Galaxy tem garantia para dano por água?",
      "answer": "Garantia padrão NÃO cobre água, mesmo com IP68. Samsung Care+ cobre danos acidentais, mas precisa franquia. Programa varia por país/país."
    },
    {
      "question": "Qual Samsung é melhor para praia/piscina?",
      "answer": "Galaxy S/Note com IP68 é excelente. Mesmo assim, não recomenda-se usar intencionalmente na água. Use capa à prova d'água adicional para máxima segurança."
    },
    {
      "question": "Samsung Galaxy Fold/Flip é resistente?",
      "answer": "Galaxy Z Fold/Z Flip têm IPX8 (protege água mas não poeira - X significa sem proteção de sólidos). Excelente contra água, mas evite areia/sujeira."
    },
    {
      "question": "Como desativar alerta de umidade Samsung?",
      "answer": "Alerta desativa sozinho quando USB-C seca (4-48h). Não tem como desativar manualmente. Aguarde. Se persiste após 48h, procure técnico - pode ser sensor com falha."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Samsung Molhado: Galaxy S/Note/A - Guia Completo 2026',
    description: 'Samsung Galaxy molhado? Guia específico para todos os modelos: S24, S23, Note, A54, A34. IP68, ejeção de água, e recuperação.',
    url: '/guias/android/samsung',
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
            Samsung Galaxy Molhado: Guia Completo
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Samsung Galaxy com IP68 (S/Note) tem boa resistência. Se molhou: ejete água com som 165Hz, seque portas USB-C, não carregue por 24h. Modelos A variam.
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
