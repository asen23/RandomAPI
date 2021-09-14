import { useState, useEffect } from "react"
import Button from "../../component/Button"
import Container from "../../component/Container"
import Title from "../../component/Title"

export default function Waifu() {
    const [waifu, setWaifu] = useState(undefined)

    function getWaifu() {
        fetch("https://api.waifu.pics/sfw/waifu")
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                setWaifu(response)
            })
    }

    useEffect(() => {
        getWaifu()
    }, [])
    const Waifu = () => {
        if (!waifu) {
            return <p>Loading...</p>
        } else {
            return (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={waifu.url} alt="waifu" className="max-w-[80%] max-h-[60vh]" />
            )
        }
    }
    return (
        <Container>
            <Title>Random Waifu</Title>
            <Waifu />
            <Button
                onClick={() => {
                    setWaifu(undefined)
                    getWaifu()
                }}
            >
                Get random waifu
            </Button>
        </Container>
    )
}
