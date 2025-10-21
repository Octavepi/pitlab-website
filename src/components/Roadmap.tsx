export default function Roadmap() {
  const phases = [
    {
      phase: 'Phase 0',
      title: 'Fair Launch & LP Burn',
      status: 'complete',
      items: [
        'Deploy token contract on Base',
        'Provide initial liquidity',
        'Burn LP tokens permanently',
        'Verify contract on BaseScan',
      ],
    },
    {
      phase: 'Phase 1',
      title: 'Build Awareness + Meme Growth',
      status: 'current',
      items: [
        'Launch IPFS-hosted website',
        'Create comprehensive documentation',
        'Build community presence',
        'Establish social media channels',
        'Community meme contests',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Hardware Integration',
      status: 'upcoming',
      items: [
        'Pi Trezor + Base wallet testing',
        'Integration guides and tutorials',
        'Video build walkthroughs',
        'Beta tester program',
        'Hardware showcase gallery',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Community Grants & Governance',
      status: 'upcoming',
      items: [
        'Grant program for contributors',
        'Snapshot-based voting',
        'GitHub-linked grants',
        'Open multisig for dev funds',
        'Community governance activation',
      ],
    },
    {
      phase: 'Phase 4',
      title: 'Web3 Domain & Public Registry',
      status: 'future',
      items: [
        'Acquire .eth or custom web3 domain',
        'Full IPFS infrastructure',
        'Public builder registry',
        'Decentralized documentation',
        'DAO formation (if community wants)',
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete':
        return 'bg-green-500/20 text-green-400 border-green-500'
      case 'current':
        return 'bg-pit-yellow/20 text-pit-yellow border-pit-yellow'
      case 'upcoming':
        return 'bg-pit-blue/20 text-pit-blue border-pit-blue'
      case 'future':
        return 'bg-gray-500/20 text-gray-400 border-gray-500'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500'
    }
  }

  return (
    <section id="roadmap" className="section bg-pit-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-4 gradient-text">Roadmap</h2>
        <p className="text-center text-pit-yellow text-xl mb-12">From Foundation to Full Decentralization</p>

        <div className="space-y-6">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`card border-l-4 ${
                phase.status === 'current' ? 'border-pit-yellow' : 'border-pit-gray-light'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <span className="text-sm text-gray-400">{phase.phase}</span>
                  <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                </div>
                <span
                  className={`px-4 py-1 rounded-full text-sm font-bold border mt-2 md:mt-0 w-fit ${getStatusColor(
                    phase.status
                  )}`}
                >
                  {phase.status === 'complete' && '✅ Complete'}
                  {phase.status === 'current' && '🚧 In Progress'}
                  {phase.status === 'upcoming' && '📅 Upcoming'}
                  {phase.status === 'future' && '🔮 Future'}
                </span>
              </div>
              <ul className="space-y-2">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-pit-yellow mr-2">•</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 italic">
            "The PIT never sleeps. We're building in the open, one commit at a time."
          </p>
        </div>
      </div>
    </section>
  )
}
