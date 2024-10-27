// src/app/page.tsx
import Card from '@/components/Card'
import Header from '@/components/header'
import Home from '@/components/home'
import HowItWorksStep from '@/components/HowItWorksStep'

export default function App() {
  return (
    <div className="bg-background h-[1920px] px-36">
      <Header />
      <Home />
      <HowItWorksStep />
      <Card />
    </div>
  )
}
