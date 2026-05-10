import Link from 'next/link'
import { siteConfig } from '@/data/site-config'
import { coverageTypes } from '@/data/coverage-types'
import { directorTypes } from '@/data/director-types'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand + CTA */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="bg-orange-500 text-white font-extrabold text-sm px-2 py-1 rounded-lg">D&amp;O</span>
              <span className="text-white font-extrabold text-lg">
                Directors<span className="text-orange-500">Insurance</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              NZ&apos;s specialist D&amp;O insurance referral service. Connecting directors with licensed insurance brokers.
            </p>
            <Link
              href="/contact/"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors mb-4"
            >
              Get a Quote
            </Link>
            <div className="text-sm text-gray-400 space-y-1">
              <p>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  ✉️ {siteConfig.email}
                </a>
              </p>
            </div>
          </div>

          {/* Coverage Types */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Coverage Types</h3>
            <ul className="space-y-2">
              {coverageTypes.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/coverage/${c.slug}/`}
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-xs">{c.icon}</span>
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/coverage/" className="text-orange-400 hover:text-orange-300 text-sm font-medium">
                  All Coverage →
                </Link>
              </li>
            </ul>
          </div>

          {/* For Directors */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">For Directors</h3>
            <ul className="space-y-2">
              {directorTypes.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/for-directors/${d.slug}/`}
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-xs">{d.icon}</span>
                    {d.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/for-directors/" className="text-orange-400 hover:text-orange-300 text-sm font-medium">
                  All Director Types →
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Blog</Link></li>
              <li><Link href="/blog/directors-duties-nz-companies-act/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Directors&apos; Duties Guide</Link></li>
              <li><Link href="/blog/do-insurance-cost-nz-2026/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">D&amp;O Cost Guide 2026</Link></li>
              <li><Link href="/blog/management-liability-vs-do-insurance/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">D&amp;O vs Management Liability</Link></li>
              <li><Link href="/blog/run-off-cover-directors-leaving-boards/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Run-Off Cover Guide</Link></li>
              <li><Link href="/blog/ned-personal-do-cover/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">NED Cover Guide</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/compare/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Compare Providers</Link></li>
              <li><Link href="/directors-insurance/cheap/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Cheap D&amp;O Insurance</Link></li>
              <li><Link href="/directors-insurance/cost/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">D&amp;O Cost Guide</Link></li>
              <li><Link href="/directors-insurance/sme/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">SME Directors</Link></li>
              <li><Link href="/faqs/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">FAQs</Link></li>
              <li><Link href="/about/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">About Us</Link></li>
              <li><Link href="/contact/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            <strong className="text-gray-400">Disclaimer:</strong> DirectorsInsurance.co.nz is an information and referral service only. We connect you with licensed insurance brokers and advisers who are regulated under the Financial Markets Conduct Act 2013 (FMCA). DirectorsInsurance.co.nz itself is not a registered financial adviser and does not provide financial advice. All insurance recommendations and quotations are provided by the referred licensed advisers, not by this website. See our{' '}
            <Link href="/disclaimer/" className="hover:text-orange-400 underline">full disclaimer</Link>.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} DirectorsInsurance.co.nz — All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-xs">
              <Link href="/privacy/" className="text-gray-500 hover:text-orange-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms/" className="text-gray-500 hover:text-orange-400 transition-colors">Terms of Use</Link>
              <Link href="/disclaimer/" className="text-gray-500 hover:text-orange-400 transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
