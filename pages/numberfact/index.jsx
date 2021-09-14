import { useState, useEffect } from "react"
import Button from "../../component/Button/Button"
import Container from "../../component/Container"
import Title from "../../component/Title"

export default function NumberFact() {
    const [numberFact, setNumberFact] = useState(undefined)

    function getNumberFact() {
        fetch("http://numbersapi.com/random/math")
            .then((response) => {
                return response.text()
            })
            .then((response) => {
                setNumberFact(response)
            })
            .catch((error) => {
                fetch("/api/numberfact")
                    .then((response) => {
                        return response.text()
                    })
                    .then((response) => {
                        setNumberFact(response)
                    })
            })
    }

    useEffect(() => {
        getNumberFact()
    }, [])
    const NumberFact = () => {
        if (!numberFact) {
            return <p>Loading...</p>
        } else {
            return (
                <>
                    <p>{numberFact}</p>
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
                    setNumberFact(undefined)
                    getNumberFact()
                }}
            >
                Get random number fact
            </Button>
        </Container>
    )
}
