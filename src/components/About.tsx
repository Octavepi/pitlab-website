export default function About() {
  return (
    <section id="about" className="section bg-pit-gray">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-12 gradient-text">The Meme & The Machine</h2>

        <div className="space-y-8 text-lg text-gray-300">
          <p className="text-center text-xl leading-relaxed">
            The "ARMPIT" name riffs on <span className="text-pit-yellow font-bold">ARM architecture + Pi hardware</span>,
            wrapped in the humor of self-reliance. It's a joke that became a build — a sweatcoin for open devs.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="card text-center">
              <div className="text-4xl mb-4">🏋️‍♂️</div>
              <h3 className="text-xl font-bold text-pit-yellow mb-2">Open Hardware</h3>
              <p className="text-gray-400">
                DIY security devices anyone can build, verify, and own.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold text-pit-yellow mb-2">Grassroots Dev</h3>
              <p className="text-gray-400">
                Independent builders creating real technology in the open.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-bold text-pit-yellow mb-2">Transparent Finance</h3>
              <p className="text-gray-400">
                Fair launch, no VCs, community-led development.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 border-l-4 border-pit-yellow bg-pit-dark rounded">
            <p className="text-xl font-bold text-pit-yellow mb-2">Mission</p>
            <p className="leading-relaxed">
              The ARMPIT token exists to reward and support independent developers working to create
              open, secure, ARM-based crypto hardware. The meme is the movement — sweaty, honest, raw effort in the open.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
