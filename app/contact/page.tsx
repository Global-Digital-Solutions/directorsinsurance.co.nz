import type { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Contact | Get a Free D&O Insurance Quote',
  description: 'Contact DirectorsInsurance.co.nz for a free D&O insurance quote. Connect with a licensed broker for directors and officers cover.',
  alternates: { canonical: `${siteConfig.url}/contact/` },
}

export default function ContactPage() {
  return (
    <>
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Contact</span>
          </nav>
          <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Get a Quote</span>
          <h1 className="text-4xl font-extrabold text-white mb-4">Get a Free D&amp;O Insurance Quote</h1>
          <p className="text-gray-300 text-xl leading-relaxed max-w-2xl">
            Connect with a specialist D&amp;O insurance broker in minutes. No obligation.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <QuoteForm />
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Details</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-orange-500 text-xl">📞</span>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      hello@cover4you.co.nz
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-orange-500 text-xl">✉️</span>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href={`mailto:${siteConfig.email}`} className="font-bold text-gray-900 hover:text-orange-500 transition-colors">{siteConfig.email}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-orange-500 text-xl">🇳🇿</span>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-bold text-gray-900">New Zealand</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-2xl border border-orange-100 p-6">
                <h3 className="font-bold text-gray-900 mb-3">What Happens Next?</h3>
                <ol className="space-y-2">
                  {[
                    'We receive your enquiry and assess your requirements',
                    'We match you with a specialist D&O broker within 24 hours',
                    'Your broker contacts you to discuss cover options',
                    'You receive comparative quotes from multiple insurers',
                    'Choose the best option — or ask us to help you decide',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-gray-100 rounded-2xl p-6">
                <p className="text-xs text-gray-500 leading-relaxed">
                  DirectorsInsurance.co.nz is a referral service only. We connect you with licensed insurance brokers regulated under the Financial Markets Conduct Act 2013. We do not provide financial advice. See our <Link href="/disclaimer/" className="text-orange-500 underline">disclaimer</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
