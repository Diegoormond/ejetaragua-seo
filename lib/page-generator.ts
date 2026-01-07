// Page content database for automatic generation
// This file contains all content structured for programmatic page creation

export interface PageContent {
  slug: string
  title: string
  metaDescription: string
  h1: string
  intro: string
  quickAnswer: string[]
  sections: {
    title: string
    content: string[]
  }[]
  commonMistakes: string[]
  whenToSeekHelp: string[]
  faqs: { question: string; answer: string }[]
  relatedLinks: { title: string; url: string; description: string }[]
}

export const pageDatabase: Record<string, PageContent> = {
  // This would be populated with all 46 pages
  // For now, showing structure for implementation
}
