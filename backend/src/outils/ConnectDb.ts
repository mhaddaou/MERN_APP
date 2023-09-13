import mongoose from 'mongoose';



const ConnectDb = () =>{
    mongoose.connect(`${process.env.CONNECT}`).then(() =>{
        console.log('db connection established')
    }).catch((err) =>{
        console.log('db connection error ', err )
    })
}

export default ConnectDb;