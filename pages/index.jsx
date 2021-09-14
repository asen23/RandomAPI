import Image from "next/image"
import Container from '../component/Container'

export default function Home() {
    return (
        <div>
            <Container>
                <h1 className="text-3xl font-bold">Welcome to random API</h1>
                <h2 className="text-2xl font-bold">This website provide random API interfaces</h2>
            </Container>
        </div>
    )
}
