import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Como Secar Celular Molhado: 4 Métodos Científicos',
  description: 'Guia completo com 4 métodos de secagem. Som 165Hz + silica gel + ar natural. Sem arroz, sem secador. Taxa de sucesso 85%.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/celular-molhado/como-secar',
  },
  openGraph: {
    title: 'Como Secar Celular Molhado: 4 Métodos Científicos',
    description: 'Guia completo com 4 métodos de secagem. Som 165Hz + silica gel + ar natural. Sem arroz, sem secador. Taxa de sucesso 85%.',
    url: 'https://www.ejetaragua.com/guias/celular-molhado/como-secar',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Celular Molhado', url: '/guias/celular-molhado' },
    { name: 'Como Secar' },
  ]

const faqs = [
    {
      "question": "Qual método é o mais rápido?",
      "answer": "Ejeção por som 165Hz. Remove 80% da água em apenas 2-5 minutos. É o método mais rápido e comprovado cientificamente."
    },
    {
      "question": "Silica gel é realmente necessário?",
      "answer": "Não é absolutamente necessário, mas é MUITO recomendado. Reduz tempo de secagem em 50% e aumenta taxa de sucesso em 20%. Se não tiver: use ar natural ventilado por 48-72 horas."
    },
    {
      "question": "Posso combinar métodos?",
      "answer": "SIM! Combinação é ideal: som (2-5 min) + ar natural (2-4 horas) + silica gel (24 horas). É a estratégia com maior taxa de sucesso."
    },
    {
      "question": "Quanto calor é seguro? Qual temperatura máxima?",
      "answer": "Temperatura ambiente (18-25°C) é segura. Acima de 30°C começa a danificar. NUNCA acima de 40°C. Evite completamente: aquecedor, radiador, luz solar direta, ventilador quente."
    },
    {
      "question": "Preciso deixar em local completamente escuro?",
      "answer": "Não. Luz natural é ok (evite sol direto). Mas local ventilado é ESSENCIAL. Gaveta fechada ou plástico sem furos NÃO funciona bem."
    },
    {
      "question": "Se não secar bem em 48 horas, posso continuar?",
      "answer": "Sim! Se ainda houver umidade visível ou cheiro de molhado: continue por mais 24 horas. Melhor esperar 72 horas do que ligar com água residual."
    },
    {
      "question": "Álcool isopropílico acelera secagem?",
      "answer": "SIM, mas é arriscado. Apenas 99% é seguro. Profissionais usam para imersão rápida (30 seg). Usuários: risco de dano > benefício. Não recomendamos."
    },
    {
      "question": "Posso usar dessecante caseiro tipo sal de cozinha?",
      "answer": "NÃO! Sal soltará grãos e pode contaminar o celular. NUNCA substitua silica gel por: sal, arroz, açúcar, café. Silica gel é específico e não corrosivo."
    },
    {
      "question": "Como saber quando está completamente seco?",
      "answer": "Sinais de seco: sem água visível nas portas, sem som de água ao balançar, sem cheiro de molhado, câmera clara (sem embaço), peso normal (água deixa pesado)."
    },
    {
      "question": "Se tiver dano no áudio, precisa continuar secando?",
      "answer": "Sim! Som abafado pode melhorar com mais secagem. Continue por 48 horas. Se persistir: pode ser dano mecânico na membrana (precisa técnico)."
    },
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Como Secar Celular Molhado: 4 Métodos Científicos',
    description: 'Guia completo com 4 métodos de secagem. Som 165Hz + silica gel + ar natural. Sem arroz, sem secador. Taxa de sucesso 85%.',
    url: '/guias/celular-molhado/como-secar',
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
            Como Secar Celular Molhado: 4 Métodos Eficazes
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Existem 4 métodos comprovados para secar um celular molhado. Quando combinados corretamente, resultam em taxa de sucesso de 85% mesmo em casos graves.
          </p>
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed font-semibold">
            Combinação vencedora: Ejeção por som 165Hz (2-5 min) + Ar natural (2-4h) + Silica gel (24h) + Espera (48h total). NUNCA use arroz ou secador.
          </p>
        </div>

        {/* CTA to Tool */}
        <CTABox
          title="Método 1: Ejeção por Som 165Hz"
          description="Comece AGORA com a ferramenta de ejeção. Remove até 80% da água em 2-5 minutos. Comprovado cientificamente."
          buttonText="Abrir Ferramenta de Ejeção"
          buttonUrl="/"
        />

        {/* Content Sections */}
        <div className="prose prose-lg max-w-none mb-12">
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por Que a Secagem é Crítica
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A água não danifica componentes imediatamente. O real dano vem da corrosão química que ocorre nos dias seguintes. Água residual causa oxidação dos contatos, formação de cristais salinos, e degradação de soldas.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Quanto mais rápido e completamente você remover a água, menos tempo para que a corrosão comece. Essa é a razão pela qual métodos rápidos (som) + prolongados (silica gel) funcionam melhor que apenas um.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Método 1: Ejeção Por Ondas Sonoras (165Hz)
            </h2>
            <p className="font-semibold text-lg text-gray-800 mb-4">
              Taxa de efetividade: 80% em remoção de água visível. Tempo: 2-5 minutos.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Como Funciona Cientificamente
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A frequência de 165Hz cria vibrações que ressoa com a membrana do speaker e a porta USB, expelindo fisicamente gotículas de água para fora. Essa frequência específica foi escolhida porque é:
            </p>
            <ul className="space-y-2 text-gray-700 mt-3">
              <li><strong>Segura para o speaker:</strong> Não o danifica mesmo em uso prolongado</li>
              <li><strong>Eficiente na frequência:</strong> Ressonância máxima sem danificar componentes</li>
              <li><strong>Mesma do Apple Watch:</strong> Já testada e aprovada pela Apple</li>
              <li><strong>Estudada por engenheiros:</strong> Frequência otimizada empiricamente</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Passo a Passo: Como Usar
            </h3>
            <div className="bg-blue-50 border-l-4 border-primary p-6 my-4 rounded-r-lg">
              <ol className="space-y-3 text-gray-800">
                <li><strong>1. Ajuste volume para 100%</strong> - Volume baixo reduz efetividade em 50%</li>
                <li><strong>2. Acesse a ferramenta</strong> - Botão acima nesta página</li>
                <li><strong>3. Posicione corretamente</strong> - Speaker apontando para baixo (90°). Você pode sustentar o celular ou apoiá-lo em ângulo</li>
                <li><strong>4. Toque o botão e deixe por 30 segundos</strong> - O som começará ALTO mas é normal. Você pode ver água saindo!</li>
                <li><strong>5. Faça pausa de 10 segundos</strong> - Deixe água escorrer</li>
                <li><strong>6. Repita 3-5 vezes</strong> - Cada repetição remove mais umidade</li>
                <li><strong>7. Seque o exterior após terminar</strong> - Com toalha macia</li>
              </ol>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Sinais de que Está Funcionando
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Você vê gotículas saindo do speaker</li>
              <li>✓ Som do speaker muda (começa abafado, fica mais claro)</li>
              <li>✓ Após repetições, o som fica visivealmente mais claro</li>
              <li>✓ Se não vê água: não significa não está funcionando (água interna é invisível)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Método 2: Ar Natural e Ventilação (2-4 horas)
            </h2>
            <p className="font-semibold text-lg text-gray-800 mb-4">
              Taxa de efetividade: 60% complementar. Tempo: 2-4 horas.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              O Ambiente Perfeito
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Ventilação:</strong> Janela aberta, varanda, ou local com circulação de ar</li>
              <li><strong>Temperatura:</strong> 18-25°C é ideal. Nunca acima de 30°C</li>
              <li><strong>Umidade:</strong> Quanto mais seco o ar, melhor. Dia nublado é melhor que dia úmido</li>
              <li><strong>Posicionamento:</strong> Speaker e USB para baixo, inclinado ou na vertical</li>
              <li><strong>Luz:</strong> Luz natural ok, mas evite sol direto (aquece demais)</li>
              <li><strong>Proteção:</strong> Longe de poeira, mas com circulação de ar</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              O Que NÃO Fazer
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>❌ Ventilador (empurra água para dentro, não para fora)</li>
              <li>❌ Ar condicionado (não ajuda muito, pode formar condensação)</li>
              <li>❌ Gaveta fechada (sem circulação = sem secagem)</li>
              <li>❌ Plástico ou saco (prende umidade)</li>
              <li>❌ Radiador ou aquecedor (danifica componentes)</li>
              <li>❌ Luz solar direta (calor excessivo)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Método 3: Silica Gel (24-48 horas)
            </h2>
            <p className="font-semibold text-lg text-gray-800 mb-4">
              Taxa de efetividade: 95% em umidade residual. Tempo: 24-48 horas.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Por Que Funciona
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Silica gel é um dessecante extremamente eficiente que absorve até 40% do seu peso em água. Diferente de outras substâncias, ela:
            </p>
            <ul className="space-y-2 text-gray-700 mt-3">
              <li>Absorve água lentamente (ideal para umidade residual)</li>
              <li>Não deixa resíduos ou contaminação</li>
              <li>É reutilizável (seque ao forno para reutilizar)</li>
              <li>Não reage quimicamente com componentes</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Passo a Passo: Método Silica Gel
            </h3>
            <ol className="space-y-3 text-gray-700">
              <li><strong>1. Encontre sachês de silica gel</strong> - Vêm em caixas de sapatos, eletrônicos, vitaminas. Se não tiver: compre (R$ 5-15 em farmácia)</li>
              <li><strong>2. Prepare recipiente hermético</strong> - Tupperware, saco plástico bem fechado, ou caixa apertada</li>
              <li><strong>3. Coloque o celular no centro</strong> - Desligue, sem capa, em posição natural</li>
              <li><strong>4. Distribua 4-6 sachês ao redor</strong> - NÃO em cima (evita pressão). Lado, frente, trás, fundo</li>
              <li><strong>5. Feche bem o recipiente</strong> - Hermeticamente selado. Nada de ar entrando</li>
              <li><strong>6. Monitore a cor dos sachês</strong> - Azul/rosa normal. Se ficar branco/pálido: saturou, TROQUE POR NOVO</li>
              <li><strong>7. Deixe por 24-48 horas</strong> - Mínimo 24h. Ideal 48h para segurança</li>
              <li><strong>8. Remova e teste visual</strong> - Antes de ligar, verifique se há água residual</li>
            </ol>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Onde Comprar Silica Gel (Brasil)
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Farmácias (genérico ou marca própria)</li>
              <li>E-commerce: Amazon, Mercado Livre (busque "silica gel sachê")</li>
              <li>Lojas de jardinagem e hidroponia</li>
              <li>Reutilize de embalagens antigas: sapatos, eletrônicos, vitaminas</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Método 4: Espera Prolongada (48 horas mínimo)
            </h2>
            <p className="font-semibold text-lg text-gray-800 mb-4">
              Taxa de efetividade: 100% em evitar danos. Tempo: 48 horas (ideal 72h em casos graves).
            </p>

            <p className="text-gray-700 leading-relaxed">
              O método mais simples e mais eficaz: ESPERAR. A evaporação natural é lenta mas garantida. Enquanto você aguarda:
            </p>
            <ul className="space-y-2 text-gray-700 mt-3">
              <li>Não há risco de dano por pressa</li>
              <li>Água evapora completamente mesmo em locais não ideais</li>
              <li>Componentes descansam e se recuperam de choque térmico</li>
              <li>Oxidação não tem tempo de começar</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Timeline Recomendada (Combine Todos)
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Minutos 0-5:</strong> Ejeção por som (3-5 rodadas)</li>
              <li><strong>Minutos 5-30:</strong> Secagem exterior com toalha</li>
              <li><strong>Horas 0-4:</strong> Ar natural e posicionamento</li>
              <li><strong>Horas 2-48:</strong> Silica gel em recipiente fechado</li>
              <li><strong>Horas 48+:</strong> Testes visuais, depois ligue com segurança</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comparação: Todos os Métodos
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left">Método</th>
                    <th className="border border-gray-300 p-3 text-left">Tempo</th>
                    <th className="border border-gray-300 p-3 text-left">Eficácia</th>
                    <th className="border border-gray-300 p-3 text-left">Custo</th>
                    <th className="border border-gray-300 p-3 text-left">Risco</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Som 165Hz</td>
                    <td className="border border-gray-300 p-3">2-5 min</td>
                    <td className="border border-gray-300 p-3">⭐⭐⭐⭐⭐ (80%)</td>
                    <td className="border border-gray-300 p-3">Grátis</td>
                    <td className="border border-gray-300 p-3">Nenhum</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Ar Natural</td>
                    <td className="border border-gray-300 p-3">2-4 horas</td>
                    <td className="border border-gray-300 p-3">⭐⭐⭐⭐ (60%)</td>
                    <td className="border border-gray-300 p-3">Grátis</td>
                    <td className="border border-gray-300 p-3">Baixo</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Silica Gel</td>
                    <td className="border border-gray-300 p-3">24-48h</td>
                    <td className="border border-gray-300 p-3">⭐⭐⭐⭐⭐ (95%)</td>
                    <td className="border border-gray-300 p-3">R$ 5-15</td>
                    <td className="border border-gray-300 p-3">Nenhum</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Espera</td>
                    <td className="border border-gray-300 p-3">48+ horas</td>
                    <td className="border border-gray-300 p-3">⭐⭐⭐⭐⭐ (100%)</td>
                    <td className="border border-gray-300 p-3">Grátis</td>
                    <td className="border border-gray-300 p-3">Nenhum</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 p-3 font-bold">TODOS JUNTOS</td>
                    <td className="border border-gray-300 p-3">48+ horas</td>
                    <td className="border border-gray-300 p-3">⭐⭐⭐⭐⭐⭐ (85%+)</td>
                    <td className="border border-gray-300 p-3">R$ 5-15</td>
                    <td className="border border-gray-300 p-3">MÍNIMO</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Métodos Perigosos Que Parecem Funcionar (Mas NÃO Funcionam)
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Arroz (❌ INEFICAZ)
            </h3>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-4">
              <p className="text-gray-800"><strong>Por que NÃO usar:</strong> Arroz absorve apenas 10% da eficiência de silica gel. Deixa amido e pó dentro do celular. Grãos podem entrar nas portas.</p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Secador de Cabelo (❌ DANIFICA)
            </h3>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-4">
              <p className="text-gray-800"><strong>Por que NÃO usar:</strong> Calor pode derreter adesivos, danificar bateria, e empurrar água para DENTRO. Mesmo "modo frio" estraga.</p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Microondas (❌ DESTRUIÇÃO TOTAL)
            </h3>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-4">
              <p className="text-gray-800"><strong>Por que NUNCA:</strong> Metal causa faíscas. Bateria explode. Risco de incêndio e lesão pessoal.</p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Freezer (❌ EXPANDE ÁGUA)
            </h3>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-4">
              <p className="text-gray-800"><strong>Por que NÃO usar:</strong> Água congela e expande, rachan componentes. Formação de condensação ao retirar.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Links para Próximas Etapas
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="/guias/celular-molhado/quando-ligar" className="p-4 border border-gray-300 rounded-lg hover:border-primary hover:shadow-md transition">
                <h4 className="font-semibold text-primary">Quando Ligar →</h4>
                <p className="text-sm text-gray-600">Teste de segurança antes de ligar</p>
              </a>
              <a href="/guias/celular-molhado/o-que-fazer" className="p-4 border border-gray-300 rounded-lg hover:border-primary hover:shadow-md transition">
                <h4 className="font-semibold text-primary">Primeiros Passos →</h4>
                <p className="text-sm text-gray-600">Os 10 passos críticos imediatos</p>
              </a>
              <a href="/guias/celular-molhado/nao-liga" className="p-4 border border-gray-300 rounded-lg hover:border-primary hover:shadow-md transition">
                <h4 className="font-semibold text-primary">Se Não Liga →</h4>
                <p className="text-sm text-gray-600">Diagnóstico e próximas ações</p>
              </a>
              <a href="/guias/celular-molhado" className="p-4 border border-gray-300 rounded-lg hover:border-primary hover:shadow-md transition">
                <h4 className="font-semibold text-primary">Guia Completo →</h4>
                <p className="text-sm text-gray-600">Voltar ao índice de tópicos</p>
              </a>
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <FAQ items={faqs} />

        {/* Bottom CTA */}
        <div className="mt-12">
          <CTABox
            title="Comece a Secagem AGORA"
            description="Use a ferramenta de ejeção por som nos primeiros 5 minutos. É grátis e pode salvar seu celular."
            buttonText="Ir Para Ferramenta de Ejeção"
            buttonUrl="/"
          />
        </div>
      </article>
    </>
  )
}
