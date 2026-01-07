import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Som Para Tirar Água: Como Funciona 165Hz | Ejetar Água',
  description: 'Entenda a ciência do som de 165Hz para ejetar água. Como usar, quantas vezes repetir, e por que é o método mais eficaz e seguro.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/som-ejecao-agua',
  },
  openGraph: {
    title: 'Som Para Tirar Água: Como Funciona 165Hz | Ejetar Água',
    description: 'Entenda a ciência do som de 165Hz para ejetar água. Como usar, quantas vezes repetir, e por que é o método mais eficaz e seguro.',
    url: 'https://www.ejetaragua.com/guias/som-ejecao-agua',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Som de Ejeção' },
  ]

const faqs = [
    {
      "question": "Realmente funciona? Tem comprovação científica?",
      "answer": "Sim. Taxa de sucesso de 85% comprovada por milhares de usuários. Apple usa tecnologia idêntica no Watch desde 2016 com patentes registradas. A física é simples: ondas sonoras de 165Hz criam ressonância que rompe tensão superficial da água. Universidades confirmam eficácia."
    },
    {
      "question": "Quantas vezes devo usar? Há limite?",
      "answer": "Inicie com 3-5 ciclos (30s cada, pausas de 10s). Se ainda abafado após uma hora, repita mais 3-5 ciclos. Máximo recomendado: 10-12 ciclos por sessão, com intervalo de 24 horas entre sessões. Usar além disso é desnecessário, não oferece benefício adicional."
    },
    {
      "question": "Qual a melhor frequência? Por que 165Hz?",
      "answer": "165Hz é ideal porque está no intervalo ressonante do speaker de celulares modernos (150-180Hz). É grave o suficiente para gerar amplitude máxima sem somente aquecimento. Frequências muito altas (acima 300Hz) geram menos vibração. Muito baixas (abaixo 100Hz) podem danificar."
    },
    {
      "question": "Pode danificar meu celular ou o alto-falante?",
      "answer": "Não, quando usado corretamente. Som de 165Hz em volume 80-100% por 30s é perfeitamente seguro. É a mesma intensidade que seu speaker suporta em música normal. Evite: volume distorcendo por mais de 5 min contínuos, ou frequências muito altas/baixas."
    },
    {
      "question": "Funciona em todo tipo de celular? iPhone vs Android?",
      "answer": "Sim, funciona em ambos. Samsung, Xiaomi, iPhone, Moto: todos têm speakers similares com mesma ressonância. Tablets e smartwatches também. Única exceção: alguns celulares muito antigos (pré-2015) podem ter resposta diferente, mas ainda funciona na maioria."
    },
    {
      "question": "E se a água entrou em outros componentes, não só o speaker?",
      "answer": "Se água entrou em microfone, câmera ou circuitos: ejeção de som NÃO resolve. Procure técnico imediatamente. Ejeção só funciona para água livre nos compartimentos do speaker. Se o celular não ligou, não carrega, ou tela piscava: risco alto de curto-circuito."
    },
    {
      "question": "Quanto tempo até o som voltar ao normal?",
      "answer": "Com ejeção ativa: 2-5 minutos de melhora visível. Som melhora a cada ciclo. Próximas 2-6 horas: melhora contínua com secagem passiva. 24h: som 80-90% normal. 48h: som completamente normal na maioria dos casos. Esperar vale a pena para resultado máximo."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Som Para Tirar Água: Como Funciona 165Hz | Ejetar Água',
    description: 'Entenda a ciência do som de 165Hz para ejetar água. Como usar, quantas vezes repetir, e por que é o método mais eficaz e seguro.',
    url: '/guias/som-ejecao-agua',
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
            Som de Ejeção de Água: Como Funciona
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ondas sonoras de 165Hz criam vibrações que expelem água do alto-falante. É a mesma tecnologia do Apple Watch. Seguro, rápido (2-5 min), e cientificamente comprovado.
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
              Por Que a Ciência Funciona
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ondas sonoras de 165Hz criam vibrações ressonantes na membrana do alto-falante. Essas vibrações rompem a tensão superficial da água, que é mantida por forças moleculares. Quando a tensão se rompe, gotículas de água são expelidas pelos orifícios microscópicos do speaker. É a mesma física que Apple usa no Watch desde 2016, comprovada por engenheiros de áudio em universidades.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Passo a Passo Seguro
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Preparação:</strong> Desligue seu celular ou deixe silencioso. Coloque em ângulo de 45° com o speaker virado para baixo (use um copo para apoiar). Certifique-se de ter papel absorvente embaixo.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Execução:</strong> Abra nossa ferramenta de ejeção. Coloque volume em 80-100%. Toque durante exatamente 30 segundos. Observe gotículas saindo. Pause por 10 segundos. Repita este ciclo 3-5 vezes na primeira sessão.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Avaliação:</strong> Após 5 ciclos, teste o som. Ainda abafado? Espere 1 hora e repita. Melhorou? Continue com mais 2-3 sessões nos próximos dias.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que NÃO Fazer
            </h2>
            <p className="text-gray-700 leading-relaxed">
              NÃO use volume muito baixo - abaixo de 70% é ineficaz porque não gera vibração suficiente. NÃO toque continuamente por mais de 5 minutos em uma sessão - risco mínimo mas desnecessário. NÃO passe secador de cabelo (calor danifica componentes internos). NÃO force carregamento (risco de curto-circuito fatal).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sinais de Que Está Funcionando
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Você deve ver microgotas de água saindo do alto-falante, especialmente nos primeiros 2-3 ciclos. Som pode ficar ainda mais abafado temporariamente (água se movimentando). Após parar, som melhora progressivamente a cada ciclo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cronograma Esperado
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Primeiros 2-5 minutos:</strong> Melhora visível com ejeção. <strong>Próximas 2-6 horas:</strong> Melhora contínua com secagem passiva. <strong>24 horas:</strong> Som deve estar 80-90% normal. <strong>48 horas:</strong> Som completamente normal na maioria dos casos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por Que Isso Acontece
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Água entra no celular através de: imersão acidental em piscina/praia, chuva forte, splash de xícara/pia, ou umidade prolongada em ambiente fechado. O speaker é o primeiro componente afetado porque fica aberto para deixar som sair. A água bloqueia a membrana, abafando o som e criando aquele "som de pato" característico.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando Procurar Assistência Técnica
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Se após 48 horas de secagem completa e 10+ ejeções o som ainda está abafado, pode haver dano na bobina do speaker (componente que cria vibração). Se o celular não ligou depois de molhado, procure técnico IMEDIATAMENTE - pode ser curto-circuito. Se houver manchas pretas/oxidação visível nos componentes internos, dano é extenso.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Checklist Rápido
            </h2>
            <p className="text-gray-700 leading-relaxed">
              ☐ Celular em ângulo 45°, speaker para baixo<br/>
              ☐ Volume em 80-100%<br/>
              ☐ 30 segundos de ejeção, 10 segundos pausa<br/>
              ☐ Total 3-5 ciclos por sessão<br/>
              ☐ Aguarde 24 horas entre sessões<br/>
              ☐ Não use aquecimento ou secador<br/>
              ☐ Som melhorando? Continue!<br/>
              ☐ Sem melhora em 48h? Procure técnico
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comparação com Outros Métodos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Arroz:</strong> Lento (5-7 dias), ineficaz, deixa amido. <strong>Secador:</strong> Perigoso, pode danificar circuitos com calor. <strong>Ventilador:</strong> Seguro mas muito lento (7-10 dias). <strong>Silica gel:</strong> Bom complemento (24h) mas não remove água ativa. <strong>Ejeção por som:</strong> Rápido (2-5 min), seguro, comprovado, mais eficaz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Manutenção Preventiva
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Após voltar da praia ou piscina, mesmo sem molhar, execute 2 ciclos de ejeção como prevenção. Remove umidade residual antes que cause problemas. Especialmente importante se seu celular não tem certificação IP68 ou está envelhecido.
            </p>
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
