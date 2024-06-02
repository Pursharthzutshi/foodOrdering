const router = require("express").Router()
const razorpay = require("razorpay");
const crypto = require("crypto");
// const dotenv = require('dotenv');
// dotenv.config()


//PAYMENT 

//Payment order instance

router.post("/orders",(req,res)=>{
    const instance = new razorpay({
        key_id:process.env.KEY_ID,
        key_secret:process.env.KEY_SECRET
    })
    const options = {
        amount:req.body.price * 100,
        currency:"INR"
    }

    console.log(options.amount)

    instance.orders.create(options,(err,array)=>{
        if(err){
            console.log(err)
        }
        res.json({array:array});
        console.log(array)
        
    })
})

//Payment Verification 

router.post("/verify",(req,res)=>{
 const {razorpay_signature,razorpay_order_id,razorpay_payment_id} = req.body

	let sign = razorpay_order_id + "|" + razorpay_payment_id;
    
    let expectedSign = crypto
	.createHmac("sha256", process.env.KEY_SECRET)
	.update(sign.toString())
	.digest("hex");

    if(expectedSign === razorpay_signature){
        res.status(200).json("data")
        // res.redirect("http://localhost:3000/orderPurchasedPage")

    }else{
        res.status(500).json({message:"SORRY BRO"})

    }

})



module.exports = router;