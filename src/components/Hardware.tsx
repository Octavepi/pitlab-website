export default function Hardware() {
  return (
    <section id="hardware" className="section bg-pit-gray">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-4 gradient-text">PitLab Wallet</h2>
        <p className="text-center text-pit-yellow text-xl mb-12">Build Your Own. Verify Everything.</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* What is it */}
          <div className="card">
            <h3 className="text-2xl font-bold text-pit-yellow mb-4">What is PitLab Wallet?</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              An air-gapped (simulated hardware) Trezor wallet build for Raspberry Pi — free and open-source.
              Build it yourself, verify it yourself.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>✅ Trezor-compatible firmware</li>
              <li>✅ Completely air-gapped (no network)</li>
              <li>✅ Read-only root filesystem</li>
              <li>✅ USB-only communication</li>
              <li>✅ Buildroot embedded Linux</li>
              <li>✅ Optional touchscreen support</li>
            </ul>
          </div>

          {/* Why Build One */}
          <div className="card">
            <h3 className="text-2xl font-bold text-pit-yellow mb-4">Why Build Your Own?</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-bold text-white mb-1">🔍 Verifiable Security</p>
                <p className="text-sm text-gray-400">
                  You control the entire build process. No black boxes.
                </p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">💰 Cost Effective</p>
                <p className="text-sm text-gray-400">
                  ~$35-150 depending on your Pi and display choice.
                </p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">🎓 Learn & Understand</p>
                <p className="text-sm text-gray-400">
                  Deep dive into how hardware wallets actually work.
                </p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">🌐 Open Source</p>
                <p className="text-sm text-gray-400">
                  MIT licensed. Fork, modify, improve. It's yours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Build Requirements */}
        <div className="card max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-bold text-pit-yellow mb-6 text-center">What You Need</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="font-bold mb-2">Hardware</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Raspberry Pi (3, 4, or 5)</li>
                <li>• MicroSD card (16GB+)</li>
                <li>• Power supply</li>
                <li>• USB cable</li>
                <li>• Optional: touchscreen</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-2">Software</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Pre-built image (easy)</li>
                <li>• Or build from source</li>
                <li>• Trezor Suite (desktop)</li>
                <li>• Balena Etcher (flashing)</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-2">Time</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• 30 min setup (pre-built)</li>
                <li>• 2-3 hours (build from source)</li>
                <li>• Lifetime of security</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://github.com/Octavepi/pitlab-wallet"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            📖 View Build Guide
          </a>
          <p className="mt-4 text-sm text-gray-400">
            Full instructions, parts list, and community support on GitHub
          </p>
        </div>
      </div>
    </section>
  )
}
