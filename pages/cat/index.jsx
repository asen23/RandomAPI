import useFetch from "hook/useFetch"
import Button from "component/Button"
import Container from "component/Container"
import Title from "component/Title"
import Image from "component/Image"

export default function Cat() {
    const [cat, setCat] = useFetch("https://aws.random.cat/meow")

    const Cat = () => {
        if (!cat) {
            return <p>Loading...</p>
        } else {
            return <Image src={cat.file} alt="cat" />
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
