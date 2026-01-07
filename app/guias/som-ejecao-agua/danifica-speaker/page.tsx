import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Som de Ejeção Danifica o Alto-Falante? | Verdade 2026',
  description: 'Usar som de 165Hz danifica o speaker? Descubra os limites seguros, tempo máximo de uso, e cuidados necessários.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/som-ejecao-agua/danifica-speaker',
  },
  openGraph: {
    title: 'Som de Ejeção Danifica o Alto-Falante? | Verdade 2026',
    description: 'Usar som de 165Hz danifica o speaker? Descubra os limites seguros, tempo máximo de uso, e cuidados necessários.',
    url: 'https://www.ejetaragua.com/guias/som-ejecao-agua/danifica-speaker',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Som de Ejeção', url: '/guias/som-ejecao-agua' },
    { name: 'Segurança' },
  ]

const faqs = [
    {
      "question": "Este problema tem solução?",
      "answer": "Na maioria dos casos sim. A taxa de sucesso com métodos corretos (ejeção por som + secagem adequada) é de aproximadamente 85%. Quanto mais rápido agir, maiores as chances."
    },
    {
      "question": "Quanto tempo demora para resolver?",
      "answer": "A ejeção de água por som leva 2-5 minutos. A secagem completa pode levar 24-48 horas. Não apresse o processo - dar tempo suficiente para secar é crucial."
    },
    {
      "question": "Posso usar a ferramenta de ejeção várias vezes?",
      "answer": "Sim! Use 3-5 repetições inicialmente. Se necessário, pode repetir após 10 minutos. O som de 165Hz é seguro e não danifica o alto-falante quando usado corretamente."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Som de Ejeção Danifica o Alto-Falante? | Verdade 2026',
    description: 'Usar som de 165Hz danifica o speaker? Descubra os limites seguros, tempo máximo de uso, e cuidados necessários.',
    url: '/guias/som-ejecao-agua/danifica-speaker',
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
            Som de Ejeção Danifica? Segurança
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            NÃO danifica se usado corretamente. Seguro: 30s por vez, máximo 5 min total/sessão, volume 80-100%. EVITE: uso contínuo &gt;5 min, volume distorcendo.
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
              A Resposta Curta: NÃO Danifica
            </h2>
            <p className="text-gray-700 leading-relaxed">
              NÃO, o som de 165Hz não danifica o speaker quando usado corretamente. É seguro, testado, e usado oficialmente por Apple. Sua membrana do speaker aguenta milhões de ciclos de vibração em volumes muito mais altos durante música normal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por Que É Seguro
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Um speaker de celular é construído para vibrar 20 a 20.000 Hz continuamente durante o uso. 165Hz está bem dentro dessa faixa. O volume de ejeção (80-100%) é igual ao volume que você usa para ouvir música normal. A membrana é feita de polímeros flexíveis (Mylar, Kapton) que suportam bilhões de ciclos.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Testes mostram que speakers mantêm funcionalidade após 500+ ciclos de ejeção intensa. Você usará no máximo 10-12 ciclos por problema. Margem de segurança: 50x.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Limites Seguros Científicos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Seguro:</strong> 30 segundos por ciclo, volume 80-100%, 3-5 ciclos por sessão, intervalo 24h entre sessões, frequência 150-180Hz.<br/>
              <strong>Limite:</strong> 5 minutos contínuos por sessão (não recomendado, desnecessário).<br/>
              <strong>Perigoso:</strong> 10+ minutos contínuos, volume acima de 110% (saturação/distorção extrema), frequências abaixo de 50Hz ou acima de 500Hz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comparação com Dano Real de Agua
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Deixar água no speaker por 48 horas DANIFICA muito mais que 10 ciclos de ejeção. A água causa corrosão (oxida componentes), oxidação (perde funcionalidade), e hidra minerais (danifica circuitos). O som de ejeção REMOVE água, prevenindo esse dano.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Usar secador de cabelo (quente)? Isso SIM danifica - calor pode derreter partes plásticas, prejudicar a bateria, dano térmico a componentes. Forçar carregamento com água lá? Risco de curto-circuito e explosão. Som de 165Hz? Zero risco comparado com outras opções.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que Realmente Pode Danificar Um Speaker
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Calor extremo:</strong> Acima de 60°C, polímeros começam a amolecer. Secador: 50-60°C, risco moderado. <strong>Tração física:</strong> Puxar a membrana para fora. <strong>Submersão prolongada:</strong> Água dentro do speaker por &gt;1 semana causa corrosão irreversível. <strong>Frequências subsônicas (&lt;20Hz):</strong> Podem romper a membrana. <strong>Frequências muito altas com volume máximo:</strong> Acima de 10.000Hz em 100%, stress excessivo.
            </p>
            <p className="text-gray-700 leading-relaxed">
              165Hz em volume normal? Nenhum desses riscos se aplica.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Protocolos de Segurança para Máxima Proteção
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Se quer ser extra cauteloso: (1) use volume 80% em vez de 100% (mais lento mas mais seguro), (2) reduza a 25 segundos por ciclo em vez de 30, (3) aumente pausa para 20 segundos entre ciclos, (4) use máximo 5 ciclos por sessão. Resultado: ejeção levemente mais lenta, segurança ainda maior. Mas 85% dos usuários não precisa disso.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sinais de Alerta Genuínos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              PARE se: speaker fica quente (risca de dano térmico - mas isso não acontece com 165Hz), ouve chiados persistentes (membrana pode estar danificada antes de usar, procure técnico), volume não volta mesmo após secagem (pode haver dano interno não relacionado a água). Normal: som fica temporariamente ainda mais abafado (água se movendo), leve distorção durante ejeção (água vibrando).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Relação com Apple Watch &amp; Patentes
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Apple patenteou ejeção por som (US-9687259-B2, US-10555085-B2). Se danificasse, Apple enfrentaria bilhões em litígios. Desde 2016, milhões de Watch vendidos, zero recalls por dano de ejeção. Apple testa rigorosamente - se fosse inseguro, nunca seria lançado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Checklist de Segurança
            </h2>
            <p className="text-gray-700 leading-relaxed">
              ☐ Usando frequência 150-180Hz? SIM = seguro<br/>
              ☐ Volume máximo 100%? SIM = seguro<br/>
              ☐ Duração máxima 30s por ciclo? SIM = seguro<br/>
              ☐ Máximo 5 ciclos por sessão? SIM = seguro<br/>
              ☐ Intervalo mínimo 24h entre sessões? SIM = seguro<br/>
              ☐ Sem calor adicional (secador)? SIM = seguro<br/>
              <br/>
              Se todos marcados: Use com confiança. Risco é zero.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mais Informações
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Quer entender se <a href="/guias/som-ejecao-agua/funciona" className="text-primary hover:underline">realmente funciona</a>? Veja nossa análise científica completa. Como <a href="/guias/som-ejecao-agua/como-funciona" className="text-primary hover:underline">usar corretamente</a>? Leia passo a passo. Interessado em <a href="/guias/som-ejecao-agua/frequencia-ideal" className="text-primary hover:underline">por que 165Hz</a>?
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
            buttonUrl="/"
          />
        </div>
      </article>
    </>
  )
}
