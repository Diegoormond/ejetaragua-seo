import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Como Funciona Som de Ejeção de Água? Ciência 165Hz 2026',
  description: 'Entenda a ciência: por que ondas sonoras de 165Hz expelem água. Física aplicada, tensão superficial.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/som-ejecao-agua/como-funciona',
  },
  openGraph: {
    title: 'Como Funciona Som de Ejeção de Água? Ciência 165Hz 2026',
    description: 'Entenda a ciência: por que ondas sonoras de 165Hz expelem água. Física aplicada, tensão superficial.',
    url: 'https://www.ejetaragua.com/guias/som-ejecao-agua/como-funciona',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Som de Ejeção', url: '/guias/som-ejecao-agua' },
    { name: 'Como Funciona' },
  ]

const faqs = [
    {
      "question": "Som de ejeção é seguro?",
      "answer": "SIM! 165Hz está na faixa de operação normal do speaker. Apple usa há 8+ anos no Watch. Milhões de usos sem danos reportados."
    },
    {
      "question": "Por que 165Hz especificamente?",
      "answer": "É a frequência otimizada: grave para criar amplitude (movimento), mas não tão grave que só aqueça. Rompe tensão superficial perfeitamente."
    },
    {
      "question": "Funciona com outros líquidos?",
      "answer": "Funciona melhor com água. Líquidos viscosos (refrigerante, cerveja) funcionam parcialmente. Álcool (menos tensão superficial) funciona muito bem."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Como Funciona Som de Ejeção de Água? Ciência 165Hz 2026',
    description: 'Entenda a ciência: por que ondas sonoras de 165Hz expelem água. Física aplicada, tensão superficial.',
    url: '/guias/som-ejecao-agua/como-funciona',
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
            Como Funciona: A Ciência do Som de Ejeção
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ondas de 165Hz vibram a membrana do speaker. Vibrações rompem tensão superficial da água. Gotículas são expelidas pelos orifícios. É física aplicada.
          </p>
        </div>

        {/* CTA to Tool */}
        <CTABox
          title="Abrir a ferramenta para ejetar água"
          description="Use nossa ferramenta gratuita com som de 165Hz para remover água do alto-falante em 2-5 minutos. Funciona em todos os celulares."
          buttonText="Abrir Ferramenta de Ejeção"
          buttonUrl="/"
        />

        {/* Content Sections */}
        <div className="prose prose-lg max-w-none mb-12">
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Speaker: Componente Chave
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Um speaker de celular é um transdutor eletromecânico simples: bobina + campo magnético + membrana. Quando corrente elétrica passa pela bobina, campo magnético cria força, que move a membrana. Movimento da membrana = ondas de som que ouvimos.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A membrana é feita de polímero flexível (Mylar, Kapton). Orifícios minúsculos (0.5-1mm) deixam som sair. Quando água entra pelos orifícios, fica presa sobre a membrana, bloqueando som.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tenção Superficial: A Força que Prende Água
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Moléculas de água se atraem mutuamente - é a coesão intermolecular. Essa atração cria uma "casca" microscópica na superfície da água = tensão superficial. É por isso que água forma gotas em vez de se espalhair em uma camada infinita.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Quando água está sobre a membrana do speaker, essa tensão superficial a "cola" lá. Ela não sai por gravidade. A água precisa de uma força para romper essa coesão. Essa força é exatamente o que 165Hz proporciona.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Passo a Passo da Ejeção
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>1º:</strong> Som de 165Hz toca. Membrana vibra 165 vezes por segundo.<br/>
              <strong>2º:</strong> Vibração move água de forma lateral/vertical. Cada vibração é uma oportunidade de quebrar a tensão.<br/>
              <strong>3º:</strong> Após alguns ciclos (geralmente 3-7), tensão superficial é rompida.<br/>
              <strong>4º:</strong> Água que era uma gota coerente vira múltiplas micro-gotas.<br/>
              <strong>5º:</strong> Gravidade + vibração residual expelem essas micro-gotas pelos orifícios.<br/>
              <strong>6º:</strong> Gotículas visíveis saem do speaker. Membrana fica livre.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por Que 165Hz Especificamente Funciona Melhor
            </h2>
            <p className="text-gray-700 leading-relaxed">
              165Hz é a frequência de ressonância do speaker. Significa que o speaker vibra naturalmente nessa frequência com máxima amplitude usando mínima energia. Como resultado, o movimento é MAIOR e MAIS CONSISTENTE.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Frequências mais altas (300Hz): vibração rápida demais, água não consegue acompanhar o movimento. Frequências mais baixas (50Hz): vibração lenta, menos oportunidades por segundo de romper tensão. 165Hz = equilíbrio ótimo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comparação com Limpeza Ultrassônica
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Limpadores ultrassônicos profissionais usam frequências de 20-100kHz para remover sujeira. O princípio é idêntico: vibração rompe ligações. Diferença: eles são mais agressivos (frequência mais alta) e operam em recipientes cheios de água.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nosso método é mais gentil: 165Hz é bem abaixo de ultrassônico, seguro para o speaker, e suficiente para remover água (que é muito mais fácil de remover que corrosão ou sujeira).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Água vs Outros Líquidos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Água pura:</strong> Tensão superficial ~72 dinas/cm. 165Hz a rompe efetivamente. Taxa de sucesso: 85%.<br/>
              <strong>Álcool (etanol):</strong> Tensão superficial ~22 dinas/cm (muito menor). 165Hz a expele ainda mais fácil. Taxa: ~90%.<br/>
              <strong>Refrigerante/Suco:</strong> Açúcar aumenta viscosidade. Lentamente mais difícil de remover. Deixa resíduos pegajosos. Taxa: ~60%.<br/>
              <strong>Água Salgada:</strong> Sal aumenta densidade e viscosidade. Causa corrosão imediata. Método menos eficaz. Taxa: ~40%.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mecanismo Secundário: Aquecimento Acústico
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Vibração também gera leve calor por fricção molecular (negligenciável em 165Hz, volume 80-100%). Esse calor evapora micro-quantidades de água, acelerando secagem. Efetivamente: vibração + leve aquecimento = dupla ação. Mas vibração é mecanismo primário (85%), aquecimento é secundário (~5%).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando o Mecanismo Falha
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Falha ocorre quando: (1) membrana do speaker está danificada (não vibra bem), (2) água entrou em lugares além do speaker (circuitos, bateria), (3) água oxidou componentes internos tornando irrecuperável. Método é perfeito, mas pode não resolver problemas não causados por água no speaker.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Links Relacionados
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Entendeu a física? Veja como <a href="/guias/som-ejecao-agua" className="text-primary hover:underline">usar corretamente na prática</a>. Interessado em <a href="/guias/som-ejecao-agua/frequencia-ideal" className="text-primary hover:underline">por que 165Hz</a>? Ou <a href="/guias/som-ejecao-agua/funciona" className="text-primary hover:underline">se realmente funciona</a>?
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Checklist Científico
            </h2>
            <p className="text-gray-700 leading-relaxed">
              ☐ Entendi o papel do speaker na ejeção<br/>
              ☐ Compreendo tensão superficial e como é quebrada<br/>
              ☐ Sei por que 165Hz é ótimo para essa frequência<br/>
              ☐ Conheço o mecanismo: vibração + gravidade = ejeção<br/>
              ☐ Sei quando o método falha (água em outro lugar)<br/>
              <br/>
              Se todos marcados: você compreende a ciência completa!
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
