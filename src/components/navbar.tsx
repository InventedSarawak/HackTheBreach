'use client'

import React, { useState, useRef, useEffect } from 'react'
import { LogoWithoutGradient } from '@/components/logo'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HyperText } from '@/components/magicui/hyper-text'

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const dialogRef = useRef<HTMLDialogElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    // Track scroll position and direction
    const [show, setShow] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    // Control navbar visibility when scrolling
    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                // Don't hide when menu is open
                if (mobileMenuOpen) {
                    setShow(true)
                    return
                }

                // Hide navbar when scrolling down, show when scrolling up
                if (window.scrollY > lastScrollY && window.scrollY > 100) {
                    setShow(false)
                } else {
                    setShow(true)
                }
                // Update scroll position
                setLastScrollY(window.scrollY)
            }
        }

        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [lastScrollY, mobileMenuOpen])

    // Handle dialog open/close
    useEffect(() => {
        if (!dialogRef.current) return

        if (mobileMenuOpen) {
            // Open the dialog
            dialogRef.current.showModal()
            // Prevent body scrolling
            document.body.style.overflow = 'hidden'
        } else if (dialogRef.current.open) {
            // Close animation
            const dialog = dialogRef.current
            dialog.classList.add('closing')

            setTimeout(() => {
                dialog.close()
                dialog.classList.remove('closing')
                // Restore scrolling
                document.body.style.overflow = ''
            }, 300)
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [mobileMenuOpen])

    // Close dialog when clicking backdrop (the dialog itself, not its contents)
    const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        const rect = dialogRef.current?.getBoundingClientRect()
        if (!rect) return

        // Check if click is on the backdrop (outside dialog content area)
        if (
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom
        ) {
            setMobileMenuOpen(false)
        }
    }

    const characterSet = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
    ]

    return (
        <header
            className={`sticky top-0 right-0 left-0 z-50 transition-transform duration-300 ${
                show ? 'translate-y-0' : '-translate-y-full'
            } bg-background/80 m-2 flex flex-row items-center justify-between rounded-xl border border-zinc-800 px-4 py-2 backdrop-blur-md`}
        >
            <LogoWithoutGradient alt="Hack The Breach Logo" />

            {/* Desktop Navigation */}
            <div className="hidden items-center md:flex md:space-x-4 lg:space-x-8">
                <Link className="hover:text-primary transition-colors" href="#">
                    <HyperText characterSet={characterSet} delay={0}>
                        /about
                    </HyperText>
                </Link>
                <Link className="hover:text-primary transition-colors" href="#">
                    <HyperText characterSet={characterSet} delay={170}>
                        /speakers
                    </HyperText>
                </Link>
                <Link className="hover:text-primary transition-colors" href="#">
                    <HyperText characterSet={characterSet} delay={340}>
                        /agenda
                    </HyperText>
                </Link>
                <Link className="hover:text-primary transition-colors" href="#">
                    <HyperText characterSet={characterSet} delay={510}>
                        /organizers
                    </HyperText>
                </Link>
                <Link className="hover:text-primary transition-colors" href="#">
                    <HyperText characterSet={characterSet} delay={680}>
                        /hackathon
                    </HyperText>
                </Link>
                <Button className="ml-2">Register</Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
                <Button
                    variant="ghost"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-2"
                    ref={buttonRef}
                >
                    {mobileMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="rotate-90 transition-transform duration-300"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform duration-300"
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    )}
                </Button>
            </div>

            {/* Mobile Menu Dialog */}
            <dialog
                ref={dialogRef}
                onClick={handleDialogClick}
                className="fixed inset-0 z-50 m-0 w-full max-w-full bg-transparent p-0 text-white backdrop:bg-black/50 backdrop:backdrop-blur-md md:hidden"
            >
                <div className="bg-card animate-in slide-in-from-top mx-2 mt-20 rounded-lg p-4 shadow-lg duration-300">
                    <div className="flex flex-col gap-4">
                        <Link
                            className="hover:bg-muted animate-in fade-in slide-in-from-bottom-2 rounded-md px-4 py-2 transition-all delay-[50ms] duration-200 hover:translate-x-1"
                            href="#"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            className="hover:bg-muted animate-in fade-in slide-in-from-bottom-2 rounded-md px-4 py-2 transition-all delay-[100ms] duration-200 hover:translate-x-1"
                            href="#"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Speakers
                        </Link>
                        <Link
                            className="hover:bg-muted animate-in fade-in slide-in-from-bottom-2 rounded-md px-4 py-2 transition-all delay-[150ms] duration-200 hover:translate-x-1"
                            href="#"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Agenda
                        </Link>
                        <Link
                            className="hover:bg-muted animate-in fade-in slide-in-from-bottom-2 rounded-md px-4 py-2 transition-all delay-[200ms] duration-200 hover:translate-x-1"
                            href="#"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Organizers
                        </Link>
                        <Link
                            className="hover:bg-muted animate-in fade-in slide-in-from-bottom-2 rounded-md px-4 py-2 transition-all delay-[250ms] duration-200 hover:translate-x-1"
                            href="#"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Hackathon
                        </Link>
                        <Button
                            className="animate-in fade-in slide-in-from-bottom-2 mt-2 transition-all delay-[300ms] duration-200 hover:scale-105"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Register
                        </Button>
                    </div>
                </div>
            </dialog>

            {/* Add global styling for dialog */}
            <style jsx global>{`
                dialog {
                    border: none;
                    padding: 0;
                    overflow: visible;
                }

                dialog::backdrop {
                    background-color: rgba(0, 0, 0, 0.5);
                    backdrop-filter: blur(4px);
                    transition: opacity 0.3s ease;
                }

                dialog.closing::backdrop {
                    opacity: 0;
                }

                dialog.closing > div {
                    transform: translateY(-10px) scale(0.95);
                    opacity: 0;
                }

                dialog > div {
                    transition: all 0.3s ease;
                }
            `}</style>
        </header>
    )
}

export default NavBar
