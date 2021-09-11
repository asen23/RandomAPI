import Navbar from "../Navbar/Navbar"
import Head from "next/head"

export default function Layout(props) {
    return (
        <>
            <Head>
                <title>Random API</title>
                <meta name="description" content="A collection of random api" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            {props.children}
        </>
    )
}
