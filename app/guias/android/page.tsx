import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Android Molhado: Guia Samsung, Xiaomi, Motorola | Ejetar Água',
  description: 'Guia completo para Android molhado: Samsung, Xiaomi, Motorola e todas as marcas. Como ejetar água, resistência à água, e recuperação.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/android',
  },
  openGraph: {
    title: 'Android Molhado: Guia Samsung, Xiaomi, Motorola | Ejetar Água',
    description: 'Guia completo para Android molhado: Samsung, Xiaomi, Motorola e todas as marcas. Como ejetar água, resistência à água, e recuperação.',
    url: 'https://www.ejetaragua.com/guias/android',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Android' },
  ]

const faqs = [
    {
      "question": "Todo Android é resistente à água?",
      "answer": "Não. Apenas modelos específicos têm certificação IP. Samsung Galaxy S/Note/Flip/Fold, Xiaomi Pro/Ultra, e alguns Motorola Edge têm proteção. Sempre verifique as especificações do seu modelo antes de expô-lo à água."
    },
    {
      "question": "Como ejetar água do Android?",
      "answer": "Use nossa ferramenta gratuita que gera som de 165Hz. Funciona em qualquer Android: Samsung, Xiaomi, Motorola, OnePlus, Realme, etc. Volume máximo, speaker para baixo, repita 3-5 vezes."
    },
    {
      "question": "Samsung é mais resistente que Xiaomi?",
      "answer": "Geralmente sim. Samsung oferece IP68 em mais modelos (Galaxy S, Note). Xiaomi tem IP68 principalmente em modelos Pro. A qualidade das vedações Samsung tende a ser mais consistente na maioria das linhas."
    },
    {
      "question": "Quanto tempo leva para secar um Android completamente?",
      "answer": "24-48 horas em ambiente com circulação de ar. Nunca force a secagem com calor (secador) ou coloque no forno. Deixe de lado, em local seco, evitando exposição direta ao sol."
    },
    {
      "question": "Posso usar carregamento sem fio se a porta USB-C está molhada?",
      "answer": "Sim, carregamento sem fio (Qi) é uma alternativa segura quando a USB-C está molhada. Aguarde o alerta de umidade desaparecer antes de usar carregamento com fio. Alguns Androids bloqueiam carregamento por fio automaticamente."
    },
    {
      "question": "Qual é a diferença entre IP67 e IP68?",
      "answer": "IP67: protege até 1 metro de profundidade por 30 minutos. IP68: protege até 2+ metros, geralmente até 1-2 horas. IP68 é superior, mas ambos protegem contra respingos acidentais."
    },
    {
      "question": "Se meu Android molhou, devo desligá-lo imediatamente?",
      "answer": "Não precisa desligar força (pode danificar)! Deixe ligado se quiser, ou desligue normalmente. Importante: não force botões. Seque o exterior imediatamente e use a ferramenta de ejeção por som."
    },
    {
      "question": "Água salgada (praia) é mais perigosa que água doce?",
      "answer": "Muito mais perigosa! Água salgada corrói componentes eletrônicos rapidamente e deixa resíduos que causam curtos-circuitos. Procure assistência técnica em 12-24 horas, não espere 48h."
    },
    {
      "question": "A ejeção por som danifica o alto-falante?",
      "answer": "Não! O som de 165Hz é seguro para o alto-falante (especialmente projetado para isso). Funciona em iOS (Apple Watch) há anos. Pode usar quantas vezes precisar sem risco de dano."
    },
    {
      "question": "E se o Android não ligar após molhar?",
      "answer": "Não force! Desligue e deixe secando 24-48 horas. Use a ferramenta de ejeção por som com o aparelho desligado (áudio sai mesmo assim). Se não ligar após isso, procure técnico - pode ser curto-circuito."
    },
    {
      "question": "Qual é a taxa de sucesso da ejeção por som em Android?",
      "answer": "Aproximadamente 85% com uso correto (som + secagem adequada). Resultado depende da rapidez de ação - quanto mais rápido, maiores as chances de recuperação completa."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Android Molhado: Guia Samsung, Xiaomi, Motorola | Ejetar Água',
    description: 'Guia completo para Android molhado: Samsung, Xiaomi, Motorola e todas as marcas. Como ejetar água, resistência à água, e recuperação.',
    url: '/guias/android',
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
            Android Molhado: Guia Para Todas as Marcas
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Se seu Android molhou: desligue imediatamente, seque o exterior, use nossa ferramenta de ejeção de água (funciona em TODAS as marcas Android), e não carregue por 24 horas.
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
              Por Que Isso Acontece
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Celulares Android podem molhar por quedas em água (piscina, rio, mar), respingos acidentais, chuva, ou imersão prolongada. A resistência à água varia significativamente entre modelos. Samsung Galaxy S/Note têm IP68 (excelente), Xiaomi Pro tem IP68 (bom), Motorola Moto G tem nano-coating (proteção mínima), e muitos modelos de entrada não possuem nenhuma proteção certificada. Além disso, mesmo celulares com certificação IP têm limites de profundidade e tempo de exposição que podem ser ultrapassados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Passo a Passo Seguro: Primeiras Ações
            </h2>
            <p className="text-gray-700 leading-relaxed">
              1. Retire o celular da água imediatamente. 2. NÃO force botões ou tente desligar. 3. Seque o exterior com pano macio (toalha, papel absorvente). 4. Posicione de pé em local seco com circulação de ar. 5. Use a ferramenta de ejeção por som de 165Hz o quanto antes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Resolver Com Segurança: Ejeção de Água
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Use nossa ferramenta de ejeção de água que funciona em qualquer Android. A tecnologia de 165Hz remove água do alto-falante em 2-5 minutos. Funciona em Samsung Galaxy, Xiaomi Redmi/Mi/Poco, Motorola Moto G/Edge, OnePlus, Realme, ASUS, Sony, e todos os outros Androids. A ferramenta é 100% gratuita, sem instalação de app, funciona direto no navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sinais de Dano Após Molhar
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Som abafado ou mudo (água no alto-falante). Touch fantasma ou tela tocando sozinha (umidade no digitalizador). Microfone não capta som (água no microfone). Câmera embaçada ou escura (umidade na lente). Bateria descarregando rapidamente (corrosão interna). Celular não carrega (porta USB-C molhada). Qualquer combinação desses sinais indica presença de água interna.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que NÃO Fazer (Métodos Perigosos)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              NÃO use arroz (myth urbano desmentido - não funciona e deixa pó dentro). NÃO use secador de cabelo ou qualquer fonte de calor (danifica componentes internos permanentemente). NÃO carregue imediatamente - risco de curto-circuito. NÃO force o celular a ligar para testar se funciona. NÃO coloque em forno ou microondas (risco de fogo e dano total). NÃO desmonte o aparelho (perde garantia e danifica componentes). NÃO use álcool ou acetona diretamente (danifica placa-mãe).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Secagem Adequada: Tempo e Método Correto
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Deixe o Android secando em local seco, com circulação de ar natural, por 24-48 horas. Coloque em pé (não deitado) para facilitar escoamento de água. Evite exposição direta ao sol (calor extremo danifica bateria). Não feche em bolsa, mochila ou bolso (falta circulação de ar). Pode deixar ligado ou desligado - ambos funcionam, ligado permite usar ferramenta de som. A secagem lenta é superior a qualquer método acelerado artificial.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Carregamento Depois de Molhado: Como Fazer Seguro
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Aguarde no mínimo 24 horas após molhar. Antes de carregar, seque completamente a porta USB-C com pano macio. Se o Android mostra alerta "Umidade detectada" (Samsung) ou similar, aguarde desaparecer (pode levar 48h). Como alternativa, use carregamento sem fio (Qi) se o aparelho suporta (mais seguro quando USB-C está molhada). Só retorne ao carregamento com fio quando tiver certeza de que secou completamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Resistência à Água Por Marca: Comparação Detalhada
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Samsung Galaxy S (S21-S24): IP68 até 1.5m/30min. Samsung Galaxy Note: IP68 (excelente proteção). Samsung Galaxy A (A54/A34): IP67 ou IP53 (proteção variável). Xiaomi Mi Pro/Ultra: IP68 (boa proteção). Xiaomi Mi padrão: IP53-IP68 (varia). Xiaomi Redmi Note: geralmente sem IP (alta vulnerabilidade). Xiaomi Poco: sem proteção IP. Motorola Moto G: nano-coating apenas (proteção mínima). Motorola Edge: IP52-IP68 (varia por modelo). Motorola Edge+: até IP68. OnePlus: modelos flagship têm IP68+IP69.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Água Salgada vs Água Doce: Diferenças Críticas
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Água doce: risco baixo-médio, permite esperar 24-48 horas para secagem. Água salgada (praia, oceano): risco ALTO, procure técnico em 12-24 horas máximo. Água com cloro (piscina): risco médio, similar a água doce. Água destilada: risco mínimo. Água suja (rio, banhado): risco alto. A água salgada corrói circuitos rapidamente e deixa resíduos que causam curtos-circuitos mesmo após secar aparentemente. Não espere: leve para técnico rápido.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Checklist Rápido Pós-Molhado
            </h2>
            <p className="text-gray-700 leading-relaxed">
              ✓ Retirou imediatamente da água? ✓ Secou exterior com pano? ✓ Não forçou botões? ✓ Deixou de lado em local seco? ✓ Usou ferramenta de som 165Hz? ✓ Aguardou 24-48h antes de carregar? ✓ Secou porta USB-C completamente? ✓ Não usou secador ou calor? ✓ Não tentou desmontar? ✓ Se água salgada, procurou técnico em 24h? Siga todos os itens para máximas chances de recuperação.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando Procurar Assistência Técnica
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Procure assistência imediatamente se: água salgada/oceano (12-24h), múltiplos problemas simultâneos (som + microfone + tela + câmera), bateria inchada, celular não liga após 48h de secagem, liberação de fumaça ou queimadura. Procure em 48h se: som abafado após ejeção completa, touch fantasma persistente, câmera embaçada não clareia. Pode esperar 48-72h se: apenas som abafado e ferramenta ajudou, tela com pequeno brilho diferente, uma função afetada. Samsung e Xiaomi têm centros autorizados em capitais brasileiras. Motorola tem assistência limitada (terceirizados).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prevenção: Evitar Android Molhado no Futuro
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Use capa à prova d'água (para não-resistentes). Tenha protetor de tela com proteção de borda (ajuda). Evite bolsos de calça/shorts perto de água. Em praia/piscina: deixe no quarto, use à distância. Compre modelos com certificação IP se usar frequentemente perto de água. Mantém celular em bolsa com fechamento. Não coloque no sofá próximo a bebidas. Tome cuidado em ambientes úmidos (banheiro). Secador de ar quente vira risco zero se manter longe do celular. Uma boa capa de impacto protege também contra respingos.
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
