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

        const { result, waitForNextUpdate } = renderHook(() => useFetch("test"))

        await waitForNextUpdate()
        const [data, getData, error] = result.current

        expect(data).toStrictEqual(dummyData[0])
        expect(error).toBeUndefined()
    })

    it("calls api again when set to undefined", async () => {
        fetch.mockResponses(...dummyData.map((e) => JSON.stringify(e)))

        const { result, waitForNextUpdate } = renderHook(() => useFetch("test"))

        await waitForNextUpdate()

        const [data, getData, error] = result.current

        expect(data).toStrictEqual(dummyData[0])
        expect(error).toBeUndefined()

        act(() => {
            getData()
        })

        await waitForNextUpdate()

        expect(result.current[0]).toStrictEqual(dummyData[1])
        expect(error).toBeUndefined()
    })

    it("return error when the call is unsuccessful", async () => {
        fetch.mockReject(new Error("error"))

        const { result, waitForNextUpdate } = renderHook(() => useFetch("test"))

        await waitForNextUpdate()

        const [, , error] = result.current

        expect(error).toEqual("error")
    })
})
