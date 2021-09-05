import { useState, useEffect, useMemo } from "react"
import styles from "../styles/Joke.module.css"

export default function Joke() {
    const [joke, setJoke] = useState(undefined)

    function getJoke() {
        fetch("https://v2.jokeapi.dev/joke/Any")
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                setJoke(response)
            })
    }

    useEffect(() => {
        getJoke()
    }, [])
    const Joke = () => {
        if (!joke) {
            return <p>Loading...</p>
        } else if (joke.joke) {
            return <p>{joke.joke}</p>
        } else {
            return (
                <>
                    <p>{joke.setup}</p>
                    <p>{joke.delivery}</p>
                </>
            )
        }
    }
    return (
        <div className={`${styles.container}`}>
            <h1>Random Joke</h1>
            <Joke />
            <button
                onClick={() => {
                    setJoke(undefined)
                    getJoke()
                }}
                className={`${styles.button}`}
            >
                Get random joke
            </button>
        </div>
    )
}
