import type { Metadata } from 'next'
import Link from 'next/link'
import { faqs } from '@/data/faqs'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'D&O Insurance FAQs NZ | Directors Insurance Questions Answered',
  description: 'Answers to common D&O insurance questions for directors. What is D&O, how much does it cost, what does it cover, and more.',
  alternates: { canonical: `${siteConfig.url}/faqs/` },
}

export default function FAQsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">FAQs</span>
          </nav>
          <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Common Questions</span>
          <h1 className="text-4xl font-extrabold text-white mb-4">D&amp;O Insurance FAQs</h1>
          <p className="text-gray-300 text-xl leading-relaxed max-w-2xl">
            Answers to the most common questions directors have about D&amp;O and management liability insurance.
          </p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h2>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-orange-50 rounded-2xl p-8 text-center border border-orange-100">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Have Another Question?</h2>
            <p className="text-gray-600 mb-6">Our specialist D&amp;O brokers can answer your specific questions about directors insurance. Connect with a broker for free.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
                Get Free Quote →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
