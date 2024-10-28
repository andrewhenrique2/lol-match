// src/app/page.tsx
import AccordionSection from '@/components/AccordionSection'
import Card from '@/components/Card'
import Header from '@/components/header'
import Home from '@/components/home'
import HowItWorksStep from '@/components/HowItWorksStep'

export default function App() {
  return (
    <div className="bg-background h-[2920px]">
      <Header />
      <Home />
      <HowItWorksStep />
      <Card />
      <AccordionSection />
    </div>
  )
}
