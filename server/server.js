const express = require('express')
const cors = require('cors')

const authorization = require('./routes/authorization')
const blogsRouter =require('./routes/blogs')
const categoriesRouter = require('./routes/categories')
const userRouter = require('./routes/user')

const app = express()

app.use(cors())
app.use(express.json())
app.use(authorization)

app.use('/blogs',blogsRouter)
app.use('/categories',categoriesRouter)
app.use('/user',userRouter)

app.listen(4000,'localhost',()=>{
    console.log('SERVER STARTED AT PORT 4000')
})