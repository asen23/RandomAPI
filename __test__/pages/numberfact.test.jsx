import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import NumberFact from "pages/numberfact/index"

const dummyNumberFact = ["a fact about number", "another fact about number"]

describe("NumberFact", () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it("renders unchanged", async () => {
        fetch.mockResponseOnce(dummyNumberFact[0])

        const { asFragment } = render(<NumberFact />)
        expect(asFragment()).toMatchSnapshot()

        await screen.findByText(dummyNumberFact[0], { exact: false })

        expect(asFragment()).toMatchSnapshot()
    })

    it("gives new numberFact numberFact", async () => {
        fetch.mockResponses(...dummyNumberFact.map((e) => JSON.stringify(e)))

        render(<NumberFact />)

        const firstNumberFact = await screen.findByText(dummyNumberFact[0], {
            exact: false,
        })
        expect(firstNumberFact).toBeInTheDocument()

        const button = screen.getByRole("button")
        userEvent.click(button)

        const secondNumberFact = await screen.findByText(dummyNumberFact[1], {
            exact: false,
        })
        expect(secondNumberFact).toBeInTheDocument()
    })
})
