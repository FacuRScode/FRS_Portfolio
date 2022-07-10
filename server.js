const express = require('express')
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res)=>{
    res.send(__dirname + '/public/index.html')
})

app.post('/', (req, res)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'facundoromerososa@gmail.com',
            pass: 'password01'
        }
    })

    const mailOption = {
        from: req.body.email,
        to: 'facundoromerososa@gmail.com',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOption, (error, info)=>{
        if(error){
            res.send('error');
        }else{
            res.send('success')
        }
    })
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})