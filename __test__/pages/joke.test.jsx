import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Joke from "pages/joke/index"

const dummySingle = [
    { joke: "a very interesting jokes" },
    { joke: "a very lame jokes" },
]

const dummyDouble = [
    {
        setup: "a setup for a jokes",
        delivery: "a delivery for a jokes",
    },
    {
        setup: "a setup for a great jokes",
        delivery: "a delivery for a great jokes",
    },
]

describe("Joke", () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it("renders single joke unchanged", async () => {
        fetch.mockResponseOnce(JSON.stringify(dummySingle[0]))

        const { asFragment } = render(<Joke />)
        expect(asFragment()).toMatchSnapshot()

        await screen.findByText(dummySingle[0].joke)

        expect(asFragment()).toMatchSnapshot()
    })

    it("renders double joke unchanged", async () => {
        fetch.mockResponseOnce(JSON.stringify(dummyDouble[0]))

        const { asFragment } = render(<Joke />)
        expect(asFragment()).toMatchSnapshot()

        await screen.findByText(dummyDouble[0].setup)
        await screen.findByText(dummyDouble[0].delivery)

        expect(asFragment()).toMatchSnapshot()
    })

    it("gives new single joke", async () => {
        fetch.mockResponses(...dummySingle.map((e) => JSON.stringify(e)))

        render(<Joke />)

        const firstJoke = await screen.findByText(dummySingle[0].joke)
        expect(firstJoke).toBeInTheDocument()

        const button = screen.getByRole("button")
        userEvent.click(button)

        const secondJoke = await screen.findByText(dummySingle[1].joke)
        expect(secondJoke).toBeInTheDocument()
    })

    it("gives new double joke", async () => {
        fetch.mockResponses(...dummyDouble.map((e) => JSON.stringify(e)))

        render(<Joke />)

        const firstSetup = await screen.findByText(dummyDouble[0].setup)
        expect(firstSetup).toBeInTheDocument()
        const firstDelivery = await screen.findByText(dummyDouble[0].delivery)
        expect(firstDelivery).toBeInTheDocument()

        const button = screen.getByRole("button")
        userEvent.click(button)

        const secondSetup = await screen.findByText(dummyDouble[1].setup)
        expect(secondSetup).toBeInTheDocument()
        const secondDelivery = await screen.findByText(dummyDouble[1].delivery)
        expect(secondDelivery).toBeInTheDocument()
    })
})
