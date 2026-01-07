import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'O Que Fazer Celular Molhado: 10 Passos Emergência',
  description: 'Celular molhou agora? Guia com 10 ações imediatas para maximizar chances de salvação. Métodos científicos, sem mitos.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/celular-molhado/o-que-fazer',
  },
  openGraph: {
    title: 'O Que Fazer Celular Molhado: 10 Passos Emergência',
    description: 'Celular molhou agora? Guia com 10 ações imediatas para maximizar chances de salvação. Métodos científicos, sem mitos.',
    url: 'https://www.ejetaragua.com/guias/celular-molhado/o-que-fazer',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Celular Molhado', url: '/guias/celular-molhado' },
    { name: 'O Que Fazer' },
  ]

const faqs = [
    {
      "question": "Quanto tempo tenho para agir após celular molhar?",
      "answer": "Os primeiros 5-10 minutos são críticos. Quanto mais rápido desligar e iniciar secagem, menores os danos. Água destilada causa menos dano que agua salgada ou doce de rio."
    },
    {
      "question": "E se o celular já ligou sozinho ou alguém ligou?",
      "answer": "DESLIGUE IMEDIATAMENTE. Mesmo que tenha ligado por poucos segundos com água dentro, pode haver curto-circuito. Mantenha desligado por 48 horas completas."
    },
    {
      "question": "Preciso remover a bateria?",
      "answer": "Em celulares antigos com bateria removível: sim, remova se conseguir. Em celulares modernos com bateria integrada: NUNCA abra - deixe para técnico. Risco de dano é maior."
    },
    {
      "question": "Posso usar algum produto químico para secar?",
      "answer": "NÃO use acetona, álcool comum (70%), ou qualquer produto químico. Álcool isopropílico 99% é seguro APENAS para técnicos profissionais. Para usuários: apenas água destilada para enxaguar se necessário."
    },
    {
      "question": "Se caiu em água do mar, é diferente?",
      "answer": "SIM, muito diferente. Água salgada é ALTAMENTE corrosiva. Enxague rapidamente com água destilada, desligue, ejete água, e procure técnico em 24 horas. Leia nosso guia específico sobre água salgada."
    },
    {
      "question": "Quanto custa em média consertar?",
      "answer": "Limpeza básica: R$ 150-300. Troca de componentes (speaker, carregador): R$ 300-800. Dano grave na placa: R$ 800-2.000. Sempre peça orçamento antes de autorizar."
    },
    {
      "question": "Taxa de sucesso dos métodos caseiros é realmente 85%?",
      "answer": "Sim, estudos mostram que ejeção por som + silica gel resulta em 80-85% de recuperação em casos leves a moderados. Casos graves (submersão prolongada) têm taxa menor."
    },
    {
      "question": "Deveria ter usado capa à prova de água?",
      "answer": "Sim! Capas IP68 reduzem risco em 95% para respingos. Mas nenhuma capa é 100% à prova de submersão prolongada. Hoje em dia existem capas muito finas e confortáveis."
    },
    {
      "question": "O celular funciona após secar, preciso fazer mais algo?",
      "answer": "Sim! Continue monitorando por 7 dias. Mesmo após secar, água residual pode causar corrosão interna e falhas tardias. Se apresentar problemas nos próximos dias, procure técnico antes que piore."
    },
    {
      "question": "Existe garantia em celulares com dano por água?",
      "answer": "Garantia padrão NÃO cobre. Mas alguns seguros de operadora ou garantias estendidas (Apple Care+, Samsung Care+) cobrem acidentes. Verifique sua apólice agora."
    },
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'O Que Fazer Celular Molhado: 10 Passos Emergência',
    description: 'Celular molhou agora? Guia com 10 ações imediatas para maximizar chances de salvação. Métodos científicos, sem mitos.',
    url: '/guias/celular-molhado/o-que-fazer',
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
            O Que Fazer Quando Celular Molha: 10 Passos de Emergência
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Seu celular acabou de molhar? Não pense em nada além de seguir estes 10 passos exatos. Cada minuto que você espera reduz as chances de salvação em até 10%.
          </p>
        </header>

        {/* Quick Answer */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-red-900 mb-3">
            ⚡ Resposta Rápida (Faça AGORA)
          </h2>
          <ol className="space-y-2 text-red-900 font-semibold">
            <li>1. Retire da água AGORA</li>
            <li>2. Desligue IMEDIATAMENTE (mantenha pressionado)</li>
            <li>3. NÃO teste se funciona</li>
            <li>4. Remova capa, protetor, cartão SD, sim card</li>
            <li>5. Seque exterior com toalha macia</li>
            <li>6. Acesse ferramenta de ejeção aqui (165Hz)</li>
            <li>7. Use 3-5 vezes nos primeiros 10 minutos</li>
            <li>8. Posicione speaker para baixo por 2 horas</li>
            <li>9. Use silica gel nas próximas 24-48 horas</li>
            <li>10. Espere 48 horas antes de ligar</li>
          </ol>
        </div>

        {/* CTA to Tool */}
        <CTABox
          title="Ejetar Água Agora (Ferramenta 165Hz)"
          description="Acesse agora a ferramenta gratuita de ejeção de água por som. Use imediatamente. Cada segundo conta!"
          buttonText="Abrir Ferramenta de Ejeção"
          buttonUrl="/"
        />

        {/* Content Sections */}
        <div className="prose prose-lg max-w-none mb-12">
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por Que Este Protocolo Funciona
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Quando água entra em um celular ligado, eletricidade passa através dela criando curto-circuito que danifica transistores, capacitores e chips de processamento. Quanto mais tempo ligado, mais dano. Desligar IMEDIATAMENTE é a diferença entre um celular recuperável e um irrecuperável.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              A água seca por evaporação, então podemos ajudá-la com vibrações sonoras (165Hz) que expelem água dos orifícios do speaker. A silica gel absorve umidade residual que fica presa. Esperar 48 horas garante que toda umidade se foi.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Passo a Passo Detalhado: Primeiros 5 Minutos
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Minuto 0-1: Retire e Desligue
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Pegue o celular imediatamente da água</li>
              <li>Não se preocupe em molhar mais as mãos - o dano já aconteceu</li>
              <li>Localize o botão de desligamento (geralmente lateral ou topo)</li>
              <li>Mantenha pressionado CONTINUAMENTE por 10+ segundos até ver a tela apagar</li>
              <li>Não tente usar gestos ou comandos de voz para desligar</li>
              <li>Se não desligar: mantenha pressionado por 20-30 segundos (força desligamento)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Minuto 1-2: Remoção Imediata de Acessórios
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Capa/protetor:</strong> Remova imediatamente (prende umidade)</li>
              <li><strong>Película de vidro:</strong> Se conseguir remover sem danificar, remova</li>
              <li><strong>Cartão SIM:</strong> Se você consegue acessar, remova (menos urgente)</li>
              <li><strong>Cartão SD:</strong> Se conseguir sem abrir muito, remova</li>
              <li><strong>Não abra o telefone!</strong> Risco de mais dano</li>
              <li>Se não conseguir remover algo: DEIXE, não force</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Minuto 2-3: Secagem Exterior
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Use toalha de microfibra, papel toalha macio, ou pano 100% algodão</li>
              <li>Seque TODAS as superfícies visíveis com movimentos suaves</li>
              <li>Especial atenção: porta USB, slot de fone, speaker, câmeras</li>
              <li>Não balance o celular violentamente - pode espalhar água internamente</li>
              <li>Pressione suavemente a toalha contra as aberturas por 3-5 segundos cada</li>
              <li>Se houver água visível nas portas, use toalha dobrada em ponta para limpar</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Minuto 3-5: Primeira Rodada de Ejeção por Som
            </h3>
            <div className="bg-blue-50 border-l-4 border-primary p-6 my-4 rounded-r-lg">
              <p className="font-bold mb-3">Como usar a ferramenta de ejeção:</p>
              <ol className="space-y-2 text-gray-800">
                <li>1. Volte a página (SEM LIGAR O CELULAR)</li>
                <li>2. Ajuste volume para 100% (máximo)</li>
                <li>3. Posicione o speaker apontando para baixo (90°)</li>
                <li>4. Clique no botão de ejeção</li>
                <li>5. Deixe tocar por 30 segundos</li>
                <li>6. Você pode ver água saindo do speaker!</li>
                <li>7. Repita mais 2-4 vezes com pausa de 10 seg entre</li>
              </ol>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Passos 6-10: Primeiras 48 Horas (Secagem Prolongada)
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Posicionamento para Drenagem (Horas 1-2)
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Coloque o celular em posição inclinada (tipo tenda) ou vertical</li>
              <li>O speaker e a porta USB devem estar apontando para baixo</li>
              <li>Sobre uma toalha absorvente seca</li>
              <li>Em local com circulação de ar (aberto, não em gaveta)</li>
              <li>Temperatura ambiente (18-25°C é ideal)</li>
              <li>NUNCA próximo a: ventilador, ar condicionado, aquecedor, luz solar direta</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Método Silica Gel (Horas 2-48)
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Encontre sachês de silica gel (vêm em caixas de sapatos, eletrônicos, etc.)</li>
              <li>Se não tiver: compre em farmácias ou e-commerce (R$ 5-15)</li>
              <li>Coloque o celular em recipiente hermético/fechado (tupperware, saco plástico, etc.)</li>
              <li>Distribua 4-6 sachês de silica gel AO REDOR (não em cima do celular)</li>
              <li>Feche bem o recipiente</li>
              <li>Se a cor dos sachês mudar (azul para rosa/branco): TROQUE POR NOVOS</li>
              <li>Espere no mínimo 24 horas, ideal 48 horas</li>
              <li>Se não tiver silica gel: ar seco em local ventilado é segunda opção</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              O Que NÃO Fazer Neste Período
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>NÃO ligue o celular para "testar" - espere os 48 horas completos</li>
              <li>NÃO carregue (risco de curto quando ligar o carregador)</li>
              <li>NÃO exponha a calor (radiador, secador, forno, microondas)</li>
              <li>NÃO congele (água congela e expande, quebra componentes)</li>
              <li>NÃO abra o celular (deixe para técnico se necessário)</li>
              <li>NÃO use pano que solte fiapos (algodão pode ficar preso)</li>
              <li>NÃO use ar comprimido (força água para dentro, não para fora)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sinais de Dano Irreversível (Quanto Procurar Técnico URGENTE)
            </h2>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <p className="font-semibold text-orange-900 mb-3">Procure técnico IMEDIATAMENTE (mesma hora) se:</p>
              <ul className="space-y-2 text-orange-900">
                <li>Água salgada (mar/praia) - corrosão acontece em horas</li>
                <li>Água quente (&gt;40°C) - danifica componentes quimicamente</li>
                <li>Produtos químicos (cloro, combustível, etc.) - dissolve componentes</li>
                <li>Celular esquentou anormalmente (&gt;50°C) - indica curto-circuito</li>
                <li>Cheiro estranho/queimado - dano grave na placa</li>
                <li>Faísca ou fumaça visível - DESLIGUE IMEDIATAMENTE</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tipos de Água e Risco de Dano
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Água destilada/deionizada:</strong> Menor risco. Seca sem deixar resíduos. Melhor cenário.</li>
              <li><strong>Água da chuva/torneira:</strong> Médio risco. Contém minerais que deixam resíduo. Enxague com destilada se possível.</li>
              <li><strong>Água salgada (mar):</strong> ALTÍSSIMO RISCO. Sal corrói componentes metálicos em horas. URGÊNCIA máxima.</li>
              <li><strong>Água de piscina:</strong> Alto risco. Cloro danifica placa-mãe. Treat como emergência.</li>
              <li><strong>Água quente (chá, sopa):</strong> Alto risco. Calor + água danifica componentes. Procure técnico em 24h.</li>
              <li><strong>Bebidas açucaradas (refrigerante, suco):</strong> Muito alto risco. Açúcar cristaliza e causa curto permanente.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Checklist de Recuperação
            </h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <ul className="space-y-2 text-green-900 font-semibold">
                <li>☐ Retirou da água</li>
                <li>☐ Desligou imediatamente</li>
                <li>☐ Removeu capa e acessórios</li>
                <li>☐ Secou exterior com toalha</li>
                <li>☐ Usou ferramenta de ejeção 3-5 vezes</li>
                <li>☐ Posicionou com speaker para baixo</li>
                <li>☐ Colocou em silica gel ou local seco</li>
                <li>☐ Não carregou ou tentou ligar</li>
                <li>☐ Esperou 48 horas</li>
                <li>☐ Fez testes visuais antes de ligar (água visível nas portas?)</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Links Relacionados Para Próximos Passos
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="/guias/celular-molhado/como-secar" className="p-4 border border-gray-300 rounded-lg hover:border-primary hover:shadow-md transition">
                <h4 className="font-semibold text-primary">Como Secar Completamente →</h4>
                <p className="text-sm text-gray-600">Métodos detalhados para secagem de 24-48 horas</p>
              </a>
              <a href="/guias/celular-molhado/quando-ligar" className="p-4 border border-gray-300 rounded-lg hover:border-primary hover:shadow-md transition">
                <h4 className="font-semibold text-primary">Quando Ligar o Celular →</h4>
                <p className="text-sm text-gray-600">Como saber se está seguro ligar (sinais de seco)</p>
              </a>
              <a href="/guias/celular-molhado/agua-salgada" className="p-4 border border-gray-300 rounded-lg hover:border-primary hover:shadow-md transition">
                <h4 className="font-semibold text-primary">Água Salgada (Emergência) →</h4>
                <p className="text-sm text-gray-600">Protocolo especial para mar, praia ou piscina com cloro</p>
              </a>
              <a href="/guias/celular-molhado" className="p-4 border border-gray-300 rounded-lg hover:border-primary hover:shadow-md transition">
                <h4 className="font-semibold text-primary">Guia Completo da Pilha →</h4>
                <p className="text-sm text-gray-600">Voltar ao guia geral com todos os tópicos</p>
              </a>
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <FAQ items={faqs} />

        {/* Bottom CTA */}
        <div className="mt-12">
          <CTABox
            title="Abra a Ferramenta de Ejeção AGORA"
            description="Não perca tempo! Use a ferramenta com som de 165Hz nos primeiros 10 minutos. Aumenta chance de sucesso em até 40%."
            buttonText="Ir Para Ferramenta de Ejeção"
            buttonUrl="/"
          />
        </div>
      </article>
    </>
  )
}
