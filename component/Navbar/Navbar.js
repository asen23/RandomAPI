import Link from "next/link"
import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={`${styles.container}`}>
            <Link href="/">
                <a>
                    <h1>Random API</h1>
                </a>
            </Link>
            <div>
                <Link href="/joke">
                    <a>Joke</a>
                </Link>
            </div>
        </nav>
    )
}
