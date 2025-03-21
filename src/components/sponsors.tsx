'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Marquee } from '@/components/magicui/marquee'

// Sponsor data type (simplified)
type Sponsor = {
    id: string
    name: string
    logo: string
    website: string
}

// Sample sponsors data (removed the tier property)
const SPONSORS: Sponsor[] = [
    {
        id: 'sp1',
        name: 'SecureTech',
        logo: '/sponsors/securetech.svg',
        website: 'https://example.com/securetech'
    },
    {
        id: 'sp2',
        name: 'CyberDefense AI',
        logo: '/sponsors/cyberdefense.svg',
        website: 'https://example.com/cyberdefense'
    },
    {
        id: 'sp3',
        name: 'QuantumShield',
        logo: '/sponsors/quantumshield.svg',
        website: 'https://example.com/quantumshield'
    },
    {
        id: 'sp4',
        name: 'NetGuardian',
        logo: '/sponsors/netguardian.svg',
        website: 'https://example.com/netguardian'
    },
    {
        id: 'sp5',
        name: 'BlockSafe',
        logo: '/sponsors/blocksafe.svg',
        website: 'https://example.com/blocksafe'
    }
]

// Individual sponsor item component with logo on one side, name on the other
const SponsorItem = ({ sponsor }: { sponsor: Sponsor }) => {
    return (
        <Link
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="group mx-8 flex items-center"
        >
            {/* Logo placeholder - left side */}
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800/50 p-2 backdrop-blur-sm transition-transform md:h-16 md:w-16">
                <div className="flex items-center justify-center text-lg font-bold">
                    <span className="text-primary">
                        {sponsor.name.charAt(0)}
                    </span>
                </div>
            </div>

            {/* Company name - right side */}
            <div className="group-hover:text-primary font-medium text-zinc-200 transition-colors">
                {sponsor.name}
            </div>
        </Link>
    )
}

// Make sure these animations are defined in your globals.css file
const cssToAdd = `
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-100% - var(--gap))); }
}

.animate-marquee {
  animation: marquee var(--duration) linear infinite;
}
`;

// Main Sponsors component with full-width, scrolling marquee
export default function Sponsors() {
    // We'll duplicate this to ensure sufficient content
    const sponsorEntries = React.useMemo(() => [...SPONSORS], []);

    return (
        <section id="sponsors" className="w-full py-16 md:py-24">
            <div className="mb-12 flex flex-col items-center justify-center gap-2 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="mb-2 font-mono text-3xl font-bold tracking-tight md:text-4xl">
                        Our Sponsors
                    </h2>
                    <p className="mx-auto max-w-2xl text-zinc-400">
                        Hack The Breach is made possible by these
                        security-focused organizations
                    </p>
                </motion.div>
            </div>

            {/* Full-width sponsors marquee with top and bottom borders */}
            <div className="w-full border-t border-b border-zinc-800 bg-zinc-900/20 py-6">
                {/* Using multiple marquees to ensure content wraps around properly */}
                <style jsx>{cssToAdd}</style>
                
                {/* Using the Marquee from magicui with proper props to ensure animation */}
                <Marquee
                    className="py-4 [--duration:20s]" 
                    pauseOnHover={false}
                    repeat={6}
                >
                    {sponsorEntries.map((sponsor) => (
                        <SponsorItem key={sponsor.id} sponsor={sponsor} />
                    ))}
                </Marquee>
            </div>

            <div className="container mx-auto mt-16 px-4 text-center">
                <p className="text-zinc-400">
                    Interested in sponsoring? Contact us at{' '}
                    <a
                        href="mailto:sponsors@hackthebreach.com"
                        className="text-primary hover:underline"
                    >
                        sponsors@hackthebreach.com
                    </a>
                </p>
            </div>
        </section>
    )
}