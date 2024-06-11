require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/instagram',( req,res)=>{
    res.send('vinay kumar swami lal pawa')

})
app.get('/login',(req,res)=>
{
    res.send('somay lal pawa')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})