import { useState, useEffect } from "react"
import useFetch from "hook/useFetch"
import Button from "component/Button"
import Container from "component/Container"
import Title from "component/Title"

export default function Quote() {
    const [quote, setQuote] = useFetch("https://api.quotable.io/random")

    const Quote = () => {
        if (!quote) {
            return <p>Loading...</p>
        } else {
            return (
                <>
                    <p>{quote.content}</p>
                    <p className="italic">by: {quote.author}</p>
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
                    setQuote()
                }}
            >
                Get random quote
            </Button>
        </Container>
    )
}
