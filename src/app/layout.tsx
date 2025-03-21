import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import './globals.css'

const spaceMono = Space_Mono({
    weight: ['400', '700'],
    variable: '--font-space-mono',
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: 'Hack The Breach | An Online Cybersecurity Workshop',
    description: 'Generated by create next app',
    icons: {
        icon: [{ url: '/favicon.svg' }]
    }
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${spaceMono.variable} dark antialiased`}>
                {children}
            </body>
        </html>
    )
}
