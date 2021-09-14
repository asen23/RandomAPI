import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex">
            <Link href="/">
                <a className="text-2xl p-4 font-bold">
                    <h1>Random API</h1>
                </a>
            </Link>
            <div className="flex flex-1 flex-row-reverse px-2">
                <Link href="/joke">
                    <a>
                        <div className="">Joke</div>
                    </a>
                </Link>
                <Link href="/quote">
                    <a>
                        <div className="">Quote</div>
                    </a>
                </Link>
                <Link href="/waifu">
                    <a>
                        <div className="">Waifu</div>
                    </a>
                </Link>
                <Link href="/numberfact">
                    <a>
                        <div className="">Number Fact</div>
                    </a>
                </Link>
            </div>
        </nav>
    )
}
