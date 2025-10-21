'use client'

import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#tokenomics', label: 'Token' },
    { href: '#hardware', label: 'Hardware' },
    { href: '#roadmap', label: 'Roadmap' },
    { href: '#community', label: 'Community' },
    { href: '/features', label: 'Premium' },
    { href: '/eltmm', label: 'ELTMM' },
    { href: '/wallet', label: 'Wallet' },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-pit-dark/95 backdrop-blur-sm border-b border-pit-gray-light z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold gradient-text">PITLAB</span>
            <span className="text-sm text-pit-yellow">💪</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-pit-yellow transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/Octavepi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-pit-yellow"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-pit-gray-light">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="hover:text-pit-yellow transition-colors px-4 py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/Octavepi"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="btn-primary mx-4"
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
