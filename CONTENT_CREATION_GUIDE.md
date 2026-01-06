# CONTENT CREATION GUIDE - EJETARAGUA.COM

## How to Generate Remaining Pages

This guide explains how to quickly create the remaining 25+ supporting pages using the templates and patterns established.

---

## Page Template Structure

Every content page follows this Next.js structure:

```typescript
import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LastUpdated from '@/components/LastUpdated'
import RelatedLinks from '@/components/RelatedLinks'
import FAQ from '@/components/FAQ'
import CTABox from '@/components/CTABox'
import { createFAQSchema, createArticleSchema, createBreadcrumbSchema } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Page Title (55-60 chars)',
  description: 'Meta description 150-155 characters with main keyword and value prop',
  alternates: {
    canonical: '/guias/category/page-slug',
  },
  openGraph: {
    title: 'OG Title',
    description: 'OG Description',
    url: 'https://www.ejetaragua.com/guias/category/page-slug',
    type: 'article',
  },
}

const breadcrumbs = [
  { name: 'Guias', url: '/guias' },
  { name: 'Category Name', url: '/guias/category' },
  { name: 'Page Name', url: '/guias/category/page-slug' },
]

const faqs = [
  { question: 'Question 1?', answer: 'Detailed answer 50-200 words with keywords naturally' },
  // 5-12 FAQs depending on page type
]

const relatedLinks = [
  {
    title: 'Related Page Title',
    url: '/guias/related-page',
    description: 'Brief description of what user will learn',
  },
  // 4-6 related links
]

export default function PageName() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(createArticleSchema(...))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(createBreadcrumbSchema(breadcrumbs))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(createFAQSchema(faqs))}} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            H1 Title With Main Keyword
          </h1>
          <LastUpdated date="6 de janeiro de 2026" />
          <p className="text-xl text-gray-600 leading-relaxed">
            Intro paragraph 2-3 sentences explaining what user will learn and why it matters.
          </p>
        </header>

        <CTABox />

        {/* Main Content Sections */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2>Section Title (H2)</h2>
          <p>Content with <strong>keywords</strong> naturally integrated...</p>

          <h3>Subsection (H3)</h3>
          <ul>
            <li>Bullet point</li>
          </ul>
        </section>

        <CTABox title="Custom CTA" description="..." />

        <RelatedLinks links={relatedLinks} />

        <FAQ items={faqs} />
      </article>
    </>
  )
}
```

---

## Content Writing Guidelines (PT-BR)

### Tone & Style
- **Conversational** but authoritative
- **Use "você"** (not "senhor/senhora")
- **Active voice**, direct instructions
- **Short paragraphs** (2-4 sentences)
- **Bullet lists** for scannability
- **Bold** for emphasis, not italics

### Keyword Integration
- Primary keyword in: H1, first paragraph, H2, URL, title tag, meta description
- Secondary keywords naturally throughout
- Don't stuff - maintain readability
- Use synonyms and variations

### Structure
- **Intro**: Hook + what they'll learn + why it matters (2-3 sentences)
- **Sections**: 6-12 H2s with 2-5 H3s each
- **Lists**: Use numbered for steps, bullets for features/tips
- **Callout boxes**: For warnings, important tips, quick summaries
- **Examples**: Real scenarios when helpful

### SEO Optimization
- **H1**: Single, unique, with main keyword (55-65 chars)
- **H2s**: Include variations of keywords naturally
- **H3s**: Specific, descriptive
- **First 100 words**: Most important keywords
- **Last paragraph**: Summary + CTA + related links mention
- **Alt text**: If images added later
- **Internal links**: 5-10 contextual links to related pages

### Safety & Medical Disclaimers
Always include when relevant:
- "Esta ferramenta não substitui assistência técnica profissional"
- "Em caso de danos graves, procure um técnico"
- "Não garantimos recuperação em todos os casos"
- For water damage: "Água salgada requer atenção profissional imediata"

---

## Quick Page Generation Checklist

