export default function EltmmPage() {
  return (
    <main className="min-h-screen bg-pit-dark pt-20">
      <section className="section">
        <h1 className="mb-4 gradient-text">pitlab-eltmm</h1>
        <p className="text-gray-300 max-w-3xl">
          pitlab-eltmm is the Ethical Launch & Trading Market Maker CLI. It powers premium features like
          MEV bundling, automated market making, and advanced analytics. Feature access is verified on-chain
          via the PaymentRouter using $PITLAB.
        </p>
      </section>

      <section className="section bg-pit-gray">
        <h2 className="mb-6 gradient-text">How to Use</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold text-pit-yellow mb-4">Install & Configure</h3>
            <pre className="bg-black/60 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`# Create .env (Base Sepolia or Mainnet RPC)
RPC_URL=https://sepolia.base.org
PAYMENT_ROUTER_ADDRESS=0x...
PITLAB_TOKEN_ADDRESS=0x...
USER_ADDRESS=0x... # your wallet
`}
            </pre>
            <p className="text-gray-400 text-sm mt-2">
              See full integration steps in <a className="text-pit-yellow underline" href="/INTEGRATION.md" target="_blank">INTEGRATION.md</a>.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold text-pit-yellow mb-4">Common Commands</h3>
            <pre className="bg-black/60 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`# Check features
elt check-features --user 0x...

# Launch anti-sniper (MEV Bundler)
elt bundle --token 0x... --min-buy 1000 --max-buy 10000

# Start market maker
elt market-make --token 0x... --quote USDC --spread 0.5
`}
            </pre>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="mb-6 gradient-text">FAQ</h2>
        <div className="space-y-4 max-w-3xl">
          <div className="card">
            <h3 className="font-bold text-pit-yellow">How do I unlock a feature?</h3>
            <p className="text-gray-300">Purchase it on the Premium page (/features) with $PITLAB. Access is granted on-chain.</p>
          </div>
          <div className="card">
            <h3 className="font-bold text-pit-yellow">Is pitlab-eltmm open-source?</h3>
            <p className="text-gray-300">Yes, the CLI is open-source. Premium runtime features are gated by on-chain licenses.</p>
          </div>
          <div className="card">
            <h3 className="font-bold text-pit-yellow">Where can I find documentation?</h3>
            <p className="text-gray-300">Check the repository README and the site documentation, including INTEGRATION.md and ANTI_SNIPER_LAUNCH.md.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
