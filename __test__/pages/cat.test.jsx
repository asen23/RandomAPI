import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Cat from "pages/cat/index"

const dummyCat = [{ file: "file1.jpg" }, { file: "file2.jpg" }]

describe("Cat", () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it("renders unchanged", async () => {
        fetch.mockResponseOnce(JSON.stringify(dummyCat[0]))

        const { asFragment } = render(<Cat />)
        expect(asFragment()).toMatchSnapshot()

        await screen.findByAltText("cat")

        expect(asFragment()).toMatchSnapshot()
    })

    it("gives new cat", async () => {
        fetch.mockResponses(...dummyCat.map((e) => JSON.stringify(e)))

        render(<Cat />)

        const firstImage = await screen.findByAltText("cat")
        expect(firstImage.src).toContain(dummyCat[0].file)

        const button = screen.getByRole("button")
        userEvent.click(button)

        const loading = await screen.findByText("Loading...")
        expect(loading).toBeDefined()

        const secondImage = await screen.findByAltText("cat")
        expect(secondImage.src).toContain(dummyCat[1].file)
    })
})
