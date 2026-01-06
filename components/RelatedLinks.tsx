import Link from 'next/link'

interface RelatedLink {
  title: string
  url: string
  description: string
}

interface RelatedLinksProps {
  links: RelatedLink[]
  title?: string
}

export default function RelatedLinks({ links, title = 'Leituras Recomendadas' }: RelatedLinksProps) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
        <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className="block p-4 bg-white rounded-md hover:shadow-md transition border border-gray-200 hover:border-primary"
          >
            <h4 className="font-semibold text-gray-900 mb-1">{link.title}</h4>
            <p className="text-sm text-gray-600">{link.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
