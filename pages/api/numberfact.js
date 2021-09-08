export default function handler(req, res) {
    fetch("http://numbersapi.com/random/math")
        .then((response) => {
            return response.text()
        })
        .then((response) => {
            res.status(200).send(response)
        })
}
