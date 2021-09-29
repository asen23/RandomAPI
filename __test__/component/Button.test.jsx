import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Button from "component/Button"

describe("Button", () => {
    it("renders unchanged", async () => {
        const { asFragment } = render(<Button>A Component</Button>)
        expect(asFragment()).toMatchSnapshot()
    })

    it("renders its children", () => {
        render(<Button>A Component</Button>)

        const child = screen.getByText("A Component")
        expect(child).toBeInTheDocument()
    })

    it("calls its onclick", () => {
        const onClick = jest.fn()
        render(<Button onClick={onClick}>A Component</Button>)
    
        const button = screen.getByRole("button")
        userEvent.click(button)

        expect(onClick.mock.calls.length).toBe(1)
    })
})
