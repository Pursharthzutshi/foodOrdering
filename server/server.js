const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");


const cors = require("cors");

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET","POST","PUT","DELETE"],
    credentials:true,
}))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const PaymentOrderAndVerify = require("../server/Routes/PaymentOrderAndVerify")
const Registration = require("../server/Routes/Registration")
const FetchOrders = require("../server/Routes/FetchOrders")
const InsertPaymentDetails = require("../server/Routes/InsertPaymentDetails");


app.use("/PaymentOrderAndVerify",PaymentOrderAndVerify)
app.use("/Registration",Registration)
app.use("/FetchOrders",FetchOrders)
app.use("/InsertPaymentDetails",InsertPaymentDetails)



app.listen(port,()=>{
    console.log(`${port} is running`)
})



