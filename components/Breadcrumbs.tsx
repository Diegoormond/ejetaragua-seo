import Link from 'next/link'

interface BreadcrumbItem {
  name: string
  url?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href="/" className="text-gray-600 hover:text-primary transition">
            Início
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            <svg className="w-3 h-3 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            {index === items.length - 1 || !item.url ? (
              <span className="text-gray-500">{item.name}</span>
            ) : (
              <Link href={item.url} className="text-gray-600 hover:text-primary transition">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
