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
          <p className="text-gray-300 text-xl leading-relaxed max-w-2xl">
            {director.intro}
          </p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Key Risks for {director.name}</h2>
                <div className="space-y-3">
                  {director.risks.map((risk, i) => (
                    <div key={i} className="flex items-start gap-3 bg-red-50 rounded-xl p-4 border border-red-100">
                      <span className="text-red-500 font-bold mt-0.5">!</span>
                      <p className="text-gray-700">{risk}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Cover Recommendations for {director.name}</h2>
                <div className="space-y-3">
                  {director.coverNeeds.map((need, i) => (
                    <div key={i} className="flex items-start gap-3 bg-green-50 rounded-xl p-4 border border-green-100">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      <p className="text-gray-700">{need}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="bg-gray-900 rounded-2xl p-8 text-center">
                <h2 className="text-xl font-extrabold text-white mb-3">Get D&amp;O Cover for {director.name}</h2>
                <p className="text-gray-400 mb-6">Connect with a specialist NZ broker who understands the unique risk profile of {director.name.toLowerCase()}.</p>
                <Link href="/contact/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
                  Get Free Quote →
                </Link>
              </div>
            </div>

            <aside className="space-y-6">
              <QuoteForm compact />

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Other Director Types</h3>
                <ul className="space-y-2">
                  {otherDirectors.map((d) => (
                    <li key={d.slug}>
                      <Link href={`/for-directors/${d.slug}/`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 transition-colors">
                        <span>{d.icon}</span>
                        {d.name}
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
