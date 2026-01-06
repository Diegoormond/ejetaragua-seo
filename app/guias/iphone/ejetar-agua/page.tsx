import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Como Ejetar Água do iPhone: Método Oficial Apple 2026',
  description: 'Ejetar água do iPhone usando som 165Hz - mesma tecnologia do Apple Watch. Funciona em todos os modelos. Guia oficial.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ejetaragua.com/guias/iphone/ejetar-agua',
  },
  openGraph: {
    title: 'Como Ejetar Água do iPhone: Método Oficial Apple 2026',
    description: 'Ejetar água do iPhone usando som 165Hz - mesma tecnologia do Apple Watch. Funciona em todos os modelos. Guia oficial.',
    url: 'https://www.ejetaragua.com/guias/iphone/ejetar-agua',
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
      "question": "O som de 165Hz é seguro para meu iPhone?",
      "answer": "Absolutamente. A frequência 165Hz foi desenvolvida pela própria Apple para o Apple Watch Series 2+. Milhões de usos confirmam que não danifica alto-falantes. Use com volume máximo sem preocupação."
    },
    {
      "question": "Quanto tempo leva para ejetar toda a água?",
      "answer": "Ejeção ativa: 2-5 minutos de som contínuo. Secagem completa: 24-48 horas. Quanto mais água entrou, mais tempo pode levar. Paciência é essencial - não apresse."
    },
    {
      "question": "Posso usar a ferramenta de ejeção várias vezes?",
      "answer": "Sim, recomendamos 3-5 ciclos de 30 segundos com pausas de 10 segundos entre eles. Se necessário, repita a sequência inteira após 1 hora. Múltiplas tentativas aumentam chances de sucesso."
    },
    {
      "question": "E se a ferramenta não funcionar na primeira vez?",
      "answer": "É normal! Água pode estar em diferentes profundidades. Tente novamente após 1-2 horas. Se persistir após 5 tentativas em 24h, o problema pode ser interno e requer assistência técnica."
    },
    {
      "question": "Que volume devo usar?",
      "answer": "Volume máximo (100%). A eficácia da ejeção depende da intensidade das vibrações. Remova capinha para melhor propagação do som. Certifique-se que não está em modo silencioso."
    },
    {
      "question": "Posso ejetar água depois que o iPhone desligou?",
      "answer": "Sim! Ligue o iPhone novamente e use a ferramenta. Se não ligar por causa do aviso 'Líquido detectado', tente carregar com wireless e deixe secar por 2-4 horas antes de tentar novamente."
    },
    {
      "question": "Funcionará em outros iPhones além do meu?",
      "answer": "Sim! O método de 165Hz funciona em todos os iPhones com iOS 11+. Desde iPhone 5 em diante, embora iPhones mais antigos tenham menor proteção nativa contra água."
    },
    {
      "question": "E se sair água durante a ejeção?",
      "answer": "Excelente sinal! Significa que está funcionando. Você está vendo a água sendo expelida pelos orifícios do alto-falante. Continue as repetições até não sair mais água."
    },
    {
      "question": "Devo usar fones de ouvido ou alto-falante externo?",
      "answer": "Use o ALTO-FALANTE INTERNO do iPhone. A vibração do speaker é o que ejeta a água. Fones/caixas externas não funcionam pois não transmitem as vibrações necessárias."
    },
    {
      "question": "Quando chamar um técnico se a ejeção não funcionar?",
      "answer": "Após 5-7 tentativas em 24h sem melhora, especialmente se sair vapor ou cheiro de queimado. Também procure técnico se múltiplos problemas aparecerem (câmera + microfone + som)."
    }
  ]

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: 'Como Ejetar Água do iPhone: Método Oficial Apple 2026',
    description: 'Ejetar água do iPhone usando som 165Hz - mesma tecnologia do Apple Watch. Funciona em todos os modelos. Guia oficial.',
    url: '/guias/iphone/ejetar-agua',
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
            Como Ejetar Água do iPhone
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Use nossa ferramenta com som de 165Hz - mesma tecnologia que Apple usa no Watch. Volume máximo, speaker para baixo, 3-5 repetições. Funciona em todos os iPhones.
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
              Por Que a Água Entra no iPhone
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Apesar de certificação IP68, água pode entrar por:
            </p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li><strong>Vedações desgastadas:</strong> Borrachas se degradam com tempo e quedas</li>
              <li><strong>Exposição acidental:</strong> Chuva forte, queda na piscina, respingo do mar</li>
              <li><strong>Pressão de água:</strong> Nado em profundidade ou jatos de água forte</li>
              <li><strong>Defeitos de fábrica:</strong> Raramente, vedações podem ser deficientes desde novo</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Funciona o Método 165Hz
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Apple desenvolveu essa técnica para o Apple Watch Series 2. A ciência por trás:
            </p>
            <ol className="text-gray-700 space-y-3 mb-4">
              <li><strong>1. Ondas Sonoras Específicas:</strong> 165Hz é frequência que faz a membrana vibrar intensamente</li>
              <li><strong>2. Quebra de Tensão Superficial:</strong> Água tem tensão que a "prende". Vibrações quebram essa força</li>
              <li><strong>3. Expulsão Mecânica:</strong> Gotículas são forçadas para fora pelos orifícios do speaker</li>
              <li><strong>4. Recuperação:</strong> Membrana volta ao normal, som é restaurado</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Passo a Passo Seguro: Como Ejetar Água
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Preparação Essencial:
            </h3>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li><strong>Seque o exterior:</strong> Toalha macia em ports, speakers e tela</li>
              <li><strong>Remova a capinha:</strong> Som se propaga melhor sem obstáculos</li>
              <li><strong>Volume máximo:</strong> 100% é essencial para eficácia</li>
              <li><strong>Desative silencioso:</strong> Verifique que o botão lateral está em modo som</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Execução Correta:
            </h3>
            <ol className="text-gray-700 space-y-3 mb-4">
              <li><strong>1. Acesse a ferramenta:</strong> Abra ferramenta de ejeção em seu navegador</li>
              <li><strong>2. Posicione o iPhone:</strong> Speaker inferior para baixo, ângulo 45°</li>
              <li><strong>3. Inicie a ejeção:</strong> Toque no botão para iniciar som 165Hz</li>
              <li><strong>4. Observe por 30s:</strong> Você pode ver/ouvir água saindo</li>
              <li><strong>5. Pausa de 10s:</strong> Deixe o som cessar completamente</li>
              <li><strong>6. Repita:</strong> Faça 3-5 ciclos completos no mínimo</li>
              <li><strong>7. Inverta posição:</strong> Depois repita com speaker superior para baixo</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sinais de que Está Funcionando
            </h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-4">
              <p className="text-green-900 mb-2"><strong>Você saberá que está funcionando quando:</strong></p>
              <ul className="text-green-900 space-y-1 mb-0">
                <li>• Vê ou ouve água gotejando do speaker</li>
                <li>• Som fica gradualmente mais claro a cada repetição</li>
                <li>• Menos chiado ou distorção na música/voz</li>
                <li>• Volume aumenta naturalmente após sucessivas tentativas</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que NÃO Fazer (Métodos Perigosos)
            </h2>
            <div className="space-y-4 mb-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-2 mt-0">❌ Nunca Use Arroz</h3>
                <p className="text-red-900 mb-0">Arroz demora 24-48h (vs 5min do som), deixa amido, e grãos podem entrar na porta Lightning. Ineficaz para alto-falantes.</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-2 mt-0">❌ Não Use Secador de Cabelo</h3>
                <p className="text-red-900 mb-0">Calor danifica adesivos internos, pode derreter componentes, e expande água para outras áreas. Apple explicitamente avisa contra.</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-2 mt-0">❌ Não Force o Carregamento</h3>
                <p className="text-red-900 mb-0">Conectar cabo com água na porta causa curto-circuito. Espere 24h ou use wireless. Se avisar "Líquido detectado", não force.</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-2 mt-0">❌ Não Mexa Com Palito ou Cotonete</h3>
                <p className="text-red-900 mb-0">Palito perfura a membrana causando dano permanente. Cotonete empurra água para dentro ou deixa fiapos. Só use ejeção por som.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Checklist Rápido de Ejeção
            </h2>
            <div className="bg-blue-50 border-l-4 border-primary p-6">
              <div className="space-y-2">
                <p className="text-gray-700"><input type="checkbox" className="mr-2" /> Secar exterior completamente</p>
                <p className="text-gray-700"><input type="checkbox" className="mr-2" /> Remover capinha</p>
                <p className="text-gray-700"><input type="checkbox" className="mr-2" /> Volume no máximo (100%)</p>
                <p className="text-gray-700"><input type="checkbox" className="mr-2" /> Modo silencioso desativado</p>
                <p className="text-gray-700"><input type="checkbox" className="mr-2" /> Posicionar speaker para baixo</p>
                <p className="text-gray-700"><input type="checkbox" className="mr-2" /> Executar 3-5 ciclos de 30 segundos</p>
                <p className="text-gray-700"><input type="checkbox" className="mr-2" /> Repetir com speaker oposto</p>
                <p className="text-gray-700"><input type="checkbox" className="mr-2" /> Deixar secar 24-48h antes de usar</p>
                <p className="text-gray-700"><input type="checkbox" className="mr-2" /> NÃO carregar durante secagem</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando Procurar Assistência Técnica
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Procure Apple Store ou técnico autorizado <strong>imediatamente</strong> se:
            </p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li><strong>Água salgada (praia/mar):</strong> Sal corrói em horas. Não espere.</li>
              <li><strong>Cheiro de queimado:</strong> Indica curto-circuito ativo. Desligue imediatamente.</li>
              <li><strong>iPhone não liga:</strong> Após 24h de secagem, pode indicar dano na placa.</li>
              <li><strong>Múltiplos problemas:</strong> Face ID + câmera + som ruins = dano extenso.</li>
              <li><strong>Sem melhora após 5 tentativas:</strong> A água pode estar em circuitos internos.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Taxa de Sucesso e Limitações
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-4">
              <p className="text-yellow-900 mb-2"><strong>Taxa de sucesso: 85%</strong> quando:</p>
              <ul className="text-yellow-900 space-y-1 mb-0">
                <li>• Ejeção iniciada dentro de 24h do incidente</li>
                <li>• Volume do iPhone no máximo</li>
                <li>• 3-5 ciclos completos executados</li>
                <li>• Secagem completa de 24-48h permitida</li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Os 15% restantes envolvem dano interno que requer reparo profissional. Quanto mais rápido agir após molhar, maiores as chances de sucesso completo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Links Relacionados para Próximos Passos
            </h2>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li><a href="/guias/iphone" className="text-primary font-semibold hover:underline">← Voltar ao guia principal iPhone</a></li>
              <li><a href="/guias/iphone/modo-expulsao-agua" className="text-primary font-semibold hover:underline">→ Criar atalho automático Siri</a></li>
              <li><a href="/guias/iphone/alto-falante-molhado" className="text-primary font-semibold hover:underline">→ Som ainda abafado? Guia específico</a></li>
              <li><a href="/guias/iphone/garantia-agua" className="text-primary font-semibold hover:underline">→ Entender cobertura Apple Care+</a></li>
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
