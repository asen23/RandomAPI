import { useState, useEffect } from "react"

export default function useFetch(url) {
    const [data, setData] = useState(undefined)
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
        async function callAPI() {
            for (let index = 0; index < 3; index++) {
                let result = await fetchData()
                if (result == "success") {
                    return
                }
            }
        }
        callAPI()
    }, [])

    function getData() {
        setData(undefined)
        fetchData()
    }

    return [data, getData]
}
