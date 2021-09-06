import Head from "next/head"
import Image from "next/image"
import Navbar from "../component/Navbar/Navbar"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Random API</title>
                <meta name="description" content="A collection of random api" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`container`}>
                <h1>Welcome to random API</h1>
                <h2>This website provide random API interfaces</h2>
            </div>
        </div>
    )
}
