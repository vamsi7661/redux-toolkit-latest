const store=require("./app/store")
const cakeActions=require("./features/cakes/cakeSlice").cakeActions
const icecreamActions=require("./features/Icecreams/icecreamSlice").icecreamActions
const fetchUsers=require("./features/user/userSlice").fetchUsers
//console.log("initial state",store.getState())
const unsubscribe=store.subscribe(()=>{
})
store.dispatch(fetchUsers())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.restocked(3))
store.dispatch(cakeActions.restocked(4))

unsubscribe()