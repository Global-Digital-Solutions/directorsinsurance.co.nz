'use client'

import Link from 'next/link'
import { useState } from 'react'
import { siteConfig } from '@/data/site-config'
import { coverageTypes } from '@/data/coverage-types'
import { directorTypes } from '@/data/director-types'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [coverageOpen, setCoverageOpen] = useState(false)
  const [directorsOpen, setDirectorsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="bg-orange-500 text-white font-extrabold text-sm px-2 py-1 rounded-lg">D&amp;O</span>
            <span className="text-gray-900 font-extrabold text-lg">
              Directors<span className="text-orange-500">Insurance</span>
            </span>
            <span className="text-gray-400 text-sm hidden sm:inline">.co.nz</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* Coverage Dropdown */}
            <div className="relative" onMouseEnter={() => setCoverageOpen(true)} onMouseLeave={() => setCoverageOpen(false)}>
              <button className="text-gray-600 hover:text-gray-900 text-sm font-medium flex items-center gap-1 py-2">
                Coverage
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {coverageOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50">
                  {coverageTypes.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/coverage/${c.slug}/`}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      <span>{c.icon}</span>
                      <span>{c.name}</span>
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <Link href="/coverage/" className="flex items-center gap-3 px-4 py-2 text-sm text-orange-500 hover:text-orange-600 font-medium">
                      View All Coverage →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* For Directors Dropdown */}
            <div className="relative" onMouseEnter={() => setDirectorsOpen(true)} onMouseLeave={() => setDirectorsOpen(false)}>
              <button className="text-gray-600 hover:text-gray-900 text-sm font-medium flex items-center gap-1 py-2">
                For Directors
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {directorsOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50">
                  {directorTypes.map((d) => (
                    <Link
                      key={d.slug}
                      href={`/for-directors/${d.slug}/`}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      <span>{d.icon}</span>
                      <span>{d.name}</span>
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <Link href="/for-directors/" className="flex items-center gap-3 px-4 py-2 text-sm text-orange-500 hover:text-orange-600 font-medium">
                      All Director Types →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/compare/" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Compare</Link>
            <Link href="/blog/" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Blog</Link>
            <Link href="/faqs/" className="text-gray-600 hover:text-gray-900 text-sm font-medium">FAQs</Link>
            <Link href="/about/" className="text-gray-600 hover:text-gray-900 text-sm font-medium">About</Link>
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact/"
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors"
            >
              Get Free Quote
            </Link>
            <button
              className="lg:hidden text-gray-600 hover:text-gray-900 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <div>
            <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Coverage Types</p>
            {coverageTypes.map((c) => (
              <Link
                key={c.slug}
                href={`/coverage/${c.slug}/`}
                className="flex items-center gap-2 py-1.5 text-sm text-gray-700 hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                {c.icon} {c.name}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-100 pt-3">
            <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">For Directors</p>
            {directorTypes.map((d) => (
              <Link
                key={d.slug}
                href={`/for-directors/${d.slug}/`}
                className="flex items-center gap-2 py-1.5 text-sm text-gray-700 hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                {d.icon} {d.name}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-100 pt-3 space-y-1">
            {[
              { href: '/compare/', label: 'Compare Providers' },
              { href: '/blog/', label: 'Blog' },
              { href: '/faqs/', label: 'FAQs' },
              { href: '/about/', label: 'About' },
              { href: '/contact/', label: 'Contact' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block py-1.5 text-sm text-gray-700 hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
