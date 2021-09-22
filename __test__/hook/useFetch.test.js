import { renderHook, act } from "@testing-library/react-hooks"
import { data } from "autoprefixer"
import useFetch from "hook/useFetch"

const dummyData = [{ data: "data" }, { another: "another" }]

describe("useFetch", () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it("calls api immediately", async () => {
        fetch.mockResponseOnce(JSON.stringify(dummyData[0]))

        const { result, waitForNextUpdate } = renderHook(() =>
            useFetch("test")
        )

        await waitForNextUpdate()
        const [data, setData] = result.current

        expect(data).toStrictEqual(dummyData[0])
    })

    it("calls api again when set to undefined", async () => {
        fetch.mockResponses(...dummyData.map((e) => JSON.stringify(e)))

        const { result, waitForNextUpdate } = renderHook(() =>
            useFetch("test")
        )

        await waitForNextUpdate()

        expect(result.current[0]).toStrictEqual(dummyData[0])

        act(() => {
            result.current[1](undefined)
        })

        await waitForNextUpdate()

        expect(result.current[0]).toStrictEqual(dummyData[1])
    })
})
