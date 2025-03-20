import Image from 'next/image'

export function Logo({ alt }: { alt: string }) {
    return (
        <Image
            draggable="false"
            src={`/logo-gradient.svg`}
            alt={alt}
            width="156"
            height="156"
            className="-mt-12 mb-4 ml-2 cursor-pointer"
        />
    )
}
export function LogoWithoutGradient({ alt }: { alt: string }) {
    return (
        <Image
            draggable="false"
            src={`/logo.svg`}
            alt={alt}
            width="156"
            height="156"
            className="my-4 cursor-pointer"
        />
    )
}
