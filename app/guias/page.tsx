import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Guias Completos: Celular Molhado, iPhone, Android | Ejetar Água',
  description: 'Todos os guias sobre celular molhado, ejeção de água, iPhone, Android, alto-falante e mais. Aprenda a proteger e recuperar seu celular.',
  alternates: {
    canonical: '/guias',
  },
}

const categories = [
  {
    name: 'Celular Molhado',
    slug: 'celular-molhado',
    icon: '💧',
    description: 'Tudo sobre o que fazer quando o celular molha',
    color: 'blue',
    guides: [
      { title: 'O Que Fazer Quando Cai na Água', url: '/guias/celular-molhado/o-que-fazer' },
      { title: 'Como Secar Celular Corretamente', url: '/guias/celular-molhado/como-secar' },
      { title: 'Arroz Funciona? Mito Desvendado', url: '/guias/celular-molhado/arroz-mito' },
      { title: 'Quando Ligar Depois de Molhar', url: '/guias/celular-molhado/quando-ligar' },
      { title: 'Primeiros Socorros', url: '/guias/celular-molhado/primeiros-socorros' },
      { title: 'Água Salgada: Cuidados Especiais', url: '/guias/celular-molhado/agua-salgada' },
      { title: 'Assistência Técnica', url: '/guias/celular-molhado/assistencia-tecnica' },
    ],
  },
  {
    name: 'iPhone',
    slug: 'iphone',
    icon: '📱',
    description: 'Guias especializados para todos os modelos de iPhone',
    color: 'gray',
    guides: [
      { title: 'Como Ejetar Água do iPhone', url: '/guias/iphone/ejetar-agua' },
      { title: 'Modo Expulsão de Água (Atalho)', url: '/guias/iphone/modo-expulsao-agua' },
      { title: 'Alto-Falante iPhone Molhado', url: '/guias/iphone/alto-falante-molhado' },
      { title: 'Resistência à Água por Modelo', url: '/guias/iphone/resistencia-agua' },
      { title: 'Garantia e Apple Care', url: '/guias/iphone/garantia-agua' },
      { title: 'Modelos Resistentes', url: '/guias/iphone/modelos-resistentes' },
    ],
  },
  {
    name: 'Android',
    slug: 'android',
    icon: '🤖',
    description: 'Samsung, Xiaomi, Motorola e todas as marcas Android',
    color: 'green',
    guides: [
      { title: 'Como Ejetar Água do Android', url: '/guias/android/ejetar-agua' },
      { title: 'Som Para Tirar Água', url: '/guias/android/som-tirar-agua' },
      { title: 'Limpar Alto-Falante Android', url: '/guias/android/alto-falante-entupido' },
      { title: 'Android Resistente à Água', url: '/guias/android/resistencia-agua' },
      { title: 'Samsung Galaxy Molhado', url: '/guias/android/samsung-molhado' },
      { title: 'Xiaomi/Redmi Molhado', url: '/guias/android/xiaomi-molhado' },
      { title: 'Motorola Molhado', url: '/guias/android/motorola-molhado' },
    ],
  },
  {
    name: 'Alto-Falante',
    slug: 'alto-falante',
    icon: '🔊',
    description: 'Limpeza, ejeção de água e recuperação de som',
    color: 'purple',
    guides: [
      { title: 'Como Limpar Alto-Falante', url: '/guias/alto-falante/como-limpar' },
      { title: 'Som Abafado: Como Resolver', url: '/guias/alto-falante/som-abafado' },
      { title: 'Frequência de Ejeção Ideal', url: '/guias/alto-falante/frequencia-ejecao' },
      { title: 'Alto-Falante Danificado', url: '/guias/alto-falante/danificado' },
      { title: 'Prevenção de Danos', url: '/guias/alto-falante/prevencao' },
    ],
  },
  {
    name: 'Som de Ejeção',
    slug: 'som-ejecao-agua',
    icon: '🎵',
    description: 'Como funciona e como usar ondas sonoras',
    color: 'cyan',
    guides: [
      { title: 'Como Funciona o Som de Ejeção', url: '/guias/som-ejecao-agua/como-funciona' },
      { title: 'Frequência Ideal: 165Hz', url: '/guias/som-ejecao-agua/frequencia-ideal' },
      { title: 'Quantas Vezes Usar', url: '/guias/som-ejecao-agua/quantas-vezes' },
      { title: 'Realmente Funciona?', url: '/guias/som-ejecao-agua/funciona-mesmo' },
    ],
  },
  {
    name: 'Prevenção',
    slug: 'prevencao',
    icon: '🛡️',
    description: 'Como proteger seu celular da água',
    color: 'yellow',
    guides: [
      { title: 'Melhores Capas Impermeáveis', url: '/guias/prevencao/capas-impermeaveis' },
      { title: 'Cuidados na Praia', url: '/guias/prevencao/cuidados-praia' },
      { title: 'Cuidados na Piscina', url: '/guias/prevencao/cuidados-piscina' },
      { title: 'IP68 Explicado', url: '/guias/prevencao/ip68-explicado' },
    ],
  },
  {
    name: 'Soluções',
    slug: 'solucoes',
    icon: '🔧',
    description: 'Métodos caseiros e profissionais',
    color: 'orange',
    guides: [
      { title: 'Métodos Caseiros', url: '/guias/solucoes/metodos-caseiros' },
      { title: 'Aspirador de Pó: Pode Usar?', url: '/guias/solucoes/aspirador-po' },
      { title: 'Álcool Isopropílico', url: '/guias/solucoes/alcool-isopropilico' },
      { title: 'Silica Gel vs Arroz', url: '/guias/solucoes/silica-gel' },
    ],
  },
  {
    name: 'Problemas',
    slug: 'problemas',
    icon: '⚠️',
    description: 'Diagnóstico e soluções pós-água',
    color: 'red',
    guides: [
      { title: 'Microfone Não Funciona', url: '/guias/problemas/microfone-nao-funciona' },
      { title: 'Som Baixo', url: '/guias/problemas/som-baixo' },
      { title: 'Tela Manchada', url: '/guias/problemas/tela-manchada' },
      { title: 'Celular Não Liga', url: '/guias/problemas/nao-liga' },
      { title: 'Câmera Embaçada', url: '/guias/problemas/camera-embacada' },
    ],
  },
]

