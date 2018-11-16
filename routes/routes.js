const path = require('path')
module.exports = (app) =>{

    app.get('/',(req,res)=>{
        res.status(200).sendFile('/index.html')
    })

    app.get('*',(req,res)=>{
        res.status(404).send({message:'page doesnt exists'})
    });

    app.post('/',(req,res)=>{
        const data = req.body.textField;
        console.log(data)
        res.status(200).send(data)
    })
}