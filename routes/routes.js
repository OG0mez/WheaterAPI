const path = require('path')
const APIKEY = process.env.APIKEY;
const URL = process.env.URL;
const axios = require('axios')
module.exports = (app) =>{

    app.get('/',(req,res)=>{
        res.status(200).sendFile('/index.html')
    })

    app.get('*',(req,res)=>{
        res.status(404).send({message:'page doesnt exists'})
    });

    app.post('/',(req,res)=>{
        const data = req.body.textField;
        axios.get(`${URL}${data}&APPID=${APIKEY}`)
        .then(result =>{
            console.log(result.data)
        })
        .catch(error =>{
            console.log(error)
        })
        res.status(200).send(data)
    })
}