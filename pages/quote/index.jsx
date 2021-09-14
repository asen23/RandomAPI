import { useState, useEffect } from "react"
import Button from "../../component/Button/Button"
import Container from "../../component/Container"
import Title from "../../component/Title"
import styles from "./quote.module.css"

export default function Quote() {
    const [quote, setQuote] = useState(undefined)

    function getQuote() {
        fetch("https://api.quotable.io/random")
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                setQuote(response)
            })
    }

    useEffect(() => {
        getQuote()
    }, [])
    const Quote = () => {
        if (!quote) {
            return <p>Loading...</p>
        } else {
            return (
                <>
                    <p>{quote.content}</p>
                    <p className={`${styles.author}`}>by: {quote.author}</p>
                </>
            )
        }
    }
    return (
        <Container>
            <Title>Random Quote</Title>
            <Quote />
            <Button
                onClick={() => {
                    setQuote(undefined)
                    getQuote()
                }}
            >
                Get random quote
            </Button>
        </Container>
    )
}
