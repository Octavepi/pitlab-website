export default function Footer() {
  return (
    <footer className="bg-pit-dark border-t border-pit-gray-light py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="font-bold text-pit-yellow mb-4">PITLAB</h4>
            <p className="text-sm text-gray-400">
              Sweat-secured. ARM-powered. Built in the PIT.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-pit-yellow mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="https://github.com/Octavepi/pitlab-website/blob/main/docs/WHITEPAPER.md" className="hover:text-pit-yellow">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="https://github.com/Octavepi/pitlab-website/blob/main/docs/TOKENOMICS.md" className="hover:text-pit-yellow">
                  Tokenomics
                </a>
              </li>
              <li>
                <a href="https://github.com/Octavepi/pitlab-website/blob/main/docs/FAQ.md" className="hover:text-pit-yellow">
                  FAQ
                </a>
              </li>
              <li>
                <a href="https://github.com/Octavepi/pitlab-website/blob/main/docs/ROADMAP.md" className="hover:text-pit-yellow">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Repos */}
          <div>
            <h4 className="font-bold text-pit-yellow mb-4">Repositories</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="https://github.com/Octavepi/pitlab-meme" className="hover:text-pit-yellow">
                  Token (pitlab-meme)
                </a>
              </li>
              <li>
                <a href="https://github.com/Octavepi/pitlab-wallet" className="hover:text-pit-yellow">
                  Wallet (pitlab-wallet)
                </a>
              </li>
              <li>
                <a href="https://github.com/Octavepi/pitlab-website" className="hover:text-pit-yellow">
                  Website (pitlab-website)
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-bold text-pit-yellow mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="https://github.com/Octavepi" className="hover:text-pit-yellow">
                  GitHub
                </a>
              </li>
              <li className="text-gray-600">Discord (Coming Soon)</li>
              <li className="text-gray-600">Telegram (Coming Soon)</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-pit-gray-light pt-8 mb-8">
          <div className="bg-pit-yellow/10 border border-pit-yellow/30 rounded p-4 mb-4">
            <p className="text-sm text-gray-400 text-center">
              <span className="text-pit-yellow font-bold">⚠️ Important Disclaimer:</span> This is an experimental meme token with no intrinsic monetary value.
              No promises of profit are made. This is not financial, investment, or legal advice. DYOR. Use at your own risk.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p className="mb-2">
            © 2025 PITLAB Contributors • MIT License • Open Source
          </p>
          <p className="italic text-pit-yellow">
            Sweat together. Build together. The PIT never sleeps. 🏋️‍♂️💪
          </p>
        </div>
      </div>
    </footer>
  )
}
