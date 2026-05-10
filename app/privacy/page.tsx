import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Privacy Policy | DirectorsInsurance.co.nz',
  description: 'Privacy Policy for DirectorsInsurance.co.nz. How we collect, use, and protect your personal information.',
  alternates: { canonical: `${siteConfig.url}/privacy/` },
}

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last updated: 10 May 2026</p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose max-w-none">
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Who We Are</h2>
              <p>DirectorsInsurance.co.nz (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is an insurance referral service operated. Our contact email is <a href="mailto:hello@cover4you.co.nz" className="text-orange-500 hover:underline">hello@cover4you.co.nz</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
              <p>We collect personal information that you provide when submitting a quote request, including your name, email address, phone number, director role, and company details. We also collect standard website usage data through analytics tools.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
              <p>We use your information to match you with appropriate licensed insurance brokers, to respond to your enquiries, and to improve our service. We do not sell your personal information to third parties other than the licensed brokers we refer you to as part of our service.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Sharing Your Information</h2>
              <p>When you submit a quote request, your information is shared with one or more licensed insurance brokers who will contact you to discuss your insurance needs. These brokers are bound by their own privacy obligations under the Privacy Act 2020.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Your Rights Under the Privacy Act 2020</h2>
              <p>Under the Privacy Act 2020, you have the right to access personal information we hold about you and to request corrections to that information. To exercise these rights, contact us at <a href="mailto:hello@cover4you.co.nz" className="text-orange-500 hover:underline">hello@cover4you.co.nz</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Cookies</h2>
              <p>We use cookies for website analytics and performance purposes. By using our website, you consent to our use of cookies. You can disable cookies in your browser settings, though this may affect website functionality.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Contact</h2>
              <p>For privacy-related enquiries, contact us at <a href="mailto:hello@cover4you.co.nz" className="text-orange-500 hover:underline">hello@cover4you.co.nz</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
