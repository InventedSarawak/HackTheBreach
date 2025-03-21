'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HyperText } from '@/components/magicui/hyper-text'
import { Button } from '@/components/ui/button'
import {
    Terminal,
    Trophy,
    Users,
    Calendar,
    Clock,
    Brain,
    Globe,
    Lock,
    FileCode,
    Laptop,
    Braces,
    Search,
    ArrowUpRight
} from 'lucide-react'

// Challenge category type
type ChallengeCategory = {
    name: string
    description: string
    icon: React.ReactElement<{ className?: string }>
    difficulty: 'beginner' | 'intermediate' | 'advanced' | 'all'
}

// Prize tier type
type PrizeTier = {
    place: string
    prizes: string[]
    cash: string
}

// Challenge categories data
const CHALLENGE_CATEGORIES: ChallengeCategory[] = [
    {
        name: 'Web Exploitation',
        description:
            'Discover and exploit vulnerabilities in web applications.',
        icon: <Globe className="h-6 w-6" />,
        difficulty: 'all'
    },
    {
        name: 'Cryptography',
        description:
            'Break codes, decrypt messages, and solve cipher challenges.',
        icon: <Lock className="h-6 w-6" />,
        difficulty: 'all'
    },
    {
        name: 'Reverse Engineering',
        description: 'Analyze and understand compiled programs and binaries.',
        icon: <FileCode className="h-6 w-6" />,
        difficulty: 'intermediate'
    },
    {
        name: 'Binary Exploitation',
        description:
            'Identify and exploit vulnerabilities in program binaries.',
        icon: <Terminal className="h-6 w-6" />,
        difficulty: 'advanced'
    },
    {
        name: 'Forensics',
        description: 'Analyze digital evidence to solve security puzzles.',
        icon: <Search className="h-6 w-6" />,
        difficulty: 'all'
    },
    {
        name: 'OSINT',
        description: 'Use open source intelligence to solve challenges.',
        icon: <Laptop className="h-6 w-6" />,
        difficulty: 'beginner'
    }
]

// Prize tiers data
const PRIZE_TIERS: PrizeTier[] = [
    {
        place: '1st Place',
        prizes: [
            'Custom Hack The Breach Trophy',
            'Latest M3 MacBook Pro (per team member)',
            '1-Year Security Tool Pro Licenses',
            "VIP Access to Next Year's Event"
        ],
        cash: '$10,000'
    },
    {
        place: '2nd Place',
        prizes: [
            'High-End Mechanical Keyboards',
            'Premium Wireless Headphones',
            '6-Month Security Tool Pro Licenses'
        ],
        cash: '$5,000'
    },
    {
        place: '3rd Place',
        prizes: [
            'Custom Hack The Breach Hoodie & Swag Pack',
            'Wireless Earbuds',
            '3-Month Security Tool Pro Licenses'
        ],
        cash: '$2,500'
    }
]

