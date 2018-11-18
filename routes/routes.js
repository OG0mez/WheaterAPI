const path = require('path')
const APIKEY = process.env.APIKEY;
const URL = process.env.URL;
const axios = require('axios')
module.exports = (app) => {

    app.get('/', (req, res) => {
        res.status(200).sendFile('/index.html')
    })

    app.get('*', (req, res) => {
        res.status(404).send({
            message: 'page doesnt exists'
        })
    });

    app.post('/', async (req, res) => {
        const data = req.body.textField;
        try {
            result = await axios.get(`${URL}${data}&APPID=${APIKEY}`);
            res.status(200).send(JSON.stringify(result.data))
        } catch (error) {
            res.status(500).send(error.message)
        }
    })
}