import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { coverageTypes, getCoverageBySlug } from '@/data/coverage-types'
import { siteConfig } from '@/data/site-config'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return coverageTypes.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const coverage = getCoverageBySlug(slug)
  if (!coverage) return {}
  return {
    title: `${coverage.name} Insurance NZ | ${siteConfig.name}`,
    description: coverage.description.slice(0, 160),
    alternates: { canonical: `${siteConfig.url}/coverage/${slug}/` },
  }
}

export default async function CoverageSlugPage({ params }: Props) {
  const { slug } = await params
  const coverage = getCoverageBySlug(slug)
  if (!coverage) notFound()

  const otherCoverage = coverageTypes.filter((c) => c.slug !== slug)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url + '/' },
      { '@type': 'ListItem', position: 2, name: 'Coverage', item: siteConfig.url + '/coverage/' },
      { '@type': 'ListItem', position: 3, name: coverage.name, item: `${siteConfig.url}/coverage/${slug}/` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/coverage/" className="hover:text-white">Coverage</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{coverage.name}</span>
          </nav>
          <span className="text-4xl mb-4 block">{coverage.icon}</span>
          <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Coverage Type
          </span>
          <h1 className="text-4xl font-extrabold text-white mb-4">{coverage.name} Insurance NZ</h1>
          <p className="text-gray-300 text-xl leading-relaxed max-w-2xl">
            From {coverage.fromPrice}. Connect with a specialist NZ broker for a free, no-obligation quote.
          </p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">What Is {coverage.name} Insurance?</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{coverage.description}</p>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Key Facts About {coverage.name} Cover</h2>
                <div className="space-y-3">
                  {coverage.keyFacts.map((fact, i) => (
                    <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <span className="text-orange-500 font-bold mt-0.5">✓</span>
                      <p className="text-gray-700">{fact}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Who Needs {coverage.name} Insurance?</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {coverage.whoNeeds.map((who, i) => (
                    <div key={i} className="flex items-start gap-3 bg-orange-50 rounded-xl p-4 border border-orange-100">
                      <span className="text-orange-500 font-bold mt-0.5">→</span>
                      <p className="text-gray-700 text-sm">{who}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="bg-gray-900 rounded-2xl p-8 text-center">
                <h2 className="text-xl font-extrabold text-white mb-3">Get a {coverage.name} Quote</h2>
                <p className="text-gray-400 mb-6">Connect with a specialist NZ broker who can find you the best {coverage.name} cover.</p>
                <Link href="/contact/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
                  Get Free Quote →
                </Link>
              </div>
            </div>

            <aside className="space-y-6">
              <QuoteForm compact />

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Other Coverage Types</h3>
                <ul className="space-y-2">
                  {otherCoverage.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/coverage/${c.slug}/`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 transition-colors">
                        <span>{c.icon}</span>
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
