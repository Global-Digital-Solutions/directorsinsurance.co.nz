import type { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Get a D&O Insurance Quote | DirectorsInsurance.co.nz',
  description: 'Connect with a specialist D&O insurance broker. Submit your details and receive comparative quotes from licensed advisers within 24 hours.',
  alternates: { canonical: `${siteConfig.url}/contact/` },
}

const trustBadges = [
  {
    icon: '🏆',
    title: 'Licensed Brokers Only',
    desc: 'Every adviser we refer is FMCA-regulated and fully licensed.',
  },
  {
    icon: '⚡',
    title: '24-Hour Response',
    desc: 'A specialist broker will be in touch within one business day.',
  },
  {
    icon: '🇳🇿',
    title: 'Local D&O Specialists',
    desc: 'Brokers with deep expertise in directors liability cover.',
  },
  {
    icon: '🔒',
    title: 'No Obligation',
    desc: 'Review your options and decide in your own time — no pressure.',
  },
]

const steps = [
  'Submit your details using the form',
  'We match you with a specialist D&O broker within 24 hours',
  'Your broker contacts you to discuss your cover requirements',
  'You receive comparative quotes from multiple insurers',
  'Choose the right option — your broker guides you through it',
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative border-b border-gray-700"
        style={{
          backgroundImage: 'url(/hero-boardroom.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          minHeight: '360px',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col justify-end" style={{ minHeight: '360px' }}>
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Contact</span>
          </nav>
          <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-fit">
            Get a Quote
          </span>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Talk to a D&amp;O Insurance Specialist
          </h1>
          <p className="text-gray-300 text-xl leading-relaxed max-w-2xl">
            Submit your details below and we&apos;ll connect you with a licensed broker who specialises in directors and officers cover.
          </p>
        </div>
      </div>

      {/* Main body */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* LEFT — trust + copy */}
            <div className="lg:col-span-2 space-y-8">

              {/* Intro copy */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                  Why Submit Your Details?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  D&amp;O insurance is not a commodity purchase — the right cover depends on your company structure, number of directors, revenue, industry, and risk profile. A specialist broker does the comparison work for you.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Fill in the form and we&apos;ll match you with an adviser who accesses the full market — Chubb, QBE, Vero, AIG, Berkley, and others — and presents you with options tailored to your situation.
                </p>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-1 gap-4">
                {trustBadges.map((badge) => (
                  <div key={badge.title} className="flex items-start gap-4 bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                    <span className="text-3xl flex-shrink-0">{badge.icon}</span>
                    <div>
                      <p className="font-extrabold text-gray-900 text-sm">{badge.title}</p>
                      <p className="text-gray-500 text-sm mt-0.5">{badge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* What happens next */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
                <h3 className="font-extrabold text-gray-900 mb-4">What Happens Next</h3>
                <ol className="space-y-3">
                  {steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Disclaimer note */}
              <p className="text-xs text-gray-400 leading-relaxed">
                DirectorsInsurance.co.nz is a referral service only. We connect you with licensed insurance brokers regulated under the Financial Markets Conduct Act 2013. We do not provide financial advice.{' '}
                <Link href="/disclaimer/" className="text-orange-500 underline hover:text-orange-600">
                  See full disclaimer
                </Link>.
              </p>
            </div>

            {/* RIGHT — form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-1">Request a Quote</h2>
                  <p className="text-gray-500 text-sm">Takes less than 2 minutes. A broker will be in touch within 24 hours.</p>
                </div>
                <QuoteForm />
              </div>

              {/* Social proof strip */}
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                {[
                  { stat: '24hr', label: 'average broker response' },
                  { stat: '5+', label: 'insurers accessed' },
                  { stat: '100%', label: 'licensed advisers' },
                ].map((item) => (
                  <div key={item.stat} className="bg-white rounded-xl border border-gray-200 py-4 px-3">
                    <p className="text-orange-500 font-extrabold text-xl">{item.stat}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
