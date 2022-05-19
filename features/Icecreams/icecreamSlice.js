const createSlice=require("@reduxjs/toolkit").createSlice
const initialState={noOfIcecreams:20}
const iceCreamSlice=createSlice({
    name:"Icecreams",
    initialState,
    reducers:{
        ordered:(state)=>{
            state.noOfIcecreams--
        },
        restocked:(state,action)=>{
            state.noOfIcecreams+=action.payload
        }
        },
        extraReducers:{
            ['cake/ordered']:(state)=>{
                state.noOfIcecreams--
            }
    }
})

module.exports =iceCreamSlice.reducer
module.exports.icecreamActions=iceCreamSlice.actions