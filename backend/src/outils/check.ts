import {Request} from 'express'
import bcrypt from 'bcrypt'

const check = (req : Request) =>{
    const {password, confirm, username, email} = req.body;
    const passhashed = bcrypt.hashSync(password, 10);
    return password === confirm ? {username, email, password : passhashed } : null;
}

export default check;