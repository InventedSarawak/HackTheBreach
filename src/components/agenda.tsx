'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
    ArrowRight,
    X,
    Clock,
    Users,
    Trophy,
    Coffee,
    Code,
    LucideIcon
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'

// Types for agenda data
type EventType = 'talk' | 'workshop' | 'hackathon' | 'break' | 'networking'

interface AgendaEvent {
    time: string
    title: string
    speaker?: string
    description: string
    type: EventType
    location?: string
}

interface AgendaDay {
    date: string
    dayName: string
    events: AgendaEvent[]
}

// Sample agenda data
const AGENDA_DATA: AgendaDay[] = [
    {
        date: 'June 15, 2025',
        dayName: 'Day 1',
        events: [
            {
                time: '8:00 AM - 9:00 AM',
                title: 'Registration & Breakfast',
                description:
                    'Check in and enjoy a complimentary breakfast while networking with fellow attendees.',
                type: 'break',
                location: 'Main Hall'
            },
            {
                time: '9:15 AM - 10:00 AM',
                title: 'Opening Keynote: The Future of Cybersecurity',
                speaker: 'Emma Rodriguez',
                description:
                    'An overview of emerging threats and innovative defense strategies shaping the future of cybersecurity.',
                type: 'talk',
                location: 'Grand Ballroom'
            },
            {
                time: '10:15 AM - 12:00 PM',
                title: 'Advanced Exploitation Techniques Workshop',
                speaker: 'Michael Torres',
                description:
                    'Hands-on workshop covering the latest in vulnerability research and exploitation techniques.',
                type: 'workshop',
                location: 'Workshop Room A'
            },
            {
                time: '12:00 PM - 1:30 PM',
                title: 'Lunch Break',
                description: 'Networking lunch with exhibitors and sponsors.',
                type: 'break',
                location: 'Dining Hall'
            },
            {
                time: '1:30 PM - 3:30 PM',
                title: 'CTF Challenge Kickoff',
                description:
                    'Introduction to the Hack The Breach CTF competition with rules explanation and team formation.',
                type: 'hackathon',
                location: 'Challenge Arena'
            },
            {
                time: '3:45 PM - 5:00 PM',
                title: 'Zero-Day Threat Detection Panel',
                speaker: 'Panel of Industry Experts',
                description:
                    'Discussion on cutting-edge approaches to identifying and mitigating zero-day vulnerabilities.',
                type: 'talk',
                location: 'Conference Room B'
            },
            {
                time: '5:15 PM - 7:00 PM',
                title: 'Welcome Reception',
                description:
                    'Networking event with drinks and appetizers. Meet speakers, sponsors, and fellow attendees.',
                type: 'networking',
                location: 'Rooftop Terrace'
            }
        ]
    },
    {
        date: 'June 16, 2025',
        dayName: 'Day 2',
        events: [
            {
                time: '8:30 AM - 9:00 AM',
                title: 'Morning Coffee',
                description:
                    "Coffee and light breakfast before the day's activities.",
                type: 'break',
                location: 'Main Hall'
            },
            {
                time: '9:00 AM - 10:30 AM',
                title: 'Blockchain Security Deep Dive',
                speaker: 'David Park',
                description:
                    'Comprehensive analysis of vulnerabilities in blockchain implementations and smart contracts.',
                type: 'talk',
                location: 'Grand Ballroom'
            },
            {
                time: '10:45 AM - 12:15 PM',
                title: 'CTF Challenge - Ongoing',
                description:
                    'Continue working on Capture The Flag challenges with team members.',
                type: 'hackathon',
                location: 'Challenge Arena'
            },
            {
                time: '12:15 PM - 1:15 PM',
                title: 'Lunch Break',
                description: 'Refuel with lunch provided for all attendees.',
                type: 'break',
                location: 'Dining Hall'
            },
            {
                time: '1:30 PM - 3:00 PM',
                title: 'Red Team Tactics Workshop',
                speaker: 'Sarah Johnson',
                description:
                    'Practical techniques for effective red team exercises and penetration testing.',
                type: 'workshop',
                location: 'Workshop Room B'
            },
            {
                time: '3:15 PM - 4:45 PM',
                title: 'Machine Learning for Threat Intelligence',
                speaker: 'Alex Chen',
                description:
                    'How AI and ML are transforming the landscape of threat detection and response.',
                type: 'talk',
                location: 'Conference Room A'
            },
            {
                time: '5:00 PM - 7:00 PM',
                title: 'Hackathon Evening Session',
                description:
                    'Extended time for CTF participants with mentors available for guidance.',
                type: 'hackathon',
                location: 'Challenge Arena'
            }
        ]
    },
    {
        date: 'June 17, 2025',
        dayName: 'Day 3',
        events: [
            {
                time: '8:30 AM - 9:00 AM',
                title: 'Breakfast',
                description: 'Final day breakfast and networking.',
                type: 'break',
                location: 'Main Hall'
            },
            {
                time: '9:00 AM - 10:30 AM',
                title: 'Cloud Security Challenges',
                speaker: 'Noah Garcia',
                description:
                    'Addressing security concerns in multi-cloud and hybrid environments.',
                type: 'talk',
                location: 'Conference Room B'
            },
            {
                time: '10:45 AM - 12:15 PM',
                title: 'Final CTF Sprint',
                description:
                    'Last chance for teams to submit their solutions and climb the leaderboard.',
                type: 'hackathon',
                location: 'Challenge Arena'
            },
            {
                time: '12:15 PM - 1:15 PM',
                title: 'Lunch Break',
                description: 'Final lunch of the conference.',
                type: 'break',
                location: 'Dining Hall'
            },
            {
                time: '1:30 PM - 2:30 PM',
                title: 'Incident Response Simulation',
                speaker: 'Ava Wilson',
                description:
                    'Interactive session simulating a major security breach and appropriate response protocols.',
                type: 'workshop',
                location: 'Workshop Room A'
            },
            {
                time: '2:45 PM - 3:45 PM',
                title: 'CTF Awards Ceremony',
                description:
                    'Announcing winners of the Hack The Breach CTF and prize distribution.',
                type: 'hackathon',
                location: 'Grand Ballroom'
            },
            {
                time: '4:00 PM - 5:00 PM',
                title: 'Closing Keynote: The Road Ahead',
                speaker: 'Emma Rodriguez',
                description:
                    'Reflections on the event and the future of cybersecurity community initiatives.',
                type: 'talk',
                location: 'Grand Ballroom'
            },
            {
                time: '5:15 PM - 7:00 PM',
                title: 'Farewell Networking Reception',
                description:
                    'Final networking opportunity with drinks and celebration of a successful event.',
                type: 'networking',
                location: 'Rooftop Terrace'
            }
        ]
    },
    {
        date: 'June 18, 2025',
        dayName: 'Post-Conference Workshop',
        events: [
            {
                time: '9:00 AM - 4:00 PM',
                title: 'Advanced Security Certification Workshop',
                speaker: 'Security Certification Team',
                description:
                    'Full-day intensive training for attendees who purchased the additional workshop package.',
                type: 'workshop',
                location: 'Training Center'
            }
        ]
    }
]

