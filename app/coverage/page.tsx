import type { Metadata } from 'next'
import Link from 'next/link'
import { coverageTypes } from '@/data/coverage-types'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'D&O Insurance Coverage Types NZ | Directors Cover Options',
  description: 'Compare D&O insurance coverage types — directors and officers, management liability, professional indemnity, and statutory liability. Free broker quotes.',
  alternates: { canonical: `${siteConfig.url}/coverage/` },
}

export default function CoveragePage() {
  return (
    <>
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Coverage</span>
          </nav>
          <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Coverage Types</span>
          <h1 className="text-4xl font-extrabold text-white mb-4">D&amp;O Insurance Coverage Types</h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            From standalone D&amp;O to comprehensive management liability packages — compare the coverage options available to directors and choose the right protection.
          </p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-14">
            {coverageTypes.map((c) => (
              <Link
                key={c.slug}
                href={`/coverage/${c.slug}/`}
                className="group bg-white border-2 border-gray-100 hover:border-orange-200 rounded-2xl p-8 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{c.icon}</span>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{c.name}</h2>
                    <p className="text-orange-500 font-bold text-sm mt-1">From {c.fromPrice}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">{c.description}</p>
                <h3 className="font-bold text-gray-900 text-sm mb-2">Key Facts:</h3>
                <ul className="space-y-1 mb-4">
                  {c.keyFacts.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-orange-500 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="text-orange-500 font-bold text-sm group-hover:text-orange-600">Learn More →</span>
              </Link>
            ))}
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold text-white mb-4">Not Sure Which Cover You Need?</h2>
            <p className="text-gray-400 mb-6">A specialist D&amp;O broker can assess your specific situation and recommend the right combination of cover.</p>
            <Link href="/contact/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
              Get Free Broker Advice →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
