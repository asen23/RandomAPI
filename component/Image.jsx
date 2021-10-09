export default function Image({ src, alt }) {
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="max-w-[80%] max-h-[60vh]" />
    )
}