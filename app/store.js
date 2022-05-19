const configureStore=require("@reduxjs/toolkit").configureStore
const { getDefaultMiddleware } = require("@reduxjs/toolkit")
const reduxlogger=require("redux-logger")
const cakereducer=require("../features/cakes/cakeSlice")
const icecreamreducer=require("../features/Icecreams/icecreamSlice")
const userreducer=require("../features/user/userSlice")
const logger=reduxlogger.createLogger()
const store=configureStore({
    reducer:{
        cake:cakereducer,
        icecream:icecreamreducer,
        user:userreducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})
module.exports=store