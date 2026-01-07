import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Biometria Parou Depois que Android Molhou | Solução 2026',
  description: 'Leitor de digital parou de funcionar depois que molhou? Entenda por quê, como secar, e quando volta a funcionar.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/android/biometria-parou',
  },
  openGraph: {
    title: 'Biometria Parou Depois que Android Molhou | Solução 2026',
    description: 'Leitor de digital parou de funcionar depois que molhou? Entenda por quê, como secar, e quando volta a funcionar.',
    url: 'https://www.ejetaragua.com/guias/android/biometria-parou',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = [
    { name: 'Guias', url: '/guias' },
    { name: 'Android', url: '/guias/android' },
    { name: 'Biometria Parou' },
  ]

const faqs = [
    {
      "question": "A biometria volta a funcionar após molhar?",
      "answer": "Na maioria dos casos sim (85% de taxa de sucesso). Se atingido apenas umidade superficial e seco rapidamente, volta em 24-48h. Se água penetrou no sensor, pode precisar trocar (R$ 200-400)."
    },
    {
      "question": "Quanto tempo leva para a biometria voltar a funcionar?",
      "answer": "Geralmente 24-48 horas após secagem completa. Não force novo registro de digital enquanto úmido. Espere o alerta desaparecer, depois tente novamente."
    },
    {
      "question": "Posso limpar o sensor de digital com álcool?",
      "answer": "Sim, álcool isopropílico 70% é seguro. Use pano macio (não papel), movimentos circulares leves. Não pressione. Deixe secar naturalmente. Evite álcool 90%+ (muito forte, danifica)."
    },
    {
      "question": "O sensor de biometria pode ficar permanentemente danificado?",
      "answer": "Sim, se muita água penetrou. Sinais: sensor não reconhece dedo nenhum após secagem completa, sempre pede nova verificação. Requer substituição do sensor (técnico)."
    },
    {
      "question": "Posso usar reconhecimento facial enquanto a biometria seca?",
      "answer": "Sim! Face unlock geralmente não é afetado por água no sensor de digital. Use como alternativa enquanto seca. Após secagem completa, volte à digital se preferir."
    },
    {
      "question": "Como saber se o sensor está realmente seco?",
      "answer": "Tente registrar uma digital nova. Se aceita e funciona bem, está seco. Se pede para tentar várias vezes ou falha, ainda está úmido - aguarde mais horas."
    },
    {
      "question": "Devo usar a ferramenta de som para secar o sensor?",
      "answer": "Sim! O som de 165Hz ajuda a expelir umidade do sensor também. Use a ferramenta de ejeção, posicione falante para baixo, 3-5 repetições. Complementar à secagem."
    },
    {
      "question": "Se recadastrasse a digital enquanto molhado, pode danificar?",
      "answer": "Não danifica o sensor, mas o registro fica impreciso/inutilizável. Você terá que refazer o registro após secagem. Melhor não tentar registrar enquanto úmido."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Biometria Parou Depois que Android Molhou | Solução 2026',
    description: 'Leitor de digital parou de funcionar depois que molhou? Entenda por quê, como secar, e quando volta a funcionar.',
    url: '/guias/android/biometria-parou',
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
            Biometria Parou Após Molhar: Resolver
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Água interfere com sensor biométrico. Seque completamente o sensor, limpe com álcool isopropílico 70%, recadastre digital. Geralmente volta em 24-48h.
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
              Por Que o Sensor de Biometria Parou
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Quando Android molha, água pode entrar em contato com o sensor de digital (leitor biométrico). O sensor detecta umidade e desabilita automaticamente por segurança. Água interfere no reconhecimento de padrões das digitais, tornando impossível verificação até secar completamente. Alguns Androids mostram alerta "Sensor molhado" ou "Não é possível verificar". A umidade precisa evaporar completamente - secagem incompleta causa travamentos repetidos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como o Sensor de Digital Funciona
            </h2>
            <p className="text-gray-700 leading-relaxed">
              O sensor de biometria trabalha através de capacitância (detecta padrão de buscas da pele). Água é condutora, interfere nos sinais elétricos, faz sensor ficar confuso. Por isso bloqueiam acesso. É proteção, não erro. A umidade mesmo invisível interfere. Até uma gota mínima deixada no sensor causa problemas. Secagem natural é essencial para restaurar função.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Passo a Passo para Resolver: Método Seguro
            </h2>
            <p className="text-gray-700 leading-relaxed">
              1. NÃO tente verificar digital enquanto molhado. 2. Use ferramenta de ejeção por som 3-5 vezes (expele umidade). 3. Deixe Android secando 24-48h em local seco com ar circulando. 4. Posicione com sensor para cima (facilita evaporação). 5. Após 24h, teste com reconhecimento facial se tiver. 6. Após 48h, tente verificar digital novamente. 7. Se não funciona, limpe sensor com álcool 70% e algodão. 8. Se ainda não vai, procure técnico.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Limpeza Correta do Sensor de Biometria
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Materiais necessários: álcool isopropílico 70%, algodão ou pano microfibra (nunca papel), cotonete. Modo seguro: desligue o Android. Mergulhe algodão em álcool (não muito encharcado). Passe suavemente sobre sensor (geralmente tela frontal em S21+, ou botão lateral/traseiro em Xiaomi). Movimentos circulares leves. Não pressione nem esfregue. Deixe secar 5 minutos. Teste. Evite álcool 90%+ (muito forte, danifica filmes). Nunca coloque álcool diretamente no sensor.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Alternativas Enquanto Biometria Seca
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Reconhecimento facial (Face Unlock) é geralmente imune a água no sensor de digital. Use face unlock para desbloquear enquanto aguarda biometria secar. Padrão ou PIN também funcionam sempre. Senha de SMS ou email serve para recuperação de acesso. Configurar segundo método biométrico se tiver (alguns Androids permitem). Mais opções de desbloqueio = maior segurança.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sinais de Dano Permanente vs Dano Temporário
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Temporário: não funciona por 24-48h, depois volta sozinho. Leve alerta de umidade, desaparece com secagem. Comparação: biometria funciona em reconhecimento facial. Permanente: após 48h de secagem completa ainda não funciona. Sensor não reconhece nenhum dedo, pede sempre nova verificação infinitamente. Requerimento sensor substituído. Teste com método biométrico alternativo: se face unlock funciona perfeitamente, é sensor de digital que danificou, não a placa.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recalibrando Biometria Após Secar
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Após secagem completa (48h), apague registros de digital antigos. Vá em Configurações &gt; Biometria &gt; Impressões digitais. Remova todos os registros salvos. Registre novamente (adicionar digital). Escaneia dedo 10-15 vezes enquanto é solicitado (não apresse). Salve novo registro. Teste com dedo diferente para confirmar. Isso resolve muitos casos de "sensor travado" após molhar.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Água Salgada vs Doce: Diferenças no Sensor
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Água doce: geralmente seca em 24h e sensor volta funcional. Água salgada: deixa resíduos que continuam interferindo mesmo após secar. Procure técnico em 12h. Água com cloro: intermediária, espere 48h. Água suja/lodosa: risco alto, limpe com álcool após. Se entrou muita sujeira, técnico pode lavar placa.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando Procurar Assistência Técnica
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Procure se: após 48h de secagem completa sensor não funciona. Água salgada (procure em 12-24h). Bateria inchada ou fumaça (urgente). Múltiplos sensores danificados (digital + facial). Samsung e Xiaomi têm centros autorizados em capitais. Sensor novo custa R$ 200-400 + mão de obra R$ 150-250. Vale a pena se celular é recente. Se muito antigo, considere trocar.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prevenção: Protegendo Sensor de Biometria
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Use capa com proteção total (cobre sensor). Evite deixar sensor exposto a respingos. Na praia/piscina, mantenha distância. Não toque sensor com dedos molhados. Em banheiros úmidos, cuidado (condensação). Uma capa resistente à água protege sensor também. Tela de proteção espessa ajuda. Limpeza regular com pano seco previne acúmulo de umidade.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Checklist: Recuperando Biometria Molhada
            </h2>
            <p className="text-gray-700 leading-relaxed">
              ✓ Não tentou verificar logo após molhar? ✓ Usou ferramenta de som 165Hz? ✓ Deixou secando 24-48h? ✓ Testou reconhecimento facial (alternativa)? ✓ Limpou sensor com álcool 70%? ✓ Esperou sensor secar após limpeza? ✓ Apagou registros antigos de digital? ✓ Registrou digital novamente? ✓ Testou com 3-4 dedos diferentes? ✓ Se ainda não funciona, anotou data para procurar técnico? Siga todos: resolverá na maioria dos casos!
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
