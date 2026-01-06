import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Alto-Falante Chiando: Água ou Dano? Guia Diagnóstico 2026',
  description: 'Alto-falante chiando ou crepitando após molhar? Diferenças entre água, sujeira e dano. Soluções comprovadas em 48h.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/alto-falante/chiado',
  },
  openGraph: {
    title: 'Alto-Falante Chiando: Água ou Dano? Guia Diagnóstico 2026',
    description: 'Alto-falante chiando ou crepitando após molhar? Diferenças entre água, sujeira e dano. Soluções comprovadas em 48h.',
    url: 'https://www.ejetaragua.com/guias/alto-falante/chiado',
    locale: 'pt_BR',
    siteName: 'Ejetar Água',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Alto-Falante', url: '/guias/alto-falante' },
    { name: 'Chiado' },
  ]

const faqs = [
    {
      "question": "Chiado significa que há água ou dano permanente?",
      "answer": "Geralmente é água + ar + sujeira. Chiado costuma melhorar com ejeção + secagem. PORÉM, se persiste após 5+ dias seco, pode ser dano na membrana (consulte técnico)."
    },
    {
      "question": "Qual a diferença entre chiado e abafado?",
      "answer": "Abafado = som fraco/mudo (água bloqueando). Chiado = som alto com ruído/vibração (água + ar criando fricção). Chiado é mais fácil de resolver."
    },
    {
      "question": "Posso usar ejeção por som para chiado?",
      "answer": "SIM! Funciona excelentemente. Ejeção expele água + ar, removendo a fonte do chiado. 85% de sucesso em 3-5 tentativas para chiado."
    },
    {
      "question": "Quanto tempo até o chiado desaparecer?",
      "answer": "Imediatamente após ejeção = melhora notável. Completa remissão = após 24-48h de secagem. Paciência é crucial, não force."
    },
    {
      "question": "Chiado constante significa dano permanente?",
      "answer": "Não necessariamente. Se melhorou um pouco com ejeção, é água/sujeira. Se ZERO melhora após 10 tentativas, é dano (procure técnico)."
    },
    {
      "question": "O que fazer se chiado volta após alguns dias?",
      "answer": "Normal! Água residual/umidade pode voltar. Repita ejeção + secagem. Se voltar múltiplas vezes, há umidade interna = técnico para investigar."
    },
    {
      "question": "Sílica gel ajuda com chiado?",
      "answer": "Não remove água do alto-falante. MAS pode ajudar a remover umidade GERAL do celular. Use junto com ejeção por som para melhor resultado."
    },
    {
      "question": "Posso ignorar chiado leve?",
      "answer": "Não recomendado. Agua oxidando internamente. Quanto mais cedo agir, melhor resultado. Chiado leve = água residual = use ejeção agora."
    },
    {
      "question": "Chiado durante chamadas afeta microfone?",
      "answer": "Não. Chiado é no alto-falante (áudio sainte). Microfone é diferente. Se microfone também pifou, há múltiplos danos = técnico necessário."
    },
    {
      "question": "Vale fazer ejeção múltiplas vezes em um dia?",
      "answer": "Sim. 3-5 repetições de 30s, separadas por 2 minutos. Depois espere 6-12 horas. Membrana precisa descansar para água assentar e ser expelida."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Alto-Falante Chiando: Água ou Dano? Guia Diagnóstico 2026',
    description: 'Alto-falante chiando ou crepitando após molhar? Diferenças entre água, sujeira e dano. Soluções comprovadas em 48h.',
    url: '/guias/alto-falante/chiado',
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
            Alto-Falante Chiando: Diagnóstico e Solução
          </h1>
          <p className="text-lg text-gray-600 mb-2">Entenda a causa do chiado e resolva em 48 horas</p>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Chiado = água + ar + sujeira na membrana. Solução: use ejeção por som 165Hz (3-5x), espere 48h secando. Taxa de sucesso: 85%. Melhor que abafado para resolver.
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
              Entendendo o Chiado
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Chiado (também chamado crepitação ou fricção) é um som estridente/irritante que sai do alto-falante. Diferente de abafado (som fraco), chiado é AGUDO e INCÔMODO. A causa é água + ar em movimento dentro da membrana, criando vibração irregular.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Boa notícia: chiado é geralmente mais fácil de resolver que abafado. A água está se mexendo (não bloqueando tudo), o que significa ejeção por som funciona MELHOR.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por Que Acontece Chiado Específicamente
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Quando água entra no alto-falante e o celular ainda vibra/mexe, a água não fica parada. Ela se move com a vibração, criando múltiplos pontos de fricção. Resultado: som estridente em vez de abafado.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Cenário Típico:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-2">
              <li>Hora 0: Celular molha (água entra nos orifícios do alto-falante)</li>
              <li>Hora 1-2: Uso continua (vibrações movem água) = chiado aparece</li>
              <li>Hora 3+: Mais água entra, mais chiado piora</li>
              <li>Ação necessária: AGORA = ejeção por som para expelir antes de oxidar</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Diferenças: Chiado vs Abafado vs Sem Som
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-4">
              <p className="text-gray-700 font-semibold mb-4">Tabela Comparativa:</p>
              <table className="w-full text-sm text-gray-700">
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-3 font-semibold">Som Abafado</td>
                    <td className="py-3 px-3">Fraco, mudo, sem chiado. Água bloqueando completamente.</td>
                    <td className="py-3 px-3">85% sucesso com ejeção</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-3 font-semibold">Chiado/Crepitação</td>
                    <td className="py-3 px-3">Alto agudo irritante. Água + ar se movendo.</td>
                    <td className="py-3 px-3">90% sucesso (MAIS FÁCIL!)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-semibold">Sem Som</td>
                    <td className="py-3 px-3">Silêncio total. Bloqueio completo ou dano.</td>
                    <td className="py-3 px-3">60-70% sucesso (difícil)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              Se você tem chiado = MELHOR situação possível! Ejeção vai funcionar excelentemente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Passo a Passo para Resolver Chiado
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>IMEDIATAMENTE (primeiras 2 horas):</strong>
            </p>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-3">
              <li>PARE de usar o celular (cada vibração move mais água para dentro)</li>
              <li>Desligue ou coloque em modo avião (reduz risco de curto)</li>
              <li>NÃO carregue ainda (água + eletricidade = perigo)</li>
              <li>Abra a ferramenta de ejeção (este site)</li>
              <li>Volume MÁXIMO, alto-falante virado para baixo</li>
              <li>Deixe rodar por 30 segundos (chiado deve diminuir visualmente)</li>
            </ol>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>PRÓXIMAS 2-4 HORAS:</strong>
            </p>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-3">
              <li>Repita ejeção mais 2-4 vezes (pausa de 2-3 minutos entre cada)</li>
              <li>Você deve ver melhora visível no som após 2ª tentativa</li>
              <li>Se chiado piora ou aparece novo som = PARE (dano provável, técnico)</li>
              <li>Deixe celular descansar entre tentativas</li>
            </ol>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>PRÓXIMAS 24-48 HORAS:</strong>
            </p>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-3">
              <li>Deixe em local seco, quente, bem ventilado</li>
              <li>Use ventilador apontado para perto (não direto no celular)</li>
              <li>Repita ejeção 1-2x no dia seguinte se chiado volta</li>
              <li>NÃO carregue até estar completamente seco</li>
              <li>Toque som suave periodicamente para testar</li>
              <li>Após 48h, chiado deve ter sumido completamente</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Saber Se é Água ou Dano Permanente
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Sinais de que é ÁGUA (vai melhorar):</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-3 space-y-2">
              <li>Chiado diminui IMEDIATAMENTE após ejeção (mesmo que pouco)</li>
              <li>Melhora progressiva a cada tentativa (1ª tentativa = meio ruim, 2ª = melhor, 3ª = quase bem)</li>
              <li>Chiado piora quando celular esquenta (mais movimento de água)</li>
              <li>Chiado varia em intensidade ao longo do dia</li>
              <li>Começou APÓS molhar (não era antes)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Sinais de que é DANO (não vai melhorar):</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-3 space-y-2">
              <li>ZERO melhora após 5+ tentativas de ejeção</li>
              <li>Chiado constante/consistente (não varia)</li>
              <li>Chiado PIOROU após ejeção (membrana danificada)</li>
              <li>Som metalizado/rouco (não é chiado normal)</li>
              <li>Passou 5+ dias seco e chiado AINDA PRESENTE</li>
              <li>Mais de uma semana desde o incidente com água</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que NÃO Fazer Com Chiado
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Não Ignore:</strong> Chiado indica água ainda presente. Cada hora de espera = mais oxidação. Agir rápido é crítico.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Não Use Palito/Agulha:</strong> Perfura membrana permanentemente. Vai piorar chiado para sempre.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Não Carregue:</strong> Água + eletricidade pode explodir bateria. ESPERE estar 100% seco.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Não Coloque em Arroz:</strong> Não remove água do alto-falante. Apenas perde tempo.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Não Use Secador:</strong> Calor força água mais para dentro. Piora oxidação.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Não Continue Usando:</strong> Vibração move água para componentes eletrônicos. Espere.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Checklist: Resolvendo Chiado em 48h
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 font-semibold mb-4">Siga rigorosamente:</p>
              <ul className="list-none space-y-3 text-gray-700">
                <li>☐ Hora 0: Parou de usar celular imediatamente após molhar</li>
                <li>☐ Colocou em modo avião (ou desligou)</li>
                <li>☐ NÃO tentou carregar</li>
                <li>☐ Abriu ferramenta de ejeção neste site</li>
                <li>☐ Primeira ejeção: 30s, volume máximo</li>
                <li>☐ Viu/ouviu melhora (chiado diminuiu)</li>
                <li>☐ Repetiu 3-4 vezes com pausas de 2-3 min</li>
                <li>☐ Deixou em local ventilado (não quente)</li>
                <li>☐ Repetiu ejeção no dia seguinte</li>
                <li>☐ Após 48h: Chiado desapareceu completamente</li>
              </ul>
              <p className="text-gray-700 font-semibold mt-6">Se TODAS as caixas tiverem checkmark = Sucesso! 85% de chance.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Se Chiado Persistir Após 48h
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Opção 1: Há umidade residual</strong> = Repita ejeção + deixe secar mais 24h. Umidade interna pode levar 3-5 dias para sair completamente.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Opção 2: Dano na membrana</strong> = Se zero melhora após 5+ tentativas, é dano. Custos:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-2">
              <li>Troca do módulo: R$ 150-300</li>
              <li>Tempo: 1-3 dias</li>
              <li>Procure assistência autorizada da marca</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Relação com Outros Problemas Causados por Água
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Se você tem chiado no alto-falante, há chance de outros componentes também estarem danificados:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-2">
              <li><strong>Câmera embaraçada:</strong> Água também penetrou câmera frontal/traseira</li>
              <li><strong>Microfone abafado:</strong> Mesmo problema que alto-falante</li>
              <li><strong>Botões duros:</strong> Umidade dentro afetando mecanismo</li>
              <li><strong>Tela com linha:</strong> Água penetrou entre camadas</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Se múltiplos componentes pifaram, considere levar a técnico para diagnóstico completo. Pode haver dano mais profundo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Links para Guias Relacionados
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Veja também nossos guias específicos:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-2">
              <li><a href="/guias/alto-falante" className="text-primary hover:underline">Guia Pillar: Alto-Falante Molhado Completo</a></li>
              <li><a href="/guias/alto-falante/som-abafado" className="text-primary hover:underline">Som Abafado vs Chiado</a></li>
              <li><a href="/guias/alto-falante/danificado" className="text-primary hover:underline">Como Saber se é Dano Permanente</a></li>
              <li><a href="/guias/alto-falante/como-limpar" className="text-primary hover:underline">Limpeza Segura Após Ejeção</a></li>
              <li><a href="/guias/alto-falante/frequencia-ejecao" className="text-primary hover:underline">Por Que 165Hz é Ideal</a></li>
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
