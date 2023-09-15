import express from 'express';
import type {Express, Response, Request } from 'express';
import ConnectDb from './outils/ConnectDb';
import userModel from './Models/userModel';
import adminModel from './Models/adminsModule';
import jwt from "jsonwebtoken"
import check from './outils/check';
import bcrypt from 'bcrypt'
import cors from 'cors';
import dotenv from 'dotenv';
import allUsers from './allUsers';
dotenv.config();


const app : Express = express();
app.use(cors());
app.use(express.json());


app.get('/', (req : Request, res : Response) => {
    res.send('hello from server express with typescript')
})

// get all users
app.get('/users', async (req : Request, res : Response) => {
    const users = await userModel.find();
    const ret = allUsers(users);
    res.json(ret);
})






// for login
app.post('/login', async(req : Request, res : Response) =>{
    const {username, password} = req.body;
    res.setHeader('Content-Type', 'text/plain');

    const user = await userModel.findOne({username}) ;
    if (!user)
        return res.json({message : " user doesn't exist!"})
    

    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if(!isPasswordValid)
        res.json({message : " Username or Password is incorrect"})
    const token = jwt.sign({id : user._id}, `${process.env.SECRET}`);
    
    return res.json({token, userId: user._id});
    
})


// to register new user
app.post('/register', async(req :Request, res : Response) =>{
    
    const user = check(req) ;
    res.setHeader('Content-Type', 'text/plain');

    
    const username = req.body.username;
    const exist = await userModel.findOne({username})
    if (exist)
    return res.status(421).json({message : "username alredy exist"});

    if (!user)
        return res.status(422).json({ message: "the password is not same" });
    
    const newUser = new userModel(user);
    await newUser.save();
    
    res.json({message : "user created successfully"});
});



// run server to listen and connect to DB
app.listen(process.env.PORT, () =>{
    console.log("Express listening on port " + process.env.PORT);
    ConnectDb();
})