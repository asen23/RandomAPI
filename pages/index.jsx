import Image from "next/image"
import Navbar from "../component/Navbar/Navbar"

export default function Home() {
    return (
        <div>
            <div className="flex justify-center items-center flex-col min-h-screen gap-8 bg-[antiquewhite]">
                <h1 className="text-3xl font-bold">Welcome to random API</h1>
                <h2 className="text-2xl font-bold">This website provide random API interfaces</h2>
            </div>
        </div>
    )
}