const colorClasses: Record<string, string> = {
  blue: 'from-blue-500 to-blue-600',
  gray: 'from-gray-600 to-gray-700',
  green: 'from-green-500 to-green-600',
  purple: 'from-purple-500 to-purple-600',
  cyan: 'from-cyan-500 to-cyan-600',
  yellow: 'from-yellow-500 to-yellow-600',
  orange: 'from-orange-500 to-orange-600',
  red: 'from-red-500 to-red-600',
}

export default function GuiasIndex() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Guias Completos
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 max-w-3xl">
            Tudo que você precisa saber sobre celular molhado, ejeção de água, e cuidados com seu smartphone.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories Grid */}
        <div className="space-y-16">
          {categories.map((category, idx) => (
            <div key={category.slug}>
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">{category.icon}</div>
                <div>
                  <Link
                    href={`/guias/${category.slug}`}
                    className="text-3xl font-bold text-gray-900 hover:text-primary transition"
                  >
                    {category.name}
                  </Link>
                  <p className="text-gray-600 mt-1">{category.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.guides.map((guide) => (
                  <Link
                    key={guide.url}
                    href={guide.url}
                    className="block bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 border-2 border-transparent hover:border-primary"
                  >
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {guide.title}
                    </h3>
                    <span className="text-primary text-sm font-medium">
                      Ler guia →
                    </span>
                  </Link>
                ))}

                {/* View All Link */}
                <Link
                  href={`/guias/${category.slug}`}
                  className={`block bg-gradient-to-r ${colorClasses[category.color]} text-white rounded-lg shadow-md hover:shadow-xl transition p-6 flex items-center justify-center text-center`}
                >
                  <div>
                    <div className="text-3xl mb-2">{category.icon}</div>
                    <div className="font-semibold">
                      Ver Todos<br />{category.name}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa Ejetar Água Agora?</h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Use nossa ferramenta gratuita que remove água do alto-falante em 2-5 minutos
          </p>
          <Link
            href="https://www.ejetaragua.com/?utm_source=guias&utm_medium=seo&utm_campaign=cta"
            className="inline-block bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition shadow-lg text-lg"
          >
            Usar Ferramenta Gratuita
          </Link>
        </div>

        {/* FAQ Preview */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Perguntas Frequentes</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Qual guia devo ler primeiro se meu celular molhou?
              </h3>
              <p className="text-gray-600">
                Comece com o <Link href="/guias/celular-molhado" className="text-primary font-semibold hover:underline">guia completo de Celular Molhado</Link> para
                entender as ações imediatas. Depois, use a <Link href="https://www.ejetaragua.com/?utm_source=guias&utm_medium=seo&utm_campaign=cta" className="text-primary font-semibold hover:underline">ferramenta de ejeção</Link> para
                remover água do alto-falante rapidamente.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Esses guias funcionam para iPhone e Android?
              </h3>
              <p className="text-gray-600">
                Sim! Temos guias gerais que aplicam a todos os celulares, além de seções específicas para <Link href="/guias/iphone" className="text-primary font-semibold hover:underline">iPhone</Link> e <Link href="/guias/android" className="text-primary font-semibold hover:underline">Android</Link> (Samsung, Xiaomi, Motorola, etc).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Os métodos são seguros? Não vão danificar meu celular?
              </h3>
              <p className="text-gray-600">
                Todos os métodos recomendados são seguros quando seguidos corretamente. O método de ejeção por som (165Hz) é a mesma tecnologia usada pelo Apple Watch. Evitamos métodos perigosos como calor, arroz e produtos químicos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
