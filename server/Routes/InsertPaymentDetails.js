const router = require("express").Router()
const db = require("../Database/database")

//inserting Payment details

//Insert Payment Order Info

router.post("/insertOrderInfo",(req,res)=>{
    const orderID = req.body.orderID
    const emailID = req.body.orderPurchasedEmailID
    const phoneNo = req.body.phoneNo 
    const name = req.body.name 
    const address = req.body.address 
    const secondAddress = req.body.secondAddress
    const amount = req.body.amount

    const insertOrderInfo = `insert into order_info (orderID,emailID,name,Phone_No,address,secondAddress,amount) 
    values ("${orderID}","${emailID}","${name}","${phoneNo}","${address}","${secondAddress}","${amount}")`

        db.query(insertOrderInfo,(err,array)=>{
            if(err){
                console.log(err);
            }
            console.log(array)
     
        })                   
        res.send("Order Placed,Check Your Orders")
                            
})


//Insert Payment Order Summary 

router.post("/insertOrderSummary",(req,res)=>{
    const orderID = req.body.orderID
    const itemName = req.body.itemName
    const noOfItems = req.body.noOfItems
    const orderDate = req.body.orderDate

    const insertOrderSummary = `insert into order_summary (orderID,itemName,itemQuantity,orderDate) 
    values ("${orderID}","${itemName}","${noOfItems}","${orderDate}")`

    db.query(insertOrderSummary,(err,array)=>{
        if(err){
            console.log(err);
        }
        console.log(array)


        res.send("Data inserted");
    })        
    

})

module.exports = router;
