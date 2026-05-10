import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Disclaimer | DirectorsInsurance.co.nz',
  description: 'Full disclaimer for DirectorsInsurance.co.nz. This site is a referral service only — not a regulated financial adviser.',
  alternates: { canonical: `${siteConfig.url}/disclaimer/` },
}

export default function DisclaimerPage() {
  return (
    <>
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Disclaimer</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-4">Disclaimer</h1>
          <p className="text-gray-400 text-sm">Last updated: 10 May 2026</p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-2">Important Notice</h2>
              <p className="text-gray-700">DirectorsInsurance.co.nz is an information and referral service only. We are NOT a licensed financial adviser and do NOT provide financial advice. Only the licensed insurance brokers and advisers to whom we refer you are regulated under the Financial Markets Conduct Act 2013.</p>
            </div>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Nature of This Website</h2>
              <p>DirectorsInsurance.co.nz provides general information about D&amp;O insurance and management liability insurance. The information on this website is for educational and informational purposes only and does not constitute financial advice, insurance advice, or legal advice.</p>
              <p className="mt-3">This website operates as a referral service, connecting individuals and companies with licensed insurance brokers. We do not underwrite insurance, bind coverage, or act as an insurance intermediary.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">No Financial Advice</h2>
              <p>Nothing on this website constitutes &ldquo;regulated financial advice&rdquo; as defined under the Financial Markets Conduct Act 2013 (FMCA). The information provided is general in nature and has not been prepared taking into account your specific financial situation, objectives, or needs.</p>
              <p className="mt-3">Before making any decision about insurance, you should seek advice from a licensed financial adviser who can assess your individual circumstances. The brokers we refer you to are licensed under the FMCA and can provide personalised financial advice.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Accuracy of Information</h2>
              <p>While we take reasonable care to ensure the accuracy of information on this website, insurance products, pricing, terms, and availability change regularly. We make no warranty as to the completeness, accuracy, or currency of any information. Always verify current details with the relevant licensed broker or insurer.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Referral Arrangements</h2>
              <p>DirectorsInsurance.co.nz receives referral fees from insurance brokers when users of this website proceed to obtain insurance through those brokers. This arrangement does not increase the cost of insurance to you — the broker is separately remunerated by commission from the insurer.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Third-Party Broker Responsibility</h2>
              <p>The licensed brokers to whom we refer users are independent businesses and are solely responsible for the advice and services they provide. DirectorsInsurance.co.nz does not accept any responsibility for the conduct, advice, or services of referred brokers.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
              <p>For questions about this disclaimer, contact us at <a href="mailto:hello@cover4you.co.nz" className="text-orange-500 hover:underline">hello@cover4you.co.nz</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
