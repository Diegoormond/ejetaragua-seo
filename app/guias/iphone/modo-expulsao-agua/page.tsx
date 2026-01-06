import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Modo Expulsão de Água iPhone: Atalho Siri Shortcuts | 2026',
  description: 'Como criar atalho iOS para ejetar água do iPhone automaticamente. Tutorial completo Siri Shortcuts para expulsão de água com som 165Hz.',
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/iphone/modo-expulsao-agua',
  },
  openGraph: {
    title: 'Modo Expulsão de Água iPhone: Atalho Siri Shortcuts | 2026',
    description: 'Como criar atalho iOS para ejetar água do iPhone automaticamente. Tutorial completo Siri Shortcuts para expulsão de água com som 165Hz.',
    url: 'https://www.ejetaragua.com/guias/iphone/modo-expulsao-agua',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
  { name: 'Guias', url: '/guias' },
  { name: 'iPhone', url: '/guias/iphone' },
  { name: 'Modo Expulsão de Água' },
]

const faqs = [
  {
    question: 'O que é o Modo Expulsão de Água no iPhone?',
    answer: 'É um atalho personalizado criado com Siri Shortcuts que reproduce sons de 165Hz para ejetar água do alto-falante. Similar ao recurso "Water Lock" do Apple Watch, mas adaptado para iPhone. Você pode ativá-lo com comando de voz "Ei Siri, ejetar água" ou através de toque na tela.',
  },
  {
    question: 'Qual é a diferença entre atalho Siri e ferramenta web?',
    answer: 'Ambos usam 165Hz e funcionam igualmente bem. Atalho: acesso via voz "Ei Siri", aparece na tela inicial, privado no iPhone. Ferramenta web: nenhuma configuração, acessa em qualquer navegador, funciona offline. Escolha conforme sua preferência.',
  },
  {
    question: 'Devo usar o atalho ou a ferramenta web?',
    answer: 'Se iPhone molhou AGORA: use ferramenta web (mais rápido, sem configuração). Se tem tempo: crie o atalho para futura emergência. Ambos funcionam identicamente bem. A diferença é conveniência, não eficácia.',
  },
  {
    question: 'Como criar o atalho automaticamente?',
    answer: 'Abra Atalhos > toque + > "Abrir URLs" > digite https://www.ejetaragua.com > Próximo > nomeie "Ejetar Água" > Concluir. Agora diga "Ei Siri, ejetar água" para abrir a ferramenta. Sem complicação de frequências ou tons.'
  },
  {
    question: 'Posso compartilhar o atalho com outros?',
    answer: 'SIM! No app Atalhos, compartilhe via: AirDrop, mensagem, email, ou gerador de código QR. Seus amigos podem importar e usar. Ótimo para divulgar entre family/amigos que têm iPhone.'
  },
  {
    question: 'O atalho funciona em iPhone molhado?',
    answer: 'Sim! Se tela responde: toque no atalho na tela inicial. Se tela não responde: use "Ei Siri, ejetar água" (por comando de voz). Se Siri não funciona por água: use ferramenta web em navegador Safari.'
  },
  {
    question: 'Posso criar automação que ejeta água automaticamente?',
    answer: 'Sim, usuários avançados podem criar: Automação por hora (ex: notificação diária se esteve na praia), ou por localização (notificação se chegar à piscina). Abra Atalhos > Automação > crie condição > ação.'
  },
  {
    question: 'Quantas vezes devo rodar o atalho?',
    answer: '3-5 vezes com pausas de 10 segundos entre cada. O atalho abre a ferramenta, você clica para ejetar (30s), espera, e repete. Total: 3-5 minutos de ejeção ativa devem resolver na maioria dos casos.'
  },
]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Modo Expulsão de Água iPhone: Atalho Siri Shortcuts | 2026',
    description: 'Como criar atalho iOS para ejetar água do iPhone automaticamente com Siri Shortcuts.',
    url: '/guias/iphone/modo-expulsao-agua',
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
            Modo Expulsão de Água iPhone: Atalho Automático
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Crie um atalho Siri Shortcuts com som 165Hz para ejetar água automaticamente. Ative dizendo "Ei Siri, ejetar água".
            Ou use nossa ferramenta web (mais fácil, sem configuração). Ambos funcionam igualmente bem.
          </p>
        </div>

        {/* CTA to Tool */}
        <CTABox
          title="Quer a Forma Mais Fácil? Use Nossa Ferramenta"
          description="Sem configuração. Apenas abra e toque para ejetar água. Mesmo efeito do atalho Siri, mas instantâneo."
          buttonText="Abrir Ferramenta de Ejeção"
          buttonUrl="/"
        />

        {/* Content Sections */}
        <div className="prose prose-lg max-w-none mb-12">
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que É o Modo Expulsão de Água
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Apple Watch Series 2 e modelos posteriores possuem um recurso oficial chamado <strong>"Water Lock"</strong>
              (Modo de Bloqueio de Água). Quando ativado, o relógio toca um som específico de 165Hz que expele água do alto-falante.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              iPhones NÃO têm esse recurso nativo. Mas podemos criar o mesmo efeito usando:
            </p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>
                <strong>Método 1:</strong> Nossa ferramenta web (mais fácil - sem configuração)
              </li>
              <li>
                <strong>Método 2:</strong> Atalho Siri Shortcuts personalizado (este guia)
              </li>
              <li>
                <strong>Método 3:</strong> Apps de terceiros (não recomendamos - risco de privacidade)
              </li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
              <p className="font-semibold text-yellow-900 mb-2">
                💡 Dica: Use a Ferramenta Web Se Estiver Com Pressa
              </p>
              <p className="text-yellow-900 mb-0">
                Se seu iPhone molhou AGORA, não perca tempo criando atalho. Use nossa <a href="/" className="text-primary font-semibold hover:underline">ferramenta de ejeção</a> imediatamente.
                Você pode criar o atalho depois para ter acesso rápido no futuro.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Criar o Atalho Passo a Passo
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vamos criar um atalho que toca som de 165Hz por 30 segundos quando acionado.
              Tempo necessário: 3-5 minutos.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Passo 1: Abrir o App Atalhos
            </h3>
            <ol className="text-gray-700 space-y-2 mb-4">
              <li>
                <strong>1.1</strong> Procure o app <strong>Atalhos</strong> (ícone azul e branco) no seu iPhone
              </li>
              <li>
                <strong>1.2</strong> Se não encontrar: App Store → busque "Atalhos" → Baixar (grátis da Apple)
              </li>
              <li>
                <strong>1.3</strong> Abra o app Atalhos
              </li>
            </ol>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Passo 2: Criar Novo Atalho
            </h3>
            <ol className="text-gray-700 space-y-2 mb-4">
              <li>
                <strong>2.1</strong> Toque no botão <strong>+</strong> (canto superior direito)
              </li>
              <li>
                <strong>2.2</strong> Toque em <strong>"Adicionar Ação"</strong>
              </li>
              <li>
                <strong>2.3</strong> Na barra de busca, digite: <strong>"reproduzir som"</strong>
              </li>
              <li>
                <strong>2.4</strong> Selecione a ação <strong>"Reproduzir Som"</strong> (ícone de alto-falante)
              </li>
            </ol>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Passo 3: Configurar o Som
            </h3>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6">
              <p className="font-semibold text-red-900 mb-2">
                ⚠️ Problema: Ação "Reproduzir Som" é Limitada
              </p>
              <p className="text-red-900 mb-3">
                Infelizmente, a ação nativa "Reproduzir Som" do Atalhos não permite especificar frequência (Hz).
                Por isso, precisamos usar uma abordagem alternativa:
              </p>
              <p className="text-red-900 mb-0 font-semibold">
                Método alternativo recomendado abaixo ↓
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Método Alternativo: Atalho Para Nossa Ferramenta Web
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Como não podemos configurar Hz diretamente no Atalhos, vamos criar um atalho que abre nossa ferramenta web automaticamente:
            </p>
            <ol className="text-gray-700 space-y-3 mb-4">
              <li>
                <strong>1.</strong> No app Atalhos, toque em <strong>+</strong> (novo atalho)
              </li>
              <li>
                <strong>2.</strong> Toque em <strong>"Adicionar Ação"</strong>
              </li>
              <li>
                <strong>3.</strong> Busque: <strong>"abrir URL"</strong>
              </li>
              <li>
                <strong>4.</strong> Selecione <strong>"Abrir URLs"</strong>
              </li>
              <li>
                <strong>5.</strong> No campo URL, digite: <code className="bg-gray-100 px-2 py-1 rounded text-sm">https://www.ejetaragua.com</code>
              </li>
              <li>
                <strong>6.</strong> Toque em <strong>"Próximo"</strong>
              </li>
              <li>
                <strong>7.</strong> Nomeie o atalho: <strong>"Ejetar Água"</strong>
              </li>
              <li>
                <strong>8.</strong> Toque em <strong>"Concluir"</strong>
              </li>
            </ol>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
              <p className="font-semibold text-green-900 mb-2">
                ✅ Pronto! Agora Você Pode:
              </p>
              <ul className="text-green-900 space-y-1 mb-0">
                <li>• Dizer "Ei Siri, ejetar água" para abrir a ferramenta</li>
                <li>• Adicionar ícone à tela inicial para acesso em 1 toque</li>
                <li>• Compartilhar o atalho com amigos/família</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Adicionar à Tela Inicial
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para acesso ainda mais rápido, adicione o atalho como um ícone na tela do iPhone:
            </p>
            <ol className="text-gray-700 space-y-2 mb-4">
              <li>
                <strong>1.</strong> No app Atalhos, encontre seu atalho "Ejetar Água"
              </li>
              <li>
                <strong>2.</strong> Toque nos <strong>3 pontos (...)</strong> no canto do atalho
              </li>
              <li>
                <strong>3.</strong> Toque no ícone <strong>⋮</strong> (canto superior direito)
              </li>
              <li>
                <strong>4.</strong> Selecione <strong>"Adicionar à Tela de Início"</strong>
              </li>
              <li>
                <strong>5.</strong> Personalize:
                <ul className="mt-2 space-y-1">
                  <li>• Nome: "Ejetar Água" ou "💧 Ejeção"</li>
                  <li>• Ícone: escolha cor/símbolo (sugerimos azul + ícone de gota)</li>
                </ul>
              </li>
              <li>
                <strong>6.</strong> Toque em <strong>"Adicionar"</strong>
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-4">
              Agora você tem um "app" de ejeção de água na tela inicial. Um toque e a ferramenta abre!
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Usar Comandos de Voz com Siri
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Siri reconhece automaticamente o nome do seu atalho. Comandos que funcionam:
            </p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>• <strong>"Ei Siri, ejetar água"</strong> (exato como você nomeou)</li>
              <li>• <strong>"Ei Siri, abrir ejetar água"</strong></li>
              <li>• <strong>"Ei Siri, executar ejetar água"</strong></li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-primary p-6 my-6">
              <p className="font-semibold text-gray-900 mb-2">
                💡 Dica: Ative Siri Sem Usar as Mãos
              </p>
              <p className="text-gray-700 mb-2">
                Configure Siri para responder a "Ei Siri":
              </p>
              <ol className="text-gray-700 space-y-1 mb-0">
                <li><strong>1.</strong> Ajustes → Siri e Busca</li>
                <li><strong>2.</strong> Ative <strong>"Ativar com 'Ei Siri'"</strong></li>
                <li><strong>3.</strong> Siga as instruções para treinar sua voz</li>
              </ol>
              <p className="text-gray-700 mt-3 mb-0">
                Útil quando iPhone está molhado e você não quer tocar na tela!
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Modo de Uso: Como Ejetar Água Eficazmente
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Agora que você tem o atalho configurado, veja como usar corretamente:
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Preparação:
            </h3>
            <ol className="text-gray-700 space-y-2 mb-4">
              <li><strong>1.</strong> Seque o exterior do iPhone com toalha macia</li>
              <li><strong>2.</strong> Aumente o volume do iPhone para 80-100%</li>
              <li><strong>3.</strong> Posicione o iPhone com alto-falante inferior para baixo (ângulo 45°)</li>
            </ol>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Execução:
            </h3>
            <ol className="text-gray-700 space-y-2 mb-4">
              <li>
                <strong>1.</strong> Diga "Ei Siri, ejetar água" OU toque no atalho
              </li>
              <li>
                <strong>2.</strong> A ferramenta abre e começa a tocar som de 165Hz
              </li>
              <li>
                <strong>3.</strong> Toque no botão de ejeção e aguarde 30 segundos
              </li>
              <li>
                <strong>4.</strong> Observe gotículas de água saindo do speaker
              </li>
              <li>
                <strong>5.</strong> Pause por 10 segundos
              </li>
              <li>
                <strong>6.</strong> Repita 3-5 vezes
              </li>
            </ol>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Pós-Ejeção:
            </h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>• Deixe o iPhone em local ventilado por 2-4 horas</li>
              <li>• NÃO carregue por 24 horas</li>
              <li>• Teste o som após secagem completa</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comparação: Atalho vs Ferramenta Web vs Apps
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Recurso</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Atalho Siri</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Ferramenta Web</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Apps Terceiros</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Facilidade</td>
                    <td className="border border-gray-300 px-4 py-2">Requer configuração</td>
                    <td className="border border-gray-300 px-4 py-2 bg-green-50">⭐ Uso imediato</td>
                    <td className="border border-gray-300 px-4 py-2">Download + setup</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Comando de Voz</td>
                    <td className="border border-gray-300 px-4 py-2 bg-green-50">⭐ Sim (Siri)</td>
                    <td className="border border-gray-300 px-4 py-2">Não</td>
                    <td className="border border-gray-300 px-4 py-2">Alguns sim</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Privacidade</td>
                    <td className="border border-gray-300 px-4 py-2 bg-green-50">⭐ 100% Apple</td>
                    <td className="border border-gray-300 px-4 py-2 bg-green-50">⭐ Sem rastreio</td>
                    <td className="border border-gray-300 px-4 py-2">Varia (risco)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Eficácia</td>
                    <td className="border border-gray-300 px-4 py-2 bg-green-50">⭐ 165Hz</td>
                    <td className="border border-gray-300 px-4 py-2 bg-green-50">⭐ 165Hz</td>
                    <td className="border border-gray-300 px-4 py-2">Varia</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Custo</td>
                    <td className="border border-gray-300 px-4 py-2 bg-green-50">⭐ Grátis</td>
                    <td className="border border-gray-300 px-4 py-2 bg-green-50">⭐ Grátis</td>
                    <td className="border border-gray-300 px-4 py-2">Grátis ou pago</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Offline</td>
                    <td className="border border-gray-300 px-4 py-2">Depende</td>
                    <td className="border border-gray-300 px-4 py-2">Requer internet</td>
                    <td className="border border-gray-300 px-4 py-2 bg-green-50">⭐ Sim</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Recomendação:</strong> Use nossa <a href="/" className="text-primary font-semibold hover:underline">ferramenta web</a> para
              primeira emergência (sem setup). Depois crie o atalho Siri para acesso rápido futuro ("Ei Siri, ejetar água").
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Solução de Problemas
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Problema: Siri Não Reconhece o Comando
            </h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Soluções:</strong>
            </p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>• Verifique se você disse exatamente o nome do atalho ("ejetar água")</li>
              <li>• Renomeie o atalho para algo mais simples: "água" ou "ejeção"</li>
              <li>• Ajustes → Siri → Retreine sua voz</li>
              <li>• Use o atalho via toque na tela inicial em vez de voz</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Problema: Atalho Não Abre a Ferramenta
            </h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Soluções:</strong>
            </p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>• Verifique sua conexão com internet</li>
              <li>• Certifique-se que digitou corretamente: <code className="bg-gray-100 px-2 py-1 rounded text-sm">https://www.ejetaragua.com</code></li>
              <li>• Recrie o atalho do zero seguindo os passos novamente</li>
              <li>• Teste abrindo o URL diretamente no Safari primeiro</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Problema: Som Não Sai Alto o Suficiente
            </h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Soluções:</strong>
            </p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>• Aumente o volume do iPhone para 100%</li>
              <li>• Verifique se não está no modo silencioso</li>
              <li>• Ajustes → Sons → Verifique limites de volume</li>
              <li>• Se muito abafado: já tem muita água - continue tentando a ejeção</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dicas Avançadas de Automação
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para usuários avançados, você pode criar automações mais complexas:
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Ideia 1: Automação Por Localização
            </h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Configure para o atalho aparecer automaticamente quando você está na praia/piscina:
            </p>
            <ol className="text-gray-700 space-y-2 mb-4">
              <li>App Atalhos → Automação → + → Quando chego/saio</li>
              <li>Escolha localização (praia favorita)</li>
              <li>Ação: Mostrar notificação "Usar Ejetar Água se molhar"</li>
            </ol>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Ideia 2: Lembrete Pós-Ejeção
            </h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Adicione lembrete ao atalho para não carregar por 24h:
            </p>
            <ol className="text-gray-700 space-y-2 mb-4">
              <li>Edite o atalho "Ejetar Água"</li>
              <li>Adicione ação "Criar Lembrete"</li>
              <li>Configure: "Não carregue o iPhone" para daqui 24 horas</li>
            </ol>
          </section>
        </div>

        {/* FAQ Section */}
        <FAQ items={faqs} />

        {/* Bottom CTA */}
        <div className="mt-12">
          <CTABox
            title="Prefere Não Configurar? Use Já!"
            description="Nossa ferramenta web funciona sem setup. Abra e ejete água em segundos. Mesma eficácia do atalho."
            buttonText="Abrir Ferramenta de Ejeção"
            buttonUrl="/"
          />
        </div>
      </article>
    </>
  )
}
