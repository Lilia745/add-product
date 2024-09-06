import { createStore } from "redux"

const initalState = [
    {id:Math.random(), name:"Product1"},
    {id:Math.random(), name:"Product2"},
    {id:Math.random(), name:"Product3"},
]

export const store = createStore(function(state=initalState,action) {
    switch (action.type) {
        case "add to card":
            return [...state,action.payload]
        case "remove from card":
            return state.filter((index) => index !== action)
        
        default:
            return state
    }
},[])




