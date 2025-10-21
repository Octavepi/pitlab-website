import Hero from '@/components/Hero'
import About from '@/components/About'
import Tokenomics from '@/components/Tokenomics'
import Hardware from '@/components/Hardware'
import Roadmap from '@/components/Roadmap'
import Community from '@/components/Community'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-pit-dark">
      <Navigation />
      <Hero />
      <About />
      <Tokenomics />
      <Hardware />
      <Roadmap />
      <Community />
      <Footer />
    </main>
  )
}
