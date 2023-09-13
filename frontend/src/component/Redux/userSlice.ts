import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
const URL_USERS = import.meta.env.VITE_URL_FETCH;


export interface usersType{
    _id : string;
    username : string;
    email : string;
  }

interface initialType{
    users:usersType[],
    isLoading : boolean;
    error : string;

}

const initialState : initialType = {
    users : [],
    isLoading : false,
    error: ''
}

export const getUsers = createAsyncThunk('users/getUsers', async () =>{
    try{
        const res = await axios.get(URL_USERS);
        return res.data;
    }catch(err){return (err)}
})


const userSlice = createSlice({
    name : 'users',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getUsers.pending, () =>{
            return {
                ...initialState,
                isLoading : true,
            }
        })
        .addCase(getUsers.fulfilled, (state : initialType, action : PayloadAction<usersType[]>) =>{
            state.isLoading = false,
            state.users = action.payload;
            state.error = '';

        })
        .addCase(getUsers.rejected, (state : initialType, action : PayloadAction<any>) =>{
            state.isLoading = false;
            state.error = action.payload;
            state.users = [];
        })
    }
})

export default userSlice.reducer;
