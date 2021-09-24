import { useState, useEffect } from "react"

export default function useFetch(url) {
    const [data, setData] = useState(undefined)
    const [error, setError] = useState(undefined)
    const fetchData = () => {
        return fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                setData(response)
                return "success"
            })
            .catch((error) => {
                return "error"
            })
    }
    useEffect(() => {
        if (error) {
            return
        }
        async function callAPI() {
            let result
            for (let index = 0; index < 3; index++) {
                result = await fetchData()
                if (result == "success") {
                    return
                }
            }
            setError(result)
        }
        callAPI()
    }, [])

    function getData() {
        setData(undefined)
        fetchData()
    }

    return [data, getData, error]
}
