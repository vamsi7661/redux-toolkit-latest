const createSlice=require("@reduxjs/toolkit").createSlice
const createAsyncThunk=require("@reduxjs/toolkit").createAsyncThunk
const axios=require("axios")

const fetchUsers=createAsyncThunk('user/fetchusers',()=>{
    return axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>res.data.map((eachUser)=>eachUser.id))
})
const initialState={
    loading:false,
    users:[],
    error:""
}
const UserSlice=createSlice({
    name:"user",
    initialState,
    extraReducers:builder=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false,
            state.users=action.payload,
            state.error=""
        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false,
            state.users=[],
            state.error=action.error.message
        })
    }
})

module.exports =UserSlice.reducer
module.exports.fetchUsers=fetchUsers