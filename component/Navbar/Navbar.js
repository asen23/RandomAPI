import Link from "next/link"
import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={`${styles.container}`}>
            <Link href="/">
                <a className={`${styles.home}`}>
                    <h1>Random API</h1>
                </a>
            </Link>
            <div className={`${styles.linkGroup}`}>
                <Link href="/joke">
                    <a className={`${styles.links}`}>
                        <div className={`${styles.link}`}>Joke</div>
                    </a>
                </Link>
            </div>
        </nav>
    )
}
