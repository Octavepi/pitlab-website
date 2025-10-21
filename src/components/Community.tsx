export default function Community() {
  return (
    <section id="community" className="section bg-pit-gray">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-4 gradient-text">Join the PIT</h2>
        <p className="text-center text-pit-yellow text-xl mb-12">Sweat together. Build together.</p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* GitHub */}
          <a
            href="https://github.com/Octavepi"
            target="_blank"
            rel="noopener noreferrer"
            className="card hover:scale-105 transition-transform"
          >
            <div className="text-4xl mb-4 text-center">📦</div>
            <h3 className="text-xl font-bold text-pit-yellow mb-2 text-center">GitHub</h3>
            <p className="text-gray-400 text-center text-sm">
              All three repos - token, wallet, and website. Fork, star, contribute.
            </p>
          </a>

          {/* Discord - Coming Soon */}
          <div className="card opacity-60">
            <div className="text-4xl mb-4 text-center">💬</div>
            <h3 className="text-xl font-bold text-gray-400 mb-2 text-center">Discord</h3>
            <p className="text-gray-500 text-center text-sm">Coming Soon - Community chat and support</p>
          </div>

          {/* Telegram - Coming Soon */}
          <div className="card opacity-60">
            <div className="text-4xl mb-4 text-center">✈️</div>
            <h3 className="text-xl font-bold text-gray-400 mb-2 text-center">Telegram</h3>
            <p className="text-gray-500 text-center text-sm">Coming Soon - Quick updates and discussion</p>
          </div>
        </div>

        {/* Ecosystem Links */}
        <div className="card max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-bold text-pit-yellow mb-6 text-center">Ecosystem Repositories</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="https://github.com/Octavepi/pitlab-meme"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-pit-dark rounded hover:bg-pit-gray-light transition-colors"
            >
              <p className="font-bold mb-1">pitlab-meme</p>
              <p className="text-sm text-gray-400">Token contracts & deployment</p>
            </a>
            <a
              href="https://github.com/Octavepi/pitlab-wallet"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-pit-dark rounded hover:bg-pit-gray-light transition-colors"
            >
              <p className="font-bold mb-1">pitlab-wallet</p>
              <p className="text-sm text-gray-400">Pi Trezor hardware wallet</p>
            </a>
            <a
              href="https://github.com/Octavepi/pitlab-website"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-pit-dark rounded hover:bg-pit-gray-light transition-colors"
            >
              <p className="font-bold mb-1">pitlab-website</p>
              <p className="text-sm text-gray-400">Docs & website source</p>
            </a>
          </div>
        </div>

        {/* How to Contribute */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="card">
            <h3 className="text-xl font-bold text-pit-yellow mb-4">For Developers</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Submit pull requests</li>
              <li>• Report and fix bugs</li>
              <li>• Improve documentation</li>
              <li>• Review code</li>
              <li>• Write tests</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold text-pit-yellow mb-4">For Everyone</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Create memes and content</li>
              <li>• Share your Pi Trezor build</li>
              <li>• Help answer questions</li>
              <li>• Spread the word</li>
              <li>• HODL and build 💪</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