For each new page:

- [ ] Create file: `/app/guias/[category]/[slug]/page.tsx`
- [ ] Set metadata (title, description, canonical)
- [ ] Define breadcrumbs array
- [ ] Write 5-12 FAQs with keyword-rich answers
- [ ] List 4-6 related links from internal-links.json
- [ ] Write H1 (unique, keyword-focused)
- [ ] Write intro paragraph (value proposition)
- [ ] Create 6-12 H2 sections with content
- [ ] Add CTABox after intro and mid-page
- [ ] Add warning/tip callout boxes
- [ ] Add RelatedLinks component
- [ ] Add FAQ component
- [ ] Add all 3 JSON-LD schemas
- [ ] Verify all internal links work
- [ ] Check keyword density (1-2% for primary)
- [ ] Proofread for Portuguese grammar

---

## Priority Order (Based on SEO Blueprint)

### Week 1 (Done/In Progress)
✅ Home + Tool
✅ Pillar: Celular Molhado
⬜ Pillar: Som de Ejeção
⬜ Pillar: iPhone
⬜ Pillar: Android

### Week 2
⬜ Pillar: Alto-Falante
⬜ Pillar: Prevenção
⬜ Supporting: O Que Fazer Quando Cai na Água
⬜ Supporting: Arroz Mito
⬜ Supporting: Como Ejetar Água iPhone
⬜ Supporting: Como Ejetar Água Android

### Week 3
⬜ Pillar: Soluções
⬜ Pillar: Problemas
⬜ Category Indexes (5 pages)
⬜ Main Guides Index
⬜ 10 high-traffic supporting pages

### Week 4
⬜ Remaining supporting pages (brand-specific, problems)
⬜ Complete internal linking
⬜ Add robots.txt, sitemap.xml
⬜ Performance optimization

---

## Bulk Content Generation Strategy

### Option 1: Manual (Recommended for Quality)
1. Copy template above
2. Reference SEO_BLUEPRINT_PTBR.md for keywords and structure
3. Write unique content for each page (400-2000 words depending on type)
4. Ensure FAQ answers are detailed and unique
5. Interlink contextually

### Option 2: AI-Assisted
1. Use Claude/ChatGPT with this prompt template:

```
Write a complete Next.js page in Portuguese (Brazil) for ejetaragua.com about: [TOPIC]

Primary keyword: [KEYWORD]
Secondary keywords: [LIST]
Target audience: Brazilians who need help with wet phone
Tone: Helpful, authoritative, conversational (use "você")

Include:
- Complete metadata (title 55-60 chars, description 150-155 chars)
- H1 with main keyword
- 8 H2 sections with practical content
- 8 FAQs with detailed answers (100-150 words each)
- 6 related links
- Safety warnings
- Natural keyword integration (no stuffing)
- Short paragraphs, bullet lists, bold emphasis

Format: Follow the template structure in CONTENT_CREATION_GUIDE.md
Length: 1200-1800 words
```

### Option 3: Hybrid (Best Balance)
1. AI generates initial draft
2. Human editor:
   - Verifies accuracy (especially technical details)
   - Ensures natural Portuguese
   - Adds personality and examples
   - Optimizes keyword placement
   - Checks all links work
   - Adds unique insights

---

## Content Quality Checklist

Before publishing any page:

**Technical SEO**
- [ ] Metadata complete and optimized
- [ ] Canonical tag correct
- [ ] Breadcrumbs accurate
- [ ] All schemas (Article, FAQ, Breadcrumb)
- [ ] Internal links work
- [ ] No broken external links
- [ ] Mobile-friendly layout
- [ ] Fast load time (<3s)

**Content Quality**
- [ ] Unique content (not duplicate)
- [ ] Valuable to user (answers their question)
- [ ] Natural keyword usage
- [ ] Perfect Portuguese grammar
- [ ] No medical/risky claims
- [ ] Appropriate warnings included
- [ ] Clear actionable advice
- [ ] Examples where helpful

