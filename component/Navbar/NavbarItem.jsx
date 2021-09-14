import Link from "next/link"

export default function NavbarItem(props) {
    return (
        <Link href={props.href}>
            <a className="px-4 flex justify-center items-center hover:bg-[antiquewhite]">{props.children}</a>
        </Link>
    )
}
