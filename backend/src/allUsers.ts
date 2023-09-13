import React from 'react'
import { userSchema } from './allSchema/userSchema'
import { ObjectId } from 'mongoose';
import { IUsers } from './allSchema/userSchema';
function allUsers(users : IUsers[]) {

  const ret = users.map(user =>{
    const {_id , username, email} = user;
    return {_id, username, email};
  })
  return ret;
}

export default allUsers