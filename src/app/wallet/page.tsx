export default function WalletPage() {
  return (
    <main className="min-h-screen bg-pit-dark pt-20">
      <section className="section">
        <h1 className="mb-4 gradient-text">pitlab-wallet</h1>
        <p className="text-gray-300 max-w-3xl">
          The PitLab Wallet is a free, open-source gift to the crypto community. It’s an air-gapped (simulated hardware)
          Trezor wallet build for Raspberry Pi. There are no fees or charges associated with using the wallet. Build it
          yourself, verify it yourself, own your security.
        </p>
      </section>

      <section className="section bg-pit-gray">
        <h2 className="mb-6 gradient-text">How to Use</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold text-pit-yellow mb-4">Build & Setup</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>Gather required parts (Raspberry Pi, secure storage, display, etc.).</li>
              <li>Follow the step-by-step build guide in the repository README.</li>
              <li>Flash the firmware and verify checksums.</li>
              <li>Connect to Base and test signing a transaction.</li>
            </ol>
            <p className="text-gray-400 text-sm mt-3">
              See <a className="text-pit-yellow underline" href="https://github.com/Octavepi/pitlab-wallet#readme" target="_blank" rel="noreferrer">pitlab-wallet/README.md</a> for detailed instructions.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-pit-yellow mb-4">Best Practices</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Never expose your seed; verify builds and checksums.</li>
              <li>Use air-gapped procedures where possible.</li>
              <li>Back up securely; test recovery before storing funds.</li>
              <li>Keep firmware and dependencies up to date.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="mb-6 gradient-text">FAQ</h2>
        <div className="space-y-4 max-w-3xl">
          <div className="card">
            <h3 className="font-bold text-pit-yellow">Is the wallet really free?</h3>
            <p className="text-gray-300">Yes. The wallet is fully free and open-source. No paywalls, no hidden fees.</p>
          </div>
          <div className="card">
            <h3 className="font-bold text-pit-yellow">Which networks are supported?</h3>
            <p className="text-gray-300">Base (Ethereum L2) is supported out of the box. The focus is on secure EVM support.</p>
          </div>
          <div className="card">
            <h3 className="font-bold text-pit-yellow">Where do I get help?</h3>
            <p className="text-gray-300">Open an issue on GitHub or join the community channels listed on the site.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
