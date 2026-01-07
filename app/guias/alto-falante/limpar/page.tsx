import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Como Limpar Alto-Falante Molhado com Segurança 2026',
  description: 'Aprenda a limpar alto-falante do celular molhado: ejeção por som, escova macia, álcool 99%. Métodos seguros e o que NUNCA fazer.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/alto-falante/limpar',
  },
  openGraph: {
    title: 'Como Limpar Alto-Falante Molhado com Segurança 2026',
    description: 'Aprenda a limpar alto-falante do celular molhado: ejeção por som, escova macia, álcool 99%. Métodos seguros e o que NUNCA fazer.',
    url: 'https://www.ejetaragua.com/guias/alto-falante/limpar',
    locale: 'pt_BR',
    siteName: 'Ejetar Água',
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
      "question": "Qual é a ferramenta mais segura para limpar?",
      "answer": "Escova de dente MACIA e SECA. Movimentos gentis apenas. Evite qualquer objeto pontiagudo. Cotonete seco também funciona para pequenas áreas."
    },
    {
      "question": "Posso usar álcool para limpar?",
      "answer": "Álcool isopropílico 99% apenas (NÃO 70% que tem água). Máximo 1-2 gotas em cotonete. Passe rapidamente, nunca pressionando. Deixe evaporar naturalmente."
    },
    {
      "question": "Devo limpar antes ou depois de ejetar água?",
      "answer": "SEMPRE ejetar primeiro! Ejeção remove água. Depois de seco, limpe sujeira superficial. Limpar molhado empurra água para dentro."
    },
    {
      "question": "Como não danificar a membrana ao limpar?",
      "answer": "Nunca pressione. Movimentos SUAVES apenas. A membrana é frágil. Se encontrar resistência, PARE. Deixe profissional fazer."
    },
    {
      "question": "Preciso remover a grelha do alto-falante?",
      "answer": "NÃO! Nunca remova. Grelha protege a membrana. Limpe por cima. Remover pode causar dano permanente."
    },
    {
      "question": "Água destilada funciona para limpeza?",
      "answer": "NÃO para componentes eletrônicos. Deixe para álcool isopropílico profissional. Água destilada pode deixar depósitos minerais."
    },
    {
      "question": "Quanto tempo esperar entre ejeção e limpeza?",
      "answer": "Ejeção primeiro, deixe descansar 10-15 minutos. Depois, limpeza superficial apenas. Não limpe água ainda presente."
    },
    {
      "question": "Se a limpeza piorar o som?",
      "answer": "Pare imediatamente. Você danificou membrana. Procure técnico para diagnóstico. Possível troca R$ 150-300."
    },
    {
      "question": "Aspirador de pó ajuda na limpeza?",
      "answer": "Com extrema cautela (15cm+ de distância). Risco de eletricidade estática. Melhor evitar. Se usar, sem contato direto."
    },
    {
      "question": "Como saber se limpeza é necessária?",
      "answer": "Se após ejeção + secagem ainda há sujeira VISÍVEL na grelha, limpe suavemente. Se som melhorou, não precisa limpar."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Como Limpar Alto-Falante Molhado com Segurança 2026',
    description: 'Aprenda a limpar alto-falante do celular molhado: ejeção por som, escova macia, álcool 99%. Métodos seguros e o que NUNCA fazer.',
    url: '/guias/alto-falante/limpar',
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
          <p className="text-lg text-gray-600 mb-2">Métodos seguros para remover sujeira e água residual</p>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Passo 1: Ejeção por som 165Hz primeiro (remove água). Passo 2: Deixe secar 24h. Passo 3: Limpe sujeira com escova macia SECA. Álcool isopropílico 99% apenas para profissionais.
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
              Por Que Limpar Corretamente é Crítico
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Alto-falante molhado acumula:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-3 space-y-2">
              <li>Água residual (mesmo após ejeção)</li>
              <li>Minerais da água (cálcio, magnésio)</li>
              <li>Sujeira/poeira que a água trouxe</li>
              <li>Ar resídual criando bolhas</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Limpeza INCORRETA pode danificar a membrana (frágil) permanentemente, custando R$ 150-300 em reparo. Limpeza SEGURA remove sujeira sem riscos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ordem Correta: Ejeção, Secagem, Depois Limpeza
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Erro comum:</strong> Tentar limpar água ainda presente = empurra água para dentro, piora problema.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Sequência correta:</strong>
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-4">
              <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-3">
                <li><strong>Ejeção por Som (agora):</strong> 165Hz expele água. 3-5 repetições, 30s cada.</li>
                <li><strong>Espera (24 horas):</strong> Deixe secar em local ventilado. Não apresse.</li>
                <li><strong>Inspeção Visual:</strong> Há sujeira visível na grelha? Se não, pronto!</li>
                <li><strong>Limpeza Superficial (se necessário):</strong> Escova macia seca, movimentos suaves.</li>
                <li><strong>Álcool (profissionais apenas):</strong> Se ainda há resíduo mineral, deixe para técnico.</li>
              </ol>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Método Seguro #1: Escova de Dente Macia
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Materiais:</strong> Escova de dente macia SECA, celular também SECO, boa iluminação.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Técnica:</strong>
            </p>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-3 mt-3">
              <li>Coloque celular em posição confortável (alto-falante de frente para você)</li>
              <li>Use parte LATERAL da escova (não ponta). Suavidade é tudo.</li>
              <li>Movimentos horizontais LEVES sobre a grelha do alto-falante</li>
              <li>NÃO pressione. Apenas toque superficial.</li>
              <li>Se encontrar resistência, PARE. Não force.</li>
              <li>Limpe poeira que saiu com papel seco</li>
            </ol>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Duração:</strong> 30-60 segundos máximo. <strong>Resultado:</strong> Remove sujeira superficial sem danificar.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Método Seguro #2: Cotonete Seco
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Materiais:</strong> Cotonete seco, celular seco, iluminação.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Técnica:</strong>
            </p>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-3 mt-3">
              <li>Use PARTE do cotonete (não inteiro, pode prender)</li>
              <li>Passe suavemente na grelha do alto-falante</li>
              <li>NÃO inserir dentro dos orifícios</li>
              <li>Movimentos de rotação suave apenas</li>
              <li>Troque para cotonete novo se muito sujo</li>
            </ol>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Vantagem:</strong> Melhor para áreas pequenas/precisas. <strong>Risco:</strong> Pode prender se inserido profundamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Método Avançado: Álcool Isopropílico 99% (Profissionais)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>AVISO:</strong> Apenas se você tem experiência. Risco de dano se feito incorretamente.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Materiais:</strong> Álcool isopropílico 99% (NÃO 70%), cotonete, papel seco.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Por que 99%?</strong> 70% contém água, que danifica eletrônicos. 99% seca rapidamente.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Técnica:</strong>
            </p>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-3 mt-3">
              <li>Coloque 1-2 gotas de álcool em cotonete (NÃO no celular)</li>
              <li>Passe rapidamente na grelha (não demore)</li>
              <li>NÃO deixar álcool acumular</li>
              <li>Deixe evaporar naturalmente (2-5 minutos)</li>
              <li>Repita se necessário</li>
            </ol>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Resultado:</strong> Remove resíduos minerais deixados pela água. <strong>Custo:</strong> R$ 15-30 de álcool 99%.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que NUNCA Fazer Ao Limpar
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Palito de Dente / Agulha:</strong> Perfura membrana. Dano permanente. NÃO FAÇA.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Objeto Pontiagudo Qualquer:</strong> Mesmo "leve" = risco de perfuração. Membrana é frágil como papel.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Água Destilada:</strong> Deixa resíduos minerais. Álcool 99% é melhor.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Álcool 70%:</strong> Contém água. Danifica eletrônicos. Use apenas 99%.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Cotonete Molhado:</strong> Pode soltar fios que travam na membrana. Sempre SECO.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Pressionar a Membrana:</strong> Deforma permanentemente. Sempre suave.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Limpador Ultrassônico:</strong> Não é necessário e pode danificar componentes. Evite.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Soprar com Força:</strong> Só cria turbulência, não remove água. Ineficaz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sinais de Que Você Danificou a Membrana
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Se durante ou após limpeza você notar:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-3 space-y-2">
              <li>Som de rasgado/metalizado (não chiado)</li>
              <li>Pior som que antes (não melhorou)</li>
              <li>Resistência ao limpar (significa danificação)</li>
              <li>Silêncio total (possível perfuração)</li>
              <li>Vibração visual anormal</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              = PARE imediatamente. Procure técnico. Possível troca R$ 150-300.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando Deixar Para o Profissional
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Se você não tem confiança em limpar:</strong> Procure técnico. Custa extra (R$ 50-100), mas evita risco.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Se há resíduos mineral visível:</strong> Técnico tem álcool profissional e experiência.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Se som piorou após tentar limpar:</strong> Técnico diagnóstica se é restaurável ou precisa troca.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Se grelha está deformada:</strong> Pode precisar remoção profissional para limpeza interna.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Checklist de Limpeza Segura
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 font-semibold mb-4">Antes de Limpar, Certifique-se:</p>
              <ul className="list-none space-y-3 text-gray-700">
                <li>☐ Celular está COMPLETAMENTE seco (24h+ após ejeção)</li>
                <li>☐ Você JÁ fez ejeção por som (não limpando água)</li>
                <li>☐ Ferramenta de limpeza está SECA (não molhada)</li>
                <li>☐ Você tem boa iluminação (para não danificar acidentalmente)</li>
                <li>☐ Você vai fazer movimentos SUAVES (sem pressão)</li>
                <li>☐ Você NÃO vai usar objeto pontiagudo</li>
                <li>☐ Você tem paciência (não vai forçar)</li>
                <li>☐ Se álcool, é 99% isopropílico (não 70%)</li>
              </ul>
              <p className="text-gray-700 font-semibold mt-6">Se TODAS as caixas tiverem checkmark = Pode limpar com segurança!</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Relação com Guias Relacionados
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Para mais informações:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-2">
              <li><a href="/guias/alto-falante" className="text-primary hover:underline">Guia Pillar: Alto-Falante Molhado</a></li>
              <li><a href="/guias/alto-falante/chiado" className="text-primary hover:underline">Chiado no Alto-Falante</a></li>
              <li><a href="/guias/alto-falante/como-limpar" className="text-primary hover:underline">Como Limpar (versão expandida)</a></li>
            </ul>
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
