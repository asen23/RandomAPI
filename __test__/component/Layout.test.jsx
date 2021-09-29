import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Layout from "component/Layout"

describe("Layout", () => {
    it("renders unchanged", async () => {
        const { asFragment } = render(<Layout>A Component</Layout>)
        expect(asFragment()).toMatchSnapshot()
    })

    it("renders its children", () => {
        render(<Layout>A Component</Layout>)

        const child = screen.getByText("A Component")
        expect(child).toBeInTheDocument()
    })
})
