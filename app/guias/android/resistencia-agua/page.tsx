import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Android Resistente à Água: Quais Modelos Têm IP68? 2026',
  description: 'Lista completa de Androids com certificação IP68: Samsung, Xiaomi, Motorola, OnePlus, Sony. Compare proteção contra água.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/android/resistencia-agua',
  },
  openGraph: {
    title: 'Android Resistente à Água: Quais Modelos Têm IP68? 2026',
    description: 'Lista completa de Androids com certificação IP68: Samsung, Xiaomi, Motorola, OnePlus, Sony. Compare proteção contra água.',
    url: 'https://www.ejetaragua.com/guias/android/resistencia-agua',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Android', url: '/guias/android' },
    { name: 'Resistência à Água' },
  ]

const faqs = [
    {
      "question": "O que significa IP67 vs IP68?",
      "answer": "IP67: protege até 1 metro por 30 minutos. IP68: protege até 2+ metros, geralmente até 1-2 horas. IP68 é superior. Ambos protegem contra respingos acidentais bem."
    },
    {
      "question": "IP rating garante à prova d'água?",
      "answer": "Não! IP não significa à prova. Significa apenas resistente. Não mergulhe intencionalmente. IP68 em água profunda ou tempo prolongado pode falhar. É para acidentes."
    },
    {
      "question": "Samsung Galaxy S24 é realmente IP68?",
      "answer": "Sim. Galaxy S24/S23/S22 são IP68 até 1.5m/30min. Excelente proteção. Ainda assim: evite exposição prolongada. Cada imersão reduz resistência levemente."
    },
    {
      "question": "Xiaomi Mi 13 Pro é IP68?",
      "answer": "Sim. Mi 13 Pro é IP68. Mi 13 padrão também é IP68 (raro em linha comum). Mi 12 Pro é IP68. Mi 12 é IP53. Sempre verifique modelo específico."
    },
    {
      "question": "Samsung Galaxy A tem proteção?",
      "answer": "Varia: A54 é IP67. A34 é IP67. A24/A14: sem IP. Linha A é mais vulnerável. Não confie que tem só porque é Galaxy."
    },
    {
      "question": "Xiaomi Redmi Note tem proteção?",
      "answer": "Maioria: NÃO tem. Alguns Redmi Note Pro têm IP53 (proteção leve). Assume sempre que não tem se não confirmado."
    },
    {
      "question": "OnePlus flagship é à prova d'água?",
      "answer": "OnePlus 12 Pro: IP69 (superior a IP68). OnePlus 12: IP68. OnePlus 11 Pro: IP68+IP69. Flagship OnePlus é excelente. Modelos básicos variam."
    },
    {
      "question": "Sony Xperia tem proteção boa?",
      "answer": "Sim. Sony Xperia 1 V: IP65+IP68. Excelente proteção. Sony Xperia 5 V: IP68. Sony é especialista em proteção - confiável."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Android Resistente à Água: Quais Modelos Têm IP68? 2026',
    description: 'Lista completa de Androids com certificação IP68: Samsung, Xiaomi, Motorola, OnePlus, Sony. Compare proteção contra água.',
    url: '/guias/android/resistencia-agua',
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
            Androids Resistentes à Água: Lista 2026
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            IP68: Samsung Galaxy S/Note/Flip/Fold, Xiaomi Pro/Ultra, Motorola Edge+, OnePlus Pro, Sony Xperia. IP67: alguns Moto G. Sem IP: maioria dos modelos baratos.
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
              O Que É Certificação IP? Entendendo IP67 e IP68
            </h2>
            <p className="text-gray-700 leading-relaxed">
              IP significa Ingress Protection. Dois números: primeiro (0-6) = proteção contra sólidos/pó. Segundo (0-9) = proteção contra água. No celular: foco no segundo. IP67 = protege até 1m de profundidade por 30 minutos. IP68 = protege até 2m+ de profundidade, geralmente até 1-2 horas (variamanufaturante). Maior número = melhor proteção. IP65 é intermediária (jatos de água). Sem IP = nenhuma proteção certificada.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              IP Não Significa À Prova D'água: Diferença Crítica
            </h2>
            <p className="text-gray-700 leading-relaxed">
              IP68 é "resistente à água", NÃO "à prova d'água". Diferença importante: resistente = sobrevive acidentes. À prova = funciona completamente submerso indefinidamente. Não mergulhe intencionalmente mesmo com IP68. Não use piscina/oceano (mesmo que publicidade sugira). IP é margem de segurança para ACIDENTES. Exceder profundidade/tempo = falha garantida.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Qual Android Tem Melhor Proteção? Ranking 2026
            </h2>
            <p className="text-gray-700 leading-relaxed">
              MELHOR (IP69/IP68 superior): OnePlus 12 Pro (IP69), Sony Xperia 1 V (IP68), Samsung Galaxy S24 (IP68 excelente). EXCELENTE (IP68 padrão): Samsung Galaxy S23/S22/S21, Samsung Galaxy Note, Xiaomi Mi 13 Pro/Ultra, OnePlus 11 Pro. BOM (IP67/IP68 básico): Samsung Galaxy A54/A34, Xiaomi Mi 13, Motorola Edge+. REGULAR (IP52-IP65): Motorola Edge, Xiaomi Redmi Note Pro. NENHUM: Xiaomi Poco, Xiaomi Redmi Note, Motorola Moto G comum, a maioria dos modelos de entrada.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proteção Diminui Com Tempo: Por Que Seu Android Fica Menos Resistente
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Mesmo IP68 envelheceu. Vedações se desgastam. Cada molhada reduz margem de segurança um pouco. Após 1-2 anos: proteção pode cair de IP68 para IP67 ou menos. Depois 3+ anos: pode ficar vulnerável (conectores oxidam, vedações ressecam). A queda é gradual, imperceptível. Isto é: não trate celular antigo com IP como novo - caiu proteção.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fatores Que Reduzem Resistência: Além Da Idade
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Quedas/impactos (danificam vedações). Reparos (técnico pode não vedar igual). Uso com case danificada (case protege mas se rasgada, expõe celular). Ar quente/frio extremo (contração/expansão danifica). Sal/cloro (corrói vedações). Temperatura extrema reduz vedação. Pressão extrema reduz resistência. Conclusão: IP não é garantia permanente - cuide mesmo com IP.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Samsung vs Xiaomi vs Motorola: Qual Melhor em Proteção?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Samsung: oferece IP68 na maioria dos flagships (S/Note). Qualidade das vedações é excelente. Consistência = melhor. Xiaomi: modelos Pro/Ultra têm IP68 excelente. Modelos comuns caem para IP53/sem IP. Inconsistência. Motorola: poucos com IP. Maioria depende de nano-coating (proteção mínima). Menos confiável. Vencedor: Samsung tem melhor cobertura geral de proteção. Xiaomi Pro é excelente também. Motorola fica atrás.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Verificar IP Rating Do Seu Android
            </h2>
            <p className="text-gray-700 leading-relaxed">
              1. Vá em Configurações > Sobre o telefone > Especificações completas (ou "Sobre"). 2. Procure "Water resistance" ou "IP rating" ou "Dust resistance". 3. Pode estar listado com profundidade/tempo. 4. Se não estiver, procure no Google: "[Seu modelo] IP rating especificações". 5. Ou acesse site do fabricante > suporte > especificações completas. 6. Verifique a data: se antigo (3+ anos), assuma que caiu de proteção.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Se Seu Android NÃO Tem IP: Estratégia de Proteção
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Compre capa à prova d'água (imprescindível). Use película de vidro com proteção de borda. Evite locais úmidos (banheiro, sauna). Afaste de bebidas. Na praia/piscina: guarde longe ou em saco plástico. Não coloque em bolso de shorts/calça perto de água. Condensação em banheiro quente = risco. Uma boa capa reduz risco 90%. Se tem IP: ainda use capa para maior segurança.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que Fazer Se Seu Android Com IP Molhou Mesmo Assim
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Não significa que IP é fake. IP tem limites: profundidade máxima, tempo máximo, temperatura da água. Se ultrapassou: falha esperada. Ou a selagem foi danificada (pequena trinca). Use ferramenta de ejeção por som, deixe secar 24-48h. Se tem IP, chance de recuperação é maior (80-85%). Se não tem IP e molhou: chance é menor (60-70%). Taxa de sucesso depende também de tipo de água (salgada é pior).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Carregamento Sem Fio (Qi) em Androids Com IP68
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Não todos com IP68 têm Qi. Samsung Galaxy S/Note: maioria tem Qi. Xiaomi Pro/Ultra: muitos têm Qi. Motorola Edge+: alguns têm. Sony Xperia: muitos têm. Verificar especificações. Qi é estratégia segura quando USB-C molhou: carregue sem fio enquanto seca. IP não protege carregamento = risco sempre. Se tem IP68 + Qi: máxima segurança quando molhado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Checklist: Seu Android Tem Proteção Real?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              ✓ Verificou especificações oficiais (não confiar em dizer vendedor)? ✓ Confirma IP rating (67, 68, etc)? ✓ Sabe profundidade máxima (1m, 2m+)? ✓ Sabe tempo máximo (30min, 2h)? ✓ Sabe temperatura da água (doce, salgada, cloro)? ✓ Modelovelho (3+ anos)? Se sim, assume que caiu proteção. ✓ Comprou capa à prova d'água mesmo tendo IP? ✓ Evita situações arriscadas (praia/piscina)? ✓ Se molhou, sabe que IP não é garantia? ✓ Sabe usar ferramenta de som se necessário? Cumprir: proteção máxima!
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
