export default function Tokenomics() {
  return (
    <section id="tokenomics" className="section bg-pit-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-4 gradient-text">Tokenomics</h2>
        <p className="text-center text-pit-yellow text-xl mb-12">Zero Tax. Pure Fair Launch.</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Token Details */}
          <div className="card">
            <h3 className="text-2xl font-bold text-pit-yellow mb-6">Token Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-pit-gray-light pb-2">
                <span className="text-gray-400">Chain</span>
                <span className="font-bold">Base (Ethereum L2)</span>
              </div>
              <div className="flex justify-between border-b border-pit-gray-light pb-2">
                <span className="text-gray-400">Standard</span>
                <span className="font-bold">ERC-20</span>
              </div>
              <div className="flex justify-between border-b border-pit-gray-light pb-2">
                <span className="text-gray-400">Ticker</span>
                <span className="font-bold">PITLAB</span>
              </div>
              <div className="flex justify-between border-b border-pit-gray-light pb-2">
                <span className="text-gray-400">Decimals</span>
                <span className="font-bold">18</span>
              </div>
              <div className="flex justify-between border-b border-pit-gray-light pb-2">
                <span className="text-gray-400">Total Supply</span>
                <span className="font-bold">1,000,000,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Contract</span>
                <span className="font-mono text-sm text-pit-yellow">TBD</span>
              </div>
            </div>
          </div>

          {/* Distribution */}
          <div className="card">
            <h3 className="text-2xl font-bold text-pit-yellow mb-6">Distribution</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Fair Launch</span>
                  <span className="font-bold">100%</span>
                </div>
                <div className="w-full bg-pit-gray-light rounded-full h-4">
                  <div className="bg-gradient-pit h-4 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="text-sm text-gray-400 space-y-2">
                <p>✅ No Presale</p>
                <p>✅ No Team Allocation</p>
                <p>✅ No VC Tokens</p>
                <p>✅ No Transaction Tax</p>
                <p>✅ LP Burned Forever</p>
                <p>✅ Contract Verified</p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Buy */}
        <div className="card max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-pit-yellow mb-6 text-center">How to Get $PITLAB</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-pit-dark rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-pit-yellow font-bold">
                1
              </div>
              <p className="text-sm">Get ETH on Base</p>
            </div>
            <div className="text-center">
              <div className="bg-pit-dark rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-pit-yellow font-bold">
                2
              </div>
              <p className="text-sm">Connect Wallet</p>
            </div>
            <div className="text-center">
              <div className="bg-pit-dark rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-pit-yellow font-bold">
                3
              </div>
              <p className="text-sm">Swap on Uniswap</p>
            </div>
            <div className="text-center">
              <div className="bg-pit-dark rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-pit-yellow font-bold">
                4
              </div>
              <p className="text-sm">HODL in Pi Trezor!</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 border border-pit-yellow/30 rounded bg-pit-yellow/5 max-w-4xl mx-auto">
          <p className="text-center text-sm text-gray-400">
            <span className="text-pit-yellow font-bold">⚠️ Disclaimer:</span> This is an experimental meme token.
            No promises of profit. DYOR. Not financial advice.
          </p>
        </div>
      </div>
    </section>
  )
}
