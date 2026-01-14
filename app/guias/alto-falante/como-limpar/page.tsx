import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Como Limpar Alto-Falante Molhado: Guia Seguro 2026',
  description: 'Aprenda a limpar alto-falante do celular molhado com segurança. Ejeção por som, métodos seguros, e o que nunca fazer.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/alto-falante/como-limpar',
  },
  openGraph: {
    title: 'Como Limpar Alto-Falante Molhado: Guia Seguro 2026',
    description: 'Aprenda a limpar alto-falante do celular molhado com segurança. Ejeção por som, métodos seguros, e o que nunca fazer.',
    url: 'https://www.ejetaragua.com/guias/alto-falante/como-limpar',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Alto-Falante', url: '/guias/alto-falante' },
    { name: 'Limpeza' },
  ]

const faqs = [
    {
      "question": "Posso usar álcool para limpar o alto-falante?",
      "answer": "Álcool isopropílico 99% pode ser usado com MUITO cuidado (1-2 gotas em cotonete). Álcool 70% NÃO (contém água). Melhor deixar para técnicos."
    },
    {
      "question": "Cotonete pode danificar o alto-falante?",
      "answer": "Cotonete seco usado gentilmente é OK para limpeza externa. NUNCA molhado, nunca inserido com força, e nunca pressionando a membrana."
    },
    {
      "question": "Quanto tempo esperar antes de limpar?",
      "answer": "Use ejeção por som imediatamente. Para limpeza física com escova, espere até água ser removida (após ejeção). Não espere secar antes de ejetar."
    },
    {
      "question": "Existe limpador de alto-falante ou aplicativo para limpar?",
      "answer": "SIM! Nossa ferramenta funciona como um limpador de alto-falante digital. O som de 165Hz faz a limpeza/ejeção da água automaticamente. É como um desentupidor de alto-falante por som. Gratuito e funciona em qualquer celular."
    },
    {
      "question": "Como tirar água do alto-falante do celular?",
      "answer": "Para tirar água do alto-falante: 1) Use som de 165Hz (nossa ferramenta), 2) Posicione speaker para baixo, 3) Repita 3-5 vezes, 4) Seque externamente com pano. É o método mais eficaz - funciona em 85% dos casos em 2-5 minutos."
    },
    {
      "question": "Som para limpar alto-falante funciona mesmo?",
      "answer": "SIM! O som/áudio/barulho de 165Hz cria vibrações que expelem água. É a mesma tecnologia que Apple usa no Apple Watch. Som para limpar, desentupir ou tirar água do alto-falante é comprovadamente eficaz."
    },
    {
      "question": "Limpeza de alto-falante com som funciona para poeira e areia?",
      "answer": "PARCIALMENTE. O som de 165Hz é otimizado para ÁGUA. Para poeira leve funciona um pouco, mas escova macia seca é melhor. Para areia, use escova primeiro - areia pode arranhar se vibrada."
    },
    {
      "question": "Qual a diferença entre limpar, desentupir e tirar água do alto-falante?",
      "answer": "São termos diferentes para o mesmo processo. Limpar alto-falante, desentupir alto-falante, tirar água do alto-falante - todos se referem a remover líquido/obstrução. O som 165Hz resolve todos esses problemas."
    },
    {
      "question": "Como limpar fone/saída de som do celular?",
      "answer": "Fone, saída de som, autofalante, auto-falante e alto-falante são o mesmo componente. Use ejeção por som 165Hz para remover água. Para sujeira externa, use escova de dentes macia seca com movimentos leves."
    },
    {
      "question": "Limpador de alto-falante grátis existe?",
      "answer": "SIM! Nossa ferramenta web é gratuita e funciona como limpador de alto-falante de celular. Não precisa baixar app, não tem anúncios invasivos. Acesse pelo navegador e use quantas vezes precisar."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Como Limpar Alto-Falante Molhado: Guia Seguro 2026',
    description: 'Aprenda a limpar alto-falante do celular molhado com segurança. Ejeção por som, métodos seguros, e o que nunca fazer.',
    url: '/guias/alto-falante/como-limpar',
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
            Como Limpar Alto-Falante Molhado Corretamente
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Limpe alto-falante molhado com ejeção por som 165Hz primeiro. Depois use escova macia seca. NUNCA use palito, agulha, ou água diretamente.
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
              Por Que Limpar Corretamente
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Alto-falante molhado acumula sujeira e água. Limpeza incorreta pode perfurar a membrana ou empurrar água para dentro.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Método Seguro de Limpeza
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Use ejeção por som 165Hz primeiro para remover água. Depois, escova de dente macia seca para remover sujeira externa. Álcool isopropílico 99% apenas para técnicos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que NÃO Fazer
            </h2>
            <p className="text-gray-700 leading-relaxed">
              NUNCA use: palito (perfura membrana), agulha, cotonete molhado, jato de água, aspirador muito forte, ou produtos químicos agressivos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando Procurar Assistência
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Se som não melhorar após limpeza e secagem de 48h, ou se houver dano visível na membrana. Custo de troca: R$ 150-300.
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
