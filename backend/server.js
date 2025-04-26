const express =require("express")
const dotenv=require('dotenv')
const bodyParser = require("body-parser")
const { MongoClient } = require('mongodb')
const cors=require('cors')
const nodemailer=require("nodemailer")

const app=express()
dotenv.config()
const port=3000

app.use(bodyParser.json())
app.use(cors())

const url = process.env.MONGO_URI
const client = new MongoClient(url)

const dbName ="visitors"

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });


async function start(){
await client.connect()
app.post('/',async(req,res)=>{
    const {name,email,message}=req.body
    const db=client.db(dbName)
    const collection= db.collection('visitor')
const result=await collection.insertOne({name,email,message})

const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER,
    subject: `📝 New Form Submission: ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  const confirmation={
    from:process.env.EMAIL_USER,
    to:email,
    subject:`Response`,
    text:`Thank you for your response, \n I will contact you soon, \nFrom ${name} `
  }

  await transporter.sendMail(mailOptions);
  await transporter.sendMail(confirmation);
  res.send(`Saved and email sent! ID: ${result.insertedId}`)
})

app.get('/',(req,res)=>{
res.send("hello world")
})

app.listen(port,()=>{
    console.log(`examples are listenning at port http://localhost:${port}/`)
})
}
start()