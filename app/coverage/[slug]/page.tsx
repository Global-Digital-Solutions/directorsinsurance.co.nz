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

  const faqSchema = coverage.faqs && coverage.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: coverage.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  } : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Hero */}
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
          <p className="text-gray-300 text-xl leading-relaxed max-w-3xl">
            {coverage.description}
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/20 text-orange-300 text-sm px-4 py-2 rounded-full">
              <span className="text-orange-500">✓</span> From {coverage.fromPrice}
            </span>
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/20 text-orange-300 text-sm px-4 py-2 rounded-full">
              <span className="text-orange-500">✓</span> Free broker matching
            </span>
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/20 text-orange-300 text-sm px-4 py-2 rounded-full">
              <span className="text-orange-500">✓</span> Licensed advisers only
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">

              {/* Long description */}
              {coverage.longDesc && (
                <section>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                    What Is {coverage.name} Insurance in New Zealand?
                  </h2>
                  <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
                    {coverage.longDesc.split('\n\n').map((para, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed text-base">{para}</p>
                    ))}
                  </div>
                </section>
              )}

              {/* What it covers */}
              {coverage.whatCovers && coverage.whatCovers.length > 0 && (
                <section>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                    What Does {coverage.name} Cover?
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {coverage.whatCovers.map((item, i) => (
                      <div key={i} className="bg-green-50 border border-green-100 rounded-2xl p-5">
                        <div className="flex items-start gap-3">
                          <span className="text-green-600 font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
                          <div>
                            <h3 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* What it excludes */}
              {coverage.whatExcludes && coverage.whatExcludes.length > 0 && (
                <section>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                    Common Exclusions to Be Aware Of
                  </h2>
                  <p className="text-gray-500 text-sm mb-5">Every policy differs — your broker will clarify exactly what applies to your situation.</p>
                  <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {coverage.whatExcludes.map((excl, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold text-sm mt-0.5 flex-shrink-0">✗</span>
                          <p className="text-gray-700 text-sm">{excl}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Real claim scenario */}
              {coverage.claimScenario && (
                <section>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                    Real {coverage.name} Claim Scenario
                  </h2>
                  <div className="bg-gray-900 rounded-2xl p-8">
                    <div className="space-y-6">
                      <div>
                        <span className="inline-block bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">The Situation</span>
                        <p className="text-gray-300 leading-relaxed">{coverage.claimScenario.situation}</p>
                      </div>
                      <div>
                        <span className="inline-block bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">The Response</span>
                        <p className="text-gray-300 leading-relaxed">{coverage.claimScenario.response}</p>
                      </div>
                      <div className="border-t border-gray-700 pt-6">
                        <span className="inline-block bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">The Lesson</span>
                        <p className="text-orange-200 font-medium leading-relaxed">{coverage.claimScenario.lesson}</p>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Who needs it */}
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                  Who Needs {coverage.name} Insurance?
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {coverage.whoNeeds.map((who, i) => (
                    <div key={i} className="flex items-start gap-3 bg-orange-50 rounded-xl p-4 border border-orange-100">
                      <span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">→</span>
                      <p className="text-gray-700 text-sm">{who}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Policy limits guide */}
              {coverage.policyLimitsGuide && coverage.policyLimitsGuide.length > 0 && (
                <section>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                    How Much {coverage.name} Cover Do You Need?
                  </h2>
                  <p className="text-gray-500 text-sm mb-6">These are general guidelines — a specialist broker will recommend the right limit for your specific situation.</p>
                  <div className="overflow-x-auto rounded-2xl border border-gray-200">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-900 text-white">
                        <tr>
                          <th className="text-left px-5 py-4 font-bold">Entity Type</th>
                          <th className="text-left px-5 py-4 font-bold">Recommended Limit</th>
                          <th className="text-left px-5 py-4 font-bold hidden sm:table-cell">Rationale</th>
                        </tr>
                      </thead>
                      <tbody>
                        {coverage.policyLimitsGuide.map((row, i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-5 py-4 font-medium text-gray-900">{row.entityType}</td>
                            <td className="px-5 py-4 text-orange-600 font-bold">{row.recommendedLimit}</td>
                            <td className="px-5 py-4 text-gray-500 hidden sm:table-cell">{row.rationale}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {/* Pricing factors */}
              {coverage.pricingFactors && coverage.pricingFactors.length > 0 && (
                <section>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                    What Affects the Cost of {coverage.name} Insurance?
                  </h2>
                  <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {coverage.pricingFactors.map((factor, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="text-gray-400 font-bold text-sm mt-0.5 flex-shrink-0">{i + 1}.</span>
                          <p className="text-gray-700 text-sm">{factor}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Regulatory context */}
              {coverage.regulatoryContext && (
                <section className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
                  <h2 className="text-xl font-extrabold text-gray-900 mb-4">
                    Regulatory Context: Why This Cover Matters in New Zealand
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{coverage.regulatoryContext}</p>
                </section>
              )}

              {/* Key facts */}
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                  Key Facts About {coverage.name} Cover
                </h2>
                <div className="space-y-3">
                  {coverage.keyFacts.map((fact, i) => (
                    <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                      <p className="text-gray-700">{fact}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              {coverage.faqs && coverage.faqs.length > 0 && (
                <section>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                    {coverage.name} Insurance FAQs
                  </h2>
                  <div className="space-y-4">
                    {coverage.faqs.map((faq, i) => (
                      <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-orange-200 transition-colors">
                        <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* CTA */}
              <div className="bg-gray-900 rounded-2xl p-8 text-center">
                <h2 className="text-xl font-extrabold text-white mb-3">
                  Get a {coverage.name} Quote
                </h2>
                <p className="text-gray-400 mb-6">
                  Connect with a specialist broker who can find you the best {coverage.name} cover for your situation.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact/"
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors"
                  >
                    Get Free Quote →
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <QuoteForm compact />

              {/* Price callout */}
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 text-center">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Starting from</p>
                <p className="text-3xl font-extrabold text-orange-500">{coverage.fromPrice}</p>
                <p className="text-gray-500 text-sm mt-1">per year</p>
                <p className="text-gray-400 text-xs mt-3">Actual premium depends on company size, claim history, and cover limits. Get a quote for your exact situation.</p>
              </div>

              {/* Other coverage */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Other Coverage Types</h3>
                <ul className="space-y-2">
                  {otherCoverage.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/coverage/${c.slug}/`}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 transition-colors py-1"
                      >
                        <span>{c.icon}</span>
                        <span>{c.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust box */}
              <div className="bg-gray-900 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-4">Why Use Our Service?</h3>
                <ul className="space-y-3">
                  {[
                    'Free broker matching — no cost to you',
                    'Licensed financial advisers only',
                    'Multiple insurer quotes compared',
                    'D&O specialists — not generalist brokers',
                    'Response within 24 hours',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                      {item}
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
