import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { directorTypes, getDirectorTypeBySlug } from '@/data/director-types'
import { siteConfig } from '@/data/site-config'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return directorTypes.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const director = getDirectorTypeBySlug(slug)
  if (!director) return {}
  return {
    title: director.metaTitle,
    description: director.metaDesc,
    alternates: { canonical: `${siteConfig.url}/for-directors/${slug}/` },
  }
}

export default async function DirectorTypePage({ params }: Props) {
  const { slug } = await params
  const director = getDirectorTypeBySlug(slug)
  if (!director) notFound()

  const otherDirectors = directorTypes.filter((d) => d.slug !== slug)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url + '/' },
      { '@type': 'ListItem', position: 2, name: 'For Directors', item: siteConfig.url + '/for-directors/' },
      { '@type': 'ListItem', position: 3, name: director.name, item: `${siteConfig.url}/for-directors/${slug}/` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/for-directors/" className="hover:text-white">For Directors</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{director.name}</span>
          </nav>
          <span className="text-4xl mb-4 block">{director.icon}</span>
          <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Director Type
          </span>
          <h1 className="text-4xl font-extrabold text-white mb-4">{director.h1}</h1>
          <p className="text-gray-300 text-xl leading-relaxed max-w-3xl">
            {director.intro}
          </p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">

              {/* Long description */}
              {director.longDesc && (
                <section>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                    D&amp;O Insurance for {director.name}: The Full Picture
                  </h2>
                  <div className="space-y-4">
                    {director.longDesc.split('\n\n').map((para, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed text-base">{para}</p>
                    ))}
                  </div>
                </section>
              )}

              {/* Key risks */}
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                  Key Legal Risks for {director.name}
                </h2>
                <div className="space-y-3">
                  {director.risks.map((risk, i) => (
                    <div key={i} className="flex items-start gap-3 bg-red-50 rounded-xl p-4 border border-red-100">
                      <span className="text-red-500 font-bold mt-0.5 flex-shrink-0">!</span>
                      <p className="text-gray-700">{risk}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Real claim examples */}
              {director.claimExamples && director.claimExamples.length > 0 && (
                <section>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                    Real Claim Scenarios for {director.name}
                  </h2>
                  <div className="space-y-6">
                    {director.claimExamples.map((example, i) => (
                      <div key={i} className="bg-gray-900 rounded-2xl p-8">
                        <h3 className="text-lg font-bold text-white mb-6">{example.title}</h3>
                        <div className="space-y-5">
                          <div>
                            <span className="inline-block bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                              Situation
                            </span>
                            <p className="text-gray-300 leading-relaxed text-sm">{example.situation}</p>
                          </div>
                          <div>
                            <span className="inline-block bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                              Outcome
                            </span>
                            <p className="text-gray-300 leading-relaxed text-sm">{example.outcome}</p>
                          </div>
                          <div className="border-t border-gray-700 pt-5">
                            <span className="inline-block bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                              Lesson
                            </span>
                            <p className="text-orange-200 font-medium leading-relaxed text-sm">{example.lesson}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Cover recommendations */}
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                  Cover Recommendations for {director.name}
                </h2>
                <div className="space-y-3">
                  {director.coverNeeds.map((need, i) => (
                    <div key={i} className="flex items-start gap-3 bg-green-50 rounded-xl p-4 border border-green-100">
                      <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                      <p className="text-gray-700">{need}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Governance checklist */}
              {director.checklistItems && director.checklistItems.length > 0 && (
                <section>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                    Governance & Insurance Checklist for {director.name}
                  </h2>
                  <p className="text-gray-500 text-sm mb-6">
                    Use this checklist to ensure you have the right protections in place before accepting a director role or at your next board review.
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                    <div className="space-y-3">
                      {director.checklistItems.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 border-2 border-gray-300 rounded mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700 text-sm">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Pricing guide */}
              {director.pricingGuide && (
                <section className="bg-orange-50 border border-orange-100 rounded-2xl p-8">
                  <h2 className="text-xl font-extrabold text-gray-900 mb-4">
                    How Much Does D&amp;O Insurance Cost for {director.name}?
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{director.pricingGuide}</p>
                  <div className="mt-6">
                    <Link
                      href="/contact/"
                      className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
                    >
                      Get an Accurate Quote →
                    </Link>
                  </div>
                </section>
              )}

              {/* CTA */}
              <div className="bg-gray-900 rounded-2xl p-8 text-center">
                <h2 className="text-xl font-extrabold text-white mb-3">
                  Get D&amp;O Cover for {director.name}
                </h2>
                <p className="text-gray-400 mb-6">
                  Connect with a specialist broker who understands the unique risk profile of {director.name.toLowerCase()}. Free, no-obligation quote within 24 hours.
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

              {/* Other director types */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Other Director Types</h3>
                <ul className="space-y-2">
                  {otherDirectors.map((d) => (
                    <li key={d.slug}>
                      <Link
                        href={`/for-directors/${d.slug}/`}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 transition-colors py-1"
                      >
                        <span>{d.icon}</span>
                        <span>{d.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick stats */}
              <div className="bg-gray-900 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-4">Why Directors Get Sued</h3>
                <div className="space-y-4">
                  {[
                    { stat: '68%', label: 'of D&O claims are employment-related' },
                    { stat: '$2.1M', label: 'average cost of a defended D&O claim' },
                    { stat: '1 in 4', label: 'private company directors face a claim' },
                    { stat: '$800+', label: 'entry-level D&O cover per year' },
                  ].map((item, i) => (
                    <div key={i} className="border-b border-gray-700 pb-4 last:border-0 last:pb-0">
                      <p className="text-orange-400 font-extrabold text-xl">{item.stat}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coverage links */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Coverage Types</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    { slug: 'directors-and-officers', name: "Directors & Officers" },
                    { slug: 'management-liability', name: "Management Liability" },
                    { slug: 'professional-indemnity', name: "Professional Indemnity" },
                    { slug: 'statutory-liability', name: "Statutory Liability" },
                  ].map((c) => (
                    <li key={c.slug}>
                      <Link href={`/coverage/${c.slug}/`} className="text-gray-600 hover:text-orange-500 transition-colors">
                        {c.name} →
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
