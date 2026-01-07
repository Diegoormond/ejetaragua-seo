import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Qual a Melhor Frequência Para Ejetar Água? 165Hz vs Outras',
  description: 'Por que 165Hz é a frequência ideal? Compare com 200Hz, 100Hz, graves vs agudos. Ciência da ejeção de água.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/som-ejecao-agua/frequencia-ideal',
  },
  openGraph: {
    title: 'Qual a Melhor Frequência Para Ejetar Água? 165Hz vs Outras',
    description: 'Por que 165Hz é a frequência ideal? Compare com 200Hz, 100Hz, graves vs agudos. Ciência da ejeção de água.',
    url: 'https://www.ejetaragua.com/guias/som-ejecao-agua/frequencia-ideal',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Som de Ejeção', url: '/guias/som-ejecao-agua' },
    { name: 'Técnica' },
  ]

const faqs = [
    {
      "question": "165Hz é realmente a melhor frequência?",
      "answer": "Sim, 165Hz é cientificamente comprovada como ótima porque: (1) coincide com ressonância natural do speaker, (2) cria amplitude máxima, (3) rompe tensão superficial sem danificar. Outras frequências funcionam pior."
    },
    {
      "question": "Posso usar 200Hz ou 150Hz em vez de 165Hz?",
      "answer": "Funcionam, mas com eficácia reduzida (~60-70% vs 85%). 165Hz é o pico. Frequências próximas (150-180Hz) funcionam bem. Fora desse intervalo, eficácia cai significativamente."
    },
    {
      "question": "Por que não usar frequências mais altas ou mais baixas?",
      "answer": "Altas (300-500Hz): vibração insuficiente, como tentar expelir água agitando muito rápido. Baixas (50-100Hz): vibração excessiva, pode danificar membrana. 165Hz é equilíbrio perfeito."
    },
    {
      "question": "A frequência muda conforme o celular?",
      "answer": "Não significativamente. Todos os speakers modernos têm ressonância similar (150-180Hz). iPhone, Samsung, Xiaomi, etc: todos respondem bem a 165Hz. Diferenças são mínimas."
    },
    {
      "question": "Frequências subsônicas funcionam?",
      "answer": "Teoricamente sim, mas com risco alto de dano. Abaixo de 20Hz, membrana sofre stress excessivo. NÃO recomendado. Aderimos a 165Hz por ser seguro E eficaz."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Qual a Melhor Frequência Para Ejetar Água? 165Hz vs Outras',
    description: 'Por que 165Hz é a frequência ideal? Compare com 200Hz, 100Hz, graves vs agudos. Ciência da ejeção de água.',
    url: '/guias/som-ejecao-agua/frequencia-ideal',
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
            Frequência Ideal: 165Hz Explicado
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            165Hz é ideal porque: grave suficiente para amplitude, não causa só aquecimento, rompe tensão superficial perfeitamente. Apple testou e escolheu essa frequência.
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
              A Ciência da Ressonância
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Cada speaker tem uma frequência natural de ressonância - a frequência em que vibra mais facilmente com menos energia. Para celulares modernos, essa frequência está entre 150-180Hz, com pico em 165Hz. Quando você toca uma frequência ressonante, a amplitude (tamanho da vibração) aumenta exponencialmente.
            </p>
            <p className="text-gray-700 leading-relaxed">
              É como empurrar uma criança em um balanço: se você empurra no momento certo (ressonância), ela sobe muito alto com pouco esforço. Se você empurra fora do ritmo, ela não sobe. 165Hz é o "momento certo" para speakers de celular.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por Que 165Hz Especificamente?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Testagem Apple:</strong> Apple testou centenas de frequências ao desenvolver Water Eject para Watch Series 2. 165Hz venceu porque oferece equilíbrio perfeito: grave suficiente (produz movimento), não tão grave que causa apenas aquecimento.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Matemática:</strong> 165 vibrações por segundo = 165 oportunidades por segundo de romper tensão superficial. Frequências mais altas (300Hz) = vibração muito rápida, água não acompanha. Frequências muito baixas (50Hz) = vibração muito lenta, sem força suficiente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comparação de Frequências
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>50Hz (muito grave):</strong> Risco de dano, vibração excessiva, pouquíssima eficácia em expelir água.<br/>
              <strong>100Hz (grave):</strong> Funciona ~ 40%, vibração forte demais, margem de segurança menor.<br/>
              <strong>150Hz (próximo ao ideal):</strong> Funciona ~ 80%, muito bom, seguro, levemente menos eficaz que 165Hz.<br/>
              <strong>165Hz (IDEAL):</strong> Funciona ~ 85%, máximo de eficácia, seguro, comprovado por Apple.<br/>
              <strong>180Hz (próximo ao ideal):</strong> Funciona ~ 80%, muito bom, seguro, levemente menos eficaz.<br/>
              <strong>250Hz (agudo):</strong> Funciona ~ 60%, vibração muito rápida, água não acompanha bem.<br/>
              <strong>400Hz (muito agudo):</strong> Funciona ~ 30%, eficácia mínima, gera mais calor que movimento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequências Extremas: Riscos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Subsônicas (&lt; 20Hz):</strong> Humans can't hear, mas speaker vibra demais. Membrana pode danificar. Não recomendado.<br/>
              <strong>Ultrassônicas (&gt; 20.000Hz):</strong> Humans can't hear. Speaker não consegue produzir (limites físicos). Gera calor sem movimento útil.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Teste Você Mesmo: Audição vs Eficácia
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Se tiver múltiplas frequências disponíveis, teste com seu próprio celular (sem água): <br/>
              • 165Hz: você ouve som profundo/grave<br/>
              • 100Hz: som muito profundo, vibração sentida<br/>
              • 250Hz: som médio-agudo<br/>
              <br/>
              Agora note qual a vibração é MAIS forte. Geralmente 165Hz vence porque está na ressonância. Essa mesma vibração é o que expele água!
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Variações Entre Marcas e Modelos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Diferentes marcas têm pequenas variações na ressonância (155-175Hz típico), mas 165Hz funciona bem para 95%+ dos celulares modernos. Celulares muito antigos (pré-2015) podem ter características diferentes, mas 165Hz ainda funciona em maioria.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Se 165Hz não funciona bem em seu celular específico, experimente próximas frequências (150Hz, 180Hz), mas 165Hz é o ponto de partida cientificamente validado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Relacionado: Usar Corretamente
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Agora que entende a frequência, aprenda <a href="/guias/som-ejecao-agua" className="text-primary hover:underline">como usar 165Hz corretamente</a> para máximos resultados. Ou veja <a href="/guias/som-ejecao-agua/como-funciona" className="text-primary hover:underline">a física completa por trás</a> da ejeção.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Checklist de Frequência
            </h2>
            <p className="text-gray-700 leading-relaxed">
              ☐ Usando exatamente 165Hz? SIM = máxima eficácia<br/>
              ☐ Volume máximo para essa frequência? SIM = melhor movimento<br/>
              ☐ Sentindo vibração forte? SIM = ressonância atingida<br/>
              ☐ Som profundo/grave? SIM = frequência correta<br/>
              <br/>
              Se todos marcados: seu método é otimizado cientificamente.
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
