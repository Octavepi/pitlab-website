export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pit-dark via-pit-gray to-pit-dark pt-16">
      <div className="section text-center">
        {/* Main Heading */}
        <h1 className="mb-6 animate-pulse-slow">
          <span className="gradient-text">ARMPIT</span>
          <span className="text-white"> ($PITLAB)</span>
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl text-pit-yellow font-bold mb-4">
          Sweat-secured. ARM-powered. Built in the PIT.
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          An experimental meme-utility token on Base chain supporting open hardware,
          DIY security, and the grassroots developer movement behind the Pi Trezor initiative.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
          <a href="#tokenomics" className="btn-primary">
            Get $PITLAB
          </a>
          <a href="#hardware" className="btn-secondary">
            Build Pi Trezor
          </a>
          <a
            href="https://github.com/Octavepi/pitlab-website/blob/main/docs/WHITEPAPER.md"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Read Whitepaper
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="card">
            <div className="text-3xl font-bold text-pit-yellow mb-2">1B</div>
            <div className="text-sm text-gray-400">Total Supply</div>
          </div>
          <div className="card">
            <div className="text-3xl font-bold text-pit-yellow mb-2">100%</div>
            <div className="text-sm text-gray-400">Fair Launch</div>
          </div>
          <div className="card">
            <div className="text-3xl font-bold text-pit-yellow mb-2">0%</div>
            <div className="text-sm text-gray-400">Tax</div>
          </div>
          <div className="card">
            <div className="text-3xl font-bold text-pit-yellow mb-2">Base</div>
            <div className="text-sm text-gray-400">Chain</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce-slow">
          <svg className="w-6 h-6 mx-auto text-pit-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
