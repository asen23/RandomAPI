import Head from "next/head"
import Image from "next/image"
import Navbar from "../component/Navbar/Navbar"
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Random API</title>
                <meta name="description" content="A collection of random api" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className={`${styles.container}`}>
                <h1>Welcome to random API</h1>
                <h2>This website provide random API interfaces</h2>
            </div>
        </div>
    )
}
