import { Button } from '@/components/ui/button'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Speakers from '@/components/speakers'
import Organizers from '@/components/organizers'
import Footer from '@/components/footer'
import { FlickeringGrid } from '@/components/magicui/flickering-grid'
import Image from 'next/image'

export default function Home() {
    return (
        <div className="font-mono">
            <Navbar />
            <Hero />
            <About />
            <Speakers />
            <Organizers />
            <Footer />
        </div>
    )
}
