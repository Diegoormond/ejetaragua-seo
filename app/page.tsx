import { Metadata } from 'next'
import FAQ from '@/components/FAQ'
import { createFAQSchema, websiteSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Guias Ejetar Água - Central de Conhecimento',
  description: 'Central de guias completos sobre como ejetar água do celular, recuperar dispositivos molhados e proteger seu smartphone. Artigos especializados para iPhone e Android.',
  alternates: {
    canonical: 'https://ejetaragua-seo.vercel.app',
  },
  openGraph: {
    title: 'Guias Ejetar Água - Central de Conhecimento',
    description: 'Guias completos sobre recuperação de celulares molhados, ejeção de água e proteção de smartphones.',
    url: 'https://ejetaragua-seo.vercel.app',
    type: 'website',
  },
}

const faqs = [
  {
    question: 'Onde está a ferramenta de ejeção de água?',
    answer: 'A ferramenta oficial está disponível em www.ejetaragua.com. Este site contém apenas guias educacionais e artigos de suporte.',
  },
  {
    question: 'Os guias são gratuitos?',
    answer: 'Sim! Todos os nossos guias são 100% gratuitos e acessíveis. Cobrimos iPhone, Android, Samsung, Xiaomi, Motorola e todas as principais marcas.',
  },
  {
    question: 'Qual a diferença entre este site e o ejetaragua.com?',
    answer: 'Este site (ejetaragua-seo.vercel.app) é nossa central de guias educacionais. O site principal (ejetaragua.com) contém a ferramenta interativa de ejeção de água.',
  },
]

const guideCategories = [
  {
    title: 'Todos os Guias',
    url: '/guias',
    description: 'Explore nossa biblioteca completa de guias sobre recuperação de celulares',
    icon: '📚',
  },
  {
    title: 'iPhone Molhado',
    url: '/guias/iphone',
    description: 'Guias especializados para todos os modelos de iPhone, Face ID, resistência IP68',
    icon: '📱',
  },
  {
    title: 'Android Molhado',
    url: '/guias/android',
    description: 'Samsung, Xiaomi, Motorola e outras marcas Android - certificação IP e recovery',
    icon: '🤖',
  },
  {
    title: 'Celular Molhado',
    url: '/guias/celular-molhado',
    description: 'Primeiros socorros, o que fazer imediatamente, mitos perigosos a evitar',
    icon: '💧',
  },
  {
    title: 'Som de Ejeção',
    url: '/guias/som-ejecao-agua',
    description: 'Como funciona, frequência 165Hz, segurança e eficácia do método',
    icon: '🔊',
  },
  {
    title: 'Alto-Falante',
    url: '/guias/alto-falante',
    description: 'Som abafado, chiado, limpeza e diagnóstico de problemas no speaker',
    icon: '🔇',
  },
  {
    title: 'Soluções',
    url: '/guias/solucoes',
    description: 'Métodos caseiros, sílica gel, secagem e técnicas de recuperação',
    icon: '🛠️',
  },
  {
    title: 'Problemas',
    url: '/guias/problemas',
    description: 'Tela manchada, bateria, Face ID, câmera embaçada e outros problemas',
    icon: '⚠️',
  },
  {
    title: 'Prevenção',
    url: '/guias/prevencao',
    description: 'Capas impermeáveis, certificação IP68, cuidados na praia e piscina',
    icon: '🛡️',
  },
]

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createFAQSchema(faqs)) }}
      />

      <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Central de Conhecimento
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Guias Completos de<br />Recuperação de Celulares
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Aprenda tudo sobre ejeção de água, recuperação de dispositivos molhados e proteção do seu smartphone
            </p>

            {/* Primary CTA - Tool Link */}
            <div className="mb-12">
              <a
                href="https://www.ejetaragua.com/?utm_source=home&utm_medium=seo&utm_campaign=cta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-bold px-10 py-5 rounded-lg hover:shadow-xl transition-all text-lg transform hover:scale-105"
              >
                🔧 Abrir Ferramenta Oficial
              </a>
              <p className="text-sm text-gray-500 mt-3">
                Ferramenta gratuita de ejeção de água - funciona em iPhone e Android
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl font-bold text-primary mb-2">83+</div>
                <div className="text-sm text-gray-600">Guias Detalhados</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-gray-600">Gratuito</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl font-bold text-primary mb-2">PT-BR</div>
                <div className="text-sm text-gray-600">Português Brasil</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl font-bold text-primary mb-2">2026</div>
                <div className="text-sm text-gray-600">Atualizado</div>
              </div>
            </div>
          </div>
        </section>

        {/* Guide Categories Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Explore os Guias por Categoria
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guideCategories.map((category) => (
              <a
                key={category.url}
                href={category.url}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-all transform hover:-translate-y-1 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform inline-block">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {category.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Why Use Our Guides */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-blue-50 border-2 border-primary rounded-lg p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Por Que Nossos Guias?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="font-semibold text-lg mb-3">Conteúdo Verificado</h3>
                <p className="text-gray-600 text-sm">
                  Informações baseadas em dados técnicos, estudos e testes práticos comprovados
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  📖
                </div>
                <h3 className="font-semibold text-lg mb-3">Passo a Passo Detalhado</h3>
                <p className="text-gray-600 text-sm">
                  Instruções claras em português brasileiro com exemplos práticos e imagens
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  🔄
                </div>
                <h3 className="font-semibold text-lg mb-3">Sempre Atualizado</h3>
                <p className="text-gray-600 text-sm">
                  Conteúdo revisado regularmente com as últimas técnicas e métodos de 2026
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Perguntas Frequentes
          </h2>
          <FAQ items={faqs} />
        </section>

        {/* Final CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Precisa Ejetar Água Agora?
            </h2>
            <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
              Use nossa ferramenta oficial gratuita para remover água do alto-falante em 2-5 minutos
            </p>
            <a
              href="https://www.ejetaragua.com/?utm_source=home&utm_medium=seo&utm_campaign=cta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary font-bold px-10 py-5 rounded-lg hover:bg-gray-100 transition shadow-lg text-lg transform hover:scale-105"
            >
              Abrir Ferramenta Oficial →
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
