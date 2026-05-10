import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'D&O Insurance NZ | Directors & Officers Insurance | DirectorsInsurance.co.nz',
    template: '%s | DirectorsInsurance.co.nz',
  },
  description: 'Compare D&O insurance in New Zealand. Directors and officers cover from NZ$800/year. Free quotes from licensed NZ brokers — protect your directorship today.',
  keywords: ['D&O insurance NZ', 'directors and officers insurance New Zealand', 'management liability NZ', 'director insurance NZ', 'D&O cover NZ'],
  authors: [{ name: 'DirectorsInsurance.co.nz' }],
  creator: 'DirectorsInsurance.co.nz',
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'D&O Insurance NZ | Directors & Officers Insurance',
    description: 'Compare D&O insurance in NZ. Free quotes from licensed brokers. Protect your directorship.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'D&O Insurance NZ | DirectorsInsurance.co.nz',
    description: 'Compare D&O insurance in NZ. Free quotes from licensed brokers.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#organization`,
  name: 'DirectorsInsurance.co.nz',
  url: siteConfig.url,
  logo: `${siteConfig.url}/favicon.ico`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.phone,
    contactType: 'customer service',
    areaServed: 'NZ',
    availableLanguage: 'English',
  },
  areaServed: {
    '@type': 'Country',
    name: 'New Zealand',
  },
  description: 'NZ D&O insurance comparison and referral service — connecting directors with licensed insurance brokers.',
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: 'DirectorsInsurance.co.nz',
  publisher: { '@id': `${siteConfig.url}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/blog/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
