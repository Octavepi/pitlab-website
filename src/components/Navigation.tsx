export default function Navigation() {
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
            <a href="#about" className="hover:text-pit-yellow transition-colors">
              About
            </a>
            <a href="#tokenomics" className="hover:text-pit-yellow transition-colors">
              Token
            </a>
            <a href="#hardware" className="hover:text-pit-yellow transition-colors">
              Hardware
            </a>
            <a href="#roadmap" className="hover:text-pit-yellow transition-colors">
              Roadmap
            </a>
            <a href="#community" className="hover:text-pit-yellow transition-colors">
              Community
            </a>
            <a
              href="https://github.com/Octavepi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button (TODO: Add mobile menu) */}
          <div className="md:hidden">
            <button className="text-pit-yellow">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
