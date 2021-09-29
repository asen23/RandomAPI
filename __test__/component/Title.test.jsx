import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Title from "component/Title"

describe("Title", () => {
    it("renders unchanged", async () => {
        const { asFragment } = render(<Title>A Title</Title>)
        expect(asFragment()).toMatchSnapshot()
    })

    it("renders a heading", () => {
        render(<Title>A Title</Title>)

        const heading = screen.getByRole("heading", {
            name: "A Title",
        })
        expect(heading).toBeInTheDocument()
    })
})
