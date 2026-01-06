import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { organizationSchema } from '@/lib/schemas'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ejetaragua.com'),
  title: {
    default: 'Ejetar Água do Celular - Remova Água do Alto-Falante Instantaneamente',
    template: '%s | Ejetar Água'
  },
  description: 'Ferramenta gratuita para ejetar água do alto-falante do seu celular usando ondas sonoras. Funciona em iPhone e Android. Guias completos para celular molhado.',
  keywords: ['ejetar água', 'celular molhado', 'água no celular', 'alto-falante molhado', 'som para tirar água', 'iPhone molhado', 'Android molhado'],
  authors: [{ name: 'Ejetar Água' }],
  creator: 'Ejetar Água',
  publisher: 'Ejetar Água',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.ejetaragua.com',
    siteName: 'Ejetar Água',
    title: 'Ejetar Água do Celular - Remova Água do Alto-Falante',
    description: 'Ferramenta gratuita para ejetar água do alto-falante do seu celular usando ondas sonoras. Funciona em iPhone e Android.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ejetar Água do Celular - Remova Água do Alto-Falante',
    description: 'Ferramenta gratuita para ejetar água do alto-falante usando ondas sonoras.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'seu-codigo-google-search-console',
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
