const router = require("express").Router()
const db = require("../Database/database")
const cookieParser = require("cookie-parser")

router.use(cookieParser());

const session =  require("express-session")

router.use(session({
    key:"user",
    secret:"registerSecret",
    resave:true,
    saveUninitialized:false,
    cookie:{
        maxAge:null,
    }
}))


router.get("/dbshow",(req,res)=>{
    const sql = `select * from order_info`
    db.query(sql,(err,array)=>{
        if(err){
            console.log(err)
        }
        res.json({data:array})
    })
})

router.post("/signUp",(req,res)=>{

    const name = req.body.name
    const emailID = req.body.emailID
    const password = req.body.password
    const reCheckPassword = req.body.reCheckPassword 
    
    const signUp = `insert into user_info(name,emailID,password) values ("${name}","${emailID}","${password}")`

    const exisitingEmailID = `select * from user_info where emailID = ?`

    db.query(exisitingEmailID,[emailID],(err,exisitingEmailIDCheck)=>{
        if(err){
            console.log(err);
        }

        if(exisitingEmailIDCheck.length > 0){
            res.json({message:"Email ID Already exists"})
        }else if(name === "" || emailID === ""){
              res.json({message:"Name or EmailID Not Filled"})
          }else if(!emailID.includes('.com')){
              res.json({message:"Please enter a valid Email ID"})
          }else if(password !== reCheckPassword){
              res.json({message:"Password not same"})
          }else if(password === ""){
              res.json({message:"Password not Filled"})
          }else{
              db.query(signUp,(err,data)=>{
                  if(err){
                      console.log(err)
                  } 
                  res.json({data:data});
                  // res.redirect("/")   
                  })
          }
      
        
    })

})

//LOGIN


//Login Session created 

router.get("/login",(req,res)=>{

    if(req.session.user){
        res.json({loggedIn:true,user:req.session.user})
    }else{
        res.json({loggedIn:false})    
    }
})

//Login user 

router.post("/login",(req,res)=>{

    const logInEmailID = req.body.logInEmailID
    const LogInPassword = req.body.LogInPassword

    const loginQuery = `select * from user_info where emailID = ? and password = ?`

    db.query(loginQuery,[logInEmailID,LogInPassword],(err,arrayResult)=>{
        if(err){
            console.log(err)
        }
        if(arrayResult.length>0){
            req.session.user = arrayResult
            console.log(arrayResult)
            res.json({data:arrayResult})


        }
        else{
            res.json({message:"Error"})
        }
            })

})

//Logout User and clear session

router.get('/logout',(req,res)=>{
    res.clearCookie('user');
    res.redirect("/")    
})


module.exports = router;
