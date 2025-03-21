'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion, MotionProps } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

type CharacterSet = string[] | readonly string[]

interface HyperTextProps extends MotionProps {
    /** The text content to be animated */
    children: string
    /** Optional className for styling */
    className?: string
    /** Duration of the animation in milliseconds */
    duration?: number
    /** Delay before animation starts in milliseconds */
    delay?: number
    /** Component to render as - defaults to div */
    as?: React.ElementType
    /** Whether to start animation when element comes into view */
    startOnView?: boolean
    /** Whether to trigger animation on hover */
    animateOnHover?: boolean
    /** Play animation only once on hover */
    playOnceOnHover?: boolean
    /** Custom character set for scramble effect. Defaults to uppercase alphabet */
    characterSet?: CharacterSet
}

const DEFAULT_CHARACTER_SET = Object.freeze(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
) as readonly string[]

const getRandomInt = (max: number): number => Math.floor(Math.random() * max)

export function HyperText({
    children,
    className,
    duration = 1400,
    delay = 0,
    as: Component = 'div',
    startOnView = false,
    animateOnHover = true,
    playOnceOnHover = true, // Added new prop with default true
    characterSet = DEFAULT_CHARACTER_SET,
    ...props
}: HyperTextProps) {
    const MotionComponent = motion.create(Component, {
        forwardMotionProps: true
    })

    const [displayText, setDisplayText] = useState<string[]>(() =>
        children.split('')
    )
    const [isAnimating, setIsAnimating] = useState(false)
    const [hasPlayedOnHover, setHasPlayedOnHover] = useState(false) // Track if animation has played on hover
    const iterationCount = useRef(0)
    const elementRef = useRef<HTMLElement>(null)
    const animationSourceRef = useRef<'hover' | 'view' | 'delay' | null>(null)

    // Reset hover state when mouse leaves to allow animation on next hover

    const handleAnimationTrigger = () => {
        // Only animate on hover if:
        // 1. animateOnHover is true
        // 2. Not currently animating
        // 3. Either playOnceOnHover is false OR hasPlayedOnHover is false
        if (
            animateOnHover &&
            !isAnimating &&
            (!playOnceOnHover || !hasPlayedOnHover)
        ) {
            iterationCount.current = 0
            setIsAnimating(true)
            animationSourceRef.current = 'hover'
            if (playOnceOnHover) {
                setHasPlayedOnHover(true)
            }
        }
    }

    // Reset hover state when mouse leaves, if we want to allow replaying
    const handleMouseLeave = () => {
        // Only reset if we're not using playOnceOnHover
        setHasPlayedOnHover(false)
        // if (!playOnceOnHover) {
        //     setHasPlayedOnHover(false)
        // }
    }

    // Handle animation start based on view or delay
    useEffect(() => {
        if (!startOnView) {
            const startTimeout = setTimeout(() => {
                setIsAnimating(true)
                animationSourceRef.current = 'delay'
            }, delay)
            return () => clearTimeout(startTimeout)
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsAnimating(true)
                        animationSourceRef.current = 'view'
                    }, delay)
                    observer.disconnect()
                }
            },
            { threshold: 0.1, rootMargin: '-30% 0px -30% 0px' }
        )

        if (elementRef.current) {
            observer.observe(elementRef.current)
        }

        return () => observer.disconnect()
    }, [delay, startOnView])

    // Handle scramble animation
    useEffect(() => {
        if (!isAnimating) return

        const intervalDuration = duration / (children.length * 10)
        const maxIterations = children.length

        const interval = setInterval(() => {
            if (iterationCount.current < maxIterations) {
                setDisplayText((currentText) =>
                    currentText.map((letter, index) =>
                        letter === ' '
                            ? letter
                            : index <= iterationCount.current
                              ? children[index]
                              : characterSet[getRandomInt(characterSet.length)]
                    )
                )
                iterationCount.current = iterationCount.current + 0.1
            } else {
                setIsAnimating(false)
                // Don't reset hasPlayedOnHover - it stays true once played on hover
                animationSourceRef.current = null
                clearInterval(interval)
            }
        }, intervalDuration)

        return () => clearInterval(interval)
    }, [children, duration, isAnimating, characterSet])

    return (
        <MotionComponent
            ref={elementRef}
            className={cn('overflow-hidden py-2', className)}
            onMouseEnter={handleAnimationTrigger}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            <AnimatePresence>
                {displayText.map((letter, index) => (
                    <motion.span
                        key={index}
                        className={cn('font-mono', letter === ' ' ? 'w-3' : '')}
                    >
                        {letter}
                    </motion.span>
                ))}
            </AnimatePresence>
        </MotionComponent>
    )
}
