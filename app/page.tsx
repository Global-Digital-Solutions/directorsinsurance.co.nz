import type { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import USPBar from '@/components/USPBar'
import { coverageTypes } from '@/data/coverage-types'
import { directorTypes } from '@/data/director-types'
import { providers } from '@/data/providers'
import { faqs } from '@/data/faqs'
import { blogPosts } from '@/data/blog-posts'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'D&O Insurance NZ | Directors & Officers Insurance | DirectorsInsurance.co.nz',
  description: 'Compare D&O insurance. Directors and officers cover from NZ$800/year. Quotes from licensed brokers — protect your directorship today.',
  alternates: { canonical: siteConfig.url + '/' },
}

const steps = [
  { num: '1', title: 'Tell Us About Your Role', desc: 'Share your director role, company type, and the cover you need using our simple online form.' },
  { num: '2', title: 'We Match You with a Broker', desc: 'We connect you with a specialist D&O insurance broker who understands your specific risk profile.' },
  { num: '3', title: 'Compare & Choose', desc: 'Your broker presents options from multiple insurers including Chubb, QBE, Vero, AIG, and Berkley. You choose.' },
]

export default function HomePage() {
  const topFaqs = faqs.slice(0, 5)
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-16 lg:py-24"
        style={{
          backgroundImage: 'url(/hero-professional.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                Specialist D&amp;O Insurance
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                D&amp;O Insurance <span className="text-orange-500">for Directors &amp; Officers</span>
              </h1>
              <p className="text-white drop-shadow text-xl leading-relaxed mb-8">
                Protect your personal assets with directors and officers insurance. From <strong className="text-orange-400">NZ$800/year</strong>. Quotes from licensed brokers — no obligation.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-orange-500">✓</span> Personal asset protection
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-orange-500">✓</span> All director types covered
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-orange-500">✓</span> Licensed advisers only
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-orange-500">✓</span> 24hr response
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact/" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
                  Get a Quote →
                </Link>
                <Link href="/coverage/" className="bg-gray-700 hover:bg-gray-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
                  Explore Coverage
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2 flex justify-end">
              <div className="w-full max-w-sm">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <USPBar />

      {/* Coverage Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Coverage Types</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">D&amp;O Insurance Cover Options</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">From standalone D&amp;O to comprehensive management liability — find the right protection for your directorship.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coverageTypes.map((c) => (
              <Link
                key={c.slug}
                href={`/coverage/${c.slug}/`}
                className="group bg-white border-2 border-gray-100 hover:border-orange-200 rounded-2xl p-6 transition-all hover:shadow-lg"
              >
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{c.name}</h3>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed line-clamp-2">{c.description.split('.')[0]}.</p>
                <p className="text-orange-500 font-bold text-sm">From {c.fromPrice}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/coverage/" className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
              View All Coverage Types →
            </Link>
          </div>
        </div>
      </section>

      {/* Director Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">For Directors</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">D&amp;O Cover for Every Type of Director</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Different directors carry different risks. Find cover tailored to your specific role and responsibilities.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {directorTypes.map((d) => (
              <Link
                key={d.slug}
                href={`/for-directors/${d.slug}/`}
                className="group bg-white border border-gray-200 hover:border-orange-300 rounded-2xl p-6 flex items-start gap-4 transition-all hover:shadow-md"
              >
                <span className="text-3xl flex-shrink-0">{d.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">{d.name}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{d.description.split('.')[0]}.</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/for-directors/" className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
              All Director Types →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">How It Works</span>
            <h2 className="text-3xl font-extrabold text-white mb-4">Get D&amp;O Cover in 3 Simple Steps</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Our service connects you with the right D&amp;O broker quickly — so you can focus on your board, not the paperwork.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-14 h-14 rounded-full bg-orange-500 text-white font-extrabold text-xl flex items-center justify-center mx-auto mb-4">
                  {s.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Provider Strip */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-widest mb-8">D&amp;O Insurers Our Brokers Access</p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {providers.map((p) => (
              <div key={p.slug} className="text-center">
                <p className="text-gray-700 font-bold text-sm">{p.name}</p>
                <p className="text-gray-400 text-xs">{p.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">FAQs</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Common D&amp;O Insurance Questions</h2>
          </div>
          <div className="space-y-4">
            {topFaqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faqs/" className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Latest Articles</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">D&amp;O Insurance Guides &amp; Resources</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group bg-white border border-gray-200 hover:border-orange-200 rounded-2xl p-6 transition-all hover:shadow-md"
              >
                <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{post.readTime}</span>
                  <span>{new Date(post.date).toLocaleDateString('en-NZ', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog/" className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
              View All Articles →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Protect Your Directorship Today</h2>
          <p className="text-orange-100 text-lg mb-8">
            Join directors who trust our broker matching service to find the right D&amp;O cover. No obligation — connect with a licensed specialist today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact/" className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-3 rounded-xl transition-colors">
              Get a Quote →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