// Icon mapping for event types
const EventTypeIcon = ({ type }: { type: EventType }) => {
    let Icon: LucideIcon

    switch (type) {
        case 'talk':
            Icon = Users
            break
        case 'workshop':
            Icon = Code
            break
        case 'hackathon':
            Icon = Trophy
            break
        case 'break':
            Icon = Coffee
            break
        case 'networking':
            Icon = Users
            break
        default:
            Icon = Clock
    }

    return <Icon className="text-primary h-5 w-5" />
}

export default function Agenda() {
    const [showAllDays, setShowAllDays] = useState(false)
    const visibleDays = showAllDays ? AGENDA_DATA : AGENDA_DATA.slice(0, 3)

    // Random character set for HyperText effect
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
        <section id="agenda" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-12 flex flex-col items-center justify-center gap-2 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2
                            className="mb-2 font-mono text-3xl font-bold tracking-tight md:text-4xl"
                            id="agenda"
                        >
                            Workshop Agenda
                        </h2>
                        <p className="mx-auto max-w-2xl text-zinc-400">
                            Explore our lineup of talks, workshops, and
                            activities scheduled over the conference days.
                        </p>
                    </motion.div>
                </div>

                {/* Agenda Accordion */}
                <div className="mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Accordion type="single" collapsible className="w-full">
                            {visibleDays.map((day, dayIndex) => (
                                <AccordionItem
                                    key={dayIndex}
                                    value={`day-${dayIndex}`}
                                    className="border-b border-zinc-800"
                                >
                                    <AccordionTrigger className="hover:text-primary text-xl font-semibold hover:no-underline">
                                        <div className="flex items-center">
                                            <span className="bg-primary/10 text-primary mr-3 rounded px-2 py-1 font-mono text-xs">
                                                {day.dayName}
                                            </span>
                                            <span>{day.date}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="space-y-6">
                                            {day.events.map(
                                                (event, eventIndex) => (
                                                    <div
                                                        key={eventIndex}
                                                        className="group hover:border-primary relative border-l-2 border-zinc-800 pl-4"
                                                    >
                                                        {/* Time */}
                                                        <div className="mb-1 flex items-center gap-2 text-sm text-zinc-400">
                                                            <Clock className="h-4 w-4" />
                                                            <span>
                                                                {event.time}
                                                            </span>
                                                        </div>

                                                        {/* Title with type icon */}
                                                        <div className="mb-2 flex items-center gap-2">
                                                            <EventTypeIcon
                                                                type={
                                                                    event.type
                                                                }
                                                            />
                                                            <h3 className="text-lg font-medium text-white">
                                                                {event.title}
                                                            </h3>
                                                        </div>

                                                        {/* Speaker if available */}
                                                        {event.speaker && (
                                                            <div className="text-primary mb-1 text-sm font-medium">
                                                                {event.speaker}
                                                            </div>
                                                        )}

                                                        {/* Description */}
                                                        <p className="mb-2 text-sm text-zinc-400">
                                                            {event.description}
                                                        </p>

                                                        {/* Location */}
                                                        {event.location && (
                                                            <div className="text-xs text-zinc-500">
                                                                Location:{' '}
                                                                {event.location}
                                                            </div>
                                                        )}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>

                {/* Toggle Button */}
                {AGENDA_DATA.length > 3 && (
                    <div className="mt-8 text-center">
                        <Button
                            variant={showAllDays ? 'secondary' : 'outline'}
                            className="group"
                            onClick={() => setShowAllDays(!showAllDays)}
                        >
                            {showAllDays ? (
                                <>
                                    Show Less
                                    <X className="ml-2 h-4 w-4" />
                                </>
                            ) : (
                                <>
                                    View Full Schedule
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </>
                            )}
                        </Button>
                    </div>
                )}

                {/* Additional Note */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-zinc-400">
                        The agenda is subject to minor changes. All attendees
                        will receive real-time updates via mails.
                    </p>
                </div>
            </div>
        </section>
    )
}
