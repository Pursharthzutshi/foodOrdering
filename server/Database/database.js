// const router = require("express").Router()
const dotenv = require('dotenv');
dotenv.config()

const mysql = require("mysql2");

//create database


const db = mysql.createConnection({
    host:process.env.MYSQL_ADDON_HOST,
    user:process.env.MYSQL_ADDON_USER,
    password:process.env.MYSQL_ADDON_PASSWORD,
    port:process.env.MYSQL_ADDON_PORT,
    database:process.env.MYSQL_ADDON_DB
})

db.connect((err)=>{
    if(err){
        console.log(err)
    }
})

module.exports = db;