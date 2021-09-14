import Link from "next/link"
import NavbarItem from "./NavbarItem"

export default function Navbar() {
    return (
        <nav className="flex absolute top-0 w-full bg-white">
            <Link href="/">
                <a className="text-2xl p-4 font-bold hover:bg-[antiquewhite]">
                    <h1>Random API</h1>
                </a>
            </Link>
            <div className="flex flex-1 flex-row-reverse pl-2">
                <NavbarItem href="/joke">Joke</NavbarItem>
                <NavbarItem href="/quote">Quote</NavbarItem>
                <NavbarItem href="/waifu">Waifu</NavbarItem>
                <NavbarItem href="/numberfact">Number Fact</NavbarItem>
            </div>
        </nav>
    )
}
