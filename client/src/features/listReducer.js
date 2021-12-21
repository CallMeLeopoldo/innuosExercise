import { createSlice } from '@reduxjs/toolkit'

const info = require("./../albums.json")

const listSlice = createSlice({
    name: "list",
    initialState: {value: {data : info, prevAction: ""}},
    reducers: {

        filter: (state, action) => {

            state.value.data = info;
            console.log(action.payload);

            if(action.payload !== state.value.prevAction){
                state.value.data = state.value.data.filter(obj => obj.source === action.payload);
                state.value.prevAction = action.payload;
            }
            else{
                state.value.data = info;
                state.value.prevAction = "";
            }
        }
        
    } 
})

export const {filter} = listSlice.actions;

export default listSlice.reducer;