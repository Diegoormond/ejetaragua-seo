import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Motorola Molhado: Moto G/Edge - Guia de Recuperação 2026',
  description: 'Motorola molhado? Moto G, Edge, Edge+: certificação IP, ejeção de água, e o que fazer. Nano-coating vs IP68.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/android/motorola',
  },
  openGraph: {
    title: 'Motorola Molhado: Moto G/Edge - Guia de Recuperação 2026',
    description: 'Motorola molhado? Moto G, Edge, Edge+: certificação IP, ejeção de água, e o que fazer. Nano-coating vs IP68.',
    url: 'https://www.ejetaragua.com/guias/android/motorola',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Android', url: '/guias/android' },
    { name: 'Motorola' },
  ]

const faqs = [
    {
      "question": "Moto G comum tem resistência à água?",
      "answer": "Não tem certificação IP. Moto G tem apenas nano-coating (proteção contra respingos leves). Não é à prova d'água. Aja rápido se molhar - cada minuto aumenta risco."
    },
    {
      "question": "Moto G Power ou Moto G Pro têm IP?",
      "answer": "Alguns modelos têm IP52 (proteção leve contra respingos). Nem todos. Verifique especificações do seu modelo. Se tem IP, não é à prova - ainda é respingos apenas."
    },
    {
      "question": "Motorola Edge tem melhor proteção?",
      "answer": "Sim! Edge tem IP52-IP68 dependendo do modelo. Edge+ pode ter até IP68. Ainda assim, evite exposição direta à água. IP não significa à prova."
    },
    {
      "question": "Taxa de sucesso de recuperação em Moto G?",
      "answer": "60-70% com ação rápida (primeiras 4 horas). Moto G é mais vulnerável que Samsung/Xiaomi Pro. Use ferramenta de som imediatamente, não espere."
    },
    {
      "question": "Como saber qual modelo de Motorola tenho?",
      "answer": "Vá em Configurações > Sobre o telefone > Nome do modelo. Ou procure no Google: 'Motorola [seu modelo] IP rating' para saber especificações exatas."
    },
    {
      "question": "Motorola tem garantia para dano por água?",
      "answer": "NÃO. Garantia padrão não cobre danos por líquidos, mesmo em modelos com certificação IP. Programa Moto Care/seguro não é comum no Brasil."
    },
    {
      "question": "Assistência técnica Motorola é fácil achar?",
      "answer": "Difícil. Motorola não tem muitos centros autorizados no Brasil (concentrados em capitais). Use técnicos terceirizados confiáveis. Peça indicação."
    },
    {
      "question": "Devo desligar meu Moto G se molhou?",
      "answer": "Não precisa forçar desligamento (pode danificar). Deixe ligado ou desligue normalmente. Não force botões. Seque exterior imediatamente e use ferramenta de som."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Motorola Molhado: Moto G/Edge - Guia de Recuperação 2026',
    description: 'Motorola molhado? Moto G, Edge, Edge+: certificação IP, ejeção de água, e o que fazer. Nano-coating vs IP68.',
    url: '/guias/android/motorola',
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
            Motorola Molhado: Como Recuperar
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Motorola: Moto G tem nano-coating (proteção leve), Edge tem IP52-IP68 dependendo do modelo. Use ejeção por som, não carregue por 24h.
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
              Proteção Motorola: Qual Modelo Você Tem?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Motorola variam em proteção: Moto G comum tem apenas nano-coating (proteção mínima contra respingos). Moto G Power: alguns com IP52. Moto G Pro: alguns com IP52. Motorola Edge: IP52-IP68. Motorola Edge+: até IP68. Xiaomi Poco: sem proteção. Diferença CRÍTICA: nano-coating protege apenas respingos leves. IP52 protege mais. IP68 é excelente. Se não tem certeza, procure online: "Motorola [seu modelo] water resistance rating".
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por Que Motorola Molha Fácil: Vulnerabilidades
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Maioria dos Motos (especialmente Moto G) não têm proteção certificada. Nano-coating é superficial, não selado como IP67/IP68. Água pode entrar em qualquer fenda. Conectores não vedados. Microfone e falante desprotegidos. Som fica abafado rapidamente. Carregamento desativa logo. Por isso: ação rápida é crítica em Motorola. Não espere como faria com Samsung Galaxy. Cada minuto aumenta risco.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Passo a Passo Imediato Para Moto Molhado
            </h2>
            <p className="text-gray-700 leading-relaxed">
              0-5 minutos: retire da água. Seque exterior com pano. 5-10 minutos: desligue normalmente (ou deixe ligado). Não force botões. 10-15 minutos: acesse ferramenta de ejeção por som. 15-60 minutos: use som 165Hz 5-7 vezes (mais que Samsung porque Motorola é mais vulnerável). 1-24 horas: deixe secando em local seco, com ar. Não carregue. 24-48 horas: continue secando. Tente testes de funcionalidade após 24h. Motorola pede urgência: não demore.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Moto G vs Edge: Estratégias Diferentes
            </h2>
            <p className="text-gray-700 leading-relaxed">
              MOTO G (sem IP): procure técnico se não melhorar em 12-24h (não 48h). Cada hora piora chance. Use ferramenta de som 7-10 vezes. MOTO EDGE (IP52-IP68): mais proteção, espere 48h com ejeção de som. Técnico só se necessário. Diferença: Moto G precisa ação mais rápida porque vulnerável. Edge pode aguardar mais porque tem vedação.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que NÃO Fazer em Motorola Molhado
            </h2>
            <p className="text-gray-700 leading-relaxed">
              NÃO carregue (muito risco de curto-circuito em Moto). NÃO force botões. NÃO use secador de cabelo. NÃO coloque em arroz/sal/sílica (não ajuda). NÃO desmonte. NÃO use acetona ou álcool diretamente. NÃO espere 48h cheio antes de ir ao técnico se Moto G (procure em 12-24h). NÃO tente força o celular a ligar para testar. NÃO deixe em lugar fechado (falta ar circulação).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sinais de Dano Irreversível em Motorola
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Som mudo/abafado que não melhora com ferramenta. Não carrega nem com carregamento sem fio. Tela com manchas que não secam. Bateria inchada (sai pelas laterais). Liberação de fumaça. Não liga mais após 24h de secagem. Múltiplos problemas: som + microfone + câmera. Se qualquer um, procure técnico. Motorola Moto G danificado sai caro de reparar - às vezes não compensa (valor reparo > celular).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Carregamento Sem Fio em Motorola: Existe?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Moto G: NÃO tem carregamento sem fio (Qi). Edge: alguns modelos têm. Edge+: pode ter. Se não tem Qi, aguarde secagem completa antes de carregar com fio. Se molhou USB-C: espere 48h. Se Edge com Qi: use carregamento sem fio enquanto USB-C seca (estratégia segura).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Técnico de Confiança: Como Achar
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Motorola tem poucos centros autorizados no Brasil. Concentrados em São Paulo, Rio, Brasília. Para maioria: procure técnico terceirizado com avaliações boas. Pergunte: "Conserta Motorola molhado?" e "Qual o custo para limpar + secar?". Custo típico: R$ 150-250. Se som: R$ 200-300. Se tela: R$ 300-600. Vale se celular é recente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Taxa de Sucesso Por Velocidade em Moto
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ação em 0-4 horas: 80-85% sucesso. 4-12 horas: 70-75%. 12-24 horas: 60-70%. 24-48 horas: 40-50%. Mais de 48h: 20-30%. Motorola sem IP perde potencial muito rápido. Diferente de Samsung/Xiaomi que aguenta mais. Isto porque: menor proteção = água chega ao circuito mais rápido. Conclusão: NÃO demore em Moto G!
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prevenção: Protegendo Seu Motorola
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Compre capa à prova d'água (imprescindível em Moto G). Use película de vidro com proteção de borda. Evite bolsos perto de água. Na praia/piscina: guarde longe. Banheiro úmido: tome cuidado (condensação entra). Bebidas perto do sofá: afaste celular. Saco plástico se for lugar com chuva. Uma boa capa reduz risco 90%.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Checklist: Motorola Molhado - Ação Rápida
            </h2>
            <p className="text-gray-700 leading-relaxed">
              ✓ Retirou imediatamente (não deixou 5 minutos)? ✓ Secou exterior com pano? ✓ Não forçou botões? ✓ Deixou desligado/ligado conforme preferir? ✓ Acessou ferramenta em até 15 min? ✓ Usou som 165Hz 7+ vezes (mais que outros)? ✓ Posicionou em pé com ar circulando? ✓ Não carregou (crítico em Moto)? ✓ Após 12-24h se sem IP, procurou técnico? ✓ Anotou sintomas para técnico relatar? Cumpra todos: chances máximas!
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
