import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Waifu from "pages/waifu/index"

const dummyWaifu = [{ url: "file1.jpg" }, { url: "file2.jpg" }]

describe("Waifu", () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it("renders unchanged", async () => {
        fetch.mockResponseOnce(JSON.stringify(dummyWaifu[0]))

        const { asFragment } = render(<Waifu />)
        expect(asFragment()).toMatchSnapshot()

        await screen.findByAltText("waifu")

        expect(asFragment()).toMatchSnapshot()
    })

    it("gives new waifu", async () => {
        fetch.mockResponses(...dummyWaifu.map((e) => JSON.stringify(e)))

        render(<Waifu />)

        const firstImage = await screen.findByAltText("waifu")
        expect(firstImage.src).toContain(dummyWaifu[0].url)

        const button = screen.getByRole("button")
        userEvent.click(button)

        const loading = await screen.findByText("Loading...")
        expect(loading).toBeDefined()

        const secondImage = await screen.findByAltText("waifu")
        expect(secondImage.src).toContain(dummyWaifu[1].url)
    })
})
