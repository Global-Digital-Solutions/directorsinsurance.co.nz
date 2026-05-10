import type { Metadata } from 'next'
import Link from 'next/link'
import { providers } from '@/data/providers'
import { coverageTypes } from '@/data/coverage-types'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Compare D&O Insurance NZ | Directors Cover Comparison',
  description: 'Compare D&O insurance providers and coverage types. Chubb, QBE, Vero, AIG, Berkley compared. Broker matching for directors.',
  alternates: { canonical: `${siteConfig.url}/compare/` },
}

export default function ComparePage() {
  return (
    <>
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Compare</span>
          </nav>
          <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Provider Comparison</span>
          <h1 className="text-4xl font-extrabold text-white mb-4">Compare D&amp;O Insurance Providers</h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            Compare leading D&amp;O insurers in the New Zealand market — including Chubb, QBE, Vero, AIG, and Berkley. Find the right policy for your director risk profile.
          </p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Providers */}
          <section className="mb-16">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Leading D&amp;O Insurers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {providers.map((p) => (
                <div key={p.slug} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-orange-200 transition-all hover:shadow-md">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                    <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-2 py-0.5 rounded-full">{p.specialty}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-orange-50 rounded-2xl p-6 border border-orange-100">
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Note:</strong> Provider information is for general reference only. Policy terms, pricing, and availability change regularly. Our specialist brokers access the full market and can provide current, accurate comparisons for your specific risk profile. Use our free service to get a personalised comparison.
              </p>
            </div>
          </section>

          {/* Coverage comparison */}
          <section className="mb-16">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">D&amp;O Coverage Types Compared</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="text-left px-4 py-3 font-bold">Coverage Type</th>
                    <th className="text-left px-4 py-3 font-bold">What It Covers</th>
                    <th className="text-left px-4 py-3 font-bold">From</th>
                    <th className="text-left px-4 py-3 font-bold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {coverageTypes.map((c, i) => (
                    <tr key={c.slug} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 border border-gray-200 font-bold text-gray-900">
                        <Link href={`/coverage/${c.slug}/`} className="hover:text-orange-500 transition-colors">
                          {c.icon} {c.name}
                        </Link>
                      </td>
                      <td className="px-4 py-3 border border-gray-200 text-gray-600">{c.description.split('.')[0]}.</td>
                      <td className="px-4 py-3 border border-gray-200 text-orange-600 font-bold">{c.fromPrice}</td>
                      <td className="px-4 py-3 border border-gray-200 text-gray-600">{c.whoNeeds[0]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gray-900 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold text-white mb-4">Get a Personalised D&amp;O Comparison</h2>
            <p className="text-gray-400 mb-6">Our specialist brokers compare multiple insurers on your behalf — free of charge.</p>
            <Link href="/contact/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
              Get a Quote →
            </Link>
          </section>
        </div>
      </div>
    </>
  )
}
