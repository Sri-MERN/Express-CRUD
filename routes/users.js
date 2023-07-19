const express = require('express')
const router = express.Router()

const users = [
    {
        name:"Sri",
        gmail:"sri@gmail.com",
        password:"admin@123",
        role:"student"
    },
    {
        name:"aji",
        gmail:"aji@gmail.com",
        password:"admin@123",
        role:"student"
    },
    {
        name:"kk",
        gmail:"kk@gmail.com",
        password:"admin@123",
        role:"student"
    },
    {
        name:"lala",
        gmail:"lala@gmail.com",
        password:"admin@123",
        role:"student"
    }
]

router.get('/',(req,res)=>{
    res
    .status(200)
    .send({
        message:"Data Fetched Successfully",
        data:users
    })
})

router.get('/:id',(req,res)=>{
    if(Number(req.params.id)<users.length){
    res
    .status(200) //code for sucess
    .send({
        message:'Data Fetched Sucessfully',
        data:users[req.params.id]
    })
}
else
{
    res
    .status(400)
    .send({
        message:'user not found'
    })
}
})

router.post('/',(req,res)=>{
    users.push(req.body)
    res
    .status(200)
    .send({
        message:'user saved sucessfully'
    })
})

router.put('/:id',(req,res)=>{
    if(Number(req.params.id)<users.length){
        users.splice(req.params.id,1,req.body)
       // users[req.params.id].name = req.body.name
    res
    .status(200) //code for sucess
    .send({
        message:'Data Fetched Sucessfully',
        data:users[req.params.id]
    })
}
else
{
    res
    .status(400)
    .send({
        message:'user not found'
    })
}
})

router.delete('/:id',(req,res)=>{
    if(Number(req.params.id)<users.length){
        users.splice(req.params.id,1)
       // users[req.params.id].name = req.body.name
    res
    .status(200) //code for sucess
    .send({
        message:'Data Deleted Sucessfully',
    })
}
else
{
    res
    .status(400)
    .send({
        message:'user not found'
    })
}
})
module.exports = router