import { createSlice } from "@reduxjs/toolkit";

interface initialType{
    check : boolean;
}

const initialState : initialType = {
    check : false,
}

const checkSlice : any = createSlice({
    name : 'check',
    initialState,
    reducers:{
        chengeIt : (state) =>{
            state.check = !state.check;
            console.log(state.check);
        }
    }
})

export const {chengeIt} = checkSlice.actions;
export default checkSlice.reducer;