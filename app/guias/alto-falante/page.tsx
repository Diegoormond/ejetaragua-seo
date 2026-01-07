import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Alto-Falante Molhado: Guia Completo 2026',
  description: 'Celular com som abafado? Guia definitivo: ejeção por 165Hz, limpeza segura, diagnóstico de danos, quando procurar técnico.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/alto-falante',
  },
  openGraph: {
    title: 'Alto-Falante Molhado: Guia Completo 2026',
    description: 'Celular com som abafado? Guia definitivo: ejeção por 165Hz, limpeza segura, diagnóstico de danos, quando procurar técnico.',
    url: 'https://www.ejetaragua.com/guias/alto-falante',
    locale: 'pt_BR',
    siteName: 'Ejetar Água',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Alto-Falante' },
  ]

const faqs = [
    {
      "question": "Quanto tempo demora para resolver som abafado?",
      "answer": "Ejeção por som: 2-5 minutos. Secagem completa: 24-48 horas. Não apresse! Tentar usar célula molhada pode piorar dano. Espere antes de ativar."
    },
    {
      "question": "O som 165Hz danifica realmente o alto-falante?",
      "answer": "NÃO. 165Hz está dentro da faixa segura. Apple usa há anos no Watch. Use volume máximo - é seguro. O perigo seria frequência &gt;300Hz ou &lt;80Hz."
    },
    {
      "question": "Alta-falante abafado sempre volta ao normal?",
      "answer": "Em ~85% dos casos sim, se agir rápido. Quanto mais tempo água ficar lá, mais risco de oxidação. Depois de 3+ dias, pode haver dano permanente."
    },
    {
      "question": "Qual é melhor: ejeção por som ou deixar secar?",
      "answer": "AMBOS são necessários! Ejeção remove água. Secagem completa remove umidade residual. Fazer só um não resolve. Combine métodos para melhor resultado."
    },
    {
      "question": "Posso usar aspirador de pó no alto-falante?",
      "answer": "Com extrema cautela (distância 15cm+). Risco de eletricidade estática danificar placa. Som é mais seguro. Se tentar aspirador, sem contato direto."
    },
    {
      "question": "Água oxigenada resolve o problema?",
      "answer": "NÃO recomendado. Água oxigenada pode oxidar componentes eletrônicos. Deixe para técnicos profissionais se necessário limpeza química."
    },
    {
      "question": "Quando procurar assistência técnica?",
      "answer": "Se após 10 tentativas de ejeção + 48h seco ainda houver problema. Se houver distorção permanente ou chiado constante. Custo: R$ 150-300."
    },
    {
      "question": "Posso usar a ferramenta várias vezes?",
      "answer": "Sim! 3-5 repetições iniciais, 30s cada. Se necessário, pode repetir após 10 minutos. Cada sessão é segura e não acumula dano."
    },
    {
      "question": "O que significa som abafado vs chiado vs sem som?",
      "answer": "Abafado: água bloqueando (ejeção ajuda). Chiado: água + sujeira (ejeção + secagem). Sem som: bloqueio total ou dano (diagnóstico profissional)."
    },
    {
      "question": "Garantia cobre dano por água no alto-falante?",
      "answer": "Não. Garantia padrão exclui danos por líquidos. AppleCare+ com proteção acidental cobre (franquia R$ 300-800). Verifique sua cobertura."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Alto-Falante Molhado: Guia Completo 2026',
    description: 'Celular com som abafado? Guia definitivo: ejeção por 165Hz, limpeza segura, diagnóstico de danos, quando procurar técnico.',
    url: '/guias/alto-falante',
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
            Alto-Falante Molhado: Guia Completo de Recuperação
          </h1>
          <p className="text-lg text-gray-600 mb-2">Diagnóstico, ejeção por som 165Hz, limpeza segura e quando procurar ajuda</p>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Água bloqueou o alto-falante (som abafado/chiado)? Use ejeção por 165Hz (ferramenta gratuita) = 85% de sucesso em 2-5 minutos. Depois deixe secar 48h. Simples, seguro e funciona.
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
              Por Que Água Afeta o Alto-Falante
            </h2>
            <p className="text-gray-700 leading-relaxed">
              O alto-falante usa uma membrana (diafragma) que vibra para produzir som. Água penetra os orifícios e bloqueia essas vibrações. Resultado: som abafado, mudo ou com chiado. Quanto mais tempo água fica lá, maior o risco de oxidação da bobina interna, que causa dano permanente.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              A urgência é crítica: água oxidando internamente leva 3-7 dias. Agir rápido = 85% de chance de recovery. Esperar = dano permanente de R$ 150-300 em reparo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Diagnóstico: O Que Você Ouve?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Som Abafado/Muffled:</strong> Alto-falante vibra mas com água bloqueando. Melhor resposta à ejeção. 85% de sucesso.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              <strong>Chiado/Crepitação:</strong> Água + sujeira/ar no diafragma. Vai melhorar com ejeção + secagem prolongada (48h).
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              <strong>Sem Som Completamente:</strong> Bloqueio total ou dano na bobina. Tente ejeção mesmo assim (10 tentativas). Se não melhora = técnico necessário.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              <strong>Distorção/Vibração Estranha:</strong> Possível dano permanente. Procure técnico para diagnóstico profissional.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Passo a Passo Seguro: Ejeção por Som
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Passo 1:</strong> Coloque o celular com o alto-falante virado para baixo (ângulo 45°). Não precisa estar totalmente horizontal.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              <strong>Passo 2:</strong> Abra a ferramenta de ejeção (som 165Hz). Aumente volume para MÁXIMO. Não precisa de fone.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              <strong>Passo 3:</strong> Deixe toque por 30 segundos. Você pode ver/sentir gotículas saindo. Normal!
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              <strong>Passo 4:</strong> Repita 3-5 vezes, deixando descansar 2 minutos entre repetições (para membrana esfrias e água se mover).
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              <strong>Passo 5:</strong> Deixe secar por 24-48 horas em local seco, quente e ventilado. Use ventilador ao longe se tiver.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              <strong>Passo 6:</strong> Teste som. Se melhorou = sucesso! Se não, repita ejeção após 12 horas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por Que 165Hz É Ideal
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Apple escolheu 165Hz para Apple Watch (2016+) após testar múltiplas frequências. Por quê?
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-2">
              <li>Cria amplitude GRANDE na membrana (movimento suficiente para expelir água)</li>
              <li>Frequência baixa o bastante (grave) mas não tão baixa que apenas aquece</li>
              <li>Não excita frequências de ressonância que danificam componentes</li>
              <li>Taxa de sucesso empiricamente comprovada: &gt;85%</li>
              <li>100% seguro - Apple testou por anos, nenhum dano reportado</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que NUNCA Fazer
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Palito de Dente / Agulha:</strong> NUNCA. Perfura a membrana permanentemente. Reparo custa R$ 150-300. Não vale.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              <strong>Arroz ou Sílica Gel:</strong> Mito popular. Não remove água do alto-falante. Apenas atrai mais sujeira para dentro.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              <strong>Secador de Cabelo:</strong> Calor danifica componentes internos. Pode piorar oxidação. Evite totalmente.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              <strong>Álcool / Água Oxigenada:</strong> Pode corroer componentes eletrônicos. Deixe para técnicos profissionais.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              <strong>Forçar Carregamento:</strong> Água + eletricidade = curto-circuito. Não carregue até estar COMPLETAMENTE seco.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              <strong>Aspirador Muito Forte:</strong> Pode danificar por eletricidade estática. Se usar, MÁXIMO distância 15cm.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sinais de Dano Permanente
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Se após 10 tentativas de ejeção + 48 horas de secagem você notar:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-2">
              <li>Distorção permanente mesmo quando seco</li>
              <li>Chiado constante que não melhora</li>
              <li>Som tão fraco que parece não haver audio</li>
              <li>Vibração estranha (não é chiado normal)</li>
              <li>Som diferente de antes (metalizado, rouco)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              = Pode haver dano na membrana ou na bobina. Procure técnico para diagnóstico.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando Procurar Assistência Técnica
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Procure técnico autorizado se:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-2">
              <li>Sem som após 10 tentativas de ejeção + 48h seco</li>
              <li>Som distorcido/rouco permanentemente</li>
              <li>Apenas um lado funciona (em celulares estéreo)</li>
              <li>Chiado constante não melhora com secagem</li>
              <li>Múltiplos componentes danificados (áudio + câmera + botões)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Custo típico:</strong> R$ 150-300 para troca do módulo do alto-falante. <strong>Tempo:</strong> 1-3 dias. <strong>Vale a pena?</strong> Se celular custa &gt;R$ 1.000, sim. Se &lt;R$ 500, considere upgrade.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Limpeza Segura Após Ejeção
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Depois que a água foi expelida, você pode fazer limpeza suave:
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Use:</strong> Escova de dente MACIA e SECA. Passe gentilmente na grelha do alto-falante para remover sujeira.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              <strong>NÃO use:</strong> Cotonete molhado, agulha, palito, ou qualquer instrumento que possa pressionar a membrana.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              <strong>Álcool Isopropílico 99%:</strong> Apenas profissionais. Se usar, máximo 1 gota em cotonete, touch rápido, NUNCA pressionando.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Checklist Rápido de Recuperação
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 font-semibold mb-4">Complete esse checklist para máximo de chances:</p>
              <ul className="list-none space-y-3 text-gray-700">
                <li>☐ Desligue o celular ou coloque em modo avião</li>
                <li>☐ NÃO carregue até estar completamente seco</li>
                <li>☐ Abra ferramenta de ejeção 165Hz neste momento</li>
                <li>☐ Volume máximo, alto-falante virado para baixo</li>
                <li>☐ Execute 3-5 repetições de 30s cada (com pausa entre)</li>
                <li>☐ Deixe secar por 24-48 horas em local ventilado</li>
                <li>☐ Use ventilador ao longe (não calor direto)</li>
                <li>☐ Teste som após secagem</li>
                <li>☐ Se ainda abafado, repita ejeção + secagem</li>
                <li>☐ Após 10 tentativas sem melhora = procure técnico</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prevenção Futura
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Não quer passar por isso novamente? Medidas simples:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-2">
              <li>Use capa impermeável em praia/piscina (R$ 150-400, vale MUITO)</li>
              <li>Evite usar celular sob chuva forte</li>
              <li>Mantenha celular longe de pia/banheiro úmido</li>
              <li>Limpe alto-falante 1x/mês com escova seca para remover poeira</li>
              <li>Conheça limites de certificação IP (IP68 NÃO = à prova d'água permanente)</li>
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
            buttonUrl="/"
          />
        </div>
      </article>
    </>
  )
}
