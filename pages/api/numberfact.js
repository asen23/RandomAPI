export default function handler(req, res) {
    return new Promise((resolve, reject) => {
        fetch("http://numbersapi.com/random/math")
            .then((response) => {
                return response.text()
            })
            .then((response) => {
                res.status(200).send(response)
                resolve()
            })
    })
}
