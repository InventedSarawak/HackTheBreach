'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
    Terminal,
    AnimatedSpan,
    TypingAnimation
} from '@/components/magicui/terminal'

type TerminalLine = {
    type: 'input' | 'output'
    content: string | React.ReactNode
    delay?: number
}

export default function About() {
    const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([])
    const terminalContentRef = useRef<HTMLDivElement>(null)

    const allLines: TerminalLine[] = [
        {
            type: 'input',
            content: './info.sh --about "Hack The Breach"',
            delay: 500
        },
        {
            type: 'output',
            content: (
                <div className="mt-2 mb-5 text-sm sm:text-base">
                    <p className="mb-2 text-lg font-bold text-green-500 sm:text-xl">
                        // ABOUT HACK THE BREACH
                    </p>
                    <p className="mb-3">
                        Hack The Breach is the premier cybersecurity conference
                        and hackathon for security professionals, ethical
                        hackers, and technology enthusiasts. Join us for three
                        intensive days of hands-on workshops, expert talks, and
                        capture-the-flag challenges.
                    </p>
                    <p>
                        Our mission: to foster innovation in cybersecurity,
                        build community among security professionals, and
                        develop the next generation of ethical hackers.
                    </p>
                </div>
            ),
            delay: 1000
        },
        {
            type: 'input',
            content: 'cat event_features.txt',
            delay: 300
        },
        {
            type: 'output',
            content: (
                <div className="mt-2 mb-5 space-y-3 text-sm sm:text-base">
                    <div>
                        <span className="font-semibold text-yellow-500">
                            ▶ Workshops:
                        </span>{' '}
                        Hands-on technical training on exploitation techniques,
                        defense strategies, and emerging threats
                    </div>
                    <div>
                        <span className="font-semibold text-yellow-500">
                            ▶ Expert Talks:
                        </span>{' '}
                        Security thought leaders sharing insights on the latest
                        attack vectors and protection methodologies
                    </div>
                    <div>
                        <span className="font-semibold text-yellow-500">
                            ▶ CTF Competition:
                        </span>{' '}
                        24-hour hackathon with $50,000 in prizes for teams that
                        demonstrate exceptional exploitation skills
                    </div>
                    <div>
                        <span className="font-semibold text-yellow-500">
                            ▶ Networking:
                        </span>{' '}
                        Connect with industry professionals, recruiters, and
                        fellow security enthusiasts
                    </div>
                </div>
            ),
            delay: 1500
        },
        {
            type: 'input',
            content: 'grep -r "who-should-attend" ./event_info/',
            delay: 300
        },
        {
            type: 'output',
            content: (
                <div className="mt-2 mb-5 space-y-2 text-sm sm:text-base">
                    <p className="font-mono text-cyan-400"># Perfect for:</p>
                    <ul className="list-inside list-disc space-y-1 pl-1">
                        <li>Security researchers and penetration testers</li>
                        <li>Blue and red team professionals</li>
                        <li>Security engineers and architects</li>
                        <li>
                            Computer science students with security interests
                        </li>
                        <li>CTF enthusiasts and competitive hackers</li>
                        <li>
                            Organizations looking to enhance security practices
                        </li>
                    </ul>
                </div>
            ),
            delay: 1200
        }
    ]

    // Auto-scroll the terminal to the bottom when new content is added
    useEffect(() => {
        if (terminalContentRef.current) {
            terminalContentRef.current.scrollTop =
                terminalContentRef.current.scrollHeight
        }
    }, [displayedLines])

    // Display lines sequentially with typewriter effect
    useEffect(() => {
        let timeout: NodeJS.Timeout

        const displayNextLine = (index: number) => {
            if (index < allLines.length) {
                const line = allLines[index]

                timeout = setTimeout(() => {
                    setDisplayedLines((prev) => [...prev, line])
                    displayNextLine(index + 1)
                }, line.delay || 500)
            }
        }

        displayNextLine(0)

        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return (
        <section id="about" className="cursor-default py-16 md:py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="mx-auto max-w-4xl"
                >
                    <h2
                        className="mb-6 text-center font-mono text-3xl font-bold tracking-tight md:text-4xl"
                        id="about"
                    >
                        About The Event
                    </h2>

                    <Terminal className="max-w-full">
                        <div
                            ref={terminalContentRef}
                            className="overflow-y-auto pr-2 font-mono"
                        >
                            {displayedLines.map((line, index) => {
                                const cumulativeDelay = displayedLines
                                    .slice(0, index)
                                    .reduce(
                                        (total, line) =>
                                            total + (line.delay || 500),
                                        0
                                    )

                                return (
                                    <div key={index}>
                                        {line.type === 'input' ? (
                                            <div className="flex">
                                                <span className="mr-1 text-blue-400">
                                                    root@hackbreach:~${' '}
                                                </span>
                                                <TypingAnimation
                                                    delay={
                                                        index === 0 ? 300 : 0
                                                    }
                                                    duration={30}
                                                    className="text-green-400"
                                                >
                                                    {line.content as string}
                                                </TypingAnimation>
                                            </div>
                                        ) : (
                                            <AnimatedSpan
                                                delay={200}
                                                className="text-zinc-300"
                                            >
                                                {line.content}
                                            </AnimatedSpan>
                                        )}
                                    </div>
                                )
                            })}
                            {displayedLines.length > 0 && (
                                <div className="ml-1 inline-block h-4 w-2 animate-pulse bg-white">
                                    ▌
                                </div>
                            )}
                        </div>
                    </Terminal>
                </motion.div>
            </div>
        </section>
    )
}
