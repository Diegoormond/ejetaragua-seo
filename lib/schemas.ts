// Shared JSON-LD schemas for SEO

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ejetar Água',
  url: 'https://www.ejetaragua.com',
  logo: 'https://www.ejetaragua.com/logo.png',
  description: 'Ferramenta gratuita para ejetar água do alto-falante do celular',
  sameAs: [],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ejetar Água',
  url: 'https://www.ejetaragua.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.ejetaragua.com/guias?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export function createFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function createArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      '@type': 'Organization',
      name: 'Ejetar Água',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ejetar Água',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.ejetaragua.com/logo.png',
      },
    },
    image: image || 'https://www.ejetaragua.com/og-image.png',
  }
}

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://www.ejetaragua.com${item.url}`,
    })),
  }
}

export function createHowToSchema({
  name,
  description,
  steps,
}: {
  name: string
  description: string
  steps: { name: string; text: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: name,
    description: description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }
}
