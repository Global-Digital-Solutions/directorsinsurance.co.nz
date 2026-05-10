import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Thank You | Quote Request Received',
  description: 'Your D&O insurance quote request has been received. A specialist NZ broker will contact you within 24 hours.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12">
          <div className="w-16 h-16 rounded-full bg-green-100 text-green-500 text-3xl flex items-center justify-center mx-auto mb-6">
            ✓
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Thank You — Quote Request Received</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Your D&amp;O insurance enquiry has been received. A specialist NZ insurance broker will contact you within 24 hours to discuss your requirements and provide competitive quotes.
          </p>
          <div className="bg-orange-50 rounded-xl p-6 mb-8 text-left border border-orange-100">
            <h2 className="font-bold text-gray-900 mb-3">What happens next?</h2>
            <ol className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">1.</span> We review your requirements and match you with the most appropriate specialist broker</li>
              <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">2.</span> Your broker contacts you (usually within a few hours during business days)</li>
              <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">3.</span> Your broker obtains quotes from multiple D&amp;O insurers including Chubb, QBE, Vero, AIG, and Berkley</li>
              <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">4.</span> You compare options and choose the best cover for your needs</li>
            </ol>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              📞 Call Now: {siteConfig.phone}
            </a>
          </div>
          <Link href="/" className="text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors">
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
