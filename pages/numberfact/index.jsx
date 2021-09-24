import { useState, useEffect } from "react"
import Button from "component/Button"
import Container from "component/Container"
import Title from "component/Title"
import useFetch from "hook/useFetch"

export default function NumberFact() {
    const [numberFact, getNumberFact, error] = useFetch(
        "http://numbersapi.com/random/math?json"
    )
    const [numberFactFallback, setNumberFactFallback] = useState(undefined)

    useEffect(() => {
        if (error == "error") {
            fetch("/api/numberfact")
                .then((response) => {
                    return response.json()
                })
                .then((response) => {
                    setNumberFactFallback(response)
                })
        }
    }, [error])

    const NumberFact = () => {
        if (!numberFact && !numberFactFallback) {
            return <p>Loading...</p>
        } else {
            return (
                <>
                    <p>
                        {numberFact ? numberFact.text : numberFactFallback.text}
                    </p>
                </>
            )
        }
    }
    return (
        <Container>
            <Title>Random Number Fact</Title>
            <NumberFact />
            <Button
                onClick={() => {
                    getNumberFact()
                }}
            >
                Get random number fact
            </Button>
        </Container>
    )
}
