import Asks from '@/components/Asks'
import CallToAction from '@/components/CallToAction'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import SecondaryFeatures from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <main className="bg-slate-50">
      <Header />
      <HeroSection />
      <Features />
      <SecondaryFeatures />
      <CallToAction />
      <Asks />
      <Footer />
    </main>
  )
}
