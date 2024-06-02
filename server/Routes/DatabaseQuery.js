const router = require("express").Router()

//Creating Tables 

router.get("/createTableUserInfo",(req,res)=>{
    const createUserInfoTableQuery = `create table user_info (emailID varchar(100),name varchar(100),password varchar(100),primary key(emailID))`

    db.query(createUserInfoTableQuery,(err)=>{
        if(err){
            console.log(err)
        }
    })

    res.send("Database Created");
})


router.get("/createTableOrderInfo",(req,res)=>{

    const creatingOrderInfoTableQuery = `create table order_info
    (orderID varchar(50),
    emailID varchar(100) not null,
    name varchar(100) not null,
    Phone_No int not null,
    address varchar(200) not null,
    secondAddress varchar(200) not null,
    amount int not null,
    itemName varchar(100) not null,
    itemQuantity int not null
    foreign key (emailID) REFERENCES user_info(emailID),
    CONSTRAINT PK_Person PRIMARY KEY (emailID,name,Phone_No,address,secondAddress))`

    db.query(creatingOrderInfoTableQuery,(err)=>{
        if(err){
            console.log(err)
        }
    })

    res.send("Database Created");
})

//delete table

router.get("/deleteTable",(req,res)=>{

    const sql = `drop table user_info`
    db.query(sql,(err)=>{
            if(err){
                console.log(err)
            }    
        })
    
        res.send("Table is deleted")

})

app.get("/dbCreate",(req,res)=>{
    const sql = `create database resturant_website`

    db.query(sql,(err)=>{
        if(err){
            console.log(err)
        }
    })

    res.send("Database Created");
})



module.exports = router;