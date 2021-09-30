import { createStore, combineReducers, applyMiddleware } from "redux"
import digimonsReducer from "./modules/digimons/reducer"
import thunk from "redux-thunk"

const reducers = combineReducers({ digimons: digimonsReducer })
const store = createStore(reducers, applyMiddleware(thunk))
export default store