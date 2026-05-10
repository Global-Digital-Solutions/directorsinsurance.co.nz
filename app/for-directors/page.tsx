import type { Metadata } from 'next'
import Link from 'next/link'
import { directorTypes } from '@/data/director-types'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'D&O Insurance for NZ Directors | By Director Type',
  description: 'Find D&O insurance tailored to your director type — SME directors, startup founders, NEDs, listed company directors, trustees, and CEOs. Broker matching.',
  alternates: { canonical: `${siteConfig.url}/for-directors/` },
}

export default function ForDirectorsPage() {
  return (
    <>
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">For Directors</span>
          </nav>
          <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Director Types</span>
          <h1 className="text-4xl font-extrabold text-white mb-4">D&amp;O Insurance for Every Type of NZ Director</h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            Different directors carry different risks. Find D&amp;O cover tailored to your specific role, responsibilities, and company type.
          </p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
            {directorTypes.map((d) => (
              <Link
                key={d.slug}
                href={`/for-directors/${d.slug}/`}
                className="group bg-white border-2 border-gray-100 hover:border-orange-200 rounded-2xl p-8 transition-all hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{d.icon}</div>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-3">{d.name}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{d.description}</p>
                <h3 className="font-bold text-gray-900 text-sm mb-2">Key Risks:</h3>
                <ul className="space-y-1 mb-4">
                  {d.risks.slice(0, 2).map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
                      <span className="text-orange-500 mt-0.5">•</span>
                      {r}
                    </li>
                  ))}
                </ul>
                <span className="text-orange-500 font-bold text-sm group-hover:text-orange-600">Learn More →</span>
              </Link>
            ))}
          </div>

          <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Not Sure What Cover You Need?</h2>
              <p className="text-gray-600 mb-6">A specialist D&amp;O broker can assess your specific director role and recommend the most appropriate protection for your personal liability exposure.</p>
              <Link href="/contact/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
                Get Broker Advice →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
