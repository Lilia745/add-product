import { combineReducers, createStore } from "redux"
import { cardReducer } from "../redux/cardSlice"
import { productReducer } from "../redux/productSlice"

const rootReducer = combineReducers({
    card:cardReducer,
    product:productReducer
})

const store = createStore(rootReducer)


export default store





