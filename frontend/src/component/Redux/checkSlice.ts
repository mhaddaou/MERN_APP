import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface initialType{
    check : boolean;
}

const initialState : initialType = {
    check : false,
}

type Action = 'login' | 'register';

const checkSlice : any = createSlice({
    name : 'check',
    initialState,
    reducers:{
        chengeIt: (state, actions : PayloadAction<Action>) =>{
            switch(actions.payload){
                case 'login':{
                    state.check = true;
                    break;
                }
                case 'register':{
                    state.check = false;
                    break;
                }
                default:
                    break;
            }
        }
    }
})

export const {chengeIt} = checkSlice.actions;
export default checkSlice.reducer;