**SEO Optimization**
- [ ] Primary keyword in H1, first para, URL
- [ ] Keywords in 2-3 H2s naturally
- [ ] 5-10 internal links
- [ ] 5-12 FAQs with rich answers
- [ ] Meta description compelling (CTR-focused)
- [ ] Title tag unique across site
- [ ] Keyword density 1-2%
- [ ] Related content linked

**User Experience**
- [ ] Scannable (headings, bullets, bold)
- [ ] Visual hierarchy clear
- [ ] CTA boxes placed strategically
- [ ] No walls of text
- [ ] Action steps numbered
- [ ] Quick answer at top
- [ ] FAQ addresses common questions
- [ ] Mobile-readable font sizes

---

## Keyword Research Per Page

Before writing each page, review:

1. **Primary keyword** from SEO_BLUEPRINT_PTBR.md
2. **Search intent**: What does user want?
   - Informational: "how to", "what is", "why"
   - Transactional: "fix", "solve", "remove"
   - Navigational: "[brand] + problem"
3. **SERP analysis**: What currently ranks? (if possible)
4. **People Also Ask**: Common related questions
5. **Related searches**: Keyword variations

Integrate top 5-10 secondary keywords naturally throughout.

---

## Internal Linking Strategy

From `/lib/internal-links.json`:

**Every supporting page should link to:**
1. Its pillar page (in breadcrumb + 1-2 contextual mentions)
2. Home (breadcrumb)
3. 2-3 related supporting pages (contextual)
4. Category index (breadcrumb)

**Every pillar page should link to:**
1. Home (breadcrumb)
2. 8-15 supporting pages (Related Links + contextual)
3. Other relevant pillars (contextual)
4. Main guides index

