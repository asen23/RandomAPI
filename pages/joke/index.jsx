import { useState, useEffect } from "react"
import useFetch from "../../hook/useFetch"
import Button from "../../component/Button"
import Container from "../../component/Container"
import Title from "../../component/Title"

export default function Joke() {
    const [joke, setJoke] = useFetch("https://v2.jokeapi.dev/joke/Any")

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
        <Container>
            <Title>Random Joke</Title>
            <Joke />
            <Button
                onClick={() => {
                    setJoke()
                }}
            >
                Get random joke
            </Button>
        </Container>
    )
}
