'use client'

import HeroSection from '@components/landingPage/HeroSection'
import TechnologyStacks from '@components/landingPage/TechnologyStacks'
// import Image from 'next/image'
import '@jquery-setup.js'

import NavBar from "../components/NavBar"

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <TechnologyStacks/>
    </div>
  )
}


// https://api.vercel.com/v1/integrations/deploy/prj_xa32aeUo9BcOHaVXV37GYrk5YEvN/4VdijSnDeP

// New Deployment