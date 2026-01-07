import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'iPhone IP68: O Que Significa e Até Onde Protege | 2026',
  description: 'IP68 no iPhone: profundidade, tempo, e limitações. Descubra se pode molhar, nadar, mergulhar. Garantia cobre dano por água?',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/iphone/ip68-explicado',
  },
  openGraph: {
    title: 'iPhone IP68: O Que Significa e Até Onde Protege | 2026',
    description: 'IP68 no iPhone: profundidade, tempo, e limitações. Descubra se pode molhar, nadar, mergulhar. Garantia cobre dano por água?',
    url: 'https://www.ejetaragua.com/guias/iphone/ip68-explicado',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'iPhone', url: '/guias/iphone' },
    { name: 'iPhone' },
  ]

const faqs = [
    {
      "question": "IP68 significa à prova d'água?",
      "answer": "NÃO. IP68 significa RESISTENTE à água em condições específicas, não à prova d'água. Testes da Apple usam água doce, limpa, temperatura ambiente, por tempo limitado. Diferente de usos reais (piscina, mar, esportes aquáticos)."
    },
    {
      "question": "Qual é a maior profundidade que iPhone suporta?",
      "answer": "iPhone 15 Pro/Pro Max: 6m. iPhone 12-14: 6m. iPhone 11 Pro: 4m. Mas esses dados são de LABORATÓRIO, não recomendação de uso. Apple não recomenda submersão intencional em nenhum modelo."
    },
    {
      "question": "Posso nadar com meu iPhone IP68?",
      "answer": "Apple NÃO recomenda natação. Embora tecnicamente resista, a garantia não cobre danos. Pressão ao nadar pode forçar entrada de água. Cloro de piscina e sal do mar corroem componentes. Use capa impermeável se precisar."
    },
    {
      "question": "A resistência IP68 diminui com o tempo?",
      "answer": "SIM. Vedações de borracha se degradam com: uso diário, quedas, temperaturas extremas, produtos químicos (perfume, loção). Um iPhone com 2-3 anos tem proteção significativamente menor que novo."
    },
    {
      "question": "Se molhar com IP68, preciso fazer algo?",
      "answer": "SIM! Mesmo com IP68. Use ferramenta de ejeção de água imediatamente, seque exterior, deixe secar 24-48h antes de carregar. Quanto mais rápido agir, menor chance de dano permanente."
    },
    {
      "question": "Água salgada (praia) é diferente?",
      "answer": "SIM, muito diferente. Sal corrói componentes internos rapidamente. Se molhar com água salgada, enxague com água doce imediatamente, use ejeção de água, e procure assistência técnica dentro de 24h."
    },
    {
      "question": "Cloro de piscina danifica iPhone IP68?",
      "answer": "SIM. Cloro é químico corrosivo que não faz parte dos testes IP68. Se expor à piscina, enxague com água doce, seque e use ferramenta de ejeção. Evite exposição ao cloro mesmo com IP68."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'iPhone IP68: O Que Significa e Até Onde Protege | 2026',
    description: 'IP68 no iPhone: profundidade, tempo, e limitações. Descubra se pode molhar, nadar, mergulhar. Garantia cobre dano por água?',
    url: '/guias/iphone/ip68-explicado',
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
            iPhone IP68: Proteção Explicada
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            IP68 protege iPhone contra respingos e submersão breve (até 6m por 30 min em ÁGUA DOCE). MAS garantia NÃO cobre dano por água. Evite exposição intencional.
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
              O Que Significa IP68 Realmente
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              IP68 é classificação técnica de proteção contra água e poeira:
            </p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li><strong>6:</strong> Proteção total contra poeira - nenhuma poeira pode entrar</li>
              <li><strong>8:</strong> Resistência a submersão em água doce, profundidade e tempo variam por modelo</li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
              <p className="text-yellow-900 mb-2"><strong>Muito importante:</strong> Os números especificam LIMITES MÁXIMOS em condições controladas de laboratório, NÃO recomendações de uso no dia a dia.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como a Apple Testa IP68
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Testes da Apple usam condições muito específicas:
            </p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>✓ Água DOCE (não salgada, sem cloro)</li>
              <li>✓ Temperatura ambiente (~20-25°C)</li>
              <li>✓ Submersão estática (não em movimento)</li>
              <li>✓ Tempo máximo especificado (geralmente 30 minutos)</li>
              <li>✓ Profundidade máxima especificada</li>
              <li>✗ NÃO testa água salgada</li>
              <li>✗ NÃO testa água com cloro</li>
              <li>✗ NÃO testa submersão com pressão/movimento</li>
              <li>✗ NÃO testa líquidos quentes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              IP68 Por Modelo: Tabela Rápida
            </h2>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li><strong>iPhone 15 Pro/Pro Max:</strong> 6 metros por 30 min (2023)</li>
              <li><strong>iPhone 12-14:</strong> 6 metros por 30 min</li>
              <li><strong>iPhone 11 Pro:</strong> 4 metros por 30 min</li>
              <li><strong>iPhone 11 / XR:</strong> 2 metros por 30 min (XR é IP67 até 1m)</li>
              <li><strong>iPhone XS/XS Max:</strong> 2 metros por 30 min</li>
              <li><strong>iPhone 7/8/X:</strong> 1 metro por 30 min (IP67)</li>
              <li><strong>iPhone 6s e anteriores:</strong> SEM proteção</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por Que Não é "À Prova d'Água"
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6">
              <p className="text-red-900 mb-3"><strong>iPhone é resistente, não à prova d'água. Diferenças críticas:</strong></p>
              <ul className="text-red-900 space-y-2 mb-0">
                <li>• Vedações degradam com tempo - iPhone com 2 anos tem MENOS proteção</li>
                <li>• Quedas danificam vedações - um impacto pode comprometer todo o IP68</li>
                <li>• Pressão ao nadar/submergir força água para dentro mesmo com IP68</li>
                <li>• Químicos (perfume, protetor solar) corroem vedações gradualmente</li>
                <li>• Garantia Apple NÃO cobre dano por líquido - IP68 não significa "coberto"</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando IP68 NÃO Protege
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Água Salgada (Mar/Praia)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sal é extremamente corrosivo e NÃO faz parte dos testes IP68. Corrosão começa em horas. Se molhar com água salgada, enxague IMEDIATAMENTE com água doce e procure técnico dentro de 24h.</p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Cloro de Piscina
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cloro é produto químico que corrói componentes metálicos. NÃO está incluído nos testes de IP68. Cuidado: cloro gasoso pode entrar mesmo sem submersão total.</p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Pressão de Água/Movimento
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Testes IP68 usam água ESTÁTICA. Nadar, mergulhar, ou jatos de água criam pressão que força entrada de água mesmo com IP68. Especificação não cobre movimento.</p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Temperaturas Extremas
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Testes usam temperatura ambiente. Água quente (sauna, banheira quente) dilata vedações. Água fria extrema contrai componentes. Evite ambos cenários.</p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Líquidos Diferentes de Água Doce
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Leite, café, suco, álcool, perfume - todos corroem componentes diferentemente que água doce. Mesmo com IP68, esses líquidos apresentam risco real.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como a Resistência Diminui Com o Tempo
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Desgaste Natural das Vedações
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Borrachas de vedação sofrem com: umidade, temperaturas variáveis, uso diário, e exposição a produtos químicos (sabão, detergente). A cada mês, proteção diminui.</p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Quedas e Impactos
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Uma queda pode criar fissuras microscópicas nas vedações. Você não vê dano externo, mas o iPhone perdeu IP68. Cada queda aumenta risco de vazamento.</p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Reparos Não-Originais
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Trocar tela ou bateria em assistência não-Apple raramente restaura vedações originais. iPhone pode funcionar, mas IP68 foi comprometido. Sempre use Apple Store para manutenção.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que Fazer Se Molhar (Mesmo Com IP68)
            </h2>
            <ol className="text-gray-700 space-y-3 mb-4">
              <li><strong>1. Seque IMEDIATAMENTE:</strong> Toalha macia em tudo - tela, speakers, portas</li>
              <li><strong>2. Ejete a água:</strong> Use nossa <a href="https://www.ejetaragua.com/?utm_source=guias&utm_medium=seo&utm_campaign=cta" className="text-primary font-semibold">ferramenta de ejeção 165Hz</a> (3-5 ciclos)</li>
              <li><strong>3. NÃO carregue por 24h:</strong> Mesmo que apareça aviso "Líquido detectado"</li>
              <li><strong>4. Deixe secar 48h:</strong> Local ventilado, temperatura ambiente, speaker para baixo</li>
              <li><strong>5. Se água salgada:</strong> Enxague com água doce e procure técnico dentro de 24h</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garantia Apple e IP68
            </h2>
            <div className="bg-blue-50 border-l-4 border-primary p-6 my-6">
              <p className="text-gray-900 mb-2"><strong>Fato importante:</strong> IP68 NÃO significa que dano por água é coberto pela garantia.</p>
              <p className="text-gray-700 mb-0">Garantia padrão Apple não cobre dano por líquidos. Apple Care+ com cobertura de danos acidentais cobre água mediante franquia (R$ 400-800). Leia o <a href="/guias/iphone/garantia-agua" className="text-primary font-semibold">guia completo de garantia</a> para detalhes.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recomendação Final: Não Confie Apenas em IP68
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              IP68 é proteção adicional, não garantia. Para máxima segurança:
            </p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>✓ Use capa/película protetora em ambientes úmidos</li>
              <li>✓ Evite nadar com iPhone mesmo com IP68</li>
              <li>✓ Use bolsa impermeável em praia/piscina</li>
              <li>✓ Se molhar, ejete água IMEDIATAMENTE</li>
              <li>✓ Considere Apple Care+ se frequenta água</li>
              <li>✓ Lembre-se: proteção diminui com tempo</li>
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
