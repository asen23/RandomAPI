import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import NavbarItem from "component/Navbar/NavbarItem"

describe("Navbar", () => {
    it("renders unchanged", async () => {
        const { asFragment } = render(<NavbarItem href="/test">A Component</NavbarItem>)
        expect(asFragment()).toMatchSnapshot()
    })

    it("renders its children", () => {
        render(<NavbarItem href="/test">A Component</NavbarItem>)

        const child = screen.getByText("A Component")
        expect(child).toBeInTheDocument()
    })
})
