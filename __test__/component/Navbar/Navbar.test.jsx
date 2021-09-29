import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Navbar from "component/Navbar/Navbar"

describe("Navbar", () => {
    it("renders unchanged", async () => {
        const { asFragment } = render(<Navbar />)
        expect(asFragment()).toMatchSnapshot()
    })
})
