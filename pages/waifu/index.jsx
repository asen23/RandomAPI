import useFetch from "hook/useFetch"
import Button from "component/Button"
import Container from "component/Container"
import Title from "component/Title"
import Image from "component/Image"

export default function Waifu() {
    const [waifu, setWaifu] = useFetch("https://api.waifu.pics/sfw/waifu")

    const Waifu = () => {
        if (!waifu) {
            return <p>Loading...</p>
        } else {
            return <Image src={waifu.url} alt="waifu" />
        }
    }
    return (
        <Container>
            <Title>Random Waifu</Title>
            <Waifu />
            <Button onClick={setWaifu}>Get random waifu</Button>
        </Container>
    )
}
