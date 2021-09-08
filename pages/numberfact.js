import { useState, useEffect } from "react"

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
        <div className="container">
            <h1>Random Number Fact</h1>
            <NumberFact />
            <button
                onClick={() => {
                    setNumberFact(undefined)
                    getNumberFact()
                }}
            >
                Get random number fact
            </button>
        </div>
    )
}