export default function Hackathon() {
    const characterSet = [
        '0',
        '1',
        '/',
        '\\',
        '>',
        '<',
        '%',
        '$',
        '#',
        '@',
        '!',
        '&',
        '*'
    ]

    return (
        <section id="hackathon" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                {/* Container with positioning context */}
                <div className="relative rounded-xl border border-zinc-800">
                    {/* Mobile background - visible only on small screens */}
                    <div className="absolute inset-0 rounded-xl bg-black/60 md:hidden"></div>

                    {/* Desktop WarpBackground - hidden on mobile */}
                    <div className="absolute inset-0 hidden md:block"></div>

                    {/* Content - visible on all screen sizes */}
                    <div className="relative z-10 p-8 md:p-12 lg:p-16">
                        {/* Header */}
                        <div className="mb-10 md:mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
                            >
                                <div>
                                    <div className="mb-2 flex items-center gap-2">
                                        <Trophy className="text-primary h-5 w-5 sm:h-6 sm:w-6" />
                                        <h2 className="font-mono text-3xl font-bold tracking-tight md:text-4xl">
                                            <HyperText
                                                characterSet={characterSet}
                                                delay={200}
                                                animateOnHover={false}
                                            >
                                                Capture The Flag
                                            </HyperText>
                                        </h2>
                                    </div>
                                    <p className="max-w-2xl text-zinc-400">
                                        Test your skills in our 48-hour
                                        cybersecurity competition with
                                        challenges across multiple security
                                        domains
                                    </p>
                                </div>

                                <div className="mt-4 md:mt-0">
                                    <Button size="lg" variant="default">
                                        Register Your Team{' '}
                                        <ArrowUpRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </motion.div>
                        </div>

                        {/* Key Details */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
                        >
                            <div className="rounded-xl border border-zinc-800 bg-black/60 p-6">
                                <div className="bg-primary/10 mb-3 inline-flex rounded-full p-2">
                                    <Calendar className="text-primary h-4 w-4 sm:h-5 sm:w-5" />
                                </div>
                                <h3 className="mb-1 font-medium">Date</h3>
                                <p className="text-sm text-zinc-400">
                                    June 16-17, 2025
                                </p>
                                <p className="mt-1 text-xs text-zinc-500">
                                    During main conference
                                </p>
                            </div>

                            <div className="rounded-xl border border-zinc-800 bg-black/60 p-6">
                                <div className="bg-primary/10 mb-3 inline-flex rounded-full p-2">
                                    <Clock className="text-primary h-4 w-4 sm:h-5 sm:w-5" />
                                </div>
                                <h3 className="mb-1 font-medium">Duration</h3>
                                <p className="text-sm text-zinc-400">
                                    48 Hours of Hacking
                                </p>
                                <p className="mt-1 text-xs text-zinc-500">
                                    Starts Day 2 at 10:00 AM
                                </p>
                            </div>

                            <div className="rounded-xl border border-zinc-800 bg-black/60 p-6">
                                <div className="bg-primary/10 mb-3 inline-flex rounded-full p-2">
                                    <Users className="text-primary h-4 w-4 sm:h-5 sm:w-5" />
                                </div>
                                <h3 className="mb-1 font-medium">Team Size</h3>
                                <p className="text-sm text-zinc-400">
                                    2-4 Players per Team
                                </p>
                                <p className="mt-1 text-xs text-zinc-500">
                                    Solo participation allowed
                                </p>
                            </div>

                            <div className="rounded-xl border border-zinc-800 bg-black/60 p-6">
                                <div className="bg-primary/10 mb-3 inline-flex rounded-full p-2">
                                    <Brain className="text-primary h-4 w-4 sm:h-5 sm:w-5" />
                                </div>
                                <h3 className="mb-1 font-medium">
                                    Skill Level
                                </h3>
                                <p className="text-sm text-zinc-400">
                                    Beginner to Advanced
                                </p>
                                <p className="mt-1 text-xs text-zinc-500">
                                    Challenges for all levels
                                </p>
                            </div>
                        </motion.div>

                        {/* Prize Pool */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mb-10"
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold">
                                    Prize Pool Worth{' '}
                                    <span className="text-primary">
                                        $25,000+
                                    </span>
                                </h3>
                                <p className="text-zinc-400">
                                    Compete for cash and prizes, including
                                    cutting-edge tech and exclusive
                                    opportunities
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-3">
                                {PRIZE_TIERS.map((tier, index) => (
                                    <div
                                        key={index}
                                        className={`rounded-xl border ${index === 0 ? 'border-primary bg-primary/5' : 'border-zinc-800 bg-black/60'} p-6`}
                                    >
                                        <div className="mb-4 flex items-center justify-between">
                                            <h4 className="text-xl font-bold">
                                                {tier.place}
                                            </h4>
                                            <div className="text-primary font-mono text-lg font-bold">
                                                {tier.cash}
                                            </div>
                                        </div>
                                        <ul className="space-y-2">
                                            {tier.prizes.map((prize, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start text-sm"
                                                >
                                                    <span className="text-primary mr-2">
                                                        •
                                                    </span>
                                                    <span className="text-zinc-300">
                                                        {prize}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Challenge Categories */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold">
                                    Challenge Categories
                                </h3>
                                <p className="text-zinc-400">
                                    Test your skills across multiple
                                    cybersecurity domains
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {CHALLENGE_CATEGORIES.map((category, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col rounded-xl border border-zinc-800 bg-black/60 p-4 sm:flex-row"
                                    >
                                        <div className="bg-primary/10 mb-4 flex-shrink-0 self-start rounded-full p-3 sm:mr-4 sm:mb-0">
                                            {React.cloneElement(category.icon, {
                                                className:
                                                    'h-5 w-5 sm:h-6 sm:w-6 text-primary'
                                            })}
                                        </div>
                                        <div>
                                            <div className="flex flex-wrap items-center gap-2">
                                                <h4 className="font-medium">
                                                    {category.name}
                                                </h4>
                                                <span
                                                    className={`rounded px-2 py-0.5 text-xs ${
                                                        category.difficulty ===
                                                        'beginner'
                                                            ? 'bg-green-950/50 text-green-400'
                                                            : category.difficulty ===
                                                                'intermediate'
                                                              ? 'bg-yellow-950/50 text-yellow-400'
                                                              : category.difficulty ===
                                                                  'advanced'
                                                                ? 'bg-red-950/50 text-red-400'
                                                                : 'bg-zinc-800 text-zinc-400'
                                                    }`}
                                                >
                                                    {category.difficulty ===
                                                    'all'
                                                        ? 'All Levels'
                                                        : category.difficulty}
                                                </span>
                                            </div>
                                            <p className="mt-1 text-sm text-zinc-400">
                                                {category.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
