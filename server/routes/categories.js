const express =require('express')
const result = require('../utils/result')
const pool = require('../db/db')

const router = express.Router()

router.post('/addCategory',(req,res)=>{
    const{title, description} = req.body
    const sql = `INSERT INTO categories(title, description) VALUES(?,?)`
    pool.query(
        sql,
        [title,description],
        (error,data)=>{
            res.send(result.createResult(error,data))
        })
})

router.get('/showCategories',(req,res)=>{
    const sql =`SELECT * FROM categories`
    pool.query(
        sql,[req.headers.userId],
        (error,data)=>{
            res.send(result.createResult(error,data))
        })
})

module.exports = router