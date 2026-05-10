import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { landingPages, getLandingPageBySlug } from '@/data/landing-pages'
import { siteConfig } from '@/data/site-config'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return landingPages.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getLandingPageBySlug(slug)
  if (!page) return {}
  return {
    title: page.metaTitle,
    description: page.metaDesc,
    alternates: { canonical: `${siteConfig.url}/directors-insurance/${slug}/` },
  }
}

export default async function DirectorsInsuranceLandingPage({ params }: Props) {
  const { slug } = await params
  const page = getLandingPageBySlug(slug)
  if (!page) notFound()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url + '/' },
      { '@type': 'ListItem', position: 2, name: "Directors Insurance", item: siteConfig.url + '/directors-insurance/' },
      { '@type': 'ListItem', position: 3, name: page.title, item: `${siteConfig.url}/directors-insurance/${slug}/` },
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
            <span className="text-white">{page.title}</span>
          </nav>
          <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">D&amp;O Insurance NZ</span>
          <h1 className="text-4xl font-extrabold text-white mb-4">{page.hero}</h1>
          <p className="text-gray-300 text-xl leading-relaxed max-w-2xl">{page.intro}</p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              {page.sections.map((section, i) => (
                <section key={i}>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-4">{section.heading}</h2>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    {section.body.split('\n\n').map((para, j) => {
                      if (para.startsWith('- ')) {
                        const items = para.split('\n').filter(l => l.startsWith('- '))
                        return (
                          <ul key={j} className="list-disc list-inside space-y-2">
                            {items.map((item, k) => (
                              <li key={k} dangerouslySetInnerHTML={{ __html: item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                            ))}
                          </ul>
                        )
                      }
                      return <p key={j} dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    })}
                  </div>
                </section>
              ))}

              <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Get a Free D&amp;O Quote</h2>
                <p className="text-gray-600 mb-6">Connect with a specialist D&amp;O insurance broker for competitive quotes from multiple providers.</p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                    Get Free Quote →
                  </Link>
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                    Call {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <QuoteForm compact />

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Popular D&amp;O Pages</h3>
                <ul className="space-y-2">
                  {[
                    { href: '/directors-insurance/cheap/', label: 'Cheap D&O Insurance' },
                    { href: '/directors-insurance/best/', label: 'Best D&O Insurance' },
                    { href: '/directors-insurance/compare/', label: 'Compare D&O' },
                    { href: '/directors-insurance/cost/', label: 'D&O Cost Guide' },
                    { href: '/directors-insurance/sme/', label: 'SME Directors' },
                    { href: '/directors-insurance/startup/', label: 'Startup Founders' },
                    { href: '/directors-insurance/auckland/', label: 'Auckland D&O' },
                    { href: '/directors-insurance/wellington/', label: 'Wellington D&O' },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-orange-500 hover:text-orange-600 text-sm transition-colors">
                        {l.label} →
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
