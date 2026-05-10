import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Terms of Use | DirectorsInsurance.co.nz',
  description: 'Terms of Use for DirectorsInsurance.co.nz. Rules governing use of this website and referral service.',
  alternates: { canonical: `${siteConfig.url}/terms/` },
}

export default function TermsPage() {
  return (
    <>
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Terms of Use</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-4">Terms of Use</h1>
          <p className="text-gray-400 text-sm">Last updated: 10 May 2026</p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p>By using DirectorsInsurance.co.nz (&ldquo;the Website&rdquo;), you agree to these Terms of Use. If you do not agree, please do not use the Website.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Nature of Service</h2>
              <p>The Website is an information and referral service only. It does not provide financial advice or sell insurance products. All insurance advice and quotations are provided by licensed NZ insurance brokers to whom you may be referred.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. No Financial Advice</h2>
              <p>Nothing on this Website constitutes financial advice as defined under the Financial Markets Conduct Act 2013. The information provided is general in nature and does not take into account your individual circumstances. Always seek advice from a licensed financial adviser before making insurance decisions.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Accuracy of Information</h2>
              <p>We take reasonable care to ensure the accuracy of information on this Website, but we make no warranty as to its completeness, accuracy, or currency. Insurance products, pricing, and availability change regularly. Always verify current details with the relevant insurer or broker.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Third-Party Brokers</h2>
              <p>When you are referred to a broker, you enter into a direct relationship with that broker. We are not party to that relationship and accept no responsibility for the advice, products, or services provided by referred brokers.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, DirectorsInsurance.co.nz excludes all liability for any loss or damage arising from use of this Website or reliance on information contained on it.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Governing Law</h2>
              <p>These Terms are governed by New Zealand law. Any disputes are subject to the exclusive jurisdiction of New Zealand courts.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Contact</h2>
              <p>Questions about these Terms should be directed to <a href="mailto:hello@cover4you.co.nz" className="text-orange-500 hover:underline">hello@cover4you.co.nz</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
