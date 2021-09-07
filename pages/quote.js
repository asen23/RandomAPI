import { useState, useEffect } from "react"
import styles from "../styles/Quote.module.css"

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
        <div className="container">
            <h1>Random Quote</h1>
            <Quote />
            <button
                onClick={() => {
                    setQuote(undefined)
                    getQuote()
                }}
            >
                Get random quote
            </button>
        </div>
    )
}
