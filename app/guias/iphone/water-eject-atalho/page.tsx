import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Water Eject Atalho no iPhone: Como Ativar e Usar com Segurança',
  description: 'Como criar atalho Water Eject no iPhone com Siri Shortcuts. Tutorial completo, limitações, riscos e alternativa segura com som 165Hz calibrado.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/iphone/water-eject-atalho',
  },
  openGraph: {
    title: 'Water Eject Atalho no iPhone: Como Ativar e Usar com Segurança',
    description: 'Como criar atalho Water Eject no iPhone com Siri Shortcuts. Tutorial completo, limitações, riscos e alternativa segura com som 165Hz calibrado.',
    url: 'https://www.ejetaragua.com/guias/iphone/water-eject-atalho',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
  { name: 'Guias', url: '/guias' },
  { name: 'iPhone', url: '/guias/iphone' },
  { name: 'Water Eject Atalho' },
]

const faqs = [
  {
    question: 'O que é o Water Eject "atalho" no iPhone?',
    answer: 'É um atalho personalizado criado com o app Siri Shortcuts (Atalhos) que facilita o acesso à função de ejeção de água. Você pode ativar com comando de voz "Ei Siri, ejetar água" ou adicioná-lo à tela inicial. O atalho pode reproduzir um som 165Hz ou abrir uma ferramenta web — ambos removem água do alto-falante.',
  },
  {
    question: 'iPhone tem Water Eject nativo como o Apple Watch?',
    answer: 'NÃO. O iPhone não possui recurso Water Eject nativo integrado ao sistema. Apenas o Apple Watch Series 2+ tem o botão Water Lock com ejeção automática. No iPhone, você precisa usar ferramenta web, app de terceiros ou criar atalho Siri Shortcuts.',
  },
  {
    question: 'Como criar o atalho Water Eject no iPhone?',
    answer: 'Abra Atalhos → toque + → busque "Abrir URLs" → digite https://www.ejetaragua.com → Próximo → nomeie "Ejetar Água" → Concluir. Agora diga "Ei Siri, ejetar água" para abrir a ferramenta. Este método é mais seguro que atalhos com sons não calibrados.',
  },
  {
    question: 'Qual a diferença entre atalho e ferramenta web?',
    answer: 'Atalho: acesso rápido via "Ei Siri" ou ícone na tela inicial, privado no iPhone. Ferramenta web: sem configuração, acessa direto no Safari. Ambos usam 165Hz e funcionam igualmente bem. Escolha conforme preferência — a eficácia é idêntica.',
  },
  {
    question: 'Atalhos com sons baixados são seguros?',
    answer: 'CUIDADO. Muitos atalhos disponíveis online usam frequências incorretas, volume excessivo ou tons distorcidos que podem danificar o alto-falante. Preferimos atalhos que abrem ferramentas web calibradas (165Hz correto) ao invés de reproduzir áudios baixados de qualidade duvidosa.',
  },
  {
    question: 'Posso compartilhar o atalho com amigos?',
    answer: 'SIM. No app Atalhos, compartilhe via AirDrop, mensagem, email ou código QR. Amigos podem importar e usar. Útil para divulgar entre família/amigos com iPhone. Certifique-se de compartilhar atalho seguro (que usa ferramenta calibrada).',
  },
  {
    question: 'O atalho funciona offline?',
    answer: 'Depende. Se o atalho abre uma ferramenta web, precisa de internet na primeira vez (depois funciona offline via cache). Se o atalho reproduz áudio baixado, funciona offline sempre — mas verifique se o áudio é 165Hz correto.',
  },
  {
    question: 'Posso automatizar Water Eject no iPhone?',
    answer: 'SIM (usuários avançados). Crie automação em Atalhos → Automação → escolha gatilho (localização, hora, conexão, etc.) → ação "executar atalho Water Eject". Exemplo: notificação automática se detectar que está na praia/piscina.',
  },
  {
    question: 'Quantas vezes devo rodar o atalho?',
    answer: '3-5 vezes com pausas de 10 segundos entre cada. Cada execução deve durar 30 segundos. Total: 2-5 minutos de ejeção ativa. Se após 5 ciclos ainda houver água, seque externamente e repita depois de 30 minutos.',
  },
  {
    question: 'Atalho é melhor que ferramenta web direta?',
    answer: 'Nem melhor nem pior — é questão de conveniência. Atalho: acesso via voz (útil se tela não responde). Ferramenta web direta: sem configuração prévia (útil em emergência). Eficácia é idêntica se ambos usarem 165Hz calibrado.',
  },
  {
    question: 'O atalho funciona em iPhone molhado?',
    answer: 'SIM. Se tela responde: toque no atalho. Se tela não responde mas Siri funciona: "Ei Siri, ejetar água". Se Siri também não funciona: use ferramenta web direto no Safari (mais confiável em emergências).',
  },
  {
    question: 'Preciso atualizar o atalho?',
    answer: 'Não, se o atalho abre uma URL (ferramenta web). A ferramenta é atualizada automaticamente. Se o atalho reproduz áudio baixado, pode ser necessário atualizar se houver melhorias na calibração — mas ferramentas web são preferíveis por esse motivo.',
  },
]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Water Eject Atalho no iPhone: Como Ativar e Usar com Segurança',
    description: 'Como criar atalho Water Eject no iPhone com Siri Shortcuts para ejeção rápida de água.',
    url: '/guias/iphone/water-eject-atalho',
    datePublished: '2026-01-07',
    dateModified: '2026-01-07',
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
            Water Eject Atalho no iPhone: Como Ativar e Usar
          </h1>
          <LastUpdated date="7 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Resposta Rápida</h2>
          <p className="text-gray-800 leading-relaxed">
            O iPhone <strong>não tem Water Eject nativo</strong> como o Apple Watch, mas você pode criar um <strong>atalho Siri Shortcuts</strong> para acesso rápido via comando de voz "Ei Siri, ejetar água". O atalho mais seguro é configurar para abrir uma ferramenta web 165Hz calibrada — evite atalhos com áudios baixados de origem duvidosa que podem ter frequência incorreta.
          </p>
        </div>

        <CTABox
          title="Prefere Usar Direto Sem Configurar Atalho?"
          description="Nossa ferramenta Water Eject funciona direto no Safari sem instalação. Som 165Hz calibrado, mesma tecnologia do Apple Watch."
          buttonText="Abrir Ferramenta Water Eject"
          buttonUrl="https://www.ejetaragua.com/?utm_source=guias&utm_medium=seo&utm_campaign=cta"
        />

        {/* Table of Contents */}
        <nav className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Neste Guia</h2>
          <ul className="space-y-2">
            <li>
              <a href="#o-que-e" className="text-primary hover:underline">
                O que é o Water Eject "atalho"
              </a>
            </li>
            <li>
              <a href="#nativo" className="text-primary hover:underline">
                Existe Water Eject nativo no iPhone?
              </a>
            </li>
            <li>
              <a href="#apple-watch" className="text-primary hover:underline">
                Como o Apple Watch faz
              </a>
            </li>
            <li>
              <a href="#shortcuts" className="text-primary hover:underline">
                Como funcionam atalhos do iOS (Shortcuts)
              </a>
            </li>
            <li>
              <a href="#limitacoes" className="text-primary hover:underline">
                Limitações e riscos de atalhos
              </a>
            </li>
            <li>
              <a href="#alternativa" className="text-primary hover:underline">
                Alternativa mais segura: som 165Hz calibrado
              </a>
            </li>
            <li>
              <a href="#passo-a-passo" className="text-primary hover:underline">
                Passo a passo: criar atalho seguro
              </a>
            </li>
            <li>
              <a href="#quando-assistencia" className="text-primary hover:underline">
                Quando procurar assistência técnica
              </a>
            </li>
            <li>
              <a href="#checklist" className="text-primary hover:underline">
                Checklist rápido
              </a>
            </li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          {/* O que é */}
          <section id="o-que-e" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">O Que É o Water Eject "Atalho"</h2>
            <p>
              Um <strong>atalho Water Eject</strong> é uma automação personalizada criada no app <strong>Atalhos</strong> (Siri Shortcuts) do iPhone que facilita o acesso à função de ejeção de água.
            </p>
            <p>
              Com o atalho configurado, você pode:
            </p>
            <ul>
              <li>
                <strong>Comando de voz:</strong> "Ei Siri, ejetar água" ativa o processo
              </li>
              <li>
                <strong>Ícone na tela inicial:</strong> Toque único para executar
              </li>
              <li>
                <strong>Widget:</strong> Acesso rápido pela tela de widgets
              </li>
              <li>
                <strong>Automação:</strong> Executar automaticamente em situações específicas
              </li>
            </ul>
            <p>
              O atalho pode fazer duas coisas:
            </p>
            <ol>
              <li>
                <strong>Reproduzir um som 165Hz</strong> (áudio pré-baixado no atalho)
              </li>
              <li>
                <strong>Abrir uma ferramenta web</strong> que reproduz 165Hz calibrado
              </li>
            </ol>
            <p>
              <strong>Recomendamos a opção 2</strong> (abrir ferramenta web) porque garante que o som é calibrado corretamente — falaremos mais sobre isso adiante.
            </p>
          </section>

          {/* Nativo? */}
          <section id="nativo" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Existe Water Eject Nativo no iPhone?</h2>
            <p>
              <strong>NÃO.</strong> O iPhone <strong>não possui</strong> recurso Water Eject nativo integrado ao iOS.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">O Que o iPhone TEM</h3>
            <ul>
              <li>
                <strong>Certificação IP68:</strong> Resistência à água (até 6 metros por 30 minutos nos modelos recentes)
              </li>
              <li>
                <strong>Indicador de líquidos:</strong> LCI (Liquid Contact Indicator) interno que detecta contato com água
              </li>
              <li>
                <strong>Alerta "Líquido detectado":</strong> Notificação quando água é detectada na porta Lightning/USB-C
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">O Que o iPhone NÃO TEM</h3>
            <ul>
              <li>
                <strong>Botão Water Eject nativo:</strong> Não há função integrada no iOS para ejetar água do alto-falante
              </li>
              <li>
                <strong>Water Lock:</strong> Recurso exclusivo do Apple Watch que bloqueia a tela e ejeta água
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Por Que a Apple Não Incluiu no iPhone?</h3>
            <p>
              A Apple nunca explicou oficialmente, mas as razões prováveis são:
            </p>
            <ul>
              <li>
                <strong>Uso menos frequente:</strong> Apple Watch é usado em natação/mergulho regularmente; iPhone é menos exposto
              </li>
              <li>
                <strong>Economia de bateria:</strong> Watch tem bateria menor, então precisa solução rápida; iPhone pode "esperar" evaporação natural
              </li>
              <li>
                <strong>Confiança na vedação:</strong> Apple assume que iPhone IP68 bem vedado não permitirá entrada de água
              </li>
            </ul>
            <p>
              Mas a realidade é que <strong>iPhones molham</strong> (quedas acidentais, respingos, chuva) e o alto-falante <strong>fica abafado</strong> com água — então a comunidade criou soluções alternativas.
            </p>
          </section>

          {/* Apple Watch */}
          <section id="apple-watch" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Como o Apple Watch Faz</h2>
            <p>
              O <strong>Apple Watch Series 2+</strong> tem o recurso <strong>Water Lock</strong> integrado ao watchOS. Funciona assim:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Water Lock (Bloqueio de Água)</h3>
            <ol>
              <li>
                <strong>Antes de entrar na água:</strong> Ative Water Lock na Central de Controle (ícone de gota)
              </li>
              <li>
                <strong>Durante atividade aquática:</strong> Tela fica bloqueada para evitar toques acidentais
              </li>
              <li>
                <strong>Após sair da água:</strong> Gire a Digital Crown (coroa digital) para desbloquear
              </li>
              <li>
                <strong>Ejeção automática:</strong> Watch emite som 165Hz que expulsa água do alto-falante
              </li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Tecnologia Por Trás</h3>
            <p>
              O Apple Watch usa:
            </p>
            <ul>
              <li>
                <strong>Frequência 165Hz:</strong> Tom de baixa frequência calibrado para criar vibrações ideais
              </li>
              <li>
                <strong>Volume otimizado:</strong> Alto o suficiente para expelir água, mas seguro para o speaker
              </li>
              <li>
                <strong>Duração curta:</strong> Alguns segundos são suficientes (alto-falante do Watch é pequeno)
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Por Que Funciona no iPhone Também?</h3>
            <p>
              O princípio físico é idêntico:
            </p>
            <ul>
              <li>iPhone tem alto-falantes com membrana vibrátil (igual ao Watch)</li>
              <li>Som 165Hz cria as mesmas vibrações deslocadoras de água</li>
              <li>Física de fluidos é universal — funciona em qualquer dispositivo</li>
            </ul>
            <p>
              A única diferença é que você precisa <strong>reproduzir o som manualmente</strong> no iPhone (via ferramenta, app ou atalho).
            </p>
          </section>

          {/* Shortcuts */}
          <section id="shortcuts" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Como Funcionam Atalhos do iOS (Shortcuts)</h2>
            <p>
              <strong>Atalhos</strong> (Shortcuts) é um app nativo do iOS que permite criar automações personalizadas sem programação.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">O Que Atalhos Podem Fazer</h3>
            <ul>
              <li>Executar ações do sistema (ajustar volume, abrir apps, enviar mensagens)</li>
              <li>Reproduzir sons ou músicas</li>
              <li>Abrir URLs (sites, apps via deep links)</li>
              <li>Criar automações baseadas em gatilhos (localização, hora, conexão)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Como Criar um Atalho</h3>
            <p>
              Processo básico:
            </p>
            <ol>
              <li>Abra o app <strong>Atalhos</strong> (nativo no iOS 13+)</li>
              <li>Toque no botão <strong>+</strong> (criar novo atalho)</li>
              <li>Adicione <strong>ações</strong> (blocos de comando)</li>
              <li>Configure parâmetros de cada ação</li>
              <li>Nomeie o atalho e salve</li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Atalhos para Water Eject</h3>
            <p>
              Existem duas abordagens:
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-2 mt-4">Abordagem 1: Reproduzir Áudio (mais complexo)</h4>
            <ul>
              <li>Baixar arquivo de áudio 165Hz</li>
              <li>Adicionar ao atalho via ação "Reproduzir Som"</li>
              <li>Configurar volume e duração</li>
            </ul>
            <p className="text-gray-700 italic">
              ⚠️ Risco: Áudios baixados da internet podem ter frequência incorreta ou distorção.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-2 mt-4">Abordagem 2: Abrir URL (mais simples e seguro)</h4>
            <ul>
              <li>Adicionar ação "Abrir URLs"</li>
              <li>Inserir URL de ferramenta web calibrada</li>
              <li>Salvar e usar</li>
            </ul>
            <p className="text-green-700 font-medium">
              ✅ Vantagem: Ferramenta web sempre atualizada e calibrada corretamente.
            </p>
          </section>

          {/* Limitações */}
          <section id="limitacoes" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Limitações e Riscos de Atalhos</h2>
            <p>
              Antes de criar ou baixar um atalho Water Eject, conheça as limitações:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">⚠️ Riscos de Atalhos com Áudio Baixado</h3>
            <ul>
              <li>
                <strong>Frequência incorreta:</strong> Muitos atalhos disponíveis online usam 440Hz, 1000Hz ou outras frequências ineficazes
              </li>
              <li>
                <strong>Volume excessivo:</strong> Áudios mal calibrados podem tocar a 100% causando distorção
              </li>
              <li>
                <strong>Duração errada:</strong> Alguns atalhos tocam por segundos demais ou de menos
              </li>
              <li>
                <strong>Qualidade duvidosa:</strong> Áudios comprimidos (MP3 baixa qualidade) podem ter artefatos que danificam speaker
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">❌ O Que Pode Dar Errado</h3>
            <ul>
              <li>
                <strong>Dano ao alto-falante:</strong> Frequências muito altas ou volume excessivo podem danificar a membrana
              </li>
              <li>
                <strong>Ineficácia:</strong> Frequência errada não remove água — você perde tempo
              </li>
              <li>
                <strong>Falsa segurança:</strong> Achar que resolveu mas água continua no celular
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">✅ Como Evitar Riscos</h3>
            <ul>
              <li>
                <strong>Prefira atalhos que abrem URLs</strong> de ferramentas web confiáveis
              </li>
              <li>
                <strong>Verifique a fonte:</strong> Se baixar atalho, confirme que o áudio é 165Hz correto
              </li>
              <li>
                <strong>Teste antes de emergência:</strong> Não espere o celular molhar para testar o atalho
              </li>
              <li>
                <strong>Volume 80-90%:</strong> Nunca use volume máximo (risco de distorção)
              </li>
            </ul>
          </section>
        </div>

        <CTABox
          title="Use Water Eject Calibrado e Seguro"
          description="Nossa ferramenta usa 165Hz calibrado, volume otimizado e duração correta. Mesma tecnologia do Apple Watch, testada e segura."
          buttonText="Abrir Ferramenta Oficial"
          buttonUrl="https://www.ejetaragua.com/?utm_source=guias&utm_medium=seo&utm_campaign=cta"
        />

        <div className="prose prose-lg max-w-none">
          {/* Alternativa */}
          <section id="alternativa" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Alternativa Mais Segura: Som 165Hz Calibrado</h2>
            <p>
              A maneira <strong>mais segura e eficaz</strong> de usar Water Eject no iPhone é através de uma <strong>ferramenta web calibrada</strong>.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Por Que Ferramenta Web É Melhor?</h3>
            <ul>
              <li>
                <strong>165Hz exato:</strong> Frequência calibrada corretamente (não aproximações)
              </li>
              <li>
                <strong>Volume otimizado:</strong> Automaticamente ajustado para 80-90% (seguro e eficaz)
              </li>
              <li>
                <strong>Duração correta:</strong> Ciclos de 30 segundos (ideal para iPhone)
              </li>
              <li>
                <strong>Sem instalação:</strong> Funciona direto no Safari, sem apps ou atalhos
              </li>
              <li>
                <strong>Funciona offline:</strong> Após primeiro acesso, usa cache do navegador
              </li>
              <li>
                <strong>Sempre atualizada:</strong> Melhorias automáticas sem precisar reconfigurar
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Quando Usar Atalho vs Ferramenta Direta</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                      Situação
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                      Melhor Opção
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Emergência (celular molhou AGORA)</td>
                    <td className="px-6 py-4 text-sm text-gray-800">Ferramenta web direta (mais rápido)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Tela não responde, mas Siri funciona</td>
                    <td className="px-6 py-4 text-sm text-gray-800">Atalho com comando de voz</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Uso frequente (piscina/praia)</td>
                    <td className="px-6 py-4 text-sm text-gray-800">Atalho (conveniência)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Primeira vez / teste</td>
                    <td className="px-6 py-4 text-sm text-gray-800">Ferramenta web (sem configuração)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Preferência por automação</td>
                    <td className="px-6 py-4 text-sm text-gray-800">Atalho (pode criar automações)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Passo a passo */}
          <section id="passo-a-passo" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Passo a Passo: Criar Atalho Seguro</h2>
            <p>
              Vamos criar um atalho que <strong>abre a ferramenta web calibrada</strong> (método mais seguro):
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Método 1: Atalho Simples (Recomendado)</h3>
              <ol className="space-y-4">
                <li>
                  <strong>1. Abra o app Atalhos</strong>
                  <p className="text-gray-700 mt-1">Ícone azul/roxo com quadrados, nativo no iOS 13+. Se não achar, baixe da App Store.</p>
                </li>
                <li>
                  <strong>2. Toque no botão +</strong>
                  <p className="text-gray-700 mt-1">Canto superior direito: "+" para criar novo atalho.</p>
                </li>
                <li>
                  <strong>3. Adicionar Ação</strong>
                  <p className="text-gray-700 mt-1">Toque em "Adicionar Ação" → busque "Abrir URLs" → selecione.</p>
                </li>
                <li>
                  <strong>4. Inserir URL</strong>
                  <p className="text-gray-700 mt-1">No campo "URL", digite: <code className="bg-white px-2 py-1 rounded">https://www.ejetaragua.com</code></p>
                </li>
                <li>
                  <strong>5. Nomear o Atalho</strong>
                  <p className="text-gray-700 mt-1">Toque no nome padrão no topo → renomeie para "Ejetar Água" ou "Water Eject".</p>
                </li>
                <li>
                  <strong>6. Concluir</strong>
                  <p className="text-gray-700 mt-1">Toque em "Concluir" no canto superior direito. Pronto!</p>
                </li>
              </ol>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Como Usar o Atalho</h3>
            <ul>
              <li>
                <strong>Comando de voz:</strong> "Ei Siri, ejetar água" (ou o nome que escolheu)
              </li>
              <li>
                <strong>Tela inicial:</strong> Na biblioteca de atalhos, toque no atalho
              </li>
              <li>
                <strong>Widget:</strong> Adicione widget de Atalhos à tela inicial para acesso rápido
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Método 2: Atalho Avançado (Opcional)</h3>
            <p>
              Usuários avançados podem criar atalho com:
            </p>
            <ul>
              <li>Ajuste automático de volume para 80%</li>
              <li>Notificação após execução</li>
              <li>Contador de usos (para saber quantos ciclos já fez)</li>
            </ul>
            <p>
              Para isso, adicione ações extras: "Definir Volume" → "Abrir URLs" → "Mostrar Notificação".
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Adicionar à Tela Inicial</h3>
            <p>
              Para acesso mais rápido:
            </p>
            <ol>
              <li>Abra o atalho criado</li>
              <li>Toque no ícone de três pontos (•••) no canto</li>
              <li>Toque em "Adicionar à Tela de Início"</li>
              <li>Escolha ícone e nome</li>
              <li>Confirme</li>
            </ol>
            <p>
              Agora você tem um ícone na tela inicial igual a um app.
            </p>
          </section>

          {/* Assistência */}
          <section id="quando-assistencia" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quando Procurar Assistência Técnica</h2>
            <p>
              Water Eject (atalho ou ferramenta web) é eficaz para <strong>remover água do alto-falante</strong>, mas não resolve danos internos. Procure assistência se:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">🚨 Sinais de Alerta</h3>
            <ul>
              <li>
                <strong>Celular não liga:</strong> Após secar externamente e tentar carregar
              </li>
              <li>
                <strong>Tela preta mas vibra/emite sons:</strong> Possível dano no display
              </li>
              <li>
                <strong>Manchas na tela:</strong> Água entre LCD e touch (precisa desmontagem)
              </li>
              <li>
                <strong>Câmera embaçada internamente:</strong> Água dentro do módulo da câmera
              </li>
              <li>
                <strong>Alto-falante sem som após Water Eject:</strong> Possível dano no speaker
              </li>
              <li>
                <strong>Bateria superaquecendo:</strong> Risco de curto-circuito na bateria
              </li>
              <li>
                <strong>Touch fantasma:</strong> Tela registrando toques sozinha
              </li>
              <li>
                <strong>Carregamento não funciona:</strong> Água pode ter danificado porta ou circuito de carga
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">⏱️ Timing Importante</h3>
            <ul>
              <li>
                <strong>Menos de 24h:</strong> Ainda há chance de salvar — leve urgente à assistência
              </li>
              <li>
                <strong>24-48h:</strong> Chances reduzidas mas ainda possível — não demore
              </li>
              <li>
                <strong>Mais de 48h ligado:</strong> Se danos não apareceram, provavelmente está ok
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">🔧 O Que a Assistência Faz</h3>
            <ul>
              <li>Desmontagem e limpeza profissional com álcool isopropílico 99%</li>
              <li>Substituição de componentes danificados (alto-falante, porta, bateria)</li>
              <li>Secagem em câmara de vácuo ou dessecante industrial</li>
              <li>Testes de diagnóstico completos</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">💰 Custos Típicos</h3>
            <p>
              Varia conforme modelo e dano:
            </p>
            <ul>
              <li><strong>Limpeza básica:</strong> R$ 100-300</li>
              <li><strong>Troca de alto-falante:</strong> R$ 150-400</li>
              <li><strong>Troca de display:</strong> R$ 400-2000 (depende do modelo)</li>
              <li><strong>Reparo de placa-mãe:</strong> R$ 300-800</li>
            </ul>
            <p>
              <strong>Garantia da Apple:</strong> Danos por água NÃO são cobertos (mesmo em modelos IP68). AppleCare+ pode oferecer desconto em reparo.
            </p>
          </section>

          {/* Checklist */}
          <section id="checklist" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Checklist Rápido: Atalho Water Eject</h2>
            <div className="bg-primary/5 border-2 border-primary rounded-lg p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">□</span>
                  <span>iPhone molhou? Use ferramenta web direto (mais rápido que configurar atalho)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">□</span>
                  <span>Quer criar atalho? Use método "Abrir URLs" (mais seguro que áudio baixado)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">□</span>
                  <span>Configure URL: https://www.ejetaragua.com (ferramenta calibrada 165Hz)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">□</span>
                  <span>Nomeie "Ejetar Água" para comando "Ei Siri, ejetar água"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">□</span>
                  <span>Volume 80-90% (nunca 100%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">□</span>
                  <span>Posicione iPhone com speaker voltado para baixo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">□</span>
                  <span>Execute 3-5 ciclos de 30s cada (pausas de 10s)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">□</span>
                  <span>Seque água expelida após cada ciclo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">□</span>
                  <span>Teste o som (deve estar claro, não abafado)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">□</span>
                  <span>Se persistir ou surgir dano: procure assistência técnica</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Links internos */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Guias Relacionados</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/guias/water-eject"
                className="block bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-primary transition"
              >
                <h3 className="font-bold text-gray-900 mb-2">Water Eject: Guia Completo</h3>
                <p className="text-gray-600 text-sm">
                  O que é Water Eject, como funciona, origem no Apple Watch e quando usar
                </p>
              </Link>
              <Link
                href="/guias/iphone/modo-expulsao-agua"
                className="block bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-primary transition"
              >
                <h3 className="font-bold text-gray-900 mb-2">Modo Expulsão de Água iPhone</h3>
                <p className="text-gray-600 text-sm">
                  Atalho Siri Shortcuts automático para ejeção de água
                </p>
              </Link>
              <Link
                href="/guias/iphone"
                className="block bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-primary transition"
              >
                <h3 className="font-bold text-gray-900 mb-2">Guias iPhone</h3>
                <p className="text-gray-600 text-sm">
                  Todos os guias sobre iPhone molhado, resistência à água e garantia
                </p>
              </Link>
              <Link
                href="/guias/som-ejecao-agua"
                className="block bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-primary transition"
              >
                <h3 className="font-bold text-gray-900 mb-2">Som Para Tirar Água: 165Hz</h3>
                <p className="text-gray-600 text-sm">
                  Entenda a ciência por trás do som 165Hz e por que funciona
                </p>
              </Link>
            </div>
          </section>
        </div>

        <FAQ items={faqs} />
      </article>
    </>
  )
}
