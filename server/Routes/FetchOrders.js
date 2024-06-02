const router = require("express").Router()
const db = require("../Database/database")

//FetchOrders

router.post("/fetchOrderPurchasedData",(req,res)=>{

    const emailID = req.body.emailID

    const fetchDataQuery = `SELECT * FROM order_info o
    inner join order_summary s
    where o.orderID = s.orderID and emailID = ?`


    if(emailID){
        db.query(fetchDataQuery,[emailID],(err,array)=>{
            console.log(array)

            if(err){
                console.log(err);
            }
            res.json({data:array})
        })
    }else{     
        res.send("Error")
    
    }    
    
})




module.exports = router;
