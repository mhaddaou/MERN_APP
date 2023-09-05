// iQ8Ij9h9GgfBNZeC
// mongodb+srv://mhaddaou:<password>@cluster0.baz83mq.mongodb.net/
// mhaddaou
// mongodb+srv://mhaddaou:iQ8Ij9h9GgfBNZeC@cluster0.baz83mq.mongodb.net/?retryWrites=true&w=majority
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const UserModel = require('./models/Users');
const cors = require('cors')

mongoose.connect("mongodb+srv://mhaddaou:iQ8Ij9h9GgfBNZeC@cluster0.baz83mq.mongodb.net/mern?retryWrites=true&w=majority")
app.use(cors())
app.get('/', async (req, res) => {
    const user = await UserModel.find();
    res.json(user);
})

app.listen('3001', () =>{
    console.log('server listening  ');
})