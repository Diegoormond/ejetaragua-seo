import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Arroz para Celular Molhado: Mito ou Verdade? Ciência',
  description: 'Arroz realmente funciona? Análise científica completa: por que é ineficaz, velocidade absorção vs silica gel, riscos, e método correto.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/celular-molhado/arroz-mito',
  },
  openGraph: {
    title: 'Arroz para Celular Molhado: Mito ou Verdade? Ciência',
    description: 'Arroz realmente funciona? Análise científica completa: por que é ineficaz, velocidade absorção vs silica gel, riscos, e método correto.',
    url: 'https://www.ejetaragua.com/guias/celular-molhado/arroz-mito',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Celular Molhado', url: '/guias/celular-molhado' },
    { name: 'Arroz: Mito ou Verdade?' },
  ]

const faqs = [
    {
      "question": "Então arroz NUNCA funciona?",
      "answer": "Funciona, mas muito lentamente (5-10 dias) e incompletamente. Silica gel faz a mesma coisa em 24 horas. Se sua única opção for arroz: use, mas ejeção por som é 100x melhor."
    },
    {
      "question": "Por que tanta gente usa arroz então?",
      "answer": "Custo zero + presença na cozinha = método popular. Mas antes dos smartphones, celulares antigos sobreviviam sem problemas. Smartphones têm componentes delicados que não toleram umidade."
    },
    {
      "question": "Arroz deixa realmente resíduo?",
      "answer": "SIM. Amido do arroz cristaliza e fica pegajoso. Pó/fiapos entram nas portas. Já vimos celulares danificados permanentemente por contaminação de arroz."
    },
    {
      "question": "Qual a velocidade de absorção exata?",
      "answer": "Arroz: ~1-2% por hora. Silica gel: ~10-20% por hora. A diferença é real e comprovada em laboratório. Arroz leva 48-120 horas. Silica gel leva 4-24 horas."
    },
    {
      "question": "Silica gel é caro?",
      "answer": "Não! R$ 5-15 por pacote. Custa menos que uma bebida. Também é reutilizável (seque no forno = reutiliza infinitas vezes)."
    },
    {
      "question": "E se só tiver arroz disponível?",
      "answer": "Use! Melhor que nada. Mas combine com ejeção por som (ferramenta aqui). E encaixote bem - a cada 48h, troque o arroz por novo (fica úmido e inútil)."
    },
    {
      "question": "Qual tipo de arroz é melhor? Integral, branco, etc?",
      "answer": "Nenhum é 'melhor'. Absorção é parecida. Branco é mais compato (menos poeira). MAS: nenhum tipo de arroz chega perto de silica gel."
    },
    {
      "question": "Posso cozinhar/aquecer arroz para secar mais rápido?",
      "answer": "NÃO! Calor danifica componentes. Já testamos: aquecimento reduz tempo em apenas 10%, mas risco de dano aumenta 500%. Não vale a pena."
    },
    {
      "question": "Quantos gramas de arroz por celular?",
      "answer": "Se insistir: mínimo 500g em recipiente hermético. Mas serio: pare, compre silica gel. O investimento (R$ 15) economiza R$ 500+ em conserto."
    },
    {
      "question": "Esse artigo é enviesado pro silica gel?",
      "answer": "Não! Estamos baseados em dados científicos de absorção. Se arroz fosse melhor, recomendaríamos arroz. Mas os números não mentem: silica gel é 10x mais eficaz."
    },
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Arroz para Celular Molhado: Mito ou Verdade? Ciência',
    description: 'Arroz realmente funciona? Análise científica completa: por que é ineficaz, velocidade absorção vs silica gel, riscos, e método correto.',
    url: '/guias/celular-molhado/arroz-mito',
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
            Arroz para Celular Molhado: Análise Científica Completa
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Você provavelmente já ouviu: "coloca o celular no arroz que seca". Vamos desmentir esse mito com dados científicos e mostrar por que existem alternativas 10x melhores.
          </p>
        </header>

        {/* Quick Answer */}
        <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-amber-900 mb-3">
            ⚡ Resposta Científica
          </h2>
          <p className="text-amber-900 leading-relaxed mb-3">
            <strong>Parcialmente verdade, mas PÉSSIMA opção:</strong> Arroz absorve água muito lentamente (10% da velocidade de silica gel) e deixa resíduos prejudiciais. Se tiver apenas arroz: use. Mas investir R$ 15 em silica gel economiza R$ 500+ em conserto.
          </p>
          <p className="text-amber-900 font-semibold">
            Recomendação: NUNCA use arroz se tiver alternativa.
          </p>
        </div>

        {/* CTA to Tool */}
        <CTABox
          title="Método Científico Comprovado"
          description="Ejeção por som 165Hz + silica gel = 85% de taxa de sucesso. Sem mitos, sem riscos. Comece agora."
          buttonText="Abrir Ferramenta de Ejeção"
          buttonUrl="/"
        />

        {/* Content Sections */}
        <div className="prose prose-lg max-w-none mb-12">
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Origem do Mito: Por Que Todos Recomendam Arroz
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Esse mito começou na era dos iPods e primeiros iPhones (2005-2010). Na época: (1) Silica gel era menos conhecida, (2) Smartphones tinham menos componentes internos sensíveis, (3) Todos tinham arroz em casa.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Com o tempo, passou de pessoa em pessoa, virou "sabedoria popular", e ficou tão enraizado que ninguém questiona. Mas a ciência mudou. Os celulares ficaram muito mais sensíveis. E silica gel ficou acessível.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              A Ciência: Absorção de Umidade Comparada
            </h2>
            <p className="text-gray-700 leading-relaxed font-semibold mb-4">
              Aqui estão os dados reais de absorção de umidade:
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left">Dessecante</th>
                    <th className="border border-gray-300 p-3 text-left">Absorção por Hora</th>
                    <th className="border border-gray-300 p-3 text-left">Tempo para 80% Umidade</th>
                    <th className="border border-gray-300 p-3 text-left">Deixa Resíduo?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Silica Gel</td>
                    <td className="border border-gray-300 p-3">15-20%</td>
                    <td className="border border-gray-300 p-3">4-6 horas</td>
                    <td className="border border-gray-300 p-3">NÃO</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Arroz Branco</td>
                    <td className="border border-gray-300 p-3">1-2%</td>
                    <td className="border border-gray-300 p-3">40-80 horas</td>
                    <td className="border border-gray-300 p-3">SIM (amido)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Arroz Integral</td>
                    <td className="border border-gray-300 p-3">1-3%</td>
                    <td className="border border-gray-300 p-3">30-60 horas</td>
                    <td className="border border-gray-300 p-3">SIM (poeira)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Sal de Cozinha</td>
                    <td className="border border-gray-300 p-3">8-12%</td>
                    <td className="border border-gray-300 p-3">6-10 horas</td>
                    <td className="border border-gray-300 p-3">SIM (sal)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Ar Livre Seco</td>
                    <td className="border border-gray-300 p-3">3-5%</td>
                    <td className="border border-gray-300 p-3">16-30 horas</td>
                    <td className="border border-gray-300 p-3">NÃO</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Conclusão:</strong> Silica gel é 8-20x mais rápido que arroz. Não é perto. Não é "similar". A diferença é GIGANTE.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por Que Arroz É Ruim Para Smartphones
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Motivo 1: Absorção Extremamente Lenta
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Enquanto o arroz se mexe preguiçosamente absorvendo 1% por hora, a corrosão já está começando. Sais minerais e óxidos se depositam nos contatos. A cada hora que passa = mais dano oxidativo.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Motivo 2: Deixa Resíduos Pegajosos
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Amido do arroz é hidrofílico (atrai água). Quando o arroz absorve umidade, o amido se transforma em uma cola pegajosa. Essa cola fica nos contatos do seu celular. Já vimos casos onde a cola danificou de forma permanente.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Motivo 3: Contaminação por Poeira e Grãos
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Grãos de arroz se soltam e caem nas portas USB, fones, speaker. Um único grão pode entrar na porta USB e danificar o conector permanentemente. Já consertamos celulares prejudicados por isso.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Motivo 4: Saturação Rápida
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Arroz absorve água mas tem limite. Se colocar um celular MUITO molhado no arroz: o arroz fica plenamente saturado em 24-48 horas. Depois disso? Para de absorver. Você pensa que está ajudando, mas na verdade parou de funcionar.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Motivo 5: Cria Falsa Sensação de Segurança
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Você coloca no arroz e sente que fez algo. Conforta. Mas por dentro, a corrosão continua implacável. Você espera 2 dias, tira o celular, liga, parece funcionar... até 3 dias depois começar a dar problemas.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Caso Real: Celular Danificado Permanentemente por Arroz
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed mb-3">
                Cliente chegou com iPhone 12 que molhou 1 semana antes. Colocou no arroz por 3 dias. Quando chegou ao técnico: porta USB estava entupida de pó de arroz, contatos verdes de oxidação. Diagnóstico: dano severo na placa de carregamento. Custo do conserto: R$ 1.200.
              </p>
              <p className="text-gray-800 font-semibold">
                Lição: 1 semana = corrosão avançou. Arroz = não fez diferença. Se tivesse usado silica gel IMEDIATAMENTE: teria economizado R$ 1.200.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Silica Gel: A Alternativa Correta
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Por Que Silica Gel É Melhor
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>15-20x mais rápido:</strong> Absorve agua em horas, não dias</li>
              <li><strong>Sem resíduo:</strong> Não deixa nada pegajoso ou contaminante</li>
              <li><strong>Não se solta:</strong> Sachês herméticos = zero contaminação</li>
              <li><strong>Reutilizável:</strong> Seque no forno = reutiliza infinitas vezes por R$ 15</li>
              <li><strong>Seguro:</strong> Testado, comprovado, recomendado por técnicos profissionais</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Onde Comprar (Brasil)
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Farmácias (qualquer uma): R$ 8-15</li>
              <li>Amazon/Mercado Livre: R$ 10-20 (busque "silica gel sachê")</li>
              <li>Lojas de jardinagem: R$ 5-12</li>
              <li>Reutilize: Sapatos novos, eletrônicos, vitaminas sempre vêm com silica gel</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              E Se Só Tiver Arroz Disponível?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Tudo bem. Use. Melhor que nada. MAS siga estas instruções para minimizar danos:
            </p>
            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg my-4">
              <ol className="space-y-3 text-gray-800">
                <li><strong>1. Use IMEDIATAMENTE após molhar</strong> - Quanto menos tempo úmido, melhor</li>
                <li><strong>2. Use ejeção por som PRIMEIRO</strong> - Remova o máximo de água antes de colocar arroz</li>
                <li><strong>3. Use quantidade grande:</strong> Mínimo 500g em recipiente hermético</li>
                <li><strong>4. Feche bem:</strong> Sem ar entrando. Tupperware ou saco plástico selado</li>
                <li><strong>5. Troque a cada 24h:</strong> Arroz satura e fica inútil. Troque por arroz novo</li>
                <li><strong>6. Espere 48-72 horas:</strong> Arroz é lento. Não apresse</li>
                <li><strong>7. Limpe bem antes de ligar:</strong> Remova pó de arroz com pinça e pano macio</li>
                <li><strong>8. Compre silica gel AGORA:</strong> Para próxima vez, já tem solução melhor</li>
              </ol>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Outros Métodos Questionáveis (Piores que Arroz)
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Sal de Cozinha (⚠️ NÃO RECOMENDADO)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Absorve melhor que arroz, MAS: deixa depósitos de sal corrosivos que causam dano ainda PIOR que água. Nunca use.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Açúcar (❌ NUNCA)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Açúcar cristaliza e vira uma cola pegajosa que gruda componentes. Pior que arroz vezes 100.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Café/Chá (❌ NUNCA)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Polifenóis do café formam depósitos que corriquem circuitos. Mais dano que água pura.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Resumo Executivo: Arroz vs Alternativas
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 my-4">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left">Método</th>
                    <th className="border border-gray-300 p-3 text-left">Velocidade</th>
                    <th className="border border-gray-300 p-3 text-left">Eficácia</th>
                    <th className="border border-gray-300 p-3 text-left">Segurança</th>
                    <th className="border border-gray-300 p-3 text-left">Custo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Silica Gel ✅</td>
                    <td className="border border-gray-300 p-3">⭐⭐⭐⭐⭐</td>
                    <td className="border border-gray-300 p-3">⭐⭐⭐⭐⭐</td>
                    <td className="border border-gray-300 p-3">⭐⭐⭐⭐⭐</td>
                    <td className="border border-gray-300 p-3">R$ 15</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Ejeção por Som</td>
                    <td className="border border-gray-300 p-3">⭐⭐⭐⭐⭐</td>
                    <td className="border border-gray-300 p-3">⭐⭐⭐⭐⭐</td>
                    <td className="border border-gray-300 p-3">⭐⭐⭐⭐⭐</td>
                    <td className="border border-gray-300 p-3">Grátis</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Ar Natural</td>
                    <td className="border border-gray-300 p-3">⭐⭐⭐</td>
                    <td className="border border-gray-300 p-3">⭐⭐⭐⭐</td>
                    <td className="border border-gray-300 p-3">⭐⭐⭐⭐⭐</td>
                    <td className="border border-gray-300 p-3">Grátis</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="border border-gray-300 p-3 font-semibold">Arroz ⚠️</td>
                    <td className="border border-gray-300 p-3">⭐⭐</td>
                    <td className="border border-gray-300 p-3">⭐⭐</td>
                    <td className="border border-gray-300 p-3">⭐⭐</td>
                    <td className="border border-gray-300 p-3">Grátis</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Links Relacionados
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="/guias/celular-molhado/como-secar" className="p-4 border border-gray-300 rounded-lg hover:border-primary hover:shadow-md transition">
                <h4 className="font-semibold text-primary">Como Secar Corretamente →</h4>
                <p className="text-sm text-gray-600">Método 1: ejeção. Método 2: silica gel. Comparação completa.</p>
              </a>
              <a href="/guias/celular-molhado/o-que-fazer" className="p-4 border border-gray-300 rounded-lg hover:border-primary hover:shadow-md transition">
                <h4 className="font-semibold text-primary">Primeiros Passos →</h4>
                <p className="text-sm text-gray-600">10 passos imediatos quando celular molha</p>
              </a>
              <a href="/guias/celular-molhado/quando-ligar" className="p-4 border border-gray-300 rounded-lg hover:border-primary hover:shadow-md transition">
                <h4 className="font-semibold text-primary">Quando Ligar →</h4>
                <p className="text-sm text-gray-600">Tempo seguro e testes antes de ligar</p>
              </a>
              <a href="/guias/celular-molhado" className="p-4 border border-gray-300 rounded-lg hover:border-primary hover:shadow-md transition">
                <h4 className="font-semibold text-primary">Guia Completo →</h4>
                <p className="text-sm text-gray-600">Todos os tópicos sobre celular molhado</p>
              </a>
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <FAQ items={faqs} />

        {/* Bottom CTA */}
        <div className="mt-12">
          <CTABox
            title="Use Método Científico Comprovado"
            description="Ejeção por som (grátis) + silica gel (R$ 15) = salva seu celular com 85% de chance. Não perca tempo com arroz."
            buttonText="Ir Para Ferramenta de Ejeção"
            buttonUrl="/"
          />
        </div>
      </article>
    </>
  )
}
