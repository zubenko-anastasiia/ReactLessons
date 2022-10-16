import { mainReducer as Main } from "./Main"
import { authReducer as Auth } from "./Auth"
import { combineReducers } from "redux"

export default combineReducers({
  Main,
  Auth,
})
