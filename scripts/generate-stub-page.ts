// Stub page generator for ejetaragua.com
// Generates SEO-friendly stub pages with noindex from content database

import { stubContentDatabase, StubContent, getCategoryFromPath } from '../lib/stub-content'

interface StubPageOptions {
  route: string
  content?: StubContent
  fallbackTitle?: string
  fallbackDescription?: string
}

export function generateStubPage(options: StubPageOptions): string {
  const { route, content, fallbackTitle, fallbackDescription } = options

  // Get content from database or use fallbacks
  const pageContent = content || stubContentDatabase[route]

  if (!pageContent && !fallbackTitle) {
    throw new Error(`No content found for route ${route} and no fallback provided`)
  }

  const title = pageContent?.title || fallbackTitle || 'Guia em Desenvolvimento'
  const description = pageContent?.metaDescription || fallbackDescription || 'Guia completo em breve.'
  const h1 = pageContent?.h1 || title
  const quickAnswer = pageContent?.quickAnswer || 'Este guia está sendo desenvolvido. Use nossa ferramenta de ejeção de água enquanto preparamos o conteúdo completo.'
  const sections = pageContent?.sections || [
    {
      title: 'Conteúdo em Desenvolvimento',
      content: 'Estamos preparando um guia completo e detalhado sobre este tema. Enquanto isso, use nossa ferramenta de ejeção de água na página inicial.'
    }
  ]
  const faqs = pageContent?.faqs || [
    {
      question: 'Quando este guia estará completo?',
      answer: 'Estamos constantemente atualizando nossos guias. Use nossa ferramenta de ejeção de água - ela funciona perfeitamente e é 100% gratuita!'
    }
  ]
  const category = pageContent?.category || getCategoryFromPath(route)
  const pillarUrl = pageContent?.pillarUrl || '/guias'

  // Determine breadcrumb path
  const pathSegments = route.split('/').filter(Boolean)
  const breadcrumbPath = pathSegments.slice(1) // Remove 'guias'

  let breadcrumbs = '[\n    { name: \'Guias\', url: \'/guias/' },\n'

  if (breadcrumbPath.length === 1) {
    // Pillar page
    breadcrumbs += `    { name: '${category}' },\n  ]`
  } else if (breadcrumbPath.length === 2) {
    // Supporting page
    const pillarCategory = getCategoryFromPath(`/guias/${breadcrumbPath[0]}`)
    breadcrumbs += `    { name: '${pillarCategory}', url: '/guias/${breadcrumbPath[0]}' },\n`
    breadcrumbs += `    { name: '${category}' },\n  ]`
  } else {
    // Nested page
    breadcrumbs += `    { name: '${category}' },\n  ]`
  }

  const canonicalUrl = `https://www.ejetaragua.com${route}`
  const today = new Date().toISOString().split('T')[0]
  const todayPTBR = new Date().toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return `import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: '${title}',
  description: '${description}',
  robots: {
    index: false, // Temporary noindex - remove when full content is added
    follow: true,
  },
  alternates: {
    canonical: '${canonicalUrl}',
  },
  openGraph: {
    title: '${title}',
    description: '${description}',
    url: '${canonicalUrl}',
    siteName: 'Ejetar Água',
    locale: 'pt_BR',
    type: 'article',
  },
}

const breadcrumbs = ${breadcrumbs}

const faqs = ${JSON.stringify(faqs, null, 2)}

export default function Page() {
  const faqSchema = createFAQSchema(faqs)
  const articleSchema = createArticleSchema({
    title: '${title}',
    description: '${description}',
    url: '${route}',
    datePublished: '${today}',
    dateModified: '${today}',
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
            ${h1}
          </h1>
          <LastUpdated date="${todayPTBR}" />
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ Resposta Rápida
          </h2>
          <p className="text-gray-700 leading-relaxed">
            ${quickAnswer}
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
${sections.map((section, index) => `          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ${section.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              ${section.content}
            </p>
          </section>`).join('\n\n')}
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
`
}

// Export for use in scripts
export default generateStubPage
