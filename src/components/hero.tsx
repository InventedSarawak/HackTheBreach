'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { FlickeringGrid } from '@/components/magicui/flickering-grid'
import { HyperText } from '@/components/magicui/hyper-text'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const characterSet = Object.freeze([
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
    '*',
    '(',
    ')',
    '{',
    '}',
    '[',
    ']',
    '|',
    ';',
    ':',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
])

export default function Hero() {
    return (
        <div className="relative w-full cursor-default overflow-hidden">
            {/* Background with edge fade */}
            <div className="absolute inset-0 -z-10">
                <FlickeringGrid
                    className="absolute inset-0 size-full"
                    squareSize={6}
                    gridGap={6}
                    color="#6B7280"
                    maxOpacity={0.3}
                    flickerChance={0.06}
                />

                {/* Edge fade effect */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="from-background via-background/80 absolute inset-0 bg-gradient-to-t to-transparent"></div>
                    <div className="from-background absolute bottom-0 h-1/4 w-full bg-gradient-to-t to-transparent"></div>
                    <div className="from-background absolute left-0 h-full w-1/6 bg-gradient-to-r to-transparent"></div>
                    <div className="from-background absolute right-0 h-full w-1/6 bg-gradient-to-l to-transparent"></div>
                </div>
            </div>

            {/* Hero content */}
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="flex flex-col items-center text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-background/80 mb-6 inline-flex items-center rounded-full border border-zinc-700 px-3 py-1 text-sm backdrop-blur-sm"
                    >
                        <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
                        Mar 29 - Apr 12, 2025 • Virtual
                    </motion.div>

                    {/* Main heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h1 className="font-mono text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                            <span className="text-foreground">HACK</span>
                            <span className="from-primary to-primary-foreground bg-gradient-to-br bg-clip-text text-transparent">
                                THE
                            </span>
                            <span className="text-foreground">BREACH</span>
                        </h1>
                    </motion.div>

                    {/* Subheading with animated text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-4 max-w-2xl"
                    >
                        <HyperText
                            characterSet={characterSet}
                            startOnView={true}
                            className="text-muted-foreground text-xl md:text-2xl"
                            duration={0.2}
                            animateOnHover={false}
                        >
                            The premier cybersecurity workshop and hackathon
                        </HyperText>
                        <p className="text-muted-foreground mt-3 text-lg">
                            Join experts and enthusiasts for a fortnight of
                            workshops, talks, and hacking challenges
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
                    >
                        <Button size="lg" className="group cursor-pointer">
                            Register Now
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="cursor-pointer"
                        >
                            View Schedule
                        </Button>
                    </motion.div>

                    {/* Event stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4"
                    >
                        <div className="flex flex-col items-center">
                            <span className="text-primary text-3xl font-bold">
                                25+
                            </span>
                            <span className="text-muted-foreground">
                                Speakers
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-primary text-3xl font-bold">
                                20+
                            </span>
                            <span className="text-muted-foreground">
                                Workshops
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-primary text-3xl font-bold">
                                $50K
                            </span>
                            <span className="text-muted-foreground">
                                Prize Pool
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-primary text-3xl font-bold">
                                1000+
                            </span>
                            <span className="text-muted-foreground">
                                Participants
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
