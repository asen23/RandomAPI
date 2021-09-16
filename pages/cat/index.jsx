import useFetch from "hook/useFetch"
import Button from "component/Button"
import Container from "component/Container"
import Title from "component/Title"

export default function Cat() {
    const [cat, setCat] = useFetch("https://aws.random.cat/meow")

    const Cat = () => {
        if (!cat) {
            return <p>Loading...</p>
        } else {
            return (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={cat.file}
                    alt="cat"
                    className="max-w-[80%] max-h-[60vh]"
                />
            )
        }
    }
    return (
        <Container>
            <Title>Random Cat</Title>
            <Cat />
            <Button onClick={setCat}>Get random cat</Button>
        </Container>
    )
}
