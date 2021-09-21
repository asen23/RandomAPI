import { render, screen } from "@testing-library/react"
import Home from "pages/index"

describe("Home", () => {
    it("renders unchanged", () => {
        const { asFragment } = render(<Home />)
        expect(asFragment()).toMatchSnapshot()
    })

    it("renders two heading", () => {
        render(<Home />)

        const firstHeading = screen.getByRole("heading", {
            name: "Welcome to random API",
        })
        expect(firstHeading).toBeInTheDocument()

        const secondHeading = screen.getByRole("heading", {
            name: "This website provide random API interfaces",
        })
        expect(secondHeading).toBeInTheDocument()
    })
})
