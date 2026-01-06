import { Metadata } from 'next'
import WaterEjectTool from '@/components/WaterEjectTool'
import RelatedLinks from '@/components/RelatedLinks'
import FAQ from '@/components/FAQ'
import { createFAQSchema, websiteSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Ejetar Água do Celular - Remova Água do Alto-Falante Grátis',
  description: 'Ferramenta gratuita para ejetar água do alto-falante do celular usando ondas sonoras de 165Hz. Funciona em iPhone e Android. Rápido, seguro e eficaz.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ejetar Água do Celular - Ferramenta Gratuita',
    description: 'Remova água do alto-falante usando ondas sonoras. Funciona em todos os celulares.',
    url: 'https://www.ejetaragua.com',
    type: 'website',
  },
}

const faqs = [
  {
    question: 'Como funciona a ejeção de água por som?',
    answer: 'A ferramenta emite ondas sonoras na frequência de 165Hz que criam vibrações no alto-falante. Essas vibrações fazem com que a água seja expelida pelos orifícios do speaker, similar ao método usado pelo Apple Watch.',
  },
  {
    question: 'É seguro para o meu celular?',
    answer: 'Sim! O método de ejeção por ondas sonoras é completamente seguro. Usamos frequências testadas que não danificam o alto-falante. É mais seguro que métodos tradicionais como arroz ou secador.',
  },
  {
    question: 'Funciona em iPhone e Android?',
    answer: 'Sim, funciona em qualquer celular com alto-falante funcional. Testado em iPhone (todos os modelos), Samsung, Xiaomi, Motorola e outras marcas Android.',
  },
  {
    question: 'Quantas vezes devo usar?',
    answer: 'Recomendamos usar 3-5 vezes com intervalos de 10 segundos entre cada uso. Se ainda houver água, aguarde alguns minutos e repita o processo.',
  },
  {
    question: 'O que fazer antes de usar a ferramenta?',
    answer: 'Desligue o celular imediatamente após molhar, seque o exterior com toalha macia, remova capa e acessórios. Depois use nossa ferramenta com o volume no máximo e o speaker voltado para baixo.',
  },
  {
    question: 'Qual volume devo usar?',
    answer: 'Use o volume no máximo (80-100%) para obter melhor efeito. O som de 165Hz precisa de amplitude suficiente para criar as vibrações necessárias.',
  },
  {
    question: 'Quanto tempo leva para funcionar?',
    answer: 'Cada sessão dura 30 segundos. Geralmente é necessário repetir 3-5 vezes. O processo completo leva cerca de 2-5 minutos.',
  },
  {
    question: 'Posso usar se meu celular não é resistente à água?',
    answer: 'Sim! A ferramenta é útil mesmo para celulares sem certificação IP. O importante é que o aparelho ainda ligue e o alto-falante funcione.',
  },
]

const relatedLinks = [
  {
    title: 'Celular Molhado: O Que Fazer',
    url: '/guias/celular-molhado',
    description: 'Guia completo com ações imediatas e mitos perigosos a evitar',
  },
  {
    title: 'Como Funciona o Som de Ejeção',
    url: '/guias/som-ejecao-agua/como-funciona',
    description: 'Entenda a ciência por trás das ondas sonoras de 165Hz',
  },
  {
    title: 'iPhone Molhado: Guia Especializado',
    url: '/guias/iphone',
    description: 'Instruções específicas para todos os modelos de iPhone',
  },
  {
    title: 'Android Molhado: Todas as Marcas',
    url: '/guias/android',
    description: 'Samsung, Xiaomi, Motorola e mais marcas Android',
  },
  {
    title: 'Alto-Falante Abafado',
    url: '/guias/alto-falante/som-abafado',
    description: 'Como resolver som baixo ou abafado depois de molhar',
  },
  {
    title: 'Prevenção: Como Proteger',
    url: '/guias/prevencao',
    description: 'Evite problemas com capas impermeáveis e cuidados certos',
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

      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section with Tool */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Ejetar Água do Celular
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
              Remova água do alto-falante usando ondas sonoras de 165Hz
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Ferramenta gratuita, segura e eficaz. Funciona em iPhone e Android.
            </p>
          </div>

          {/* Water Eject Tool Component */}
          <WaterEjectTool />

          {/* Quick Instructions */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Como Usar em 4 Passos
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Aumente o Volume</h3>
                  <p className="text-sm text-gray-600">
                    Coloque o volume no máximo (80-100%) para melhor efeito
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Posicione o Celular</h3>
                  <p className="text-sm text-gray-600">
                    Alto-falante voltado para baixo para a água escorrer
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Toque o Som</h3>
                  <p className="text-sm text-gray-600">
                    Clique no botão e deixe tocar por 30 segundos
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Repita Se Necessário</h3>
                  <p className="text-sm text-gray-600">
                    Use 3-5 vezes com pausas de 10 segundos entre cada uso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Works */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-blue-50 border-2 border-primary rounded-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Por Que Este Método Funciona
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🔊
                </div>
                <h3 className="font-semibold text-lg mb-2">Ondas Sonoras 165Hz</h3>
                <p className="text-gray-600 text-sm">
                  Frequência específica testada para criar vibrações ideais no alto-falante
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  ⚡
                </div>
                <h3 className="font-semibold text-lg mb-2">Rápido e Eficaz</h3>
                <p className="text-gray-600 text-sm">
                  2-5 minutos vs 24-48 horas de métodos tradicionais como arroz
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  ✅
                </div>
                <h3 className="font-semibold text-lg mb-2">100% Seguro</h3>
                <p className="text-gray-600 text-sm">
                  Não danifica componentes. Método usado pelo Apple Watch
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When to Use */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Use Esta Ferramenta Quando
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl mb-3">💧</div>
              <h3 className="font-semibold mb-2">Celular Molhou</h3>
              <p className="text-sm text-gray-600">
                Caiu na água, piscina, chuva ou respingos acidentais
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl mb-3">🔇</div>
              <h3 className="font-semibold mb-2">Som Abafado</h3>
              <p className="text-sm text-gray-600">
                Alto-falante com som baixo, chiado ou abafado
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl mb-3">🚿</div>
              <h3 className="font-semibold mb-2">Após Umidade</h3>
              <p className="text-sm text-gray-600">
                Após praia, piscina, banheiro ou academia
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl mb-3">🧹</div>
              <h3 className="font-semibold mb-2">Limpeza</h3>
              <p className="text-sm text-gray-600">
                Manutenção preventiva do alto-falante
              </p>
            </div>
          </div>
        </section>

        {/* Warning Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 md:p-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-3xl">⚠️</div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Importante: O Que Fazer Antes
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Desligue o celular imediatamente</strong> - não tente ligar para testar
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Seque o exterior com toalha</strong> - remova toda água visível
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Não use arroz, secador ou calor</strong> - pode danificar componentes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Não carregue por 24h</strong> - deixe secar completamente
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Se água salgada, busque técnico</strong> - corrosão é rápida e grave
                    </span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  📖 Leia o <a href="/guias/celular-molhado" className="text-primary font-semibold hover:underline">guia completo de celular molhado</a> para mais detalhes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <RelatedLinks links={relatedLinks} title="Guias Completos" />
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <FAQ items={faqs} />
        </section>

        {/* Final CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Explore Nossos Guias</h2>
            <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
              Aprenda tudo sobre como proteger, recuperar e cuidar do seu celular
            </p>
            <a
              href="/guias"
              className="inline-block bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition shadow-lg text-lg"
            >
              Ver Todos os Guias
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
