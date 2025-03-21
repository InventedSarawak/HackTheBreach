'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'

// FAQ data structure
type FAQItem = {
    question: string
    answer: string | React.ReactNode
}

// List of frequently asked questions
const FAQ_ITEMS: FAQItem[] = [
    {
        question: 'What is Hack The Breach?',
        answer: 'Hack The Breach is a premier cybersecurity conference and competition that brings together security professionals, researchers, students, and enthusiasts for workshops, talks, and hands-on challenges focused on the latest trends and techniques in cybersecurity.'
    },
    {
        question: 'When and where will the event take place?',
        answer: 'The event will take place on June 15-17, 2025 at the Tech Conference Center in downtown San Francisco. We also offer virtual attendance options for those who cannot attend in person.'
    },
    {
        question: 'Who can participate?',
        answer: "Hack The Breach welcomes participants of all skill levels, from beginners to advanced security professionals. Whether you're a student, professional, researcher, or simply interested in cybersecurity, there's something for everyone."
    },
    {
        question: 'Are there any prerequisites to participate?',
        answer: 'No specific prerequisites are required, though basic knowledge of computer systems and networks is helpful. We offer tracks for different skill levels, including dedicated beginner-friendly workshops and activities.'
    },
    {
        question: 'What should I bring?',
        answer: 'Participants should bring their own laptops with administrator access, power adapters, and any tools they prefer for CTF challenges. For in-person attendees, we recommend comfortable clothing and a refillable water bottle.'
    },
    {
        question: 'Is there a registration fee?',
        answer: 'Yes, there is a registration fee that varies based on your participation type (professional, student, virtual). Early bird discounts are available, and we offer scholarships for students and underrepresented groups.'
    },
    {
        question: 'Will there be prizes for the competitions?',
        answer: 'Yes! We have an exciting prize pool including cash rewards, tech gadgets, subscriptions to security tools, training vouchers, and exclusive opportunities with our sponsor companies for top performers.'
    },
    {
        question: 'How can I become a sponsor?',
        answer: (
            <>
                We welcome partnerships with organizations that want to support
                the cybersecurity community. Please contact us at{' '}
                <a
                    href="mailto:sponsors@hackthebreach.com"
                    className="text-primary hover:underline"
                >
                    sponsors@hackthebreach.com
                </a>{' '}
                for sponsorship information.
            </>
        )
    }
]

export default function FAQ() {
    return (
        <section id="faq" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-12 flex flex-col items-center justify-center gap-2 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="mb-2 font-mono text-3xl font-bold tracking-tight md:text-4xl">
                            Frequently Asked Questions
                        </h2>
                        <p className="mx-auto max-w-2xl text-zinc-400">
                            Everything you need to know about the event. Can't
                            find an answer? Reach out to our team.
                        </p>
                    </motion.div>
                </div>

                {/* FAQ Accordion */}
                <div className="mx-auto max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Accordion type="single" collapsible className="w-full">
                            {FAQ_ITEMS.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border-b border-zinc-800"
                                >
                                    <AccordionTrigger className="hover:text-primary text-lg font-medium text-white hover:no-underline">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-zinc-400">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-zinc-400">
                        Still have questions? Contact us at{' '}
                        <a
                            href="mailto:info@hackthebreach.com"
                            className="text-primary hover:underline"
                        >
                            info@hackthebreach.com
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
