import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Quote from "pages/quote/index"

const dummyQuote = [
    {
        content: "a very good quote",
        author: "random person",
    },
    {
        content: "a very bad quote",
        author: "another random person",
    },
]

describe("Quote", () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it("renders unchanged", async () => {
        fetch.mockResponseOnce(JSON.stringify(dummyQuote[0]))

        const { asFragment } = render(<Quote />)
        expect(asFragment()).toMatchSnapshot()

        await screen.findByText(dummyQuote[0].content)
        await screen.findByText(dummyQuote[0].author, { exact: false })

        expect(asFragment()).toMatchSnapshot()
    })

    it("gives new quote", async () => {
        fetch.mockResponses(...dummyQuote.map((e) => JSON.stringify(e)))

        render(<Quote />)

        const firstContent = await screen.findByText(dummyQuote[0].content)
        expect(firstContent).toBeInTheDocument()
        const firstAuthor = await screen.findByText(dummyQuote[0].author, {
            exact: false,
        })
        expect(firstAuthor).toBeInTheDocument()

        const button = screen.getByRole("button")
        userEvent.click(button)

        const secondContent = await screen.findByText(dummyQuote[1].content)
        expect(secondContent).toBeInTheDocument()
        const secondAuthor = await screen.findByText(dummyQuote[1].author, {
            exact: false,
        })
        expect(secondAuthor).toBeInTheDocument()
    })
})
