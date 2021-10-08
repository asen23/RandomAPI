import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Image from "component/Image"

const dummyImg = {
    src: "http://example.com/tes.png",
    alt: "an alternate text",
}

describe("Image", () => {
    it("renders unchanged", async () => {
        const { asFragment } = render(
            <Image src={dummyImg.src} alt={dummyImg.alt} />
        )
        expect(asFragment()).toMatchSnapshot()
    })

    it("renders img correctly", () => {
        render(<Image src={dummyImg.src} alt={dummyImg.alt} />)

        const image = screen.getByAltText(dummyImg.alt)
        expect(image.src).toContain(dummyImg.src)
    })
})
