const express = require('express')
const pool = require('../db/db')
const result = require('../utils/result')

const router =express.Router()

router.get('/myBlog', (req,res)=>{
    const sql =`SELECT id, title, category_id FROM blogs WHERE user_id =?`
    pool.query(
        sql,
        [req.headers.userId],
        (error,data)=>{
            res.send(result.createResult(error,data))
        })
})

router.get('/allBlog',(req,res)=>{
    const sql = `SELECT id, title, category_id from blogs`
    pool.query(
        sql,
        (error,data)=>{
            res.send(result.createResult(error,data))
        })
})

router.post('/addBlog',(req,res)=>{
    const {title, content, category_id} = req.body
    const sql = `INSERT INTO blogs(user_id,title, contents, category_id) VALUES(?,?,?,?)`
    pool.query(
        sql,
        [req.headers.userId,title,content, category_id],
        (error,data)=>{
            res.send(result.createResult(error,data))
        })
})

router.get('/searchBlog',(req,res)=>{
    const searchTerm = req.query.searchTerm
    let sql = `SELECT id,title, category_id, created_time FROM blogs`
    if(searchTerm){
        sql += `WHERE title OR contents like '%${searchTerm}`
    }
    pool.query(sql,(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

router.put('/addBlog',(req,res)=>{
    const {title, contents, category_id} =req.body
    sql = `UPDATE blogs SET title =?, contents=?, category_id=? WHERE id=?`
    pool.query(
        sql,
        [title,contents,category_id, req.headers.id],
        (error,data)=>{
            res.send(result.createResult(error,data))
        })
})

router.get('/blog',(req,res)=>{
    const sql =`SELECT title, contents from blogs WHERE id =?`
    pool.query(
        sql,
        [req.headers.id],
        (error,data)=>{
            res.send(result.createResult(error,data))
    })
})


module.exports = router