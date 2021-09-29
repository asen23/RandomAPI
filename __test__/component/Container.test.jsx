import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Container from "component/Container"

describe("Container", () => {
    it("renders unchanged", async () => {
        const { asFragment } = render(<Container>A Component</Container>)
        expect(asFragment()).toMatchSnapshot()
    })

    it("renders its children", () => {
        render(<Container>A Component</Container>)

        const child = screen.getByText("A Component")
        expect(child).toBeInTheDocument()
    })
})
