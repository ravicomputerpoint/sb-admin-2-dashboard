import express from 'express'

const app = express()

//Middleware
app.set('view engine','ejs')
app.use(express.static('public'))

//Routes
app.get('/',(req, res) => {
    res.render('index')
})

//Server Start
app.listen(3000,()=>{
    console.log(`listen on port http://localhost:${3000}`)
})