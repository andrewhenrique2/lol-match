// src/app/page.tsx
import AccordionSection from '@/components/AccordionSection'
import Card from '@/components/Card'
import CardParty from '@/components/CardParty'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Home from '@/components/home'
import HowItWorksStep from '@/components/HowItWorksStep'

export default function App() {
  return (
    <div className="bg-background h-screen-full">
      <Header />
      <Home />
      <HowItWorksStep />
      <CardParty />
      <Card />
      <AccordionSection />
      <Footer />
    </div>
  )
}
