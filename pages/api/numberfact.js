export default function handler(req, res) {
    return new Promise((resolve, reject) => {
        fetch("http://numbersapi.com/random/math?json")
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                res.status(200).send(response)
                resolve()
            })
    })
}
