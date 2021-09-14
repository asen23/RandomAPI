import { useState, useEffect } from "react"
import Button from "../../component/Button/Button"
import Container from "../../component/Container"
import styles from "./waifu.module.css"

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
                <img src={waifu.url} alt="waifu" className={styles.waifuImg} />
            )
        }
    }
    return (
        <Container>
            <h1>Random Waifu</h1>
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