**Link anchor text:**
- Use keyword-rich but natural anchors
- Vary anchor text (don't repeat same text)
- Use descriptive phrases, not "click here"

Example:
✅ "Aprenda [como ejetar água do iPhone](link)"
✅ "Veja nosso [guia completo sobre celular molhado](link)"
❌ "Clique [aqui](link)"

---

## FAQ Writing Best Practices

**Question format:**
- Start with: Como, Quanto, Por que, Qual, Quando, Onde
- Include specific keywords
- Mirror how users actually search
- Be specific, not vague

**Answer format:**
- Direct answer in first sentence
- Expand with details (100-200 words for pillars, 50-100 for supporting)
- Include related keywords naturally
- Link to related page if relevant
- End with actionable takeaway

Example:

**Question:** "Quanto tempo esperar para ligar celular molhado?"

**Answer:** "Espere no mínimo 24 a 48 horas antes de ligar o celular molhado. O tempo exato depende de quanto tempo ele ficou na água e quanta umidade absorveu. Se possível, use métodos de secagem acelerada como [ejeção por som](/link) e silica gel durante este período. Nunca ligue imediatamente para testar - isso pode causar curto-circuito e dano permanente. Teste primeiro se está completamente seco verificando a porta de carregamento e alto-falante."

---

## Page-Specific Content Templates

### Template: "How To" Page
1. **Intro**: Problem + solution preview
2. **Requirements**: What user needs before starting
3. **Step-by-Step** (numbered): Clear instructions
4. **Common Mistakes**: What to avoid
5. **Troubleshooting**: "What if it doesn't work?"
6. **FAQ**: Specific questions about the process
7. **Next Steps**: What to do after completing

### Template: "Problem Diagnosis" Page
1. **Intro**: Symptoms description
2. **Causes**: Why this happens
3. **Quick Fixes**: Try these first
4. **Detailed Solutions**: Step-by-step for each cause
5. **When to Seek Help**: Signs it's serious
6. **Prevention**: How to avoid in future
7. **FAQ**: Common concerns

### Template: "Comparison/Myth" Page
1. **Intro**: The claim/myth stated
2. **The Truth**: Science/facts
3. **Why People Believe It**: Origin of myth
4. **Better Alternatives**: What actually works
5. **Evidence**: Studies, tests, expert opinions
6. **Verdict**: Clear conclusion
7. **FAQ**: Related misconceptions

### Template: "Product/Brand Specific" Page
1. **Intro**: Brand/model specifics
2. **Specifications**: IP rating, features
3. **Special Instructions**: Brand-specific steps
4. **Known Issues**: Common problems for this brand
5. **Warranty Info**: What's covered
6. **Official Resources**: Brand support links
7. **FAQ**: Brand-specific questions

---

## Performance Optimization

Ensure all pages:
- Use Next.js Image component (when adding images)
- Lazy load below-fold content
- Minimize custom CSS (use Tailwind)
- No heavy JavaScript libraries
- Server-side render (default in App Router)
- Static generation where possible

---

## Publishing Checklist

Before marking page as "done":

1. **Local testing**
   - [ ] npm run dev - page loads without errors
   - [ ] All links clickable and work
   - [ ] Mobile responsive
   - [ ] No console errors
   - [ ] Schemas validate (use schema.org validator)

2. **Content review**
   - [ ] Spelling/grammar perfect
   - [ ] No placeholder text ([TODO], [LINK], etc.)
   - [ ] Keywords integrated naturally
   - [ ] Portuguese sounds natural to natives
   - [ ] Facts are accurate

3. **SEO check**
   - [ ] Title tag unique and optimized
   - [ ] Meta description compelling
   - [ ] H1 includes main keyword
   - [ ] URL is clean and keyword-rich
   - [ ] Internal links present and work
   - [ ] FAQ schema present
   - [ ] Breadcrumbs work

4. **Deploy**
   - [ ] Commit to git
   - [ ] Push to production
   - [ ] Test live URL
   - [ ] Submit to Search Console (after site launch)

---

## Next Steps After All Pages Created

1. **Generate sitemap.xml** (Next.js can do this automatically)
2. **Create robots.txt**
3. **Set up Google Search Console**
4. **Submit sitemap to GSC**
5. **Monitor indexing**
6. **Track rankings** for target keywords
7. **Update old pages** as needed (dates, new info)
8. **Build backlinks** (guest posts, directories, social)
9. **Analyze performance** (GSC, Analytics)
10. **Iterate and improve** based on data

---

## Quick Reference: File Paths

```
/app/
  page.tsx                              # Home (tool)
  layout.tsx                            # Root layout
  guias/
    page.tsx                            # Main guides index
    celular-molhado/
      page.tsx                          # Pillar: Celular Molhado
      o-que-fazer/page.tsx             # Supporting
      como-secar/page.tsx              # Supporting
      arroz-mito/page.tsx              # Supporting
      quando-ligar/page.tsx            # Supporting
      primeiros-socorros/page.tsx      # Supporting
      agua-salgada/page.tsx            # Supporting
      assistencia-tecnica/page.tsx     # Supporting
    iphone/
      page.tsx                          # Pillar: iPhone
      ejetar-agua/page.tsx             # Supporting
      modo-expulsao-agua/page.tsx      # Supporting
      alto-falante-molhado/page.tsx    # Supporting
      resistencia-agua/page.tsx        # Supporting
      garantia-agua/page.tsx           # Supporting
      modelos-resistentes/page.tsx     # Supporting
    android/
      page.tsx                          # Pillar: Android
      ejetar-agua/page.tsx             # Supporting
      [... more]
    alto-falante/
      page.tsx                          # Pillar
      [... supporting]
    som-ejecao-agua/
      page.tsx                          # Pillar
      [... supporting]
    prevencao/
      page.tsx                          # Pillar
      [... supporting]
    solucoes/
      page.tsx                          # Pillar
      [... supporting]
    problemas/
      page.tsx                          # Pillar
      [... supporting]
```

---

This guide gives you everything needed to scale content production while maintaining quality and SEO standards. Follow the templates, checklists, and best practices for consistent, high-ranking pages.